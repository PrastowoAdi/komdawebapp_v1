/* eslint-disable react/button-has-type */
import TitleLandingPage from "../../molecules/TitleLandingPage";
import KomdaNyantuy from "../news/arsip/komdaNyantuy";
import KomdaSehat from "../news/arsip/komdaSehat";
import Persekutuan from "../news/arsip/persekutuan";

export default function ArsipFoto() {
  return (
    <>
      <section id="arsipFoto" className="pt-14 pb-5 dark:bg-zinc-900">
        <TitleLandingPage
          title="Arsip Foto"
          shortDesc="Kenangan Komda"
          desc="Momen itu nyata dan untuk dikenang, jadi monggo ambil momen itu dan jangan lupa di simpan untuk hari tua nanti."
        />
      </section>

      <Persekutuan
        href="https://drive.google.com/drive/folders/1NykZPufTg95drBBSabNDU1VJwAdRvDPj?usp=sharing"
      />

      <div className="container py-10 lg:py-0 dark:bg-zinc-900">
        <div className="relative flex py-5 items-center w-72 mx-auto md:w-96 lg:w-1/2 lg:mx-0">
          <div className="flex-grow border-t border-2 border-zinc-500 dark:border-zinc-300" />
        </div>
      </div>

      <KomdaSehat
        href="https://drive.google.com/drive/folders/1jq7GExxFkZdzi78cu7EXqPIldVHvmAlz?usp=sharing"
      />

      <div className="container dark:bg-zinc-900">
        <div className="relative flex items-center w-72 mx-auto md:w-96 lg:w-1/2 lg:mx-0 lg:ml-auto">
          <div className="flex-grow border-t border-2 border-zinc-500 dark:border-zinc-300" />
        </div>
      </div>

      <KomdaNyantuy
        href="https://drive.google.com/drive/folders/1trtGQWQrKdInYok_Ri08xLZO00sQfWDl?usp=sharing"
      />
    </>

  );
}
