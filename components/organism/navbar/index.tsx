/* eslint-disable consistent-return */
/* eslint-disable no-redeclare */
/* eslint-disable no-const-assign */

import classNames from "classnames";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Button from "../../molecules/Button";
import ButtonHamburger from "../../molecules/ButtonHamburger";
import Brand from "./Brand";
import ItemNav from "./ItemNav";

interface NavbarProps {
  activeMenu?: string;
}
export default function Navbar(props: Partial<NavbarProps>) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { activeMenu } = props;

  const [hiddens, setHidden] = useState(true);

  const hidden = hiddens;

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button classname="bg-transparent text-yellow-500 flex" onClick={() => setTheme("light")}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          {" "}
        </Button>
      );
    }
    return (
      <Button classname="bg-transparent text-yellow-500 flex" onClick={() => setTheme("dark")}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </Button>
    );
  };

  const classHidden = classNames({
    "absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static dark:bg-zinc-900 lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none  dark:shadow-slate-500 lg:dark:bg-transparent dark:text-white": true,
    hidden,
  });

  return (

    <header className="absolute top-0 left-0 w-full flex items-center z-10 bg-transparent">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <Brand />
          <div className="flex items-center px-4">
            {hiddens ? (
              <ButtonHamburger
                onClick={() => setHidden(false)}
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out" />
                <span className="hamburger-line" />
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out" />
              </ButtonHamburger>
            ) : (
              <ButtonHamburger
                hamburgerActive
                onClick={() => setHidden(true)}
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out" />
                <span className="hamburger-line" />
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out" />
              </ButtonHamburger>

            )}
            <nav id="nav-menu" className={classHidden}>
              <ul className="block lg:flex">
                <ItemNav
                  title="Beranda"
                  href="/"
                  active={activeMenu === "Beranda"}
                />
                <ItemNav
                  title="Tentang"
                  href="/tentang"
                  active={activeMenu === "Tentang"}
                />
                <ItemNav
                  title="Kabar Komda"
                  href="/news"
                  active={activeMenu === "KabarKomda"}
                />
                <li className="flex items-center pl-8 mt-3 lg:mt-0" />
                {renderThemeChanger()}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
