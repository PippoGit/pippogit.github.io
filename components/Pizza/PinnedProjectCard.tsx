import {
  FaBook,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaGithubAlt,
  FaGlobe,
  FaLock,
  FaMicrochip,
  FaRobot,
} from "react-icons/fa";
import { PinnedProject } from "./GithubProjects";
import { Tooltip } from "../Tooltip";

interface PinnedProjectCardProps {
  project: PinnedProject;
}

const TagIcon = ({ tag }: { tag: PinnedProject["tags"][number] }) => {
  switch (tag) {
    case "ai":
      return <FaRobot />;
    case "cybersecurity":
      return <FaLock />;
    case "low-level":
      return <FaMicrochip />;
    case "web":
      return <FaGlobe />;
  }
};

export const PinnedProjectCard = ({ project }: PinnedProjectCardProps) => {
  return (
    <>
      {/* <div className="flex flex-col shadow-sm  bg-pizza-transparent-green p-4 rounded-xl ">
        <div className="pb-2">
          <div className="flex pb-2 mb-1 items-center">
            <p className="font-bold  text-pizza-green ">{project.title}</p>
            <a href={project.html_url} className="block ml-auto">
              <button className="flex  active:ring-2 ring-pizza-lightest-green divide-sky-50/10 items-center gap-2  bg-pizza-transparent-green transition-colors hover:shadow-sm  hover:bg-pizza-light-green  text-pizza-green font-bold text-sm py-1 px-2 rounded-full">
                <p>Code</p>
                <FaChevronRight />
              </button>
            </a>
          </div>
          <p className=" text-pizza-green text-sm">{project.details}</p>
        </div>

        <div className="flex mt-auto  gap-2 pt-4 items-center">
          {project.tags.map((tag, idx) => (
            <div key={idx}>
              <Tooltip message={tag}>
                <div className=" text-pizza-light-green">
                  <TagIcon tag={tag} />
                </div>
              </Tooltip>
            </div>
          ))}
          <div className="flex ml-auto gap-2 items-center">
            {project.languages.map((l, idx) => (
              <div
                key={idx}
                className="text-sm font-bold  text-white  bg-pizza-green rounded-full px-3 py-0.5 shadow-sm"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="flex flex-col bg-pizza-box-white p-4  rounded-2xl relative">
        <div className="flex pb-0 items-top justify-between ">
          <div className="flex flex-col items-top">
            <p className="font-extrabold text-pizza-green text-xl ">
              {project.title}
            </p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noreferrer"
              className="font-bold font-mono text-pizza-green text-sm  flex gap-2 items-center group opacity-70 hover:opacity-90"
            >
              <span>&gt; see repo</span>
              <FaGithubAlt />
            </a>
            {project.documentation && (
              <a
                href={`u/${project.documentation}`}
                target="_blank"
                rel="noreferrer"
                className="font-bold font-mono text-pizza-green text-sm  flex gap-2 items-center group opacity-70 hover:opacity-90"
              >
                <span>&gt; documentation</span>
                <FaBook />
              </a>
            )}
          </div>
        </div>
        <div className="text-pizza-box-grey my-1 text-md font-bold px-0 pb-2 ">
          <div>{project.details}</div>
        </div>
        <div className="flex ml-auto mt-auto gap-2 items-center absolute -bottom-2.5 right-4">
          {project.languages.map((l, idx) => (
            <div
              key={idx}
              className="text-sm font-bold text-white bg-pizza-green  rounded-full px-3 py-0.5 h-auto"
            >
              {l}
            </div>
          ))}
        </div>
        <div className="flex ml-auto mt-auto gap-2 items-center absolute -bottom-3 left-4">
          {project.tags.map((tag, idx) => (
            <div
              key={idx}
              className="text-md font-bold text-[#b3a799] bg-[#ede6df]  rounded-full p-2 h-auto"
            >
              <Tooltip message={tag}>
                <TagIcon tag={tag} />
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
