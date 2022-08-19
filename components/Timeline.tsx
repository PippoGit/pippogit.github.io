import { FaSchool, FaTools, FaUniversity } from "react-icons/fa";

interface TimelineEvent {
  type: "school" | "university" | "work";
  year: number;
  title: string;
  description: string;
  details?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline = ({ events }: TimelineProps) => {
  return (
    <ul className="flex flex-col pl-2 mb-1 min-w-fit	">
      {events.map((event, idx) => (
        <Event key={idx} event={event} />
      ))}
    </ul>
  );
};

interface EventProps {
  event: TimelineEvent;
}

const EventIcon = ({ type }: { type: TimelineEvent["type"] }) => {
  switch (type) {
    case "school":
      return <FaSchool />;
    case "university":
      return <FaUniversity />;
    case "work":
      return <FaTools />;
  }
};

const Event = ({ event }: EventProps) => {
  return (
    <li
      className="flex flex-row items-center gap-4  relative my-2
      after:content[''] after:absolute after:top-9 after:h-full after:left-3 after:w-1 dark:after:bg-sky-600 after:bg-sky-700
      before:content[''] before:absolute before:top-0 before:h-1/2 before:left-3 before:w-1 dark:before:bg-sky-600 before:bg-sky-700
        [&:first-child:before]:hidden
        last:after:hidden
    "
    >
      <div
        className="border-2  flex-shrink-0  shadow-lg dark:border-sky-700 border-sky-700 rounded-full h-7 w-7 relative dark:text-sky-700 text-sky-50 dark:bg-sky-200 bg-sky-700 z-10 flex place-content-center place-items-center
        "
      >
        <EventIcon type={event.type} />
        <div className="absolute top-[1.62rem] dark:text-sky-50 text-sky-700 z-20 font-extrabold text-xs dark:bg-sky-800 bg-white">
          {event.year}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold ">{event.title}</div>
        <div className="dark:text-sky-50 text-sky-700 font-semibold">
          {event.description}
        </div>
        {event.details && <div className="text-sm">{event.details}</div>}
      </div>
    </li>
  );
};

//
