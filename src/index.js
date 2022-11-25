import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About'
import Tools from './components/Tools'
import Contacts from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <HeroSection />
    <About />
    <Tools />
    <div className ="ontainer mt-5"></div>
    <Projects />
    <Contacts/>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
