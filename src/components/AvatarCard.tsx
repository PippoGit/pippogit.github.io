import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { me } from "../config/me";

export function AvatarCard() {
  return (
    <div className="flex w-full items-stretch gap-4 rounded-lg bg-zinc-800 p-4 text-zinc-500">
      <div className="-ml-4 h-auto w-1  bg-zinc-700" />
      <div className="flex flex-col gap-4 py-2">
        <div className="flex gap-4 text-sm font-semibold text-zinc-400">
          <span className="text-zinc-400">
            <Briefcase size="1.2rem" />
          </span>
          <div className="flex flex-wrap gap-1">
            <span className="text-zinc-400">{me.currentPosition.role}</span>
            <span>at</span>
            <a
              href={me.currentPosition.company.url}
              className="font-bold text-zinc-400 underline decoration-dotted decoration-1 underline-offset-2 transition-colors after:content-['_↗']  hover:text-zinc-300"
            >
              {me.currentPosition.company.name}
            </a>
          </div>
        </div>

        <div className="flex gap-4 text-sm font-semibold text-zinc-400">
          <span className="text-zinc-400">
            <GraduationCap size="1.2rem" />
          </span>
          <div className="flex gap-1 text-zinc-400">
            <span>{me.education}</span>
          </div>
        </div>

        <div className="flex gap-4 text-sm font-semibold text-zinc-400">
          <span className="text-zinc-400">
            <MapPin size="1.2rem" />
          </span>
          <p className="text-zinc-400">{me.location}</p>
        </div>
      </div>
    </div>
  );
}
