import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

import Tone from "../../assets/Tone.jpeg";
import Ttwo from "../../assets/Ttwo.jpeg";
import Tthree from "../../assets/Tthree.jpeg";
import Tfour from "../../assets/Tfour.jpeg";


// Sample data
const tournaments = [
  {
    title: "Champions Trophy 2024",
    image: Tone,
    location: "Cricket | Mumbai",
  },
  {
    title: "Hockey Championship 2024",
    image: Ttwo,
    location: "Hockey | Chandigarh",
  },
  {
    title: "Basketball Paralympics Championship 2024",
    image: Tthree,
    location: "Basketball | Delhi",
  },
  {
    title: "Girls Football Championship 2024",
    image: Tfour,
    location: "Football | Lucknow",
  },
];

export default function LpTournaments() {
  return (
    <div className="main flex justify-center flex-col align-middle items-center">
      <div className="mainone w-[85%] md:m-16 lg:m-32 mb-8 lg:mb-16">
        <div className="flex w-28 h-8 justify-center items-center text-[#CEF23F] align-middle rounded-3xl text-xs md:text-sm font-light bg-[rgba(255,255,255,0.1)]">
          Tournaments
        </div>
        <div className="heading flex justify-start text-3xl md:text-5xl lg:text-7xl m-2 p-2">
          <h1>Explore our Tournaments</h1>
        </div>
        <div className="flex justify-end items-end">
          <button className="linkbtn bg-[#CEF23F] hover:bg-lime-500 text-black px-4 py-2 rounded-full text-xs md:text-sm font-light w-50 md:w-50 h-7 flex items-center">
            View All Tournaments
            <i className="fa-solid fa-arrow-right fa-xl ml-2"></i>
          </button>
        </div>
      </div>
      {/* table content */}
      <div className="max-w-[1000px] gap-4 grid grid-cols-12 grid-rows-2 px-8 mb-9">
        {tournaments.map((tournament, index) => (
          <Card
            key={index}
            className={`w-full h-[330px] ${
              (index === 0 || index === 3) 
                ? "col-span-12 sm:col-span-7" 
                : "col-span-12 sm:col-span-5"
            }`}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h4 className="text-white font-medium text-large">
                {tournament.title}
              </h4>
            </CardHeader>
            <Image
            
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover bg-white/30 "
              src={tournament.image}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white text-tiny">{tournament.location}</p>
              </div>
              <Button
                className="text-tiny bg-[#CEF23F] rounded-full text-black"
                size="sm"
              >
                Register Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
