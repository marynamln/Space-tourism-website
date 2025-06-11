import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './App.scss'
import Header from './components/layout/Header'
import AnimatedRoutes from './components/layout/AnimatedRoutes'
import { useBackgroundManager } from './hooks/useBackgroundManager'

function App() {

  const location = useLocation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useBackgroundManager(location, windowWidth);

  return (
    <>
      <Header />
      <AnimatedRoutes />
    </>
  )
}

export default App
