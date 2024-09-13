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
import HomePageTestTwo from './pages/HomePageTestTwo';
import WorkPageTest from './pages/WorkPageTest';
import Italy2024PageTest from './pages/italy2024';
import CodePage from './pages/CodePage';
import MusicPage from './pages/MusicPage';
import VinylPage from './pages/VinylPage';
import TestPage from './pages/TestPage';
import PhotographyPage from './pages/PhotographyPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import RYMCollectionPage from './pages/blog/rym_blog';
import CocktailBlogPage from './pages/blog/cocktail_blog';
import AnalogBlogPage from './pages/blog/analog_blog';
import LetterboxdPage from './pages/blog/letterboxd_blog';
import OnceAndForeverPage from './pages/blog/once_and_forever_blog';
import TestingBlog from './pages/blog/testing_blog';
import Cocktail2BlogPage from './pages/blog/cocktail_2_blog';
import ChessBlogPage from './pages/blog/chess_blog';
import DJBlogPage from './pages/blog/dj_blog';
import ShellPage from './pages/blog/shell_blog';
import WebDeployPage from './pages/blog/website_deployment_blog';

const lineBreak = {
  width: '50%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const Banner = () => {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          {/* <li><a href="/">Home</a></li> */}
          <li><a href="/code">Code </a></li>
          <li><a href="/music">Music</a></li>
          <li><a href="/photography">Photography</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
        </ul>

        <hr style={lineBreak}></hr>
      </nav>
    </div>
  );
};

const BlogBanner = () => {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li><a href="/blog">Back to Blog</a></li>
        </ul>
        <hr style={lineBreak}></hr>
      </nav>
    </div>
  );
};

const IsBlog = () => {
  const location = useLocation();
  if (location.pathname.includes('test')) {
    return <></>;
  }
  if (location.pathname.includes('Test')) {
    return <></>;
  }
  if (location.pathname.includes('/blog/')) {
    return <BlogBanner />;
  } else {
    return <Banner />;
  }
};

const AppContent = () => {
  const location = useLocation(); // Get current location

  return (
    <>
      {/* Routes with transitions */}
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/homepagetest" element={<HomePageTest />} />
            <Route path="/musicpagetest" element={<MusicPageTest />} />
            <Route path="/photopagetest" element={<PhotoPageTest />} />
            <Route path="/homepagetesttwo" element={<HomePageTestTwo />} />
            <Route path="/aboutpagetest" element={<AboutPageTest />} />
            <Route path="/italy2024test" element={<Italy2024PageTest />} />
            <Route path="/workpagetest" element={<WorkPageTest />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      {/* Regular routes without transitions */}
      <Routes>
        <Route path="/code" element={<CodePage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/vinyl" element={<VinylPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog/rym_blog" element={<RYMCollectionPage />} />
        <Route path="/blog/dj_blog" element={<DJBlogPage />} />
        <Route path="/blog/cocktail_blog" element={<CocktailBlogPage />} />
        <Route path="/blog/analog_blog" element={<AnalogBlogPage />} />
        <Route path="/blog/cocktail_2_blog" element={<Cocktail2BlogPage />} />
        <Route path="/blog/once_and_forever_blog" element={<OnceAndForeverPage />} />
        <Route path="/blog/testing_blog" element={<TestingBlog />} />
        <Route path="/blog/letterboxd_blog" element={<LetterboxdPage />} />
        <Route path="/blog/chess_blog" element={<ChessBlogPage />} />
        <Route path="/blog/shell_blog" element={<ShellPage />} />
        <Route path="/blog/website_deployment_blog" element={<WebDeployPage />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <MetaTags />
    <IsBlog />
    <AppContent />
  </Router>
);

export default App;
