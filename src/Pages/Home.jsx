import React from "react";
import HeroSection from "../Components/HeroSection";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
