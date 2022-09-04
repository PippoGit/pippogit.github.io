import React from "react";
import { Section } from "./Section";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="bg-pizza-transparent-green  antialiased">
      <Section>
        <div className="flex h-lg w-full justify-between items-center h-[450px] py-20">
          <div>
            <p className="text-pizza-red font-bold xl:text-3xl lg:text-2xl  md:text-1xl sm:text-lg">
              hello, my name is
            </p>
            <p className="text-pizza-green font-extrabold xl:text-8xl lg:text-6xl md:text-5xl sm:text-2xl tracking-tighter	">
              Filippo Scotto
            </p>
            <p className="text-pizza-light-green text-2xl font-semibold max-w-lg mt-2">
              I make stuff with modern web technologies and machine learning.
            </p>
            <p className="text-pizza-lightest-green font-mono font-semibold mt-3">
              &gt; computer engineer from 🇮🇹
            </p>
            <button className="bg-pizza-bright-green px-5 py-2 text-lg rounded-xl mt-6 flex items-center gap-2">
              <FaEye />
              <span className="font-bold">see my projects</span>
            </button>
          </div>

          <Image
            alt="an illustration of me"
            src="/me-xl.png"
            width="400px"
            height="400px"
          />
        </div>
      </Section>
    </div>
  );
};
