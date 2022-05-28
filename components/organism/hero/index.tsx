/* eslint-disable import/no-named-as-default */
import React from "react";
import ImageHero from "./ImageHero";
import Title from "./Title";

export default function Hero() {
  return (
    <section id="home" className="pt-32 md:pt-44 pb-20 dark:bg-zinc-900">
      <div className="container">
        <div className="flex flex-wrap">
          <Title />
          <ImageHero />
        </div>
      </div>
    </section>
  );
}
