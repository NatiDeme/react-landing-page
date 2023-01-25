import React from "react";

export default function FilterComponent() {
  return (
    <div className="mt-10">
      <div>
        <ul className="text-white flex items-center gap-5">
          <li className="text-xl font-semibold">Popular Service</li>
          <li className="bg-brand-neutral px-10 py-2 rounded-3xl bg-opacity-25">
            Popular
          </li>
          <li>New</li>
          <li>Most View</li>
        </ul>
      </div>
    </div>
  );
}
