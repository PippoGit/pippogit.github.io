import { FaChevronRight } from "react-icons/fa";

export interface Item {
  title: string;
  subtitle?: string;
  url?: string;
}

interface ListProps {
  items: Item[];
}

const Item = ({ item }: { item: Item }) => {
  return (
    // <a href={item.url}>
    <button
      formAction={item.url}
      className="flex p-2 m-0 w-full text-left focus:ring-2 active:ring-2 target:ring-2 ring-sky-200 rounded-lg  hover:bg-pizza-box-white cursor-pointer justify-between items-center"
    >
      <div>
        <p className="font-bold text-lg">{item.title}</p>
        <p className="text-md font-bold dark:text-sky-100 text-pizza-box-grey">
          {item.subtitle}
        </p>
      </div>
      <FaChevronRight />
    </button>
    // </a>
  );
};

export const List = ({ items }: ListProps) => {
  return (
    <form className="flex flex-col gap-2">
      {items.map((item, idx) => (
        <Item key={idx} item={item} />
      ))}
    </form>
  );
};
