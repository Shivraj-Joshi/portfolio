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
          <div className=" absolute mt-10 ml-10 md:mt-40 md:ml-5 bg-[#1a1a1a]  w-[250px] h-auto rounded p-4 flex flex-col gap-4">
            <h2 className="text-white text-2xl font-semibold">
              {project.title}
            </h2>
            <p className="text-white">{project.description}</p>
            <div className="bg-[#252625] text-white rounded p-2 border border-[#3d3d3d] flex flex-col gap-4">
              <h2 className="font-semibold">Tech Used</h2>
              <div className="flex gap-2">
                <p>{project.tech[0]}</p>
                <p>{project.tech[1]}</p>
                <p>{project.tech[2]}</p>
              </div>
            </div>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className=" absolute mt-60 ml-20 md:mt-80 md:ml-150 bg-[#252625] text-white hover:bg-white hover:border hover:border-black hover:text-black cursor-pointer  rounded p-2"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className=" absolute mt-60 ml-50 md:mt-80 md:ml-180 bg-[#252625] text-white hover:bg-white hover:border hover:border-black hover:text-black cursor-pointer rounded p-2 "
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
