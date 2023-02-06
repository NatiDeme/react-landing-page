import React from "react";
import CarouselCard from "./carouselcard";

export default function CarouselLayout() {
  return (
    <div className="bg-[#021131]">
      <p className="text-brand-neutral text-lg font-semibold">
        Recently released
      </p>
      <div>
        <CarouselCard />
      </div>
    </div>
  );
}
