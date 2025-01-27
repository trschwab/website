import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import PhotoPage from './pages/PhotoPage';
import AboutPage from './pages/AboutPage';
import MetaTags from './components/MetaTags';
import './App.css'; // Add CSS for transitions

const AppContent = () => {
  const location = useLocation(); // Get current location
  const nodeRef = useRef(null); // Reference for the DOM node

  return (
    // <TransitionGroup>
    //   <CSSTransition
    //     key={location.key}
    //     classNames="fade"
    //     timeout={300}
    //     nodeRef={nodeRef} // Pass the nodeRef to avoid using findDOMNode
    //   >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/photography" element={<PhotoPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      // </CSSTransition>
    // </TransitionGroup>
  );
};

const App = () => (
  <Router>
    <MetaTags />
    <AppContent />
  </Router>
);

export default App;
