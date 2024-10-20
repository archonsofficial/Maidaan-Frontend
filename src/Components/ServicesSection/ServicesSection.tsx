import React from "react";
import sio from "../../assets/serviceIconOne.svg";
import sitwo from "../../assets/serviceIconTwo.svg";
import sithree from "../../assets/serviceIconThree.svg";
import sifour from "../../assets/serviceIconFour.svg";
import { ArrowCircleRight2 } from "iconsax-react";
import BTnCompo from "../Btn/BTnCompo";

const ServicesSection = () => {
  const serviceData = [
    {
      heading: " Tournament & Match Organization",
      description:
        " Effortlessly organize and manage local or national sports events with tools designed for smooth scheduling, team coordination, and event creation.",
      service: " Host a Tournament",
      img: sio,
    },
    {
      heading: "Player & Team Profiles",
      description:
        "  Create profiles to showcase achievements, track progress, andconnect with the sports community. Perfect for individual players and teams alike.",
      service: "Build Your Profiles",
      img: sitwo,
    },
    {
      heading: " Academy & Fitness Courses",
      description:
        " Enroll in training programs from top academies and fitnesscenters, available both online and offline, to enhance yourskills with expert guidance.",
      service: "Explore Courses",
      img: sithree,
    },
    {
      heading: "Sports News & Updates",
      description:
        "Sports News & UpdatesStay updated with the latest sports news,scores, and upcoming events, all accessible from yourpersonalized profile.",
      service: "Get Updates",
      img: sifour,
    },
  ];
  return (
    <section className=" text-white py-12 m-8">
      <div className="container mx-auto">
        <div className="flex justify-start items-end mb-8">
          <button className="linkbtn text-[#CEF23F] bg-[#FFFFFF10] px-4 py-[10px] rounded-full text-sm  font-bold h-9 font-secondaryFont flex items-center">
            SERVICES
          </button>
        </div>
        <h2 className="text-4xl font-normal  ">What we are offering</h2>
        <div className="flex justify-end items-end mb-8 ">
          <BTnCompo text="View All Services" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceData.map((service) => (
            <div className="bg-[#FFFFFF15] p-6 rounded-2xl flex flex-col justify-between items-start">
              <div>
                <div className="bg-[#FFFFFF05] h-[54px] w-[54px] p-[12px] mb-2 rounded-2xl">
                  {" "}
                  <img src={service.img} alt="" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-secondaryFont">
                  {service.heading}
                </h3>
                <p className="mb-8 font-thin text-base ">
                  {service.description}
                </p>
              </div>
              <button className="flex gap-2 justify-center align-middle group">
                {service.service + " "}
                <ArrowCircleRight2
                  size="24"
                  color="#ffffff"
                  className="-rotate-45 group-hover:animate-arrowRotate "
                />{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
