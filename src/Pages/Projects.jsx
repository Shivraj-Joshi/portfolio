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
          className="relative  md:hover:border border-[#99ff00] transition-transform duration-500 rounded-2xl overflow-hidden  mx-auto shadow-lg h-[420px] w-[400px] md:w-[750px] group cursor-pointer"
        >
          {/* <!-- Background image --> */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* <!-- Gradient overlay --> */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/60 transition-opacity duration-500 group-hover:opacity-100 opacity-0"></div>

          {/* <!-- Content layer (hidden by default, visible on hover) --> */}
          <div className="absolute  inset-0 z-10 text-white p-6 flex flex-col justify-end opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div>
              <p className="text-teal-300 text-xs font-semibold uppercase mb-1">
                {project.title}
              </p>
              <h2 className="text-2xl font-bold leading-snug mb-2">
                {project.description}
              </h2>
              <p className="text-gray-200 text-sm ">
                <span className="font-semibold">Tech used :</span>{" "}
                {project.tech}
              </p>
            </div>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-center text-gray-900 font-semibold py-2 px-4 rounded-lg mt-2 hover:bg-gray-200 transition"
            >
              live Link
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-center text-gray-900 font-semibold py-2 px-4 rounded-lg mt-2 hover:bg-gray-200 transition"
            >
              github
            </a>
          </div>
        </div>
      ))}
    </div>
    // </Layout>
  );
};

export default Projects;
