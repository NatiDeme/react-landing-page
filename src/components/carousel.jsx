import React from "react";
import CarouselCard from "./carouselcard";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

export default function CarouselLayout() {
  let me = [1, 2, 3, 4, 5];
  return (
    <div className="bg-[#021131]">
      <div className="flex justify-center w-full">
        <div className="flex items-center justify-between pt-5 w-[65rem]">
          <p className="text-brand-neutral text-2xl font-semibold">
            Recently released
          </p>
          <div className="flex gap-2">
            <ArrowLeftCircleIcon className="text-brand-yellow h-5" />
            <ArrowRightCircleIcon className="text-brand-yellow h-5" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 pb-5 overflow-x-auto pl-[10%] overscroll-x-none">
        {me.map((m) => (
          <CarouselCard key={m} />
        ))}
      </div>
    </div>
  );
}
