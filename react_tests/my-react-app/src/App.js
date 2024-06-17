// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CodePage from './pages/CodePage';
import MusicPage from './pages/MusicPage';
import VinylPage from './pages/VinylPage';
import OnePhotographyPage from './pages/PhotographyOnePage';
import TwoPhotographyPage from './pages/PhotographyTwoPage';
import ThreePhotographyPage from './pages/PhotographyThreePage';
import FourPhotographyPage from './pages/PhotographyFourPage';
import FivePhotographyPage from './pages/PhotographyFivePage';
import SixPhotographyPage from './pages/PhotographySixPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import RYMCollectionPage from './pages/blog/rym_blog';
import CocktailBlogPage from './pages/blog/cocktail_blog';
import LetterboxdPage from './pages/blog/letterboxd_blog';
import OnceAndForeverPage from './pages/blog/once_and_forever_blog';
import TestingBlog from './pages/blog/testing_blog';
import Cocktail2BlogPage from './pages/blog/cocktail_2_blog';
import ChessBlogPage from './pages/blog/chess_blog';
import ShellPage from './pages/blog/shell_blog';
import WebDeployPage from './pages/blog/website_deployment_blog';
import './styles.css';
import { useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'

const lineBreak = {
  width: '50%',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const Banner = () => {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          {/* <li><a href="/">Home</a></li> */}
          <li><a href="/code">Code </a></li>
          <li><a href="/music">Music</a></li>
          <li><a href="/photography/1">Photography</a></li>
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

  if (location.pathname.includes('/blog/')) {
    return (<BlogBanner />)} else {
      return (<Banner />)
    }

}

const PhotoNav = () => {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li><a href="/photography/1">1</a></li>
          <li><a href="/photography/2">2</a></li>
          <li><a href="/photography/3">3</a></li>
          <li><a href="/photography/4">4</a></li>
          <li><a href="/photography/5">5</a></li>
          <li><a href="/photography/6">6</a></li>
        </ul>
        <br></br>
      </nav>
    </div>
  );
};

const IsPhotoPage = () => {
  const location = useLocation();

  if (location.pathname.includes('/photography/')) {
    return (<PhotoNav />)}
    }

const App = () => {
  return (
    <Router>
      <div>
        <IsBlog />
        <IsPhotoPage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/code" element={<CodePage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/vinyl" element={<VinylPage />} />
          <Route path="/photography/1" element={<OnePhotographyPage />} />
          <Route path="/photography/2" element={<TwoPhotographyPage />} />
          <Route path="/photography/3" element={<ThreePhotographyPage />} />
          <Route path="/photography/4" element={<FourPhotographyPage />} />
          <Route path="/photography/5" element={<FivePhotographyPage />} />
          <Route path="/photography/6" element={<SixPhotographyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog/rym_blog" element={<RYMCollectionPage />} />
          <Route path="/blog/cocktail_blog" element={<CocktailBlogPage />} />
          <Route path="/blog/cocktail_2_blog" element={<Cocktail2BlogPage />} />
          <Route path="/blog/once_and_forever_blog" element={<OnceAndForeverPage />} />
          <Route path="/blog/testing_blog" element={<TestingBlog />} />
          <Route path="/blog/letterboxd_blog" element={<LetterboxdPage />} />
          <Route path="/blog/chess_blog" element={<ChessBlogPage />} />
          <Route path="/blog/shell_blog" element={<ShellPage />} />
          <Route path="/blog/website_deployment_blog" element={<WebDeployPage />} />
        </Routes>
        <IsPhotoPage />
      </div>
    </Router>
  );
};

export default App;
