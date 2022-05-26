import Link from "next/link";

interface TitleLandingPageProps {
    title: string;
    shortDesc: string;
    desc: string;
    href?: string;
    descLink?: string;
}
export default function TitleLandingPage(props: Partial<TitleLandingPageProps>) {
  const {
    title, shortDesc, desc, href = "/", descLink,
  } = props;
  return (
    <div className="w-full px-4">
      <div className="max-w-[38rem] mx-auto text-center mb-16">
        <h4 className="font-semibold text-lg text-yellow-400 mb-2">
          {title}
        </h4>
        <h2 className="font-bold text-dark text-4xl mb-4 sm:text-4xl md:text-5xl dark:text-white">
          {shortDesc}
        </h2>
        <p className="font-medium text-md text-zinc-500 dark:text-zinc-400 md:text-lg">
          {desc}
          <span className="block">
            <Link href={href}>
              <a className="text-blue-600 hover:text-blue-500 cursor-pointer">
                {descLink}
              </a>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
