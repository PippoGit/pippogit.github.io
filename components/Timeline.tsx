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
      after:content[''] after:absolute after:top-9 after:h-full after:left-3 after:w-1 after:bg-sky-600 
      before:content[''] before:absolute before:top-0 before:h-3/6 only:bg-pink-200 before:left-3 before:w-1 before:bg-sky-600
        [&:first-child:before]:hidden
        last:after:hidden
    "
    >
      <div
        className="border-2  flex-shrink-0  shadow-lg border-sky-700 rounded-full h-7 w-7 relative text-sky-700 bg-sky-200 z-10 flex place-content-center place-items-center
        "
      >
        <EventIcon type={event.type} />
        <div className="absolute top-6 text-sky-500 z-20 font-extrabold text-xs bg-sky-800">
          {event.year}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold">{event.title}</div>
        <div className="text-sky-500 font-semibold">{event.description}</div>
        {event.details && <div className="italic text-sm">{event.details}</div>}
      </div>
    </li>
  );
};

//
