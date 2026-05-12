import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Navigation from './routes/Navigation/pages/Navigation';
import Home from './routes/Home/pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;
