import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { LuRows3, LuColumns3 } from "react-icons/lu";
import { PiFunnelBold } from "react-icons/pi";
import { TbArrowsUpDown } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { FiShare2, FiTrash2 } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { SheetData } from "./constant/SheetData";

const MenuHeader = () => {
  return (
    // Main
    <div className="p-6 flex gap-6 justify-between items-center max-xl:flex-col max-xl:items-start">
      <div className="flex  justify-between max-sm:items-start gap-9 max-lg:flex-col max-lg:gap-6">
        {" "}
        <div className="flex items-center">
          <label
            htmlFor="inputSearch"
            className="w-[364px] max-sm:w-[264px] bg-gray-50  rounded-md flex gap-2 items-center px-2 py-2  border border-gray-300"
          >
            <IoSearchSharp className={`size-4 stroke-2`} />
            <input
              id="inputSearch"
              placeholder="Search"
              //onChange={handleSearch}
              className="text-xs w-52 placeholder:text-gray-700 bg-gray-50 outline-none"
            />
          </label>
        </div>{" "}
        <div className="flex items-center gap-9 max-sm:gap-5">
          {" "}
          <div className="flex items-center gap-2 cursor-pointer">
            <LuRows3 className="text-lg max-sm:text-sm" />
            <p className="text-xs max-sm:text-[10px] font-medium text-gray-800">
              1/1 Row
            </p>
          </div>{" "}
          <div className="flex items-center gap-2 cursor-pointer">
            <LuColumns3 className="text-lg max-sm:text-sm" />
            <p className="text-xs max-sm:text-[10px] font-medium text-gray-800">
              3/3 Column
            </p>
          </div>{" "}
          <div className="flex items-center gap-2 cursor-pointer">
            <PiFunnelBold className="text-lg max-sm:text-sm" />
            <p className="text-xs max-sm:text-[10px] font-medium text-gray-800">
              0 Filter
            </p>
          </div>{" "}
          <div className="flex items-center gap-2 cursor-pointer">
            <TbArrowsUpDown className="text-lg max-sm:text-sm" />
            <p className="text-xs max-sm:text-[10px] font-medium text-gray-800">
              Sort
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-6">
        <div className="flex">
          <button className="bg-gray-800 rounded font-medium text-xs text-white px-3 py-2 ">
            <div className="flex gap-2">
              {" "}
              <BsStars />
              Enrich{" "}
            </div>
          </button>
        </div>
        <div className="flex gap-5 mt-1">
          <FiShare2 className="text-lg cursor-pointer" />
          <MdOutlineFileDownload className="text-xl cursor-pointer" />
          <FiTrash2 className="text-lg cursor-pointer text-red-600" />
        </div>{" "}
      </div>
    </div>
  );
};

export default MenuHeader;
