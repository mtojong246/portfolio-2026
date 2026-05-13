import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Navigation from './routes/Navigation/pages/Navigation';
import Home from './routes/Home/pages/Home';

const loadTagCanvas = () => {
  try {
    (window as any).TagCanvas.Start('skillsCanvas', 'tags', {
      textFont: 'Sora',
      textColour: '#00F9D6',
      outlineColour: 'transparent',
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      weight: true,
    });
  } catch(err:any) {
    console.log(err);
    const canvasContainer = document.getElementById('skillsCanvasContainer')
    if (canvasContainer) canvasContainer.style.display = 'none';
  }
}

function App() {

  useEffect(() => {
    loadTagCanvas();
  }, []);
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;
