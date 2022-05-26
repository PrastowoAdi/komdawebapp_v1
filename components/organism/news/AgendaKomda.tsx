/* eslint-disable jsx-a11y/img-redundant-alt */
import Link from "next/link";

import TitleLandingPage from "../../molecules/TitleLandingPage";

export default function AgendaKomda() {
  return (
    <section id="agendaKomda" className="pt-32 pb-20 dark:bg-zinc-900">
      <TitleLandingPage
        title="AGENDA KOMDA"
        shortDesc="SEGERA HADIR"
        desc="Kumpulan agenda kegiatan komda yang akan hadir di bulan ini jadi pantengin dan jangan lupa datang ya."
      />

      <div className="container">
        <div className="mx-auto sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">

          <div className="rounded-md shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-[350px] dark:bg-zinc-800">
            <Link href="/news/detail">
              <a className="grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                <img src="/img/komda-bbq.svg" alt="Image Caption" className="w-full" />
              </a>
            </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-zinc-700 dark:text-white">Komda BBQ</div>
              <p className="text-base text-zinc-600 dark:text-zinc-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab expedita
                reprehenderit quos assumenda
                earum dicta repudiandae cupiditate iusto deleniti illum?
              </p>
            </div>
          </div>

          <div className="rounded-md shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-[350px] dark:bg-zinc-800">
            <Link href="/news/detail">
              <a className="grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                <img src="/img/komda-bbq.svg" alt="Image Caption" className="w-full" />
              </a>
            </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-zinc-700 dark:text-white">Komda BBQ</div>
              <p className="text-base text-zinc-600 dark:text-zinc-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab expedita
                reprehenderit quos assumenda
                earum dicta repudiandae cupiditate iusto deleniti illum?
              </p>
            </div>
          </div>
          <div className="rounded-md shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-[350px] dark:bg-zinc-800">
            <Link href="/news/detail">
              <a className="grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                <img src="/img/komda-bbq.svg" alt="Image Caption" className="w-full" />
              </a>
            </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-zinc-700 dark:text-white">Komda BBQ</div>
              <p className="text-base text-zinc-600 dark:text-zinc-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab expedita
                reprehenderit quos assumenda
                earum dicta repudiandae cupiditate iusto deleniti illum?
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
