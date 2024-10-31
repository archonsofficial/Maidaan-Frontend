import bgImg from "../../assets/Rectangle 35.png";
import "./analyticalstyle.css";
import FeaturesGrid from "./FeaturesGrid";
import 'aos/dist/aos.css';
import AOS from "aos"
import { useEffect } from 'react';
export default function AnalyticalSection() {
useEffect(()=>{
  AOS.init({
     // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 3000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  })
})
  return (
    <>
      <div className="min-h-[140vh] w-full realtive">
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className={`min-h-full lg:min-h-[100vh]   bg-no-repeat `}
        >
          <div className="h-full w-full flex justify-center">
            
              <div 
              data-aos="slide-right"
              className="1stCircle  rounded-full h-[40vh] w-[40vh] bg-[#FFFFFF25]  ">

              </div>
              <div 
              data-aos="slide-right"
              className="1stCircle -ml-8  rounded-full h-[40vh] w-[40vh] bg-[#FFFFFF25]  ">

              </div>
              <div 
              data-aos="slide-left"
              className="1stCircle -ml-8 rounded-full h-[40vh] w-[40vh] bg-[#FFFFFF25]  ">

              </div>
              <div 
              data-aos="slide-left"
              className="1stCircle -ml-8  rounded-full h-[40vh] w-[40vh] bg-[#FFFFFF25]  ">

              </div>
          </div>
          <div className="content mt-[16%] pt-44 "> {/* Adjust `mt-48` as needed to create space above */}
         <FeaturesGrid /> {/* Place FeaturesGrid at the bottom of the main content */}
       </div>
        </div>
      </div>
    </>
  );
  // const mainRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const main = mainRef.current;
  //     const leftDiv = document.querySelector(".left-div") as HTMLElement;
  //     const rightDiv = document.querySelector(".right-div") as HTMLElement;

  //     if (main && leftDiv && rightDiv) {
  //       const scrollPosition = window.scrollY;
  //       const viewportHeight = window.innerHeight;
  //       const mainTopOffset = main.getBoundingClientRect().top + window.scrollY;
  //       const effectStart = mainTopOffset - viewportHeight * 0.8;
  //       const distanceToStart = scrollPosition - effectStart;
  //       const scrollDistance = Math.max(0, distanceToStart);
  //       const maxOffset = 100;
  //       const mergeOffset = 10;

  //       const leftOffset = Math.min(maxOffset, scrollDistance / 2);
  //       const rightOffset = Math.min(maxOffset, scrollDistance / 2);

  //       leftDiv.style.transform = `translateX(${leftOffset - mergeOffset}%)`;
  //       rightDiv.style.transform = `translateX(-${rightOffset - mergeOffset}%)`;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // return (
  //   <div className="main relative max-h-fit " ref={mainRef}>
  //     <div className="fixed left-0 top-2/4 transform -translate-x-1/2 left-div">
  //       <LeftCircle />
  //     </div>
  //     <div className="fixed right-0 top-2/4 transform translate-x-1/2 right-div">
  //       <RightCircle />
  //     </div>
  //     <div className="content mt-[16%] pt-44 "> {/* Adjust `mt-48` as needed to create space above */}
  //       <FeaturesGrid /> {/* Place FeaturesGrid at the bottom of the main content */}
  //     </div>
  //   </div>
  // );
}
