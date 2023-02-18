import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

export default function CarouselCard() {
  return (
    <div className="relative mt-5 shrink-0">
      <div>
        <img
          src="https://cdn.mos.cms.futurecdn.net/EuEFf8DDE4xU9hEPpugrCP.jpg"
          alt="game"
          className="h-64 rounded-2xl"
        />
      </div>
      <div className="absolute top-5 left-2">
        <div className="flex bg-white w-32 p-2 gap-2 justify-center items-center rounded-full">
          <EyeIcon className="h-6 w-6" />
          <p className="text-xs">39,254,897</p>
        </div>
        <div className="text-white flex items-center gap-3 text-xs mt-5">
          <div className="px-3 py-2 bg-[#2B3957] w-auto rounded-full">
            <p>game</p>
          </div>
          <div className="px-3 py-2 bg-brand-light-blue w-auto rounded-full">
            <p>google</p>
          </div>
        </div>
        <div className="text-white mt-5">
          <p className="font-bold text-3xl w-5">PUBG Mobile</p>
        </div>
        <div className="text-white mt-5">
          <p className="font-bold text-sm">Google Store</p>
        </div>
      </div>
    </div>
  );
}
