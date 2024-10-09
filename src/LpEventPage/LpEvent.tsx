export default function LpEvent() {
    return (
      <div className="main">
        <div className="mainone m-4 md:m-16 lg:m-32 mb-8 lg:mb-16">
          <div className="flex w-28 h-8 justify-center items-center text-[#CEF23F] align-middle rounded-3xl text-xs md:text-sm font-light bg-[rgba(255,255,255,0.1)]">
            EVENTS
          </div>
          <div className="heading flex justify-start text-3xl md:text-5xl lg:text-7xl m-2 p-2">
            <h1>Discover Thrilling Sports Events</h1>
          </div>
          <div className="flex justify-end items-end">
            <button className="linkbtn bg-[#CEF23F] hover:bg-lime-500 text-black px-4 py-2 rounded-full text-xs md:text-sm font-light w-50 md:w-50 h-7 flex items-center">
              View All Events
              <i className="fa-solid fa-arrow-right fa-xl ml-2"></i>
            </button>
          </div>
        </div>
  
        <div className="maintwo  max-w-[90%] mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center mb-16 lg:mb-44">
          <div className="card flex flex-col justify-center items-end align-bottom">
            <div className="imgpart items-end align-bottom bg-[url('https://nextui.org/images/card-example-5.jpeg')] bg-cover flex h-72 md:h-[350px] w-72 md:w-[20rem] rounded-t-[15%]">
              <div className="btnpart flex justify-evenly h-16 md:h-20 w-full items-center bg-black/40">
                <div className="data flex items-center justify-evenly w-28 md:w-36 h-8 bg-black/40 rounded-2xl">
                  <i className="fa-regular fa-calendar-days fa-xl" style={{ color: "#cef23f" }}></i>
                  <p className="text-xs">Oct 10, 2024</p>
                </div>
                <div className="data flex items-center justify-evenly w-28 md:w-36 h-8 bg-black/40 rounded-2xl">
                  <i className="fa-solid fa-location-dot fa-xl" style={{ color: "#cef23f" }}></i>
                  <p className="text-xs">Serenity, Mumbai</p>
                </div>
              </div>
            </div>
            <div className="biopart bg-[#FFFFFF0D] flex flex-col justify-center items-center w-64 md:w-[18rem] p-4 rounded-2xl mt-2">
              <h1 className="text-[#CEF23F]">Finding Your Inner Peace</h1>
              <h2 className="text-xs md:text-sm font-thin">
                Experience rejuvenation and tranquility through guided yoga sessions.
              </h2>
            </div>
          </div>
  
          {/* 2nd card */}
          <div className="card flex flex-col justify-center items-center">
            <div className="imgpart items-end align-bottom bg-[url('https://nextui.org/images/card-example-5.jpeg')] bg-cover flex h-72 md:h-[350px] w-72 md:w-[20rem] rounded-t-[15%]">
              <div className="btnpart flex justify-evenly h-16 md:h-20 w-full items-center bg-black/40">
                <div className="data flex items-center justify-evenly w-28 md:w-36 h-8 bg-black/40 rounded-2xl">
                  <i className="fa-regular fa-calendar-days fa-xl" style={{ color: "#cef23f" }}></i>
                  <p className="text-xs">Oct 10, 2024</p>
                </div>
                <div className="data flex items-center justify-evenly w-28 md:w-36 h-8 bg-black/40 rounded-2xl">
                  <i className="fa-solid fa-location-dot fa-xl" style={{ color: "#cef23f" }}></i>
                  <p className="text-xs">Serenity, Mumbai</p>
                </div>
              </div>
            </div>
            <div className="biopart bg-[#FFFFFF0D] flex flex-col justify-center items-center w-64 md:w-[18rem] p-4 rounded-2xl mt-2">
              <h1 className="text-[#CEF23F]">Move to the Rhythm</h1>
              <h2 className="text-xs md:text-sm font-thin">
                Dance your heart out while enjoying a high-energy Zumba workout.
              </h2>
            </div>
          </div>
  
          {/* 3rd card */}
          <div className="card flex flex-col justify-center items-center">
            <div className="imgpart  items-end align-bottom bg-[url('https://nextui.org/images/card-example-5.jpeg')] bg-cover flex h-72 md:h-[350px] w-72 md:w-[20rem] rounded-t-[15%]">
              <div className="btnpart flex justify-evenly h-16 md:h-20 w-full items-center bg-black/40">
                <div className="data flex items-center justify-evenly w-28 md:w-36 h-8 bg-black/40 rounded-2xl">
                  <i className="fa-regular fa-calendar-days fa-xl" style={{ color: "#cef23f" }}></i>
                  <p className="text-xs">Oct 10, 2024</p>
                </div>
                <div className="data flex items-center justify-evenly w-28 md:w-36 h-8 bg-black/40 rounded-2xl">
                  <i className="fa-solid fa-location-dot fa-xl" style={{ color: "#cef23f" }}></i>
                  <p className="text-xs">Serenity, Mumbai</p>
                </div>
              </div>
            </div>
            <div className="biopart bg-[#FFFFFF0D] flex flex-col justify-center items-center w-64 md:w-[18rem] p-4 rounded-2xl mt-2">
              <h1 className="text-[#CEF23F]">Strength in Diversity</h1>
              <h2 className="text-xs md:text-sm font-thin">
                Showcase strength and determination in an inclusive weightlifting competition.
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
  