import { Card, CardContent, CardHeader } from "./Card";
import { FaTools } from "react-icons/fa";
import { WorkCard } from "./WorkCard";

interface Company {
  name: string;
  url?: string;
}

export interface WorkProject {
  title: string;
  company: Company;
  year: number;
  details: string;
  technologies?: string[];
  tags?: string[];
}

const workProjects = [
  {
    title: "Food Delivery Platform",
    company: {
      name: "Delivery Aggregator",
      url: "https://landing.deliveryaggregator.com",
    },
    year: 2022,
    details: "Food delivery platform developed using NextJS and Laravel.",
    technologies: [
      "NextJS/React frontend (SSR and SEO)",
      "Jotai Atoms for global state management",
      "ChakraUI for user interface",
      "PHP/Laravel for the backend",
      "GraphQL APIs (Lighthouse as provider on the backend and URQL as client on the frontend)",
      "PostgreSQL database with PostGIS extension for geographical queries",
    ],
    tags: ["NextJS", "Laravel"],
  },
  {
    title: "ITS Manager",
    company: {
      name: "ITS Telecomunicazioni",
      url: "http://its-tlc.it",
    },
    year: 2021,
    details:
      "Business management web application developed using react with multiple users and an administration panel.",
    technologies: [
      "React frontend",
      "MUI for user interface",
      "Backend powered by Google Firebase (authentication, data storage and file storage)",
    ],
    tags: ["React", "Firebase"],
  },
];

export const Work = () => {
  return (
    <div className="flex w-full flex-col">
      <Card>
        <CardHeader title="projects --work" icon={<FaTools />} />
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {workProjects.map((project, idx) => (
              <WorkCard key={idx} project={project} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
