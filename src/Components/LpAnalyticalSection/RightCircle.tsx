import React from "react";

const RightCircle: React.FC = () => {
  return (
    <div className=" flex size-max justify-center ">
      <div
        className="right-circle  top-10  m-[-10px] right-0  bg-[#FFFFFF33]
 w-40 h-40 bg-opacity-70 rounded-full text-center text-white flex flex-col  
 justify-center items-center transition-transform duration-300 ease-out"
      >
        <p className="text-2xl font-bold">500+</p>
        <p>Tournaments Organized</p>
      </div>
      <div className="right-circle  top-10  m-[-10px] right-0 w-40 h-40 bg-[#FFFFFF33] bg-opacity-70 rounded-full text-center text-white flex flex-col justify-center items-center transition-transform duration-300 ease-out">
        <p className="text-2xl font-bold">1500+</p>
        <p> Matches <br />Played </p>
      </div>
    </div>
  );
};

export default RightCircle;
