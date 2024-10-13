import React from "react";
import sio from "../../assets/serviceIconOne.svg"
import sitwo from "../../assets/serviceIconTwo.svg"
import sithree from "../../assets/serviceIconThree.svg"
import sifour from "../../assets/serviceIconFour.svg"
import {ArrowCircleRight2} from "iconsax-react"
const ServicesSection = () => {
  return (
    <section className=" text-white py-12 m-8">
      <div className="container mx-auto">
      <div className="flex justify-start items-end mb-8">
          <button className="linkbtn text-[#CEF23F] bg-[#FFFFFF10] px-4 py-[10px] rounded-full text-xs  font-bold h-9  flex items-center">
           Services
          </button>
        </div>
        <h2 className="text-4xl font-normal  ">
          What we are offering
        </h2>
        <div className="flex justify-end items-end mb-8">
          <button className="linkbtn bg-[#CEF23F] hover:bg-lime-500 text-black px-4 py-2 rounded-full text-xs md:text-sm font-light w-50 md:w-50 h-7 flex items-center">
            View All Sevices
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tournament & Match Organization */}
          <div className="bg-[#FFFFFF15] p-6 rounded-2xl flex flex-col justify-between items-start">
            <div>
               <div className="bg-[#FFFFFF05] h-[54px] w-[54px] p-[12px] mb-2 rounded-2xl"> <img src={sio} alt="" /></div>
              <h3 className="text-xl font-bold mb-4 font-secondaryFont">
                Tournament & Match Organization
              </h3>
              <p className="mb-8 font-thin text-base ">
                Effortlessly organize and manage local or national sports events
                with tools designed for smooth scheduling, team coordination,
                and event creation.
              </p>
            </div>
            <button className="flex gap-2 justify-center align-middle">Host a Tournament <ArrowCircleRight2 size="24" color="#ffffff" className="-rotate-45 "/> </button>
          </div>

          {/* Player & Team Profiles */}
          <div className="bg-[#FFFFFF15] p-6 rounded-2xl flex flex-col justify-between items-start">
            <div>
               <div className="bg-[#FFFFFF05] h-[54px] w-[54px] p-[12px] mb-2 rounded-2xl"> <img src={sitwo} alt="" /></div>
              <h3 className="text-xl font-bold mb-4">
                Tournament & Match Organization
              </h3>
              <p className="mb-8 font-light text-base font-secondaryFont">
                Effortlessly organize and manage local or national sports events
                with tools designed for smooth scheduling, team coordination,
                and event creation.
              </p>
            </div>
            <button className="flex gap-2 justify-center align-middle">Host a Tournament <ArrowCircleRight2 size="24" color="#ffffff" className="-rotate-45 "/> </button>
          </div>
          {/* Academy & Fitness Courses */}
          <div className="bg-[#FFFFFF15] p-6 rounded-2xl flex flex-col justify-between items-start">
            <div>
               <div className="bg-[#FFFFFF05] h-[54px] w-[54px] p-[12px] mb-2 rounded-2xl"> <img src={sithree} alt="" /></div>
              <h3 className="text-xl font-bold mb-4">
                Tournament & Match Organization
              </h3>
              <p className="mb-8 font-light text-base font-secondaryFont">
                Effortlessly organize and manage local or national sports events
                with tools designed for smooth scheduling, team coordination,
                and event creation.
              </p>
            </div>
            <button className="flex gap-2 justify-center align-middle">Host a Tournament <ArrowCircleRight2 size="24" color="#ffffff" className="-rotate-45 "/> </button>
          </div>

          {/* Sports News & Updates */}
          <div className="bg-[#FFFFFF15] p-6 rounded-2xl flex flex-col justify-between items-start">
            <div>
               <div className="bg-[#FFFFFF05] h-[54px] w-[54px] p-[12px] mb-2 rounded-2xl"> <img src={sifour} alt="" /></div>
              <h3 className="text-xl font-bold mb-4">
                Tournament & Match Organization
              </h3>
              <p className="mb-8 font-light text-base font-secondaryFont">
                Effortlessly organize and manage local or national sports events
                with tools designed for smooth scheduling, team coordination,
                and event creation.
              </p>
            </div>
            <button className="flex gap-2 justify-center align-middle">Host a Tournament <ArrowCircleRight2 size="24" color="#ffffff" className="-rotate-45 "/> </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
