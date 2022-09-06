import Head from "next/head";
import { About } from "../components/Pizza/About";
import { Contacts } from "../components/Pizza/Contacts";
import { Footer } from "../components/Pizza/Footer";
import { Hero } from "../components/Pizza/Hero";
import { Projects } from "../components/Pizza/Projects";
import { GithubProject } from "../components/Projects";

export default function Home({
  githubProjects,
}: {
  githubProjects: GithubProject[];
}) {
  return (
    <div className="bg-white min-h-screen antialiased text-pizza-dark-green ">
      <Head>
        <title>PippoGit - software engineer from italy</title>
        <meta name="description" content="github projects and stuff" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <About />
      <Projects githubProjects={githubProjects} />
      <Contacts />
      <Footer />
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
