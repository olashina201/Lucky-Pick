import React, {  useEffect } from 'react'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Lucky from './components/Lucky';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux'
import {getLucky} from './actions/lucky'




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLucky());
  }, [dispatch])

  return (
    <>
      <NavBar />
      <Banner />
      <Lucky />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
