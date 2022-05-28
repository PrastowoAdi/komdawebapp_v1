/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import TitleLandingPage from "../../../molecules/TitleLandingPage";
import Item from "./Item";

export default function News() {
  return (
    <section className="pt-14 md:pt-28 pb-20 dark:bg-zinc-900" id="news">
      <div className="container">
        <TitleLandingPage
          title="KABAR KOMDA"
          shortDesc="Berita Terkini Komda"
          desc="Berita terhangat maupun terpanas yang komda sajikan untuk para kaula
          muda GKJ Slogohimo, jadi pantengin terus gess!!"
          href="/news"
          descLink="Lihat berita terhangat lainya..."
        />
        <div className="mx-auto sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">

          <Item
            href="/news/detail"
            image="Badminton-pana"
            title="Badminton Komda Sehat"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ducimus velit similique fuga magni corporis et illum vel consectetur eum."
          />

          <Item
            href="/news/detail"
            image="persekutuan"
            title="Persekutuan Doa"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, magnam fugiat numquam dicta ad aliquid culpa ex quidem minima commodi!"
          />

          <Item
            href="/news/detail"
            image="komda-bbq"
            title="Komda Barbequee"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, magnam fugiat numquam dicta ad aliquid culpa ex quidem minima commodi!"
          />

        </div>
      </div>
    </section>
  );
}
