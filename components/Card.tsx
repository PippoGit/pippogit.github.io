import { ReactElement, ReactNode } from "react";
import { IconBase } from "react-icons";

interface CardProps {
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div className="shadow-sm dark:text-sky-50 text-gray-800 p-2 dark:bg-sky-800 bg-white rounded-lg dark:border dark:border-sky-600 border-gray-100">
      {props.children}
    </div>
  );
};

interface CardHeaderProps {
  title: string;
  icon?: ReactElement<typeof IconBase>;
}

export const CardHeader = ({ title, icon }: CardHeaderProps) => {
  return (
    <div className="font-bold tracking-wider text-sm  dark:text-sky-50 text-gray-500 font-mono flex items-center gap-2 dark:bg-sky-700 bg-gray-100 p-1 rounded-lg">
      <div className="gap-0 font-bold">
        <span className="dark:text-pink-300 text-pink-700 px-2">
          {"~/filippo:"}
        </span>
        <span>{"$"}</span>
      </div>
      <span className="font-semibold">{title}</span>
      <div className="ml-auto mr-1">{icon}</div>
    </div>
  );
};

interface CardContentProps {
  children: ReactNode | ReactNode[];
}

export const CardContent = (props: CardContentProps) => {
  return <div className="pt-2">{props.children}</div>;
};
