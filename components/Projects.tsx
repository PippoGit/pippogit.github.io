import { Card, CardContent, CardHeader } from "./Card";
import { List } from "./List";

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
      "A distributed application that can be used to find collisions in hash functions and analyze the results from a web dashboard.",
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

export const Projects = () => {
  const [projects, setProjects] = useState<GithubProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataFromGithub = useCallback(async () => {
    const result = await fetch("https://api.github.com/users/PippoGIT/repos");
    const data = (await result.json()) as GithubProject[];
    setProjects(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataFromGithub().catch(() => {
      console.log("error while fetching github repos...");
    });
  }, [fetchDataFromGithub]);

  const [pinned, others] = useMemo(
    () =>
      projects.reduce(
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
      ),
    [projects]
  );

  if (isLoading) {
    return (
      <div role="status" className="mx-auto my-2">
        <svg
          aria-hidden="true"
          className="mr-2 w-8 h-8 text-sky-900 animate-spin dark:text-gray-600 fill-sky-700"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <Card>
        <CardHeader title="projects --github" icon={<FaCode />} />
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-2 bg-sky-800 rounded-xl pt-2">
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
            <div className="border-t border-sky-700 pt-4">
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
        </CardContent>
      </Card>
    </div>
  );
};
