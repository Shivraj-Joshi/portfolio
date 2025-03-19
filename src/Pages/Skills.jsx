import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoReact, IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss, SiSass } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandRedux } from "react-icons/tb";
import { PiFramerLogoFill } from "react-icons/pi";
// import Layout from "../Components/Layout/Layout";
const Skills = () => {
  return (
    // <Layout>
    <div className="bg-black md:h-screen text-white grid grid-cols  gap-1 justify-center p-4  ">
      <h1 className="text-white uppercase text-center text-[40px] font-semibold mt-18">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 align-center">
        <div className="container bg-[#0e0e0e] md:h-[200px] md:w-[500px] text-white  rounded-xl border border-[#3d3d3d] p-2 ">
          <h2 className="text-center">Languages</h2>
          <div className=" flex items-center justify-center gap-10 md:gap-18 mt-5 ">
            <FaHtml5 className="text-[70px]" />
            <FaCss3Alt className="text-[70px]" />
            <IoLogoJavascript className="text-[70px]" />
          </div>
        </div>
        <div className="container bg-[#0e0e0e] md:h-[200px] md:w-[500px] text-white rounded-xl border border-[#3d3d3d] p-2">
          <h2 className="text-center">Frameworks</h2>
          <div className=" flex items-center justify-center gap-10 md:gap-18 mt-5 ">
            <SiTailwindcss className="text-[70px] hover:animate-ping" />
            <FaBootstrap className="text-[70px]" />
            <SiSass className="text-[70px] hover:animate-bounce" />
          </div>
        </div>
        <div className="container bg-[#0e0e0e] md:h-[200px] md:w-[500px] text-white rounded-xl border border-[#3d3d3d] p-2">
          <h2 className="text-center">Developer Tools</h2>
          <div className=" flex items-center justify-center gap-10 md:gap-12 mt-5 ">
            <FaGitAlt className="text-[70px]" />
            <FaGithub className="text-[70px] hover:animate-bounce" />
            <VscVscode className="text-[70px] hover:animate-ping" />
            <IoLogoFirebase className="text-[70px] hover:animate-pulse" />
          </div>
        </div>
        <div className="container bg-[#0e0e0e] md:h-[200px] md:w-[500px] text-white rounded-xl border border-[#3d3d3d] p-2">
          <h2 className="text-center">Libraries</h2>
          <div className=" flex items-center justify-center gap-10 md:gap-18 mt-5 ">
            <TbBrandRedux className="text-[70px] hover:animate-spin" />
            <IoLogoReact className="text-[70px] animate-spin" />
            <PiFramerLogoFill className="text-[70px]" />
          </div>
        </div>
      </div>
    </div>
    // </Layout>
  );
};

export default Skills;
