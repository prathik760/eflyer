import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/Home';
import Navbar from './assets/Navbar';
import './index.css';
import Footer from './assets/Footer';

const App = () => {
  return (
    <>
    <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
    </>
  );
};

export default App;

