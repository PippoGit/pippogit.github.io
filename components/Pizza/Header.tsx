import React from "react";
import { FaGithub } from "react-icons/fa";
import { Section } from "./Section";

export const Header = () => {
  return (
    <div className="flex justify-between items-center md:my-10 my-5 mt-0 pb-10">
      <div className="font-extrabold text-pizza-green text-4xl">pippogit</div>
      <div className="md:flex gap-14 text-pizza-light-green text-xl font-bold items-center hidden">
        <a href="#about" className="hover:text-pizza-bright-green">
          about
        </a>
        <a href="#portfolio" className="hover:text-pizza-bright-green">
          portfolio
        </a>
        <a href="#contacts" className="hover:text-pizza-bright-green">
          contact
        </a>
        <a
          href="https://www.github.com/PippoGit"
          className="hover:text-pizza-bright-green"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
