// import { div } from "framer-motion/client";
import React from "react";

const LeftCircle: React.FC = () => {
  return (
    <div className=" flex  justify-center">
      <div className="left-circle top-10  m-[-10px] w-40 h-40 bg-[#FFFFFF33] bg-opacity-70 rounded-full text-center text-white flex flex-col justify-center items-center transition-transform duration-300 ease-out">
        <p className="text-2xl font-bold text-white">20,000+</p>
        <p>Players Registered</p>
      </div>
      <div className="left-circle  top-10 m-[-10px]  w-40 h-40 bg-[#FFFFFF33] bg-opacity-70 rounded-full text-center text-white flex flex-col justify-center items-center transition-transform duration-300 ease-out">
        <p className="text-2xl font-bold">10+</p>
        <p>Sports Categories</p>
      </div>
    </div>
  );
};

export default LeftCircle;
