export default function HeroTentang() {
  return (
    <section id="home" className="pt-36 pb-20 hero-bgtentang">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full h-64 px-4 self-center lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-semibold text-zinc-300 dark:text-zinc-100">
              <span className="block font-semibold mt-2 text-zinc-300 text-xl lg:text-2xl">
                <i className="fas fa-smile mr-2 text-yellow-400" />
                Tentang Kami
              </span>
              Muda Mudi
              {" "}
              <span className="block font-semibold text-rose-600 text-4xl lg:text-5xl">GKJ Slogohimo</span>
              <span className="block font-normal text-zinc-300 md:mt-2 text-lg lg:text-xl dark:text-zinc-300">
                <blockquote className="italic font-light">
                  Sedikit cerita tentang kami, bagaimana perjuangan kami dari
                  awal sampai menjadi kita yang sekarang ini
                </blockquote>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
