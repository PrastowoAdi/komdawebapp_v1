/* eslint-disable jsx-a11y/alt-text */
import ButtonToTop from "../../components/molecules/buttonToTop";
import Footer from "../../components/organism/footer";
import Navbar from "../../components/organism/navbar";

export default function PengurusKomda() {
  return (
    <>
      <Navbar activeMenu="StrukturKomda" />
      <section id="hero" className="pt-36 pb-20 hero-bgtentang">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full h-64 px-4 self-center lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-semibold text-zinc-300 dark:text-zinc-100">
                <span className="block font-semibold mt-2 text-zinc-300 text-xl lg:text-2xl">
                  <i className="fas fa-sitemap mr-2 text-yellow-400" />
                  Struktur Komda
                </span>
                Muda Mudi
                {" "}
                <span className="block font-semibold text-rose-600 text-4xl lg:text-5xl">GKJ Slogohimo</span>
                <span className="block font-normal text-zinc-300 md:mt-2 text-lg lg:text-xl dark:text-zinc-300">
                  <blockquote className="italic font-light">
                    Berikut daftar temen temen pemuda
                    GKJ Slogohimo yang dengan senang
                    hati mau dan bersedia masuk dalam kepengurusan Komisi Pemuda.
                  </blockquote>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section id="hero" className="pt-20 pb-20">
        <div className="container">
          <div className="flex">
            <div className="w-full lg:w-3/4 mx-auto bg-transparent shadow-sm shadow-zinc-400 border-t-4 border-t-zinc-500 dark:shadow-zinc-300 dark:border-t-zinc-300">
              <div className="px-5 py-5">
                <h1 className="text-3xl font-bold text-zinc-600 dark:text-zinc-300 text-center">
                  Struktur Kepengurusan
                  <span className="block text-xl font-semibold text-zinc-500 dark:text-zinc-200">
                    Komisi Pemuda & Remaja
                  </span>
                  <span className="block text-lg font-light text-zinc-500 dark:text-zinc-200">
                    Periode 2019-2022
                  </span>
                </h1>
              </div>
              <div className="px-12 py-10">
                <ul>
                  <li>
                    <h2 className="text-lg font-semibold text-zinc-600 dark:text-white">
                      Ketua Komda
                    </h2>
                    <p className="text-zinc-400 dark:text-zinc-300">Nathan Adiningrat</p>
                  </li>
                  <li className="mt-3">
                    <h2 className="text-lg font-semibold text-zinc-600 dark:text-white">
                      Sekretaris Komda
                    </h2>
                    <p className="text-zinc-400 dark:text-zinc-300">Nathan Adiningrat</p>
                  </li>
                  <li className="mt-3">
                    <h2 className="text-lg font-semibold text-zinc-600 dark:text-white">
                      Bendahara Komda
                    </h2>
                    <p className="text-zinc-400 dark:text-zinc-300">Nathan Adiningrat</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ButtonToTop />
      <Footer />
    </>
  );
}
