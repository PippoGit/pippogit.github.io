import { Download } from "lucide-react";
import type { NextPage } from "next";
import Head from "next/head";
import { AvatarCard } from "../components/AvatarCard";
import { GithubLinkButton } from "../components/GithubLinkButton";

import { ExternalLinkButton } from "../components/ExternalLinkButton";
import { Navigation } from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PippoGit</title>
        <meta name="description" content="a software engineer from italy" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex min-h-screen justify-center gap-32 bg-zinc-900 p-20">
        <Navigation />
        <main className="container max-w-lg">
          <h1 className="mb-3 text-4xl font-semibold tracking-wide text-zinc-200">
            Filippo Scotto
          </h1>

          <div className="flex flex-col items-start gap-4">
            <div className="font-light  text-zinc-400">
              <p className="text-lg tracking-wide">
                Hello, my name is Filippo. I make stuff with modern web
                technologies and machine learning.
              </p>
            </div>

            <AvatarCard />

            <div className="font-light  text-zinc-400">
              <p className="text-zinc-500">
                I&apos;m a{" "}
                <span className="font-semibold">
                  full stack software engineer
                </span>{" "}
                who loves to work with web technologies such as{" "}
                <span className="font-semibold">React and NextJS</span>, but I
                also have a solid academic background in computer engineering,
                machine learning, and networking.
              </p>
            </div>
            <div className="flex w-full items-center justify-start gap-8">
              <ExternalLinkButton
                icon={<Download />}
                href={"/resume.pdf"}
                label="Get Resume"
                target="_blank"
              />
              <GithubLinkButton />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
