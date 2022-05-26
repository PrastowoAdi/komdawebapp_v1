import Link from "next/link";

interface ItemRightProps {
    title: string;
    penulis: string;
    tanggalDibuat: string;
    shortDesc: string;
    href: string;
    descLink: string;
}

export default function ItemRight(props: ItemRightProps) {
  const {
    title, penulis, tanggalDibuat, shortDesc, href, descLink,
  } = props;
  return (
    <div className="w-full px-4 self-center lg:w-1/2">
      <h2 className="text-3xl font-normal text-zinc-700 dark:text-zinc-100">
        {title}
      </h2>
      <h4 className="text-base text-zinc-600 font-thin dark:text-zinc-200">
        {penulis}
        <span className="block">
          {tanggalDibuat}
        </span>
      </h4>
      <hr className="py-1 mt-1" />
      <p className="text-lg text-zinc-600 mt-3 dark:text-zinc-200">
        {shortDesc}
        <Link href={href}>
          <a className="text-blue-600 hover:text-blue-500 cursor-pointer dark:text-blue-500 dark:hover:text-blue-400">
            {descLink}
          </a>
        </Link>
      </p>
    </div>
  );
}
