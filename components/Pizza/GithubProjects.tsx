import { List } from "../List";

import { useMemo } from "react";

import { Carousel, CarouselCard } from "./Carousel";
import { PinnedProjectCard } from "./PinnedProjectCard";

export interface GithubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

type ProjectTag = "ai" | "web" | "low-level" | "cybersecurity";

interface PinnedProjectExtension {
  tags?: ProjectTag[];
  title: string;
  details: string;
  order: number;
  languages?: string[];
  documentation?: string;
}

export type PinnedProject = GithubProject & PinnedProjectExtension;

const pinnedProjects: Record<string, PinnedProjectExtension> = {
  // MIM Food
  "274654906": {
    tags: ["ai", "web"],
    languages: ["Java", "Javascript"],
    title: "Foodle",
    order: 1,
    documentation: "foodle",
    details:
      "A Computer Vision toy application that can be used to identify and classify food images by using CNN and features indices.",
  },
  // AI

  "154703124": {
    title: "Neural Colour Comparison",
    documentation: "color",
    details:
      "A neural network that compares a master color spectrum to a copy spectrum in order to measure how similar they are.",
    tags: ["ai"],
    languages: ["MATLAB"],
    order: 4,
  },
  "217676570": {
    title: "Distributed Hash Breaker",
    details:
      "A distributed application that can be used to find collisions in hash functions and analyze the results with a web dashboard.",
    tags: ["cybersecurity"],
    languages: ["Java", "Javascript"],
    documentation: "hash",
    order: 6,
  },
  // HOME
  "176743623": {
    title: "HOME",
    details: "A HOpefully sMart nEws aggregator powered by AI models.",
    tags: ["ai", "web"],
    languages: ["Python", "Javascript"],
    documentation: "home",
    order: 2,
  },
  // WebSecure Chat
  "135614212": {
    title: "WebSecure Chat",
    details:
      "A kind-of secure chat web application powered by node.js and forge",
    tags: ["cybersecurity", "web"],
    languages: ["Javascript"],
    documentation: "chat",
    order: 3,
  },
  // RoundRobinCellularNetwork
  "273016996": {
    title: "Round-Robin LTE Cell",
    details:
      "Omnet++ simulation of a Round-Robin algorithm to serve an LTE cellular network with a deep data analysis of the results.",
    tags: ["low-level"],
    languages: ["C++", "Python"],
    documentation: "peva",
    order: 5,
  },
};

export const GithubProject = ({
  githubProjects,
}: {
  githubProjects: GithubProject[];
}) => {
  const [pinned, others] = useMemo(() => {
    return githubProjects.reduce(
      (result: [PinnedProject[], GithubProject[]], project) => {
        if (pinnedProjects[project.id]) {
          result[0].push({
            ...project,
            ...pinnedProjects[project.id],
          });
        } else {
          result[1].push(project);
        }
        return result;
      },
      [[], []]
    );
  }, [githubProjects]);

  if (!githubProjects) return null;
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col gap-2">
        <div className="sm:grid grid-cols-1 sm:grid-cols-2 gap-10 hidden ">
          {pinned
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <PinnedProjectCard key={project.id} project={project} />
            ))}
        </div>
        <div className="sm:hidden">
          <Carousel>
            {pinned
              .sort((a, b) => a.order - b.order)
              .map((project) => (
                <CarouselCard key={project.id}>
                  <PinnedProjectCard project={project} />
                </CarouselCard>
              ))}
          </Carousel>
        </div>
        <div className="pt-10">
          <List
            items={others.map((p) => ({
              title: p.name,
              subtitle: p.description,
              url: p.html_url,
            }))}
          />
        </div>
      </div>
    </div>
  );
};
