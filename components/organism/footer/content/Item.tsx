import Link from "next/link";

interface ItemProps {
href: string;
title: string;

}
export default function Item(props: ItemProps) {
  const { href = "/", title } = props;
  return (
    <li>
      <Link href={href}>
        <a className="inline-block text-base hover:text-primary mb-3">
          {title}
        </a>
      </Link>
    </li>
  );
}
