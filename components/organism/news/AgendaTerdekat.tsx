export default function AgendaTerdekat() {
  return (
    <section id="agendaTerdekat" className="pt-32 pb-20 dark:bg-zinc-900">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 self-center lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white">
              <span className="block text-white tracking-wide text-base">
                <i className="fas fa-bell text-yellow-600 text-xl" />
                {" "}
                Agenda Terdekat Komda
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
          </div>
          <div className="px-4 mx-auto lg:w-1/2">
            <div className="mt-10">
              <img src="/img/persekutuan.svg" alt="hero-bg" className="max-w-[300px] lg:max-w-[320px] mx-auto w-80 lg:w-80 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
