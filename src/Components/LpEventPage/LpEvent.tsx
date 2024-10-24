import Eone from "../../assets/Eone.jpeg";
import Etwo from "../../assets/Etwo.jpeg";
import Ethree from "../../assets/Ethree.jpeg";
import BTnCompo from "../Btn/BTnCompo";

export default function LpEvent() {
  const eventData = [
    {
      imgUrl: Eone,
      date: "Oct 10, 2024",
      location: "Serenity, Mumbai",
      title: "Finding Your Inner Peace",
      description:
        "Experience rejuvenation and tranquility through guided yoga sessions.",
    },
    {
      imgUrl: Etwo,
      date: "Oct 10, 2024",
      location: "Serenity, Mumbai",
      title: "Move to the Rhythm",
      description:
        "Dance your heart out while enjoying a high-energy Zumba workout.",
    },
    {
      imgUrl: Ethree,
      date: "Oct 10, 2024",
      location: "Serenity, Mumbai",
      title: "Strength in Diversity",
      description:
        "Showcase strength and determination in an inclusive weightlifting competition.",
    },
  ];

  return (
    <section className=" text-white py-0 m-8">
      <div className="container mx-auto">
        <div className="flex justify-start items-end mb-8">
          <button className="linkbtn text-[#CEF23F] bg-[#FFFFFF10] px-4 py-[10px] rounded-full text-sm  font-bold h-9 font-secondaryFont flex items-center">
            EVENTS
          </button>
        </div>

        <h2 className="text-4xl font-normal  ">
          Discover Thrilling Sports Events
        </h2>

        {/* <BTnCompo text="View All Events"/> */}
        <div className="flex justify-end items-end mb-8 ">
          <BTnCompo text="View All Events" sty="" />
        </div>

        <div className="maintwo mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 justify-center mb-16 lg:mb-44">
          {eventData.map((event, index) => (
            <div key={index} className="card flex flex-col justify-center align-middle items-center">
              <div
                className="imgpart items-end bg-cover flex h-72 md:h-[350px] w-72 md:w-[20rem] rounded-t-[15%] relative"
                style={{ backgroundImage: `url(${event.imgUrl})` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-black opacity-90 rounded-t-[15%]"></div>

                <div className="btnpart flex justify-evenly h-16 md:h-20 w-full items-center bg-black/40 z-10">
                  <div className="data flex items-center justify-evenly w-28 md:w-36 h-8 bg-black/40 rounded-2xl">
                    <i
                      className="fa-regular fa-calendar-days fa-sm"
                      style={{ color: "#cef23f" }}
                    ></i>
                    <p className="text-xs">{event.date}</p>
                  </div>
                  <div className="data flex items-center justify-evenly w-28 md:w-36 h-8 bg-black/40 rounded-2xl">
                    <i
                      className="fa-solid fa-location-dot fa-sm"
                      style={{ color: "#cef23f" }}
                    ></i>
                    <p className="text-xs">{event.location}</p>
                  </div>
                </div>
              </div>
              <div className="biopart bg-[#FFFFFF0D] flex flex-col w-64 md:w-[18rem] p-4 rounded-2xl mt-2">
                <h1 className="text-[#CEF23F] text-left justify-start">{event.title}</h1>
                <h2 className="text-xs md:text-sm font-thin">{event.description}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
