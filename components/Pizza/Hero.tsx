import React from "react";
import { Section } from "./Section";
import Image from "next/image";
import { FiDownload, FiEye } from "react-icons/fi";
import { Header } from "./Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollToView } from "./ScrollToView";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="bg-pizza-transparent-green "
    >
      <Section>
        <Header />

        <div
          id="about"
          className="flex h-lg w-full md:justify-between justify-around items-center h-[450px] py-20 flex-col-reverse md:flex-row "
        >
          <div>
            <p className="text-pizza-red font-bold xl:text-3xl lg:text-2xl  text-xl ">
              hello, my name is
            </p>
            <p className="text-pizza-green font-extrabold xl:text-8xl lg:text-6xl text-5xl tracking-tighter	">
              Filippo Scotto
            </p>
            <p className="text-pizza-light-green md:text-2xl font-semibold max-w-lg mt-2 text-lg">
              I make stuff with modern web technologies and machine learning.
            </p>
            <p className="text-pizza-lightest-green font-mono font-semibold mt-3 md:text-lg text-md">
              &gt; software engineer from 🇮🇹
            </p>
            <div className="flex gap-5 mt-10 md:mt-6 justify-center md:justify-start">
              <Link href="#portfolio">
                <button className="bg-pizza-bright-green px-5 py-2 text-lg rounded-xl flex items-center gap-2 hover:bg-pizza-green active:ring-3 focus:ring-2 ring-pizza-light-green text-white">
                  <FiEye />
                  <span className="font-bold">see portfolio</span>
                </button>
              </Link>
              <Link href="/resume.pdf">
                <button className="border-2 border-pizza-lightest-green  hover:border-pizza-bright-green  px-5 py-2 text-lg rounded-xl flex items-center gap-2  active:ring-3 ring-opacity-50 focus:ring-2  ring-pizza-light-green text-pizza-green hover:text-pizza-green">
                  <FiDownload />
                  <span className="font-bold">get resume</span>
                </button>
              </Link>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="mt-20 mb-14 md:my-0  md:w-[350px] md:h-[350px] w-[200px] h-[200px] relative flex-shrink-0"
          >
            <Image alt="an illustration of me" src="/me-xl.png" layout="fill" />
            <motion.div
              animate={{ rotate: [-0, -30, 30, 0], scale: [0, 1, 1, 1] }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="md:text-8xl text-6xl absolute bottom-0"
            >
              👋🏻
            </motion.div>
          </motion.div>
        </div>
        <ScrollToView />
      </Section>
    </motion.div>
  );
};

// <a href="https://www.freepik.com/free-vector/pizza-delivery-handing-pizza-boxes_1310910.htm#query=pizza%20box%20stack&position=0&from_view=search">Image by iconicbestiary</a> on Freepik