import { FaExternalLinkAlt } from "react-icons/fa";
import { WorkProject } from "./Work";
import ReactMarkdown from "react-markdown";

interface WorkCardProps {
  project: WorkProject;
}

export const WorkCard = ({ project }: WorkCardProps) => {
  return (
    <div className="flex flex-col shadow-sm  bg-pizza-box-white p-4  rounded-2xl relative">
      <div className="flex pb-0 items-top justify-between ">
        <div className="flex flex-col items-top">
          <p className="font-extrabold text-pizza-red text-xl ">
            {project.title}
          </p>
          <a
            href={project.company.url}
            target="_blank"
            rel="noreferrer"
            className="font-bold font-mono text-pizza-red text-sm  flex gap-2 items-center group opacity-70 hover:opacity-90"
          >
            {project.company.name}
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <div className="text-pizza-box-grey my-1 text-md font-bold px-0 pb-2 ">
        <div>{project.details}</div>
        {project.technologies && (
          <ul className="list-disc px-8 ">
            {project.technologies.map((t, idx) => (
              <li key={idx}>
                <ReactMarkdown>{t}</ReactMarkdown>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex ml-auto mt-auto gap-2 items-center absolute -bottom-2.5 right-4">
        {project.tags.map((l, idx) => (
          <div
            key={idx}
            className="text-sm font-bold dark:text-pink-700 text-pizza-red bg-pizza-lightest-red rounded-full px-3 py-0.5 shadow-sm h-auto"
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
};
