import { FiTable } from "react-icons/fi";
import { TbPuzzle } from "react-icons/tb";
import { PiIntersectDuotone } from "react-icons/pi";

import { GoCreditCard } from "react-icons/go";
import { BiCoinStack } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="hidden md:hidden lg:hidden xl:visible px-6 pt-6 pb-4 h-[calc(100vh-65px)] gap-10 xl:flex xl:flex-col xl:justify-between xl:items-center border-r border-r-[#E5E5E5] max-w-14 ">
      <div className="flex flex-col gap-6">
        <FiTable className="text-xl text-gray-800 cursor-pointer hover:text-pink-800" />
        <TbPuzzle className="text-xl text-gray-800 cursor-pointer hover:text-pink-800" />
        <PiIntersectDuotone className="text-xl text-gray-800 cursor-pointer hover:text-pink-800" />
      </div>
      <div className="flex flex-col gap-6">
        <GoCreditCard className="text-xl text-gray-800 cursor-pointer hover:text-pink-800" />
        <BiCoinStack className="text-xl text-pink-800 cursor-pointer hover:opacity-70" />
      </div>
    </div>
  );
};

export default Sidebar;
