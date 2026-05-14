import './App.css';
import { Route, Routes } from 'react-router';
import Navigation from './routes/Navigation/pages/Navigation';
import Home from './routes/Home/pages/Home';
import Projects from './routes/Projects/pages/Projects';
import { useState } from 'react';


function App() {
  const [ showMenu, setShowMenu ] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <Routes>
      <Route path='/' element={<Navigation toggleMenu={toggleMenu}/>}>
        <Route index element={<Home showMenu={showMenu} toggleMenu={toggleMenu}/>}/>
        <Route path='/projects/*' element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
