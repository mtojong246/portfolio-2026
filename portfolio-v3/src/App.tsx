import './App.css';
import { Route, Routes } from 'react-router';
import Navigation from './routes/Navigation/pages/Navigation';
import Home from './routes/Home/pages/Home';
import Projects from './routes/Projects/pages/Projects';


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='/projects*' element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
