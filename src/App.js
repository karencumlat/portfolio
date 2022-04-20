import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Archives from './pages/Archives';
import SocialLinks from './components/SocialLinks';

import './App.css';
import './helpers/fontawesome';
import Web from './pages/Web';
import Design from './pages/Design';
import About from './pages/About';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<Web />} />
        <Route path="/design" element={<Design />} />
        <Route path="/about" element={<About />} />
        <Route path="archive" element={<Archives />} />
      </Routes>
      <Outlet />

      <footer>{<SocialLinks />}</footer>
    </div>
  );
}

export default App;
