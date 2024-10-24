import FaqPart from "./FaqPart";
import { Chip } from "@nextui-org/react";
import "./Fag.css";

export default function FaqMain() {
  return (
    <div className="Fagmain">
      <div className="written">
        <Chip className="topic" variant="flat">
          FREQUENTLY ASKED QUESTIONS
        </Chip>
        <p className="heading">Have Questions?</p>
        <p className="headingtwo">We Have Answers!</p>
      </div>
      <FaqPart />
    </div>
  );
}
