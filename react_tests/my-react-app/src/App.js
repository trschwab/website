// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CodePage from './pages/CodePage';
import MusicPage from './pages/MusicPage';
import VinylPage from './pages/VinylPage';
import PhotographyPage from './pages/PhotographyPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import RYMCollectionPage from './pages/blog/rym_blog';
import CocktailBlogPage from './pages/blog/cocktail_blog';
import LetterboxdPage from './pages/blog/letterboxd_blog';
import ShellPage from './pages/blog/shell_blog';
import './styles.css';

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
          <li><a href="/code">Code</a></li>
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

const App = () => {
  return (
    <Router>
      <div>
        <Banner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/code" element={<CodePage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/vinyl" element={<VinylPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog/rym_blog" element={<RYMCollectionPage />} />
          <Route path="/blog/cocktail_blog" element={<CocktailBlogPage />} />
          <Route path="/blog/letterboxd_blog" element={<LetterboxdPage />} />
          <Route path="/blog/shell_blog" element={<ShellPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
