import React from "react";

export default function Maintext() {
  return (
    <div>
      <div>
        <p className="text-7xl w-[28rem] font-black text-brand-blue">
          Register
        </p>
        <p className="text-brand-blue mt-5 text-xl font-bold">
          <span className="text-[#e87206]">Free</span> subscription 7 days
        </p>
        <p className="w-96 text-white mt-3">
          Games,Streams,Music,Movies all in on Platforms!
        </p>
        <div className="flex gap-16 items-center mt-5">
          <button className="bg-brand-blue p-4 rounded-full text-white drop-shadow-2xl">
            Quick Registration
          </button>
        </div>
      </div>
    </div>
  );
}
