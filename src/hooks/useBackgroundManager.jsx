import { useEffect } from 'react';

import homeBg from '../assets/home/background-home-desktop.jpg';
import destinationBg from '../assets/destination/background-destination-desktop.jpg';
import crewBg from '../assets/crew/background-crew-desktop.jpg';
import technologyBg from '../assets/technology/background-technology-desktop.jpg';

import homeBgTablet from '../assets/home/background-home-tablet.jpg';
import destinationBgTablet from '../assets/destination/background-destination-tablet.jpg';
import crewBgTablet from '../assets/crew/background-crew-tablet.jpg';
import technologyBgTablet from '../assets/technology/background-technology-tablet.jpg';

import homeBgMobile from '../assets/home/background-home-mobile.jpg';
import destinationBgMobile from '../assets/destination/background-destination-mobile.jpg';
import crewBgMobile from '../assets/crew/background-crew-mobile.jpg';
import technologyBgMobile from '../assets/technology/background-technology-mobile.jpg';

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

export function useBackgroundManager(location, windowWidth) {
  const getBackgroundImage = (page) => {
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
}