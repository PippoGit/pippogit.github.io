import Head from "next/head";
import { Header } from "../components/Pizza/Header";
import { Hero } from "../components/Pizza/Hero";
import { Skills } from "../components/Pizza/Skills";
import { GithubProject } from "../components/Projects";

export default function Home({
  githubProjects,
}: {
  githubProjects: GithubProject[];
}) {
  return (
    <div className="bg-white min-h-screen antialiased">
      <Head>
        <title>a software engineer from italy</title>
        <meta name="description" content="github projects and stuff" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <div id="about">
        <Skills />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.github.com/users/PippoGIT/repos");
  const githubProjects = (await res.json()) as GithubProject[];

  return {
    props: {
      githubProjects,
    },
    revalidate: 600,
  };
};
