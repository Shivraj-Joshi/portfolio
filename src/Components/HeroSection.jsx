import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import resume from "../assets/resume.pdf";
import image from "../assets/profile.png";
import Layout from "./Layout/Layout";
const HeroSection = () => {
  return (
    <Layout>
      <div className="main-container md:flex relative">
        <div className="image absolute bottom-0 right-[50px] md:bottom-5 md:right-[220px]">
          <img
            src={image}
            alt="profile image"
            className=" h-[400px] md:h-[550px] rounded-b-[50%] object-cover "
          />
        </div>
        {/* left container */}
        <div className="left-container bg-[#010101] md:h-screen md:w-[62%] flex items-center ">
          <div className="text bg-trsansparent h-[500px]  flex flex-col items-center justify-center  ">
            <div className="title">
              <h2 className="text-white text-[80px] md:ml-[100px]  ">
                I'm Shivraj
              </h2>
            </div>
            <div className=" relative flex justify-center items-center bg-black md:ml-20">
              <div className=" bg-white px-2 py-1 border-4   relative">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "I am a Developer",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "I am a Coder",
                    1000,
                    "I am a Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={10}
                  style={{
                    marginLeft: "15px",
                    fontSize: "35px",
                  }}
                  repeat={Infinity}
                  className="text-black font-bold "
                />
              </div>
              <div className="absolute bg-lime-400 top-0 w-2 h-2 left-0 "></div>
              <div className="absolute bg-lime-400 top-0 w-2 h-2 right-0 "></div>
              <div className="absolute bg-lime-400 bottom-0 w-2 h-2 left-0 "></div>
              <div className="absolute bg-lime-400 bottom-0 w-2 h-2 right-0"></div>
            </div>
            <div className="bio text-[20px] text-white md:w-[400px] p-4 mt-6 md:ml-20">
              A skilled JavaScript Developer, proficiant in react.js and
              developing responsive web designs with the multiple CSS styling.
            </div>
            <a
              href={resume}
              download="resume.pdf"
              className="bg-[#ffffff0d] p-2 rounded cursor-pointer text-white hover:bg-white hover:text-black border border-[#3d3d3d] transition-all duration-300"
            >
              Download Resume <i className="ri-download-fill"></i>
            </a>
          </div>
        </div>
        {/* right container */}
        <div className="right-container bg-[#99ff00] h-[340px] md:h-screen md:w-[38%] flex justify-center items-center ">
          <div className=" hidden md:flex md:h-[60px] p-2  md:justify-end  md:rotate-90 :tracking-widest md:ml-[300px] gap-4 ">
            <p className="font-semibold uppercase ">follow me on </p>
            <FaInstagram className="text-[40px] " />
            <FaLinkedin className="text-[40px] text-blue-600" />
            <FaGithub className="text-[40px]" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HeroSection;
