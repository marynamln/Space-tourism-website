import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
import DestinationPage from '../../pages/DestinationPage';
import CrewPage from '../../pages/CrewPage';
import TechnologyPage from '../../pages/TechnologyPage';

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  duration: 0.4
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/home" element={<Homepage/>} />
          <Route path="/destination" element={<DestinationPage/>} />
          <Route path="/crew" element={<CrewPage/>} />
          <Route path='/technology' element={<TechnologyPage/>} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;