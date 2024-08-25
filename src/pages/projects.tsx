import type { NextPage } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

import { PageContent } from "../components/PageContent";

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
    id: "mastercard",
    title: "Visual Acquiring Optimizer and Portfolio Optimizer",
    company: {
      name: "Hyntelo",
      url: "https://hyntelo.com",
    },
    year: 2024,
    details: "Developed an enterprise data visualization platform for Mastercard. Collaborated in a diverse, multi-ethnic team, adhering to Mastercard's proprietary technologies and standards.",
    technologies: [
      "**Frontend**: React with Redux Toolkit and RTK Query for state management.",
      "**Backend**: C# with MS SQL."
    ],
    tags: ["React", "TypeScript", "Redux", "C#"],
  },
  {
    id: "HTTP",
    title: "Ping-Pong Ranking Platform",
    company: {
      name: "Hyntelo",
      url: "https://hyntelo.com",
    },
    year: 2024,
    details: "Developed a side project leveraging the Elo algorithm to rank players in a ping pong game, fostering a fun and competitive environment among colleagues.",
    technologies: [
      "**Frontend**: TypeScript, Next14, shadcn-ui",
      "**Backend**: Next14 backend functionalities (react server components and server actions)",
      "**Database**: Postgres with drizzle."
    ],
    tags: ["NextJS", "TypeScript", "Drizzle", "RSC"],
  },
  {
    id: "lyriko",
    title: "Lyriko",
    company: {
      name: "Hyntelo",
      url: "https://hyntelo.com",
    },
    year: 2023,
    details: "Contributed to feature development for Hyntelo's main product, primarily as a frontend engineer, with additional involvement in backend tasks.",
    technologies: [
      "**Frontend**: TypeScript, Angular",
      "**Backend**: Python with FastAPI and Pydantic",
    ],
    tags: ["Angular", "Python"],
  },
  {
    id: "WP-OPPLA",
    title: "Food Delivery Platform",
    company: {
      name: "Delivery Aggregator",
      url: "https://landing.deliveryaggregator.com",
    },
    year: 2022,
    details: "Developed a food delivery platform using modern technologies.",
    technologies: [
      "**Frontend**: TypeScript, Next.js/React, Chakra UI for UI, Jotai for state management, and react-hook-form for validation.",
      "**Backend**: PHP/Laravel with GraphQL APIs (Lighthouse for backend, URQL for frontend).",
      "**Database**: PostgreSQL with PostGIS for geographical queries."
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
      "Developed a business management web application with multi-user support and an admin panel.",
    technologies: [
      "**Frontend**: React with MUI for the user interface.",
      "**Backend**: Google Firebase for authentication, data storage, and file storage."
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
      <PageContent title="Projects">
        <div className="flex flex-col items-start gap-4">
          <div className="font-light  text-zinc-400">
            <p className="text-lg tracking-wide">
              Work experience and projects
            </p>
          </div>
          {workProjects.map((project) => (
            <ProjectsItem key={project.id} project={project} />
          ))}
        </div>
      </PageContent>
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
        className="text-sm font-semibold text-zinc-400 transition-colors after:content-['_↗'] hover:text-zinc-300"
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
