/* eslint-disable max-len */

import TitleLandingPage from "../../../molecules/TitleLandingPage";
import ItemLeft from "./ItemLeft";
import ItemRight from "./ItemRight";

export default function Renungan() {
  return (
    <section className="pt-32 pb-32 dark:bg-zinc-900" id="renungan">
      <div className="container">
        <TitleLandingPage
          title="RENUNGAN"
          shortDesc="RENUNGAN KOMDA"
          desc="Firman Tuhan adalah makanan rohani hidup kita, dengan membaca firman Tuhan maka kita dapat dengan mudah memahami kehendak Tuhan"
          href="/feature-baru"
          descLink="Lihat renungan lainya..."
        />
        <div className="flex flex-wrap">
          <ItemLeft />
          <ItemRight
            title="Bebas dari Masa Lalu"
            penulis="Penulis: Prastowo Adi Nugroho"
            tanggalDibuat="Rabu, 24 Mei 2020"
            shortDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,aperiam. Libero qui, temporibus aperiam asperiores quam ea
            dolores magni numquam impedit voluptatibus nemo esse
            tempore unde veniam eligendi? Enim, dignissimos?"
            href="/renungan/detail"
            descLink="Baca renungan ini..."
          />
        </div>
      </div>
    </section>

  );
}
