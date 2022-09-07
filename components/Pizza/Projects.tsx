import React from "react";
import { Work } from "./Work";
import type { GithubProject } from "./GithubProjects";
import { GithubProject as GHProjects } from "./GithubProjects";
import { Section } from "./Section";

export const Projects = ({
  githubProjects,
}: {
  githubProjects: GithubProject[];
}) => {
  return (
    <div id="portfolio" className="w-full text-pizza-dark-green bg-[#fcfaf8] ">
      <div className="h-auto w-full bg-pizza-pattern  border-t-white border-y-4 border-b-[#fcfaf8] border-dashed py-10">
        <Section className="flex items-center justify-center ">
          <p className="font-extrabold lg:text-9xl md:text-8xl sm:text-8xl xs:text-7xl text-5xl text-center tracking-wider text-white w-full p-5 fancy-text-shadow opacity-95 ">
            Portfolio
          </p>
        </Section>
      </div>
      <Section>
        {/* <p className="font-mono font-bold text-2xl text-pizza-box-grey mb-5 opacity-40">
          &gt; projects --work
        </p> */}
        {/* <p className="font-mono font-bold text-xl text-slate-400 mb-5  bg-slate-900 p-5 rounded-xl">
          &gt; projects --work
        </p> */}
        <p className="font-mono font-bold text-lg text-[#b3a799] mb-5   p-4 rounded-xl">
          <span className="font-semibold">&gt;</span> projects --work
        </p>
        <Work />
      </Section>
      <Section className="pt-2.5">
        <p className="font-mono font-bold text-lg text-[#b3a799] mb-5   p-4 rounded-xl">
          <span className="font-semibold">&gt;</span> projects --github
          --university
        </p>
        <GHProjects githubProjects={githubProjects} />
      </Section>
    </div>
  );
};
