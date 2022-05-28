/* eslint-disable react/button-has-type */

interface KomdaNyantuyProps {
    href: string;
}
export default function KomdaNyantuy(props:KomdaNyantuyProps) {
  const { href = "/" } = props;
  return (
    <section id="arsipKomdaNyantuy" className="pb-20 dark:bg-zinc-900">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="px-4 mx-auto lg:w-1/2">
            <div className="mt-10">
              <img src="/img/arsipfoto-3.svg" alt="hero-bg" className="max-w-[300px] lg:max-w-[320px] mx-auto w-80 lg:w-80 " />
            </div>
          </div>
          <div className="w-full px-4 self-center lg:w-1/2 mt-12">
            <h1 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white">
              <span className="block text-zinc-500 dark:text-white tracking-wide text-base">
                <i className="fas fa-file-archive text-yellow-400 text-xl" />
                {" "}
                Arsip Foto
              </span>
              Komda Nyantuy
            </h1>
            <p className="text-base lg:text-lg text-zinc-700 dark:text-zinc-200 mt-3 tracking-normal">
              Temen temen komda dapat klik tombol dibawah untuk melihat
              beberapa arsip foto semua agenda
              {" "}
              <span className="text-yellow-400 italic">
                Komda Nyantuy
              </span>
              {" "}
              yang terbaru maupun yang sudah berlalu.
            </p>

            <div className="mt-4">
              <button className="text-base font-semibold text-white bg-primary py-2 px-3 rounded-md hover:opacity-80 hover:shadow-lg transition duration-500 mr-2">
                <i className="fab fa-google-drive text-white mr-2" />
                <a href={href} target="_blank" rel="noreferrer">Lihat foto</a>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
