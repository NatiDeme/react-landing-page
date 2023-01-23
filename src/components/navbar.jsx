import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex gap-5 justify-around pt-7">
        <p>Eatly</p>
        <ul className="flex gap-8 text-xl">
          <li>Programs</li>
          <li>Services</li>
          <li>News</li>
          <li>About us</li>
        </ul>
        <button className="bg-yellow-400 p-3 rounded-lg">Let's Talk</button>
      </div>
    </div>
  );
}
