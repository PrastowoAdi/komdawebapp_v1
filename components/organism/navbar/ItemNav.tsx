import cx from "classnames";
import Link from "next/link";

interface ItemNavProps {
    title: string;
    href: string;
    active?: boolean;
}
export default function ItemNav(props: Partial<ItemNavProps>) {
  const { href = "/", title, active } = props;
  const classTitle = cx({
    "text-zinc-400 text-base font-bold py-2 mx-6 group-hover:text-yellow-200 flex": true,
    active,
  });
  return (
    <li className="group">
      <Link href={href}>
        <a className={classTitle}>
          {title}
        </a>
      </Link>
    </li>
  );
}
