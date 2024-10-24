
import FaqMain from "../Components/LpFAQ/FaqMain";
import HeroSection from '../Components/HeroSection/HeroSection';
// import LpEventspage from '../LpEvents/LpEventspage';
import LpEvent from "../Components/LpEventPage/LpEvent";
import LpTournaments from "../Components/LpTournamentPage/LpTournaments";
import ServicesSection from "../Components/ServicesSection/ServicesSection";
import AnalyticalSection from "../Components/LpAnalyticalSection/AnalyticalSection"





export default function LandingPage() {
  return (
    <>
    <HeroSection/>
   
    <ServicesSection/>
  <AnalyticalSection/>
    <LpTournaments/>
    <LpEvent/>
    <FaqMain/>
    
    </>
  )
}
