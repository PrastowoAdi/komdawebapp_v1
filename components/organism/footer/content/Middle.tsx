export default function Middle() {
  return (
    <div className="w-full px-4 mb-12 md:w-1/3">
      <h3 className="font-semibold text-xl text-white mb-5">
        Tautan
      </h3>
      <ul className="dark:text-zinc-400 text-zinc-600">
        <li>
          <a href="#home" className="inline-block text-base hover:text-primary mb-3">Beranda</a>
        </li>
        <li>
          <a href="#about" className="inline-block text-base hover:text-primary mb-3">Tentang</a>
        </li>
        <li>
          <a href="#arsip-foto" className="inline-block text-base hover:text-primary mb-3">Arsip Foto</a>
        </li>
        <li>
          <a href="#kabar-komda" className="inline-block text-base hover:text-primary mb-3">Kabar Komda</a>
        </li>
        <li>
          <a href="#struktur" className="inline-block text-base hover:text-primary mb-3">Struktur Komda</a>
        </li>
        <li>
          <a href="#contact" className="inline-block text-base hover:text-primary mb-3">Contact</a>
        </li>
      </ul>
    </div>
  );
}
