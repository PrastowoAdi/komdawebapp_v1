import Item from "./Item";

export default function Middle() {
  return (
    <div className="w-full px-4 mb-12 md:w-1/3">
      <h3 className="font-semibold text-xl text-white mb-5">
        Tautan
      </h3>
      <ul className="dark:text-zinc-400 text-zinc-600">
        <Item
          href="/"
          title="Beranda"
        />
        <Item
          href="/tentang"
          title="Tentang"
        />
        <Item
          href="/news/#arsipFoto"
          title="Arsip Foto"
        />
        <Item
          href="/news"
          title="Kabar Komda"
        />
        <Item
          href="/kepengurusan"
          title="Struktur Komda"
        />
      </ul>
    </div>
  );
}
