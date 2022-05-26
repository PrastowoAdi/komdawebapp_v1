import React from "react";
import Bottom from "./content/Bottom";
import Left from "./content/Left";
import Middle from "./content/Middle";
import Right from "./content/Right";

export default function Footer() {
  return (
    <footer className="bg-gray-300 dark:bg-zinc-800 pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <Left />
          <Middle />
          <Right />
        </div>

        <div className="w-full pt-10 border-t border-slate-700">
          <Bottom />
        </div>
      </div>
    </footer>
  );
}
