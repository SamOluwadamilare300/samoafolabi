import React from 'react';
import "./App.css";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/skills/Skills'
import Services from './Components/Services/Services';
import Qualification from './Components/Qualification/Qualification';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';



const App = () => {
  return (
    <>
      <Header />

      <main className='main' >
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      
      </main>
    </>
  )
}

export default App;

