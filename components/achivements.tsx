"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { AchivementData } from "@/lib/data";
import Achivement from "./achivement";
import { useSectionInView } from "@/lib/hooks";

export default function Achivements() {
  const { ref } = useSectionInView("Achivements", 0.5);

  return (
    <section ref={ref}  className="scroll-mt-28 mb-10" id="achivements">
      <SectionHeading>Achivements</SectionHeading>
      <div className="" >
        {AchivementData.map((achivement, index) => (
          <React.Fragment key={index}>
            <Achivement {...achivement} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
