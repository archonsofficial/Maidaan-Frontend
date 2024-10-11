import { Accordion, AccordionItem } from "@nextui-org/react";
import "./Fag.css";

export default function FaqPart() {
 

  return (
    <div className="faq1 ">
      <Accordion variant="splitted" className="  justify-center items-center   ">
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 1"
          title={<span className="text-white  ">What types of events can I find on Maidaan?</span>}
        >
         <p className="font-thin"> Discover a variety of sports events, from local tournaments to national competitions.</p>

        </AccordionItem>
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 2"
          title={<span className="text-white  ">How do I create a player or team profile?</span>}
        >
          <p className="font-thin">Simply sign up, fill in your details, and start showcasing your achievements!</p>

        </AccordionItem>
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 3"
          title={<span className="text-white ">Are there any fees to participate in events?</span>}
        >
         <p className="font-thin"> Most events on Maidaan are free or have minimal participation fees.</p>
        </AccordionItem>
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 4"
          title={<span className="text-white  ">Can I organize my own event?</span>}
        >
         <p className="font-thin"> Absolutely! You can create and manage your own events through our platform.</p>

        </AccordionItem>
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 5"
          title={<span className="text-white  ">How do I stay updated on upcoming events?</span>}
        >
        <p className="font-thin"> Subscribe to notifications and check our events calendar regularly.</p>

        </AccordionItem>
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 6"
          title={<span className="text-white  ">What support does Maidaan offer for athletes?</span>}
        >
          <p className="font-thin">We provide resources, training programs, and a community for all sports enthusiasts.</p>
        </AccordionItem>
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 7"
          title={<span className="text-white  ">Can I connect with other players and teams?</span>}
        >
          <p className="font-thin">Yes! Our platform encourages networking and collaboration among users.</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
