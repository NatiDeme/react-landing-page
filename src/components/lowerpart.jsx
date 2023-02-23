import React from "react";
import FooterRobot from "../assets/footer-robot.png";
import FooterGirl from "../assets/footer-girl.png";
const LowerPart = () => {
  return (
    <div className="pt-14">
      <div className="bg-brand-yellow flex items-center">
        <div>
          <p className="text-2xl w-72 font-medium text-white">
            Subscribe to News and get free subscription
          </p>
          <div className="bg-white bg-opacity-50 w-96 h-8 flex items-center rounded-full">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent placeholder:text-white"
            />
            <button className="bg-brand-blue text-brand-neutral p-1 px-2 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        <img src={FooterRobot} alt="asda" />
      </div>
      <img src={FooterGirl} alt="asda" />
    </div>
  );
};

export default LowerPart;
