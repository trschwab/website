import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import PhotoPage from './pages/PhotoPage';
import AboutPage from './pages/AboutPage';
import TestPage from './pages/testPage';
import MetaTags from './components/MetaTags';
import './fadeTransitions.css'; // Include the transition CSS


const AppContent = () => {
  const location = useLocation(); // Get current location

  return (
    <>
      {/* Routes with transitions */}
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/photography" element={<PhotoPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

const App = () => (
  <Router>
    <MetaTags />
    <AppContent />
  </Router>
);

export default App;
