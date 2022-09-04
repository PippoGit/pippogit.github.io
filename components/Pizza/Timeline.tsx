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
      className="flex flex-row items-start gap-8  relative my-2
    "
    >
      <div>
        <div
          className="grid rounded-full h-10 w-10  text-white bg-pizza-green place-items-center
        "
        >
          <EventIcon type={event.type} />
        </div>
        <div className=" text-pizza-green font-extrabold text-md">
          {event.year}
        </div>
      </div>
      <div className="flex flex-col text-pizza-light-green gap-1">
        <div className="font-extrabold text-pizza-red text-lg -mb-2">
          {event.title}
        </div>
        <div className="text-pizza-green font-extrabold text-xl ">
          {event.description}
        </div>
        <span>
          {event.details && (
            <div className="text-md text-pizza-light-green font-semibold font-mono">
              {event.details}
            </div>
          )}
        </span>
      </div>
    </li>
  );
};

//
