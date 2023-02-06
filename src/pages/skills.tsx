import { Bot, Cpu, Layout, Server } from "lucide-react";
import type { NextPage } from "next";
import Head from "next/head";
import type { ReactElement } from "react";
import { Icon } from "../components/Icon";
import { Navigation } from "../components/Navigation";

const Skills: NextPage = () => {
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
            Skills
          </h1>

          <div className="flex flex-col items-start gap-4">
            <div className="font-light  text-zinc-400">
              <p className="text-lg tracking-wide">Full-Stack Knowledge!</p>
            </div>
            <SkillsItem icon={<Cpu />} topic="Low-level" skills="C, C++" />

            <SkillsItem
              icon={<Server />}
              topic="Backend"
              skills="PHP, Laravel, NodeJS, Java, Python, GraphQL"
            />
            <SkillsItem
              icon={<Layout />}
              topic="Frontend"
              skills="Javascript, TypeScript, React, NextJS, Tailwind"
            />
            <SkillsItem
              icon={<Bot />}
              topic="AI and Data Engineering"
              skills="Pandas, SciKit, PyTorch, Numpy"
            />
          </div>
        </main>
      </div>
    </>
  );
};

interface SkillsItemProps {
  icon: ReactElement;
  topic: string;
  skills?: string;
}

function SkillsItem({ icon, topic, skills }: SkillsItemProps) {
  return (
    <div className="flex w-full items-start gap-4 rounded-lg bg-zinc-800 p-3 px-4">
      <Icon as={icon} className="mt-1 flex-shrink-0 flex-grow-0" />
      <div className="flex w-full flex-col items-start text-sm text-zinc-400">
        <p className="font-semibold tracking-wide ">{topic}</p>
        {skills && (
          <p className="text-base font-medium tracking-wide text-zinc-500">
            {skills}
          </p>
        )}
      </div>
    </div>
  );
}

export default Skills;
