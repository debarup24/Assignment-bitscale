import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { FaArrowLeft } from "react-icons/fa";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between bg-white p-3 border-gray-300 border-b-2">
      <div className="flex flex-row items-center gap-2 md:gap-4">
        <div>
          <FaArrowLeft className="text-gray-800 text-xs md:text-sm cursor-pointer " />
        </div>
        <div>
          <p className="text-xs md:text-sm font-normal text-gray-500 ">
            Name of the file
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8">
        <div>
          {" "}
          <ToggleSwitch />
        </div>
        <div>
          <img
            className="w-6 md:w-8 cursor-pointer"
            src={assets.login_icon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
