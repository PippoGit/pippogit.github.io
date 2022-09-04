import Image from "next/image";
import React from "react";
import { Timeline } from "./Timeline";
import { Section } from "./Section";

const timelineEvents = [
  {
    type: "school" as const,
    year: 2013,
    title: "ITI G. Galilei Livorno",
    description: "Secondary School Diploma in IT",
  },
  {
    type: "university" as const,
    year: 2018,
    title: "University Of Pisa",
    description: "Bachelor's Degree in Computer Engineering",
    details:
      "Computational Stigmery applications to detect New York City's hotspots through pick up and drop off events of taxi races",
  },
  {
    type: "university" as const,
    year: 2021,
    title: "University Of Pisa",
    description: "MSc in Computer Engineering",
    details:
      "Design and development of a visual anomaly detection system based on attention",
  },
].reverse();

export const Education = () => {
  return (
    <div className="bg-white antialiased w-full text-pizza-dark-green">
      <Section>
        <div className="flex flex-col items-center mb-8 gap-5">
          <p className="text-pizza-green font-extrabold xl:text-5xl lg:text-6xl md:text-5xl text-4xl tracking-tighter	">
            Education
          </p>
        </div>
        <div className="flex justify-between gap-10 items-center md:flex-row flex-col-reverse">
          <div className="w/20 md:max-w-[50%] md:pr-5 ">
            <Timeline events={timelineEvents} />
          </div>
          <div className="md:w-[700px] md:h-[500px] w-[320px] h-[400px] relative">
            <Image
              src="/education.svg"
              layout="fill"
              alt="education illustration"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
