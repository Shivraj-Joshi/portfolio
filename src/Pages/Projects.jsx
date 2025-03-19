import React, { useState } from "react";
// import Layout from "../Components/Layout/Layout";
import image from "../assets/ecom.png";
import { FaArrowRight } from "react-icons/fa";
import { ProjectData } from "../Components/Data";
const Projects = () => {
  return (
    // <Layout>
    <div className="bg-black   flex flex-col items-center justify-center gap-8 p-4">
      <div className="title text-white text-[40px]  font-semibold mt-20 md:mt-20  h-[60px] uppercase ">
        projects
      </div>
      {ProjectData.map((project) => (
        <div
          key={project.id}
          className=" h-[300px] w-[350px] md:h-[400px] md:w-[900px] rounded-xl overflow-hidden p-2 "
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" absolute mt-10 ml-10 md:mt-55 md:ml-5 bg-[#1a1a1a] h-[150px] w-[250px] rounded p-4 flex flex-col gap-4">
            <h2 className="text-white">{project.title}</h2>
            <p className="text-white">{project.description}</p>
            <button className="bg-[#252625] text-white rounded p-2 border border-[#3d3d3d]">
              view details
            </button>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className=" absolute mt-55 ml-20 md:mt-80 md:ml-150 bg-[#252625] text-white hover:bg-white hover:border hover:border-black hover:text-black cursor-pointer  rounded p-2"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className=" absolute mt-55 ml-50 md:mt-80 md:ml-180 bg-[#252625] text-white hover:bg-white hover:border hover:border-black hover:text-black cursor-pointer rounded p-2 "
          >
            Live
          </a>
        </div>
      ))}
    </div>
    // </Layout>
  );
};

export default Projects;
