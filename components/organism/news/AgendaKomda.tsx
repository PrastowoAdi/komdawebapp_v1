import TitleLandingPage from "../../molecules/TitleLandingPage";
import ItemAgenda from "./ItemAgenda";

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

          <ItemAgenda
            title="Komda BBQ"
            href="/news/detail"
            image="komda-bbq"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab expedita
            reprehenderit quos assumenda
            earum dicta repudiandae cupiditate iusto deleniti illum?"
          />

          <ItemAgenda
            title="Pesekutuan Doa"
            href="/news/detail"
            image="persekutuan"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab expedita
            reprehenderit quos assumenda
            earum dicta repudiandae cupiditate iusto deleniti illum?"
          />

          <ItemAgenda
            title="Komda Sehat"
            href="/news/detail"
            image="Badminton-pana"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab expedita
            reprehenderit quos assumenda
            earum dicta repudiandae cupiditate iusto deleniti illum?"
          />

        </div>
      </div>
    </section>
  );
}
