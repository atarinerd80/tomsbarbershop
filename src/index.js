import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss';
import Header from './pages/Header';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <About />
    <Services />
    <Team />
    <Contact />
    <Footer />
  </React.StrictMode>
);
