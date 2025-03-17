import React from "react";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/resume.pdf";
const HeroSection = () => {
  return (
    <div className="main-container md:flex ">
      <div className="left-container bg-[#010101] md:h-screen md:w-[62%] flex items-center ">
        <div className="text bg-trsansparent h-[400px]  flex flex-col items-center justify-center  ">
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
      <div className="right-container bg-[#99ff00] md:h-screen md:w-[38%]"></div>
    </div>
  );
};

export default HeroSection;
