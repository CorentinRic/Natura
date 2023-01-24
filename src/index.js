import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from 'react-router-dom'
import {Routes, Route} from "react-router-dom"
import ScrollToTop from './utils/ScrollToTop';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Notices from './pages/Notices/Notices'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter  basename='/Natura'>
  <ScrollToTop />
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/*" element={<Error />} />
    <Route path="/notices" element={<Notices />} />
  </Routes>
  <Footer />
  </BrowserRouter>
);