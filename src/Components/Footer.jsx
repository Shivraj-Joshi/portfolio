import React from "react";
import { FaInstagramSquare, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col justify-center border-t border-[#3d3d3d] gap-2">
      <div className="p-12 flex flex-col gap-6">
        <h1 className="text-white text-3xl font-semibold">Let's Connect!</h1>
        <p className="text-white text-xl">
          I'm always open to collaborations, freelancing opportunities, or just
          tech discussions. If you'd like to work together or chat about web
          development, feel free to reach out!
        </p>
        <div className="socials text-white flex gap-8 text-3xl justify-center mt-5">
          <a
            href="https://www.instagram.com/iamshivrajjoshi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/shivrajjoshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition-all duration-300"
          >
            {" "}
            <FaLinkedinIn />{" "}
          </a>
          <a
            href="https://github.com/Shivraj-Joshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="text-white p-4 border-t border-gray-400 flex items-center justify-center ">
        {" "}
        © 2025 all right reserved by Shivraj Joshi
      </div>
    </div>
  );
};

export default Footer;
