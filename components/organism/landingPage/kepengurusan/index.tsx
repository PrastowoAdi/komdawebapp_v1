import TitleLandingPage from "../../../molecules/TitleLandingPage";
import Item from "./Item";

export default function Kepengurusan() {
  return (
    <section className="pt-20 pb-32 dark:bg-zinc-900" id="renungan">
      <TitleLandingPage
        title="Kepengurusan Komda"
        shortDesc="Struktur Komda"
        desc="Berikut adalah para pemuda hebat yang dengan senang hati mau dan siap menjadi pelayan bagi temen temen komda"
        descLink="Lihat struktur selengkapnya..."
        href="/kepengurusan"
      />

      <div className="flex flex-wrap">
        <Item
          nama="Nathan Adiningrat"
          jabatan="Ketua Komda"
          image="avatar-man"
          linkIG="https://www.instagram.com/komdagkjslogohimo/?hl=id"
          namaIG="@nathannadi"
        />
        <Item
          nama="Endah Risma"
          jabatan="Bendahara Komda"
          image="avatar-women"
          linkIG="https://www.instagram.com/komdagkjslogohimo/?hl=id"
          namaIG="@endahrism"
        />
        <Item
          nama="Wiku Mahendra"
          jabatan="Sekretaris Komda"
          image="avatar-man"
          linkIG="https://www.instagram.com/komdagkjslogohimo/?hl=id"
          namaIG="@wikumahen"
        />
      </div>
    </section>
  );
}
