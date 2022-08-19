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
    <div className="flex flex-col shadow-sm dark:bg-sky-900 bg-sky-50 p-4 rounded-xl ">
      <div className="pb-2">
        <div className="flex pb-2 mb-1 border-b dark:border-sky-800 border-sky-100 items-center">
          <p className="font-bold dark:text-sky-50 text-sky-800 ">
            {project.title}
          </p>
          <a href={project.html_url} className="block ml-auto">
            <button className="flex  active:ring-2 ring-sky-200 divide-sky-50/10 items-center gap-2 dark:bg-sky-900 bg-sky-50 transition-colors hover:shadow-sm hover:dark:bg-sky-300 hover:bg-sky-100 dark:text-white text-sky-900 font-bold text-sm py-1 px-2 rounded-full">
              <p>Code</p>
              <FaChevronRight />
            </button>
          </a>
        </div>
        <p className="dark:text-sky-100 text-sky-800 text-sm">
          {project.details}
        </p>
      </div>

      <div className="flex mt-auto border-t dark:border-sky-800 border-sky-100 gap-2 pt-4 items-center">
        {project.tags.map((tag, idx) => (
          <div key={idx}>
            <Tooltip message={tag}>
              <div className="dark:text-sky-600 text-sky-600">
                <TagIcon tag={tag} />
              </div>
            </Tooltip>
          </div>
        ))}
        <div className="flex ml-auto gap-2 items-center">
          {project.languages.map((l, idx) => (
            <div
              key={idx}
              className="text-xs font-semibold dark:text-sky-700 text-sky-600 dark:bg-sky-50 bg-sky-100 rounded-xl px-2 py-0.5 shadow-sm h-5"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
