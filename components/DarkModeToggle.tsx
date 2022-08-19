import { FaMapPin, FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "use-dark-mode";

export const DarkModeToggle = () => {
  const darkMode = useDarkMode(false, { classNameDark: "dark" });

  return (
    <button
      type="button"
      className="rounded-full p-2 dark:bg-transparent hover:dark:bg-sky-800 dark:text-yellow-100 text-zinc-800 bg-gray-100 hover:bg-gray-200 active:ring-2 ring-sky-200"
      onClick={darkMode.toggle}
    >
      {darkMode.value ? <FaSun /> : <FaMoon />}
    </button>
  );
};
