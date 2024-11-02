import React from "react";
import p1 from "../../Assets/people.png";
import p2 from "../../Assets/peopletwo.png";
import p3 from "../../Assets/peoplethree.png";
import verify from "../../Assets/verify.png";
import "./analyticalstyle.css";


const features = [
  {
    title: "Community-Centric",
    description: "We prioritize building a vibrant sports community where everyone can thrive.",
    icon: p1,
  },
  {
    title: "Player-Centric Focus",
    description: "Your growth is our priority. We ensure an excellent experience for all users.",
    icon: p2,
  },
  {
    title: "Free & Accessible",
    description: "Access free or affordable tournaments, training, and resources for all.",
    icon: p3,
  },
];

const tags = [
  "Dedicated  Support  System ",
  "Seamless Event Management",
  "Positive Community Experience",
  "Commitment to Sports Excellence",
];

const FeaturesGrid: React.FC = () => {
  return (
    <div className="p-6 text-white mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg bg-[#0A0A0A0D] border border-[#FFFFFF14] backdrop-blur-[20px]"
          >
            <img src={feature.icon} alt={feature.title} className="mb-4 w-10 h-10" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-center text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className=" anaspan flex justify-center items-center h-10 px-4 bg-[#FFFFFF26] text-sm rounded-full text-gray-300 border border-gray-500 w-48 sm:w-56 md:w-64"
          >
            <img src={verify} alt="" className="w-7 h-6 mr-2" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
