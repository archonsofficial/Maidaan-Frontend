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
          Discover a variety of sports events, from local tournaments to national competitions.

        </AccordionItem>
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 2"
          title={<span className="text-white  ">How do I create a player or team profile?</span>}
        >
          Simply sign up, fill in your details, and start showcasing your achievements!

        </AccordionItem>
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 3"
          title={<span className="text-white ">Are there any fees to participate in events?</span>}
        >
          Most events on Maidaan are free or have minimal participation fees.
        </AccordionItem>
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 4"
          title={<span className="text-white  ">Can I organize my own event?</span>}
        >
          Absolutely! You can create and manage your own events through our platform.

        </AccordionItem>
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 5"
          title={<span className="text-white  ">How do I stay updated on upcoming events?</span>}
        >
         Subscribe to notifications and check our events calendar regularly.

        </AccordionItem>
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 6"
          title={<span className="text-white  ">What support does Maidaan offer for athletes?</span>}
        >
          We provide resources, training programs, and a community for all sports enthusiasts.
        </AccordionItem>
        <AccordionItem
          className="faqBox"
          aria-label="Accordion 7"
          title={<span className="text-white  ">Can I connect with other players and teams?</span>}
        >
          Yes! Our platform encourages networking and collaboration among users.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
