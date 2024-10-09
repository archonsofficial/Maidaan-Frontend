
import FaqMain from "../LpFAQ/FaqMain";
import HeroSection from '../HeroSection/HeroSection';

// import LpEventspage from '../LpEvents/LpEventspage';
import LpEvent from "../LpEventPage/LpEvent";
export default function HomePage() {
  return (
    <>
    <HeroSection/>
    <LpEvent/>
    {/* <LpEventspage/> */}
    <FaqMain/>
    
    </>
  )
}
