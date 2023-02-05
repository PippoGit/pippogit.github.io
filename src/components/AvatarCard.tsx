import { GraduationCap, MapPin, Settings } from "lucide-react";

export function AvatarCard() {
  return (
    <div className="flex w-full items-stretch gap-4 rounded-lg bg-zinc-800 p-4 text-zinc-500">
      <div className="h-auto w-1 rounded-full bg-pink-800" />
      <div className="flex flex-col gap-4 py-2">
        <div className="flex gap-3 text-sm font-semibold text-zinc-400">
          <span className="text-zinc-500">
            <Settings size="1.2rem" />
          </span>
          <p>Full stack software engineer</p>
        </div>

        <div className="flex gap-3 text-sm font-semibold text-zinc-400">
          <span className="text-zinc-500">
            <GraduationCap size="1.2rem" />
          </span>
          <p>MSc in Computer Engineering</p>
        </div>

        <div className="flex gap-3 text-sm font-semibold text-zinc-400">
          <span className="text-zinc-500">
            <MapPin size="1.2rem" />
          </span>
          <p>Livorno, Italy</p>
        </div>
      </div>
    </div>
  );
}
