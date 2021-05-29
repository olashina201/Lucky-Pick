import React from 'react'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Lucky from './components/Lucky';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './pages/Admin'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Switch>
      <NavBar />
      <Banner />
      <Lucky />
      <Contact />
      <Footer />
      <Route path="/admin" component={Admin} />
    </Switch>
  );
}

export default App;
