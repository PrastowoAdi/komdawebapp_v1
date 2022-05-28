import ItemAgendaTerdekat from "./ItemAgendaTerdekat";

export default function AgendaTerdekat() {
  return (
    <section id="agendaTerdekat" className="pt-32 pb-20 dark:bg-zinc-900">
      <div className="container">
        <div className="flex flex-wrap">
          <ItemAgendaTerdekat
            shortDesc="Agenda Terdekat Komda"
            title="Persekutuan Doa"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            laudantium modi voluptates facilis
            dignissimos earum autem sit
            quia tempore doloremque."
            tempat="GKJ Slogohimo"
            tanggal="Rabu, 24 Mei 2022"
            jam="16:00 WIB"
            image="PWO"
          />
        </div>
      </div>
    </section>
  );
}
