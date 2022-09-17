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
    <div className="flex flex-col bg-pizza-box-white p-4  rounded-2xl relative h-full">
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
              href={`university/${project.documentation}.pdf`}
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
  );
};
