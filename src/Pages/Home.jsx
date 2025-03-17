import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";
import Contact from "./Contact";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
