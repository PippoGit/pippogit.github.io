import { Card, CardContent, CardHeader } from "./Card";
import { Timeline } from "./Timeline";
import { FaBook } from "react-icons/fa";

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
    <div className="flex w-full flex-col">
      <Card>
        <CardHeader title="education --timeline" icon={<FaBook />} />
        <CardContent>
          <Timeline events={timelineEvents} />
        </CardContent>
      </Card>
    </div>
  );
};
