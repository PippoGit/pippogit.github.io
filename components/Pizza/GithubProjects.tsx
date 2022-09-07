import { List } from "../List";

import { FaCode, FaMapPin, FaPinterest, FaStar } from "react-icons/fa";
import { useCallback, useEffect, useMemo, useState } from "react";
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
}

export type PinnedProject = GithubProject & PinnedProjectExtension;

const pinnedProjects: Record<string, PinnedProjectExtension> = {
  // MIM Food
  "274654906": {
    tags: ["ai", "web"],
    languages: ["Java", "Javascript"],
    title: "Foodle",
    order: 1,
    details:
      "A Computer Vision toy application that can be used to identify and classify food images by using CNN and features indices.",
  },
  // CNNLayer
  "228045961": {
    title: "VHDL Convolutional Layer",
    details:
      "VHDL hardware description of a convolutional layer to implement a CNN on FPGAs.",
    tags: ["ai", "low-level"],
    languages: ["VHDL"],
    order: 4,
  },
  // Delta Jobs
  // "81573983": { title: "", details: "", tags: ["web"] },
  // DistributedHashBreaker
  "217676570": {
    title: "Distributed Hash Breaker",
    details:
      "A distributed application that can be used to find collisions in hash functions and analyze the results with a web dashboard.",
    tags: ["cybersecurity"],
    languages: ["Java", "Javascript"],
    order: 6,
  },
  // HOME
  "176743623": {
    title: "HOME",
    details: "A HOpefully sMart nEws aggregator powered by AI models.",
    tags: ["ai", "web"],
    languages: ["Python", "Javascript"],
    order: 2,
  },
  // WebSecure Chat
  "135614212": {
    title: "WebSecure Chat",
    details:
      "A kind-of secure chat web application powered by node.js and forge",
    tags: ["cybersecurity", "web"],
    languages: ["Javascript"],
    order: 3,
  },
  // RoundRobinCellularNetwork
  "273016996": {
    title: "Round-Robin LTE Cell",
    details:
      "Omnet++ simulation of a Round-Robin algorithm to serve an LTE cellular network with a deep data analysis of the results.",
    tags: ["low-level"],
    languages: ["C++", "Python"],
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* <div className="pl-2 mt-2 font-bold font-mono text-xs uppercase sm:col-span-2 flex items-center gap-2 text-yellow-100">
                <FaStar />
                <span>Pinned Projects</span>
              </div> */}
          {pinned
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <PinnedProjectCard key={project.id} project={project} />
            ))}
        </div>
        <div className="pt-10">
          {/* <div className="pl-2 mb-2 font-bold font-mono text-xs uppercase sm:col-span-2 flex items-center gap-2">
                <span>Other Projects</span>
              </div> */}
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
