import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
