import React, { useEffect, useState } from "react";
import image from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar fixed top-0 z-50 ">
      <div
        className={`main  flex align-center justify-around text-center bg-transparent w-screen p-4 transition-all duration-300   ${
          scroll ? "bg-white text-black" : "bg-transparent"
        } `}
      >
        <div
          className={`logo text-[25px] font-semibold flex items-center justify-center ${
            scroll ? "text-balck" : "text-white"
          }  `}
        >
          <h2 className="text-center  cursor-pointer">Shivraj</h2>
          <span className="text-[30px] text-[#99ff00] flex items-center justify-center">
            .
          </span>
        </div>
        <div className="hidden  md:flex items-center justify-center">
          <ul className={`flex gap-8 ${scroll ? "text-black" : "text-white"} `}>
            <li className="cursor-pointer font-semibold uppercase text-[14px] ">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer font-semibold uppercase text-[14px]">
              <Link to="/about">About me</Link>
            </li>
            <li className="cursor-pointer font-semibold uppercase text-[14px]">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="cursor-pointer font-semibold uppercase text-[14px]">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="cursor-pointer font-semibold uppercase text-[14px]">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="connect hidden  md:flex items-center justify-center">
          <button
            className={`bg-black p-2 text-white rounded cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ${
              scroll ? "hover:border hover:border-[black]" : ""
            }`}
          >
            <span className=""> let's connect</span>{" "}
            <i className="ri-arrow-right-line" />
          </button>
        </div>
        <div className="menu sm:hidden ">
          <button
            className={`bg-[#fffffff0d] border ${
              scroll ? "text-black" : "text-white"
            } cursor-pointer hover:bg-white hover:text-black  rounded p-2 px-3`}
          >
            <i className="ri-menu-line text-[20px]"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
