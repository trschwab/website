import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './pages/HomePage';
import HomePageTest from './pages/HomePageTest';
import MusicPageTest from './pages/musicpagetest';
import PhotoPageTest from './pages/photopagetest';
import AboutPageTest from './pages/AboutPageTest';
import MetaTags from './components/MetaTags';
import './fadeTransitions.css'; // Include the transition CSS

const lineBreak = {
  width: '50%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

// const Banner = () => (
//   <div className="wrapper">
//     <nav>
//       <ul>
//         <li><a href="/code">Code</a></li>
//         <li><a href="/music">Music</a></li>
//         <li><a href="/photography">Photography</a></li>
//         <li><a href="/blog">Blog</a></li>
//         <li><a href="/about">About</a></li>
//       </ul>
//       <hr style={lineBreak}></hr>
//     </nav>
//   </div>
// );

// const IsBlog = () => {
//   const location = useLocation();
//   if (location.pathname.includes('/blog/')) {
//     return <div className="wrapper"><nav><ul><li><a href="/blog">Back to Blog</a></li></ul><hr style={lineBreak}></hr></nav></div>;
//   } else {
//     return <Banner />;
//   }
// };

const AppContent = () => {
  const location = useLocation(); // Get current location

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepagetest" element={<HomePageTest />} />
          <Route path="/musicpagetest" element={<MusicPageTest />} />
          <Route path="/photopagetest" element={<PhotoPageTest />} />
          <Route path="/aboutpagetest" element={<AboutPageTest />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => (
  <Router>
    <MetaTags />
    {/* <IsBlog /> */}
    <AppContent />
  </Router>
);

export default App;
