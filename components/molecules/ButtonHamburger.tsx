import classNames from "classnames";
import React from "react";

interface ButtonHamburgerProps {
    children?: any;
    onClick?: any;
    hamburgerActive?: boolean;
}
export default function ButtonHamburger(props: Partial<ButtonHamburgerProps>) {
  const { children, onClick, hamburgerActive } = props;
  const classTitle = classNames({
    "block absolute right-4 lg:hidden": true,
    hamburgerActive,
  });
  return (
    <button id="hamburger" name="hamburger" type="button" className={classTitle} onClick={onClick}>
      {children}
    </button>
  );
}
