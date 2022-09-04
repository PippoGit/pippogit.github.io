import React from "react";
import { Work } from "../Work";
import { GithubProject, Projects as GHProjects } from "../Projects";
import { Section } from "./Section";
import { Skills } from "./Skills";

export const Projects = ({
  githubProjects,
}: {
  githubProjects: GithubProject[];
}) => {
  return (
    <div id="projects" className="w-full text-pizza-dark-green">
      <div className="h-[10rem] w-full bg-pizza-pattern" />
      <Section className="bg-white ">
        <p className="font-extrabold text-4xl text-left text-pizza-red mb-4">
          Work projects
        </p>

        <Work />
      </Section>
      <Section className="bg-white ">
        <p className="font-extrabold text-4xl text-left text-pizza-red mb-4">
          Github projects
        </p>

        <GHProjects githubProjects={githubProjects} />
      </Section>
    </div>
  );
};
