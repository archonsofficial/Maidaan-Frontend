import  { useEffect, useRef } from "react";
import LeftCircle from "./LeftCircle";
import RightCircle from "./RightCircle";
import FeaturesGrid from "./FeaturesGrid"; // Import the FeaturesGrid component
import "./analyticalstyle.css";

export default function AnalyticalSection() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const main = mainRef.current;
      const leftDiv = document.querySelector(".left-div") as HTMLElement;
      const rightDiv = document.querySelector(".right-div") as HTMLElement;

      if (main && leftDiv && rightDiv) {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const mainTopOffset = main.getBoundingClientRect().top + window.scrollY;
        const effectStart = mainTopOffset - viewportHeight * 0.8;
        const distanceToStart = scrollPosition - effectStart;
        const scrollDistance = Math.max(0, distanceToStart);
        const maxOffset = 100;
        const mergeOffset =-2;

        const leftOffset = Math.min(maxOffset, scrollDistance / 2);
        const rightOffset = Math.min(maxOffset, scrollDistance / 2);

        leftDiv.style.transform = `translateX(${leftOffset - mergeOffset}%)`;
        rightDiv.style.transform = `translateX(-${rightOffset - mergeOffset}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main relative max-h-fit " ref={mainRef}>
      <div className="fixed left-0 top-2/4 transform -translate-x-1/2 left-div">
        <LeftCircle />
      </div>
      <div className="fixed right-0 top-2/4 transform translate-x-1/2 right-div">
        <RightCircle />
      </div>
      <div className="content mt-[16%] pt-44 "> {/* Adjust `mt-48` as needed to create space above */}
        <FeaturesGrid /> {/* Place FeaturesGrid at the bottom of the main content */}
      </div>
    </div>
  );
}
