import type { NextPage } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

import { Navigation } from "../components/Navigation";
import { UniversityProjects } from "../components/UniversityProjects";

interface WorkProject {
  id: string;
  title: string;
  company: {
    name: string;
    url?: string;
  };
  year: number;
  details: string;
  technologies: string[];
  tags: string[];
}

const workProjects = [
  {
    id: "WP-OPPLA",
    title: "Food Delivery Platform",
    company: {
      name: "Delivery Aggregator",
      url: "https://landing.deliveryaggregator.com",
    },
    year: 2022,
    details: "Food delivery platform developed using NextJS and Laravel.",
    technologies: [
      "**TypeScript** and **NextJS/React** frontend",
      "Jotai Atoms for global state management",
      "ChakraUI for user interface",
      "`react-hook-form` for form validation",
      "**PHP/Laravel** for the backend",
      "**GraphQL** APIs (Lighthouse as provider on the backend and URQL as client on the frontend)",
      "PostgreSQL database with PostGIS extension for geographical queries",
    ],
    tags: ["NextJS", "Laravel", "TypeScript"],
  },
  {
    id: "WP-ITS",
    title: "ITS Manager",
    company: {
      name: "ITS Telecomunicazioni",
      url: "http://its-tlc.it",
    },
    year: 2021,
    details:
      "Business management web application developed using react with multiple users and an administration panel.",
    technologies: [
      "**React** frontend",
      "MUI for user interface",
      "Backend powered by **Google Firebase** (authentication, data storage and file storage)",
    ],
    tags: ["React", "Firebase"],
  },
];

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>PippoGit</title>
        <meta name="description" content="a software engineer from italy" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex min-h-screen flex-col gap-10 bg-zinc-900 p-10 md:flex-row md:justify-center md:gap-32 md:p-20">
        <Navigation />
        <main className="container max-w-lg">
          <h1 className="mb-3 text-4xl font-semibold tracking-wide text-zinc-200">
            Projects
          </h1>
          <div className="flex flex-col items-start gap-4">
            <div className="font-light  text-zinc-400">
              <p className="text-lg tracking-wide">
                Work and university projects:
              </p>
            </div>
            {workProjects.map((project) => (
              <ProjectsItem key={project.id} project={project} />
            ))}
            <UniversityProjects />
          </div>
        </main>
      </div>
    </>
  );
};

interface ProjectsItemProps {
  project: WorkProject;
}

function ProjectsItem({ project }: ProjectsItemProps) {
  return (
    <div className="flex w-full flex-col items-start rounded-lg bg-zinc-800 p-3 px-4 text-base text-zinc-400">
      <p className="font-semibold tracking-wide ">{project.title}</p>
      <a
        href={project.company.url}
        className="text-sm font-semibold text-zinc-400 after:content-['_↗'] hover:text-zinc-300"
      >
        {project.company.name}
      </a>
      <p className="mt-2 tracking-wide text-zinc-500">{project.details}</p>
      {project.technologies && (
        <ul className="list-disc px-8 text-zinc-500 marker:text-pink-700">
          {project.technologies.map((t, idx) => (
            <li key={idx}>
              <ReactMarkdown>{t}</ReactMarkdown>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-2 flex w-full justify-end gap-3 p-2">
        {project.tags.map((tag) => (
          <div
            key={tag}
            className="rounded-full bg-pink-900 px-3 text-sm font-semibold  text-pink-300"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
