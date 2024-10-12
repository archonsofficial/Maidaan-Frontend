interface BTnCompoProps {
    text: string;
  }



export default function BTnCompo({ text }: BTnCompoProps) {
  return (
    <div className="flex w-[265px] justify-center align-middle text-xs md:text-sm hover:justify-around items-center transition-all duration-100 ease-in-out group">
    <div className="flex justify-start w-[210px] items-center pr-3 bg-[#CEF23F] md:w-50 h-6 text-black px-4 py-2 rounded-l-3xl transition-all duration-100 ease-in-out">
      {text}
    </div>
    <div className="bg-[#CEF23F] h-6 items-center text-black  pr-2 py-1 rounded-r-3xl  ">
      <i className="fa-solid fa-arrow-right fa-xl ml-2 transition-all duration-100 ease-in-out group-hover:rotate-[-40deg] transform"></i>
    </div>
  </div>
  );
}
