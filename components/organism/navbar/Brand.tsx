import Link from "next/link";
import React from "react";

export default function Brand() {
  return (
    <div className="px-4">
      <Link href="/">
        <a className="font-bold text-lg text-zinc-400 dark:text-primary block py-6">
          KOMDA
          <span className="text-primary dark:text-zinc-300">GKJ</span>
        </a>
      </Link>
    </div>
  );
}
