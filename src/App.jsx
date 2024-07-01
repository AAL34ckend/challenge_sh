import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cta from './components/Cta'
import OurService from './components/OurService'
import Download from './components/Download'
import Benefit from './components/Benefit'
import Testimoni from './components/Testimoni'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <main>
      <Navbar />
      <section id="home" data-aos="fade-up"><Hero /></section>
      <section id="about" data-aos="fade-up"><Cta /></section>
      <section id="payment" data-aos="fade-up"><OurService /></section>
      <section id="services" data-aos="fade-up"><Download /></section>
      <section id="contact-us" data-aos="fade-up"><Benefit /></section>
      <section id="testimoni" data-aos="fade-up"><Testimoni /></section>
      <Footer />
    </main>
  )
}

export default App