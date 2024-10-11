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
        <text className="heading">Have Questions?</text>
        <text className="headingtwo">We Have Answers!</text>
      </div>
      <FaqPart />
    </div>
  );
}
