import { GraduationCap } from "lucide-react";
import type { NextPage } from "next";
import Head from "next/head";
import type { ReactElement } from "react";
import { Icon } from "../components/Icon";
import { Navigation } from "../components/Navigation";

const Education: NextPage = () => {
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
            Education
          </h1>

          <div className="flex flex-col items-start gap-4">
            <div className="font-light  text-zinc-400">
              <p className="text-lg tracking-wide">Degrees and stuff:</p>
            </div>
            <EducationItem
              icon={<GraduationCap />}
              degree="MSc in Computer Engineering"
              institute="University of Pisa"
              instituteUrl="https://www.unipi.it"
              year={2021}
              grade={"110/110 cum laude"}
              thesis="Design and development of a visual anomaly detection system based on attention."
            />

            <EducationItem
              icon={<GraduationCap />}
              degree="BSc in Computer Engineering"
              institute="University of Pisa"
              instituteUrl="https://www.unipi.it"
              grade={"101/110"}
              year={2017}
              thesis="Computational Stigmery applications to detect New York City's hotspots through pick up and drop off events of taxi races."
            />
            <EducationItem
              icon={<GraduationCap />}
              degree="Secondary School Diploma in IT"
              institute="ITI G. Galilei Livorno"
              instituteUrl="https://www.galileilivorno.edu.it/"
              grade={"100/100"}
              year={2013}
            />
          </div>
        </main>
      </div>
    </>
  );
};

interface EducationItemProps {
  icon: ReactElement;
  degree: string;
  institute: string;
  instituteUrl: string;
  year: number;
  thesis?: string;
  grade: string;
}

function EducationItem({
  icon,
  degree,
  institute,
  instituteUrl,
  year,
  thesis,
  grade,
}: EducationItemProps) {
  return (
    <div className="flex w-full items-start gap-4 rounded-lg bg-zinc-800 p-3 px-4">
      <Icon as={icon} className="mt-1 flex-shrink-0 flex-grow-0" />
      <div className="flex w-full flex-col items-start text-sm text-zinc-400">
        <p className="font-semibold tracking-wide ">
          {degree}
          <span className="font-regular text-zinc-500">{" at "}</span>
          <a
            href={instituteUrl}
            className="font-semibold text-zinc-400 after:content-['_↗'] hover:text-zinc-300"
          >
            {institute}
          </a>
        </p>
        <p className="font-semibold text-zinc-600">
          {grade} - {year}
        </p>
        {thesis && <p className="mt-1 text-base  text-zinc-400">{thesis}</p>}
      </div>
    </div>
  );
}

export default Education;
