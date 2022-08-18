import {
  FaChevronRight,
  FaGithub,
  FaGlobe,
  FaLock,
  FaMicrochip,
  FaRobot,
} from "react-icons/fa";
import { PinnedProject } from "./Projects";
import { Tooltip } from "./Tooltip";

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
    <div className="flex flex-col shadow-sm bg-sky-900 p-4 rounded-xl ">
      <div className="pb-2">
        <div className="flex pb-2 mb-1 border-b border-sky-800 items-center">
          <p className="font-bold text-sky-50 ">{project.title}</p>
          <a href={project.html_url} className="block ml-auto">
            <button className="flex  active:ring-2 ring-sky-200 divide-sky-50/10 items-center gap-2 bg-sky-900 transition-colors hover:shadow-sm hover:bg-sky-700 text-white font-bold text-sm py-1 px-2 rounded-full">
              <p>Code</p>
              <FaChevronRight />
            </button>
          </a>
        </div>
        <p className="text-sky-100 text-sm">{project.details}</p>
      </div>

      <div className="flex mt-auto border-t border-sky-800 gap-2 pt-4 items-center">
        {project.tags.map((tag, idx) => (
          <div key={idx}>
            <Tooltip message={tag}>
              <div className="text-sky-600">
                <TagIcon tag={tag} />
              </div>
            </Tooltip>
          </div>
        ))}
        <div className="flex ml-auto gap-2 items-center">
          {project.languages.map((l, idx) => (
            <div
              key={idx}
              className="text-xs font-semibold text-sky-700 bg-sky-50 rounded-xl px-2 py-0.5 shadow-sm h-5"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
