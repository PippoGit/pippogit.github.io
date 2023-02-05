"use client";
import { usePathname } from "next/navigation";

import { Code2 } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex w-10 flex-col items-start gap-1 font-semibold text-zinc-700">
      <Code2 size="3rem" className="mb-2 ml-2 text-pink-800" />
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
      className="flex-grow-0 rounded-lg py-1 px-3 tracking-wide hover:text-zinc-300 aria-current:bg-zinc-800 aria-current:text-zinc-300"
    >
      {label}
    </Link>
  );
}
