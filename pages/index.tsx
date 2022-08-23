import Head from "next/head";
import { Header } from "../components/Header";
import { Education } from "../components/Education";
import { GithubProject, Projects } from "../components/Projects";
import { Work } from "../components/Work";

export default function Home({
  githubProjects,
}: {
  githubProjects: GithubProject[];
}) {
  return (
    <div>
      <Head>
        <title>web page of a software engineer from italy</title>
        <meta name="description" content="github projects and stuff" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="dark:bg-sky-800 bg-sky-800 text-center dark:text-sky-50  font-bold py-1"></div>
      <main className="dark:bg-sky-900 bg-gray-100 min-h-screen px-2 py-2">
        <div className="max-w-3xl mx-auto flex flex-col gap-4 pb-4">
          <Header />
          <Education />
          <Work />
          <Projects githubProjects={githubProjects} />
        </div>
      </main>
      <footer className="dark:bg-sky-800 bg-sky-800 text-center dark:text-sky-50 font-bold py-1"></footer>
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
