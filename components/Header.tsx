import Typewriter from "typewriter-effect";
import { DarkModeToggle } from "./DarkModeToggle";

export const Header = () => {
  return (
    <div className="container mx-auto flex w-full min-w-full py-2 flex-col  ">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="dark:text-sky-50 text-gray-900 tracking-wide font-bold text-xl">
            Filippo Scotto
          </h1>
          <span className="dark:text-sky-400 text-gray-500  font-mono text-sm flex gap-1">
            a software engineer from italy 🇮🇹
          </span>
        </div>
        <DarkModeToggle />
      </div>
      <div className=" flex flex-col p-4 mt-4 bg-zinc-800 rounded-lg border-1 dark:border-sky-600 border-skyß-600 shadow-lg dark:shadow-sky-800/50 shadow-sky-800/20">
        <span className="dark:text-sky-400 text-sky-300 min-h-[4.25em]  font-mono text-sm ">
          <Typewriter
            options={{
              delay: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(" > hello")
                .typeString(
                  "<br/> > i do stuff with modern web technologies and machine learning"
                )
                .pauseFor(500)
                .typeString("<br/> > welcome to my website!")
                .typeString("<br/> > :)")
                .start();
            }}
          />
        </span>
      </div>
    </div>
  );
};
