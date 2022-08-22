import { FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";
import { WorkProject } from "./Work";

interface WorkCardProps {
  project: WorkProject;
}

export const WorkCard = ({ project }: WorkCardProps) => {
  return (
    <div className="flex flex-col shadow-sm dark:bg-sky-900 bg-pink-50 p-4 rounded-xl ">
      <div className="flex pb-2 border-b dark:border-sky-700 border-pink-100 items-top justify-between">
        <div className="flex flex-col items-top">
          <p className="font-bold text-pink-800 dark:text-sky-50 ">
            {project.title}
          </p>
          <a
            href={project.company.url}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-pink-500 dark:text-sky-500 text-xs uppercase flex gap-2 items-center group"
          >
            {project.company.name}
            <FaExternalLinkAlt />
          </a>
        </div>
        <div className="font-bold text-sm text-pink-800 dark:text-sky-50 flex gap-1 items-top flex-row">
          {/* <FiCalendar /> */}
          <span>{project.year}</span>
        </div>
      </div>
      <div className="dark:text-sky-50 text-pink-800 text-sm my-2 dark:border-sky-700 border-pink-100">
        {project.details}
      </div>
      {project.technologies && (
        <ul className="text-sm text-pink-800 dark:text-sky-50 pb-2 list-disc px-6">
          {project.technologies.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ul>
      )}
      <div className="flex ml-auto mt-auto gap-2 items-center">
        {project.tags.map((l, idx) => (
          <div
            key={idx}
            className="text-xs font-semibold dark:text-pink-700 text-pink-800 dark:bg-sky-50 bg-pink-200 rounded-xl px-2 py-0.5 shadow-sm h-5"
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
};
