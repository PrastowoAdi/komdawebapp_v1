export default function CeritaKami() {
  return (
    <section id="ceritaKami" className="pt-32 pb-20 dark:bg-zinc-900">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 self-center lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-zinc-300">
              Cerita
              {" "}
              <span className="text-yellow-400">Kami</span>
            </h1>
            <p className="text-base lg:text-lg text-zinc-700 dark:text-zinc-200 mt-7 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              laudantium modi voluptates facilis
              dignissimos earum autem sit
              quia tempore doloremque.
              Error quisquam cum quibusdam perferendis, tenetur dolor repellat ipsum aut,
              suscipit, hic provident
              nostrum labore est nobis delectus harum? Inventore aliquid,
              cupiditate aliquam est non enim veniam vel vero consequuntur.
              {" "}
              <span className="block mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla exercitationem, provident cum consectetur eius eligendi quo ex minus libero maiores omnis voluptatibus aliquam laborum magni explicabo! Adipisci, similique magni.</span>
            </p>
          </div>
          <div className="px-4 mx-auto lg:w-1/2">
            <div className="mt-10">
              <img src="/img/img-tentang.svg" alt="hero-bg" className="max-w-[250px] lg:max-w-[280px] mx-auto lg:w-72" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
