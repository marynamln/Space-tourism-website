import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.scss'
import Header from './components/layout/Header'
import Homepage from './pages/Homepage'
import DestinationPage from './pages/DestinationPage'
import CrewPage from './pages/CrewPage'
import TechnologyPage from './pages/TechnologyPage'

import homeBg from './assets/home/background-home-desktop.jpg';
import destinationBg from './assets/destination/background-destination-desktop.jpg';
import crewBg from './assets/crew/background-crew-desktop.jpg';
import technologyBg from './assets/technology/background-technology-desktop.jpg';

import homeBgTablet from './assets/home/background-home-tablet.jpg';
import destinationBgTablet from './assets/destination/background-destination-tablet.jpg';
import crewBgTablet from './assets/crew/background-crew-tablet.jpg';
import technologyBgTablet from './assets/technology/background-technology-tablet.jpg';

import homeBgMobile from './assets/home/background-home-mobile.jpg';
import destinationBgMobile from './assets/destination/background-destination-mobile.jpg';
import crewBgMobile from './assets/crew/background-crew-mobile.jpg';
import technologyBgMobile from './assets/technology/background-technology-mobile.jpg';

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

  const getBackgroundImage = (page) => {
    const backgrounds = {
      home: {
        mobile: homeBgMobile,
        tablet: homeBgTablet,
        desktop: homeBg
      },
      destination: {
        mobile: destinationBgMobile,
        tablet: destinationBgTablet,
        desktop: destinationBg
      },
      crew: {
        mobile: crewBgMobile,
        tablet: crewBgTablet,
        desktop: crewBg
      },
      technology: {
        mobile: technologyBgMobile,
        tablet: technologyBgTablet,
        desktop: technologyBg
      }
    };

    let screenType = 'desktop';
    if (windowWidth <= 768) {
      screenType = 'mobile';
    } else if (windowWidth <= 1024) {
      screenType = 'tablet';
    }

    return backgrounds[page]?.[screenType] || backgrounds[page]?.desktop;
  };

  useEffect(() => {
    const path = location.pathname;
    let backgroundImage = null;

    if (path.includes("home")) {
      backgroundImage = getBackgroundImage('home');
    } else if (path.includes("destination")) {
      backgroundImage = getBackgroundImage('destination');
    } else if (path.includes("crew")) {
      backgroundImage = getBackgroundImage('crew');
    } else if (path.includes("technology")) {
      backgroundImage = getBackgroundImage('technology');
    }

    if (backgroundImage) {
      document.body.style.backgroundImage = `url(${backgroundImage})`;
    }

  }, [location, windowWidth]);


  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Homepage/>} />
        <Route path="/destination" element={<DestinationPage/>} />
        <Route path="/crew" element={<CrewPage/>} />
        <Route path='/technology' element={<TechnologyPage/>} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}

export default App
