import Eone from "../../assets/Eone.jpeg"
import Etwo from "../../assets/Etwo.jpeg"
import Ethree from "../../assets/Ethree.jpeg"
import BTnCompo from "../Btn/BTnCompo";


export default function LpEvent() {
  const eventData = [
    {
      imgUrl: Eone,
      date: "Oct 10, 2024",
      location: "Serenity, Mumbai",
      title: "Finding Your Inner Peace",
      description: "Experience rejuvenation and tranquility through guided yoga sessions.",
    },
    {
      imgUrl: Etwo,
      date: "Oct 10, 2024",
      location: "Serenity, Mumbai",
      title: "Move to the Rhythm",
      description: "Dance your heart out while enjoying a high-energy Zumba workout.",
    },
    {
      imgUrl: Ethree,
      date: "Oct 10, 2024",
      location: "Serenity, Mumbai",
      title: "Strength in Diversity",
      description: "Showcase strength and determination in an inclusive weightlifting competition.",
    },

  ];

  return (
    <div className="main">
      <div className="mainone m-4 md:m-16 lg:m-32 mb-8 lg:mb-16">
        <div className="flex w-28 h-8 justify-center items-center text-[#CEF23F] align-middle rounded-3xl text-xs md:text-sm font-light bg-[rgba(255,255,255,0.1)]">
          EVENTS
        </div>
        <div className="heading flex justify-start text-3xl md:text-5xl lg:text-7xl m-2 p-2">
          <h1>Discover Thrilling Sports Events</h1>
        </div>
        {/* <BTnCompo text="View All Events"/> */}
        <div className="flex justify-end items-end">
          <BTnCompo text="View All Events"/>
        </div>
      </div>

      <div className="maintwo max-w-[90%] mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 justify-center mb-16 lg:mb-44">
        {eventData.map((event, index) => (
          <div key={index} className="card flex flex-col justify-center align-middle items-center">
            <div
              className="imgpart items-end bg-cover flex h-72 md:h-[350px] w-72 md:w-[20rem] rounded-t-[15%]"
              style={{ backgroundImage: `url(${event.imgUrl})` }}
            >
              
              <div className="btnpart flex justify-evenly h-16 md:h-20 w-full items-center bg-black/40">
                <div className="data flex items-center justify-evenly w-28 md:w-36 h-8 bg-black/40 rounded-2xl">
                  <i className="fa-regular fa-calendar-days fa-sm" style={{ color: "#cef23f" }}></i>
                  <p className="text-xs">{event.date}</p>
                </div>
                <div className="data flex items-center justify-evenly w-28 md:w-36 h-8 bg-black/40 rounded-2xl">
                  <i className="fa-solid fa-location-dot fa-sm" style={{ color: "#cef23f" }}></i>
                  <p className="text-xs">{event.location}</p>
                </div>
              </div>
            </div>
            <div className="biopart bg-[#FFFFFF0D] flex flex-col  w-64 md:w-[18rem] p-4 rounded-2xl mt-2">
              <h1 className="text-[#CEF23F] text-left justify-start">{event.title}</h1>
              <h2 className="text-xs md:text-sm font-thin">{event.description}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
