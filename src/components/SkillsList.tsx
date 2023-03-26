"use client";

import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { Cpu, Server, Layout, Bot } from "lucide-react";
import type { ReactElement } from "react";
import { Icon } from "./Icon";

export function SkillsList() {
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <AnimatePresence mode="sync">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="flex w-full flex-col gap-4"
      >
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
      </motion.div>
    </AnimatePresence>
  );
}

interface SkillsItemProps {
  icon: ReactElement;
  topic: string;
  skills?: string;
}

function SkillsItem({ icon, topic, skills }: SkillsItemProps) {
  const variant: Variants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={variant}
      className="flex w-full items-start gap-4 rounded-lg bg-zinc-800 p-3 px-4"
    >
      <Icon as={icon} className="mt-1 flex-shrink-0 flex-grow-0" />
      <div className="flex w-full flex-col items-start text-sm text-zinc-400">
        <p className="font-semibold tracking-wide ">{topic}</p>
        {skills && (
          <p className="text-base font-medium tracking-wide text-zinc-500">
            {skills}
          </p>
        )}
      </div>
    </motion.div>
  );
}
