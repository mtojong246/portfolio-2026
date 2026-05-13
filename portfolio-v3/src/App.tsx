import React, { useEffect } from 'react';
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

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    // cleanup — disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []); // empty array = runs once after mount
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;
