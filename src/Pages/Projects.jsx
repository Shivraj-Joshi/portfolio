import React from "react";
import Layout from "../Components/Layout/Layout";
import image from "../assets/ecom.png";
import { ProjectData } from "../Components/Data";
const Projects = () => {
  return (
    <Layout>
      <div className="bg-black md:h-screen flex flex-col items-center justify-center ">
        <div className="title text-white text-[40px] font-semibold mt-20 md:mt-20  h-[60px] uppercase">
          projects
        </div>
        {ProjectData.map((project) => (
          <div key={ProjectData.id}>
            <div className="absolute  md:h-[200px] md:w-[280px] bg-[#262526] rounded-xl  bottom-5 left-70 p-4 flex flex-col gap-2">
              <h2 className="text-white font-semibold ">{project.title}</h2>
              <p className="text-white ">{project.description}</p>
              <button className="bg-[#1a1a1a] text-white p-2 border border-[#3d3d3d] rounded">
                Project Details
              </button>
            </div>
            <div className="realtive md:h-[500px] md:w-[900px] bg-white rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt="ecommerce project"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
