import EventsCard from "./EventsCard";
import "./LpEvents.css";
import { Chip } from "@nextui-org/react";

export default function LpEventspage() {
  return (
    <div className="evpg">
      <div className="titile flex flex-col justify-start">
        <Chip className="topic" variant="flat">
          EVENTS
        </Chip>
        <text className="heading">Discover Thrilling Sports Events</text>
        <div className=" linkbtn">
          <button className=" linkbtn  bg-[#CEF23F] hover:bg-lime-500 text-black px-4 py-2 rounded-full text-sm font-light w-60   justify-evenly h-7">
            View All Events
            <i className="fa-solid fa-arrow-right fa-beat-fade fa-2xl ml-2"></i>
          </button>
        </div>
      </div>

      <EventsCard />
    </div>
  );
}
