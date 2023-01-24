import React from "react";

export default function Landingmain() {
  return (
    <div>
      <div className="bg-[#0e1f44]">
        <div className="bg-gradient-to-r from-brand-blue via-brand-neutral to-brand-neutral rounded-2xl bg-opacity-50">
          <p className="text-7xl w-[28rem] font-black text-white">Register</p>
          <p className="text-white">
            <span className="text-[#e87206]">Free</span> subscription 7 days
          </p>
          <p className="w-96">
            Games,Streams,Music,Movies all in on Platforms!
          </p>
          <div className="flex gap-16 items-center">
            <button className="bg-brand-blue p-3 rounded-lg text-white">
              Quick Registration
            </button>
            <button className="flex gap-6 items-center">
              <div className="p-3 bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 h-20">
        <img
          src="https://tukuz.com/wp-content/uploads/2020/06/emerson-ecologics-logo-vector.png"
          alt=""
          className="h-10"
        />
      </div>
    </div>
  );
}
