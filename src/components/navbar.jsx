import React from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="bg-[#0e1f44] text-white">
      <div className="flex gap-5 pt-5 items-center justify-center">
        <img src={Logo} alt="logo" className="h-20" />
        <ul className="flex gap-8 text-lg">
          <li className="text-[#0655ff]">Home</li>
          <li>Category</li>
          <li>Catelog</li>
          <li>About us</li>
          <li>Music</li>
          <li>Stream</li>
        </ul>
        <div className="flex gap-5">
          <button className="rounded-3xl border-2 px-5 py-2 border-[#0655ff] hover:bg-[#0655ff]">
            Login
          </button>
          <button className="bg-[#0655ff] rounded-3xl px-5 py-3 hover:bg-transparent hover:border-2 hover:border-[#0655ff] border-2 border-transparent">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
