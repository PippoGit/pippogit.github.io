import type { ReactElement } from "react";
import { cloneElement } from "react";

export function Icon({
  as,
  className,
}: {
  as: ReactElement;
  className?: string;
}) {
  return cloneElement(as, {
    size: "1.2rem",
    className: `text-zinc-500 ${className ?? ""}`,
  });
}
