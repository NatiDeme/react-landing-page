import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function FilterComponent() {
  return (
    <div className="mt-10 pl-72">
      <div className="flex items-center justify-between w-[75rem]">
        <div className="flex items-center justify-between gap-10">
          <p className="text-xl text-white font-semibold">Popular Service</p>
          <ul className="text-white flex items-center gap-2">
            <li className="bg-brand-neutral px-8 py-2 rounded-3xl bg-opacity-25">
              Popular
            </li>
            <li className="bg-brand-neutral px-8 py-2 rounded-3xl bg-opacity-25">
              New
            </li>
            <li className="bg-brand-light-blue px-8 py-2 rounded-3xl">
              Most View
            </li>
          </ul>
        </div>
        <div>
          <div className="px-3 py-2 rounded-3xl text-white border border-white flex items-center gap-2">
            <spn>Game</spn>
            <ChevronDownIcon className="text-white h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
