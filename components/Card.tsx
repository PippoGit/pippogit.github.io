import { ReactElement, ReactNode } from "react";
import { IconBase } from "react-icons";

interface CardProps {
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div className="shadow-sm text-sky-50 p-2 bg-sky-800 rounded-lg border border-sky-600">
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
    <div className="font-bold tracking-wider text-sm  text-sky-500 font-mono flex items-center gap-2 bg-sky-700 p-1 rounded-lg">
      <div className="gap-0">
        <span className="text-pink-300 px-2">{"~/filippo:"}</span>
        <span>{"$"}</span>
      </div>
      <span>{title}</span>
      <div className="text-sky-400 ml-auto mr-1">{icon}</div>
    </div>
  );
};

interface CardContentProps {
  children: ReactNode | ReactNode[];
}

export const CardContent = (props: CardContentProps) => {
  return <div className="pt-2">{props.children}</div>;
};
