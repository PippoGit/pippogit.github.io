import { Bot, Cpu, Layout, Server } from "lucide-react";
import type { NextPage } from "next";
import Head from "next/head";
import type { ReactElement } from "react";
import { Icon } from "../components/Icon";
import { PageContent } from "../components/PageContent";

const Skills: NextPage = () => {
  return (
    <>
      <Head>
        <title>PippoGit</title>
        <meta name="description" content="a software engineer from italy" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <PageContent title="Skills">
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
      </PageContent>
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
