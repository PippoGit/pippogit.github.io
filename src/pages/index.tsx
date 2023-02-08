import { Download, Linkedin } from "lucide-react";
import type { NextPage } from "next";
import Head from "next/head";
import { AvatarCard } from "../components/AvatarCard";
import { GithubLinkButton } from "../components/GithubLinkButton";

import { ExternalLinkButton } from "../components/ExternalLinkButton";
import { PageContent } from "../components/PageContent";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PippoGit</title>
        <meta name="description" content="a software engineer from italy" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <PageContent title="Filippo Scotto">
        <div className="font-light  text-zinc-400">
          <p className="text-lg tracking-wide">
            Hello, my name is Filippo. I make stuff with modern web technologies
            and machine learning.
          </p>
        </div>

        <AvatarCard />

        <div className="font-light  text-zinc-400">
          <p className="text-zinc-500">
            I&apos;m a{" "}
            <span className="font-semibold">full stack software engineer</span>{" "}
            who loves to work with web technologies such as{" "}
            <span className="font-semibold">React and NextJS</span>, but I also
            have a solid academic background in computer engineering, machine
            learning, and networking.
          </p>
        </div>
        <div className="flex w-full flex-col justify-start  gap-4 md:flex-row md:items-center md:gap-8">
          <ExternalLinkButton
            icon={<Download />}
            href={"/resume.pdf"}
            label="Get Resume"
            target="_blank"
          />
          <GithubLinkButton />
          <ExternalLinkButton
            icon={<Linkedin />}
            href={"https://www.linkedin.com/in/filippo-undefined-248034262/"}
            label="LinkedIn"
            target="_blank"
          />
        </div>
      </PageContent>
    </>
  );
};

export default Home;
