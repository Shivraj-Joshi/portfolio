import React from "react";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 z-50 ">
      <div className="main  flex align-center justify-around text-center bg-transparent w-screen p-4 ">
        <div className="logo text-[25px] font-semibold flex items-center justify-center text-white ">
          Shivraj{" "}
          <span className="text-[30px] text-[#99ff00] flex items-center justify-center">
            .
          </span>
        </div>
        <div className="links flex items-center justify-center">
          <ul className="flex gap-8 text-white ">
            <li className="cursor-pointer font-semibold uppercase text-[14px]">
              Home
            </li>
            <li className="cursor-pointer font-semibold uppercase text-[14px]">
              About me
            </li>
            <li className="cursor-pointer font-semibold uppercase text-[14px]">
              Skills
            </li>
            <li className="cursor-pointer font-semibold uppercase text-[14px]">
              Projects
            </li>
            <li className="cursor-pointer font-semibold uppercase text-[14px]">
              Contact
            </li>
          </ul>
        </div>
        <div className="connect flex items-center justify-center">
          <button className="bg-black p-2 text-white rounded cursor-pointer hover:bg-white hover:text-black ">
            <span className=""> let's connect</span>{" "}
            <i className="ri-arrow-right-line" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
