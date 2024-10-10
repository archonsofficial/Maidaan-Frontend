
import FaqMain from "../LpFAQ/FaqMain";
import HeroSection from '../HeroSection/HeroSection';

// import LpEventspage from '../LpEvents/LpEventspage';
import LpEvent from "../LpEventPage/LpEvent";
import LpTournaments from "../LpTournamentPage/LpTournaments";
export default function HomePage() {
  return (
    <>
    <HeroSection/>
    <LpTournaments/>
    <LpEvent/>
    {/* <LpEventspage/> */}
    <FaqMain/>
    
    </>
  )
}
