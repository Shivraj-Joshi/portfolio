import React from "react";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <div className="main-container md:flex ">
      <div className="left-container bg-[#010101] h-screen md:w-[62%] flex items-center ">
        <div className="text bg-trsansparent h-[400px]  flex flex-col items-center justify-center font-semibold ">
          <h2 className="text-white text-[80px] ml-[100px] flex-wrap ">
            I'm Shivraj
          </h2>
          <div className=" relative flex justify-center items-center bg-black ml-20">
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
        </div>
      </div>
      <div className="right-container bg-[#99ff00] h-screen w-[38%]"></div>
    </div>
  );
};

export default HeroSection;
