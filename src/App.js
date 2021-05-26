import React from 'react'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Lucky from './components/Lucky';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <About />
      <Services/>
      <Lucky />
      <Contact />
      <App />
    </>
  );
}

export default App;
