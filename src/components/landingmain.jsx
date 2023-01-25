import React from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import Maintext from "./maintext";
import landing from "../assets/landingrobots.png";

export default function Landingmain() {
  return (
    <div>
      <div className="bg-[#0e1f44] pt-10">
        <div className="bg-brand-neutral rounded-2xl flex">
          <div className="bg-gradient-to-r from-[#1e498e] rounded-2xl h-[30rem] pt-10 px-52 w-full flex items-center justify-between">
            <ArrowLeftCircleIcon className="text-brand-yellow h-6 w-6" />
            <Maintext />
            <img src={landing} alt="robots" className="pb-4 2xl:h-[29.5rem]" />
            <ArrowRightCircleIcon className="text-brand-yellow h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
