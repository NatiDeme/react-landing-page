import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/outline";
export default function ItemsList() {
  const me = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="text-white justify-center flex mt-10 flex-wrap w-[65rem] gap-7">
      {me.map((m) => (
        <div className="flex flex-col gap-2 ">
          <img
            src="https://image.winudf.com/v2/image1/Y29tLmd1aWRlLnB1Ymdtb2JpbGUuYmVzdC5wdWJnZ3VpZGVfc2NyZWVuXzdfMTU5MDgxMDkyN18wMjQ/screen-7.jpg?fakeurl=1&type=.jpg"
            alt="pubg"
            className="h-44 rounded-md"
          />
          <p className="text-base pl-1">Pubg Mobile</p>
          <span className="text-xs pl-1 font-light">Level infinite</span>
          <div className="flex items-center gap-5 pl-1">
            <div className="flex items-center gap-2">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <span className="text-xs">4.2</span>
            </div>
            <div className="flex items-center gap-2">
              <EyeIcon className="h-4 w-4 text-white" />
              <span className="text-sm">39,999,555</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
