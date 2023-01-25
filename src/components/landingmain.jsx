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
      <div className="bg-[#0e1f44] h-screen pt-10">
        <div className="bg-brand-neutral rounded-2xl flex ">
          <div className="bg-gradient-to-r from-[#1e498e] rounded-2xl pt-10 px-52 h-96 w-full flex items-center justify-between">
            <ArrowLeftCircleIcon className="text-brand-yellow h-6 w-6" />
            <Maintext />
            <img src={landing} alt="robots" className="pb-4" />
            <ArrowRightCircleIcon className="text-brand-yellow h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
