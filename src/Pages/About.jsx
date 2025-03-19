import React from "react";
import Layout from "../Components/Layout/Layout";
import image from "../assets/profile2.png";
const About = () => {
  return (
    <Layout>
      <div className="bg-black md:h-[800px] text-white flex flex-col items-center  gap-4">
        <div className="title text-[40px] font-semibold mt-18 uppercase">
          {" "}
          My Story
        </div>
        <div className=" md:h-[500px]  md:w-[1200px] flex flex-col md:flex-row   ">
          <div className="bg-black md:h-full  w-full md:w-[50%] flex items-center justify-center p-4 md:p-10">
            <img
              src={image}
              alt=""
              className="md:h-[500px] h-[350px]  object-cover  rounded-[50%] bg-[#99ff00]"
            />
          </div>
          <div className="bg-black md:h-full md:w-[50%] flex flex-col gap-4 px-6 ">
            <h1 className="text-3xl font-semibold ">About me</h1>
            <p>
              I'm a passionate frontend developer with a keen interest in React,
              JavaScript, and modern web technologies. My journey in web
              development started with curiosity and has grown into a deep
              commitment to crafting efficient, scalable, and user-friendly
              applications.
            </p>
            <h2 className="text-3xl font-semibold  ">What i Do</h2>
            <ul className="list-disc flex flex-col gap-5">
              <li>
                <span className="text-[#99ff00] text-xl">
                  Frontend Development
                </span>
                : I specialize in building responsive and visually appealing
                interfaces using React, Tailwind CSS, and modern UI libraries.
              </li>
              <li>
                <span className="text-[#99ff00] text-xl">State Management</span>
                : Familiar with Context API and currently diving into Redux
                Toolkit to handle complex application states.
              </li>
              <li>
                <span className="text-[#99ff00] text-xl">Backend Basics</span>:
                I have experience with Firebase and Appwrite for authentication
                and database management.
              </li>
              <li>
                <span className="text-[#99ff00] text-xl">
                  Continuous Learning
                </span>
                : I'm always exploring new frameworks, tools, and best practices
                to enhance my skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
