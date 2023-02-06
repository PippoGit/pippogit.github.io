"use client";
import { usePathname } from "next/navigation";

import { Code2 } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex w-full max-w-lg flex-row flex-wrap items-center justify-center gap-1 font-semibold text-zinc-700 md:w-10 md:flex-col md:items-start md:justify-start">
      <Code2
        size="3rem"
        className="mb-4 mr-4 w-full flex-shrink-0 text-pink-800 md:mr-0 md:mb-2 md:ml-2 md:w-auto"
      />
      <NavLink href="/" label="About" />
      <NavLink href="/education" label="Education" />
      <NavLink href="/skills" label="Skills" />
      <NavLink href="/projects" label="Projects" />
      <NavLink href="/contacts" label="Contacts" />
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
}
function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      aria-current={pathname === href ? "page" : undefined}
      className="flex-grow-0 rounded-lg py-1 px-3 text-sm tracking-wide hover:text-zinc-300 aria-current:bg-zinc-800 aria-current:text-zinc-300 md:text-base"
    >
      {label}
    </Link>
  );
}
