import React from "react";
import { assets } from "../assets/assets.js";
import { FaRegCirclePlay } from "react-icons/fa6";
import { SheetData } from "./constant/SheetData";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FiPlus } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";

const SheetSection = () => {
  return (
    <div>
      <Table>
        <TableHeader className="bg-[#f6f6f6]">
          <TableRow>
            <TableHead className="min-w-10 w-10 border-r"></TableHead>
            <TableHead className="min-w-10 w-10 border-r"></TableHead>

            <TableHead
              className="max-w-[267px] w-[267px] border-r bg-[#FEF2C7]
"
            >
              <div className="flex items-center gap-1.5">
                <div className="bg-black px-1.5 py-[1.5px] md:text-sm text-xs text-white">
                  A
                </div>

                <p className="text-[#1c1b1f] md:text-sm text-xs font-medium truncate">
                  Input Column
                </p>
              </div>
            </TableHead>

            <TableHead className="w-[267px] border-r text-nowrap hover:bg-[#FEF2C7] md:text-sm text-xs">
              <div className="flex items-center gap-1.5 ">
                <img className="w-5" src={assets.gpt_icon} alt="GPT_Icon" />
                <p className="text-[#1c1b1f] md:text-sm text-xs font-medium">
                  Action Column
                </p>
              </div>
            </TableHead>
            <TableHead className="w-[267px] border-r text-nowrap hover:bg-[#FEF2C7]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 ">
                  <img
                    className="w-6"
                    src={assets.enrich_icon}
                    alt="Enrich Company"
                  />
                  <p className="text-[#1c1b1f] md:text-sm text-xs font-medium">
                    Enrich Company
                  </p>
                </div>
                <CiPlay1 className="cursor-pointer " />
              </div>
            </TableHead>
            <TableHead className="text-nowrap hover:bg-[#FEF2C7]">
              <div className="flex items-center gap-1 text-[#1c1b1f] cursor-pointer md:text-sm text-xs">
                <FiPlus />
                <p>Add Column</p>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        {/* Body */}
        <TableBody>
          {SheetData.map((item, index) => (
            <TableRow>
              <TableCell className="min-w-8 w-8 text-center border-r border-b md:text-sm text-xs">
                {item.rank}
              </TableCell>
              <TableCell className="min-w-8 w-8 border-r border-b">
                <div className="flex justify-center">
                  <FaRegCirclePlay className="text-[#525CE9] size-5" />
                </div>
              </TableCell>
              <TableCell className="max-w-[267px] w-[267px] border-r border-b truncate text-xs md:text-sm">
                {item.date} at {item.time}{" "}
              </TableCell>
              <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate text-xs md:text-sm">
                <div className="flex gap-2">
                  {item.actionIcon && (
                    <img src={item.actionIcon} alt="Action Icon" />
                  )}
                  <p className={`truncate ${item.classes}`}>{item.actionCol}</p>
                </div>
              </TableCell>
              <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate text-xs md:text-sm">
                <div className="flex gap-2">
                  {item.companyIcon && (
                    <img src={item.companyIcon} alt={"Company Icon"} />
                  )}
                  <p className="truncate">{item.enrichCompany}</p>
                </div>
              </TableCell>
              <TableCell className="border-b overflow-auto"></TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="min-w-10 text-center border-r border-b"></TableCell>
            <TableCell className="min-w-10 mx-auto border-r border-b"></TableCell>
            <TableCell className="border-r border-b w-[267px]">
              <div className="flex items-center gap-1 cursor-pointer max-lg:text-xs">
                <FiPlus /> <p>Add Row</p>
              </div>
            </TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-b w-[267px]"></TableCell>
          </TableRow>

          {/* EXTRA */}
          <TableRow>
            <TableCell className="min-w-10 text-center border-r border-b"></TableCell>
            <TableCell className="min-w-10 mx-auto border-r border-b"></TableCell>
            <TableCell className="border-r border-b w-[267px]">
              <div className="flex items-center gap-1 cursor-pointer max-lg:text-xs"></div>
            </TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-b w-[267px]"></TableCell>
          </TableRow>

          {/* EXTRA */}
          <TableRow>
            <TableCell className="min-w-10 text-center border-r border-b"></TableCell>
            <TableCell className="min-w-10 mx-auto border-r border-b"></TableCell>
            <TableCell className="border-r border-b w-[267px]">
              <div className="flex items-center gap-1 cursor-pointer max-lg:text-xs"></div>
            </TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-b w-[267px]"></TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="min-w-10 text-center border-r border-b"></TableCell>
            <TableCell className="min-w-10 mx-auto border-r border-b"></TableCell>
            <TableCell className="border-r border-b w-[267px]">
              <div className="flex items-center gap-1 cursor-pointer max-lg:text-xs"></div>
            </TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-b w-[267px]"></TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="min-w-10 text-center border-r border-b"></TableCell>
            <TableCell className="min-w-10 mx-auto border-r border-b"></TableCell>
            <TableCell className="border-r border-b w-[267px]">
              <div className="flex items-center gap-1 cursor-pointer max-lg:text-xs"></div>
            </TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-b w-[267px]"></TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="min-w-10 text-center border-r border-b"></TableCell>
            <TableCell className="min-w-10 mx-auto border-r border-b"></TableCell>
            <TableCell className="border-r border-b w-[267px]">
              <div className="flex items-center gap-1 cursor-pointer max-lg:text-xs"></div>
            </TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-r border-b max-w-[267px] w-[267px] truncate"></TableCell>
            <TableCell className="border-b w-[267px]"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SheetSection;
