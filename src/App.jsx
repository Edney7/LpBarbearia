// 1. App.jsx
import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Services />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;