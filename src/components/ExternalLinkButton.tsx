import type { AnchorHTMLAttributes, ReactElement } from "react";
import { Icon } from "./Icon";

interface Props {
  label: string;
  icon?: ReactElement;
  href: string;
  target?: AnchorHTMLAttributes<Props>["target"];
}

export function ExternalLinkButton({ label, icon, href, target }: Props) {
  return (
    <div className="flex items-center gap-3 rounded-lg border-none border-zinc-800 bg-zinc-900 p-2 px-3">
      {icon && <Icon as={icon} />}
      <p className="text-sm font-medium tracking-wide text-zinc-500">
        <a
          target={target}
          href={href}
          className="font-semibold text-zinc-400 transition-colors after:content-['_↗'] hover:text-zinc-300"
        >
          {label}
        </a>
      </p>
    </div>
  );
}
