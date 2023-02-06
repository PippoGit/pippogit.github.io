import type { ReactNode } from "react";
import { Navigation } from "./Navigation";

export function PageContent({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="xs:p-8 flex min-h-screen flex-col items-center gap-10 bg-zinc-900 p-4 sm:p-10 md:flex-row md:items-start md:justify-center md:gap-32 md:p-20">
      <Navigation />
      <main className="container max-w-lg">
        <h1 className="mb-3 text-4xl font-semibold tracking-wide text-zinc-200">
          {title}
        </h1>
        <div className="flex flex-col items-start gap-4">{children}</div>
      </main>
    </div>
  );
}
