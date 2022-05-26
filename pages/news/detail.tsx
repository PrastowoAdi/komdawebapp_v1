/* eslint-disable react/button-has-type */
import { useRouter } from "next/router";
import ButtonToTop from "../../components/molecules/buttonToTop";
import Footer from "../../components/organism/footer";
import Navbar from "../../components/organism/navbar";

export default function Detail() {
  const router = useRouter();

  const backNews = () => {
    router.push("/news");
  };
  return (
    <>
      <Navbar activeMenu="KabarKomda" />
      <section id="detailAgenda" className="pt-40 pb-36 dark:bg-zinc-900">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 py-6 self-center lg:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white">
                <span className="block text-white tracking-wide text-base">
                  <i className="fas fa-eye text-yellow-600 text-xl" />
                  {" "}
                  Detail Kabar Komda
                </span>
                Persekutuan Doa
              </h1>
              <p className="text-base lg:text-lg text-zinc-700 dark:text-zinc-200 mt-3 tracking-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
                laudantium modi voluptates facilis
                dignissimos earum autem sit
                quia tempore doloremque.
              </p>
              <ul>
                <li className="mt-2">
                  <i className="fas fa-map-marker-alt text-yellow-400" />
                  {" "}
                  GKJ Slogohimo
                </li>
                <li className="mt-2">
                  <i className="fas fa-calendar-alt text-yellow-400" />
                  {" "}
                  Rabu, 24 Mei 2022
                </li>
                <li className="mt-2">
                  <i className="fas fa-clock text-yellow-400" />
                  {" "}
                  16:00 WIB
                </li>
              </ul>
              <div className="mt-4">
                <button className="text-base font-semibold text-white bg-primary py-3 px-4 rounded-md hover:opacity-80 hover:shadow-lg transition duration-500" onClick={() => backNews()}>
                  <i className="fas fa-hand-point-left text-white mr-2" />
                  Kembali
                </button>
              </div>

            </div>
            <div className="px-4 mx-auto lg:w-1/2">
              <img src="/img/pwo.png" alt="hero-bg" className="max-w-[380px] lg:max-w-[420px] mx-auto w-96 lg:w-[410px] rounded-md shadow-md shadow-zinc-300" />
            </div>
          </div>
        </div>
      </section>
      <ButtonToTop />
      <Footer />
    </>
  );
}
