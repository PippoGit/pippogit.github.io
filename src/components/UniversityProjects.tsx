"use client";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Icon } from "./Icon";

import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";

type ProjectTag = "ai" | "web" | "low-level" | "cybersecurity";

interface UniversityProject {
  id: string;
  tags: ProjectTag[];
  title: string;
  documentationUrl: string;
  details: string;
  order: number;
  languages: string[];
}

const pinnedProjects: UniversityProject[] = [
  // MIM Food
  {
    id: "MIMFood",
    tags: ["ai", "web"],
    languages: ["Java", "Javascript"],
    title: "Foodle",
    order: 1,
    documentationUrl: "/university/foodle.pdf",
    details:
      "A Computer Vision toy application that can be used to identify and classify food images by using CNN and features indices.",
  },
  // HOME
  {
    id: "HOME",
    title: "HOME",
    documentationUrl: "/university/home.pdf",
    details: "A HOpefully sMart nEws aggregator powered by AI models.",
    tags: ["ai", "web"],
    languages: ["Python", "Javascript"],
    order: 2,
  },
  // WebSecureChat
  {
    id: "WebSecureChat",
    title: "WebSecure Chat",
    documentationUrl: "/university/chat.pdf",
    details:
      "A kind-of secure chat web application powered by node.js and forge.",
    tags: ["cybersecurity", "web"],
    languages: ["Javascript"],
    order: 3,
  },
  // RoundRobinCellularNetwork
  {
    id: "RoundRobinCellularNetwork",
    title: "Round-Robin LTE Cell",
    documentationUrl: "/university/peva.pdf",
    details:
      "Omnet++ simulation of a Round-Robin algorithm to serve an LTE cellular network with a deep data analysis of the results.",
    tags: ["low-level"],
    languages: ["C++", "Python"],
    order: 4,
  },
  // NeuralColourComparison
  {
    id: "NeuralColourComparison",
    title: "Neural Colour Comparison",
    documentationUrl: "/university/color.pdf",
    details:
      "A neural network that compares a master color spectrum to a copy spectrum in order to measure how similar they are.",
    tags: ["ai"],
    languages: ["Matlab"],
    order: 5,
  },
  // DistributedHashBreaker
  {
    id: "DistributedHashBreaker",
    title: "Distributed Hash Breaker",
    documentationUrl: "/university/hash.pdf",
    details:
      "A distributed application that can be used to find collisions in hash functions and analyze the results with a web dashboard.",
    tags: ["cybersecurity"],
    languages: ["Java", "Javascript"],
    order: 6,
  },
];

export function UniversityProjects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const variants: Variants = {
    visible: {
      height: "auto",
      y: "0",
      opacity: 1,
      transition: {
        type: "just",
      },
    },
    exit: {
      height: "auto",
      y: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <div className="flex w-full flex-col gap-2 rounded-lg">
      <div
        onClick={() => setIsExpanded((val) => !val)}
        className="flex cursor-pointer items-center gap-3 rounded-lg border-none border-zinc-800 bg-zinc-800 p-2 px-3 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-zinc-300"
      >
        {/* <Icon as={<Code />} /> */}
        <p className="w-full text-sm font-semibold">University Projects</p>
        <Icon as={isExpanded ? <ChevronUp /> : <ChevronDown />} />
      </div>
      <div className="overflow-hidden">
        <AnimatePresence mode="sync">
          {isExpanded && (
            <motion.div
              key="uni-projects"
              exit="exit"
              animate="visible"
              variants={variants}
              initial={{ y: "0", height: 0, opacity: 1 }}
              className="flex flex-col gap-2"
            >
              {pinnedProjects.map((project) => (
                <ProjectsItem key={project.id} project={project} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface ProjectsItemProps {
  project: UniversityProject;
}

function ProjectsItem({ project }: ProjectsItemProps) {
  return (
    <a
      href={project.documentationUrl}
      target="_blank"
      className="flex w-full cursor-pointer items-center rounded-lg p-2 px-4 text-base text-zinc-400 transition-colors hover:bg-zinc-800"
      rel="noreferrer"
    >
      <div className="flex w-full flex-col items-start">
        <p className="font-semibold tracking-wide ">{project.title}</p>
        <p className="text-sm font-semibold tracking-wide  text-pink-500">
          {project.languages.join(", ")}
        </p>
        <p className="mt-1 text-sm tracking-wide text-zinc-500">
          {project.details}
        </p>
      </div>
      <ChevronRight size="1rem" />
    </a>
  );
}
