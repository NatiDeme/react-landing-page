import React from "react";

export default function Landingmain() {
  return (
    <div>
      <div>
        <div>
          <p className="text-7xl w-[28rem] font-black">
            Changing your eating habits
          </p>
          <p className="w-[22rem]">
            Always take care of your health starting from the food menu that you
            consume everyday
          </p>
          <div className="flex gap-16 items-center">
            <button className="bg-yellow-400 p-3 rounded-lg">
              Explore Menu
            </button>
            <button className="flex gap-10">
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
              <span>Watch Video</span>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
