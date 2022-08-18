import Typewriter from "typewriter-effect";

export const Header = () => {
  return (
    <div className="container mx-auto flex w-full min-w-full py-2 flex-col  ">
      <h1 className="text-sky-50 tracking-wide font-bold text-xl">
        Filippo Scotto
      </h1>
      <span className="text-sky-400  font-mono text-sm flex gap-1">
        a software engineer from italy 🇮🇹
      </span>
      <div className=" flex flex-col p-4 mt-4 bg-zinc-800 rounded-lg border-1 border-sky-600 shadow-lg shadow-sky-800/50">
        <span className="text-sky-400 min-h-[4.25em]  font-mono text-sm ">
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
