/* eslint-disable jsx-a11y/img-redundant-alt */

import cx from "classnames";
import Link from "next/link";

interface ItemProps {
    href: string;
    image: "Badminton-pana" | "persekutuan" | "komda-bbq";
    title: string;
    desc: string;
}

export default function Item(props: ItemProps) {
  const {
    href = "/", image, title, desc,
  } = props;

  const classTitle = cx({
    "rounded-md shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-[350px] dark:bg-zinc-800": true,
  });

  return (
    <div className={classTitle}>
      <Link href={href}>
        <a className="grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
          <img src={`/img/${image}.svg`} alt="Image Caption" className="w-full" />
        </a>

      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-zinc-700 dark:text-white">{title}</div>
        <p className="text-base text-zinc-600 dark:text-zinc-200">
          {desc}
        </p>
      </div>
    </div>
  );
}
