import type { NextPage } from "next";
import Head from "next/head";
import { PageContent } from "../components/PageContent";
import { SkillsList } from "../components/SkillsList";

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
        <SkillsList />
      </PageContent>
    </>
  );
};

export default Skills;
