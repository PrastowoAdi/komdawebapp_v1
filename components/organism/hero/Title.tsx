/* eslint-disable react/no-unescaped-entities */
export default function Title() {
  return (
    <div className="w-full px-4 self-center lg:w-1/2">
      <h1 className="text-4xl lg:text-5xl font-semibold text-zinc-500 dark:text-zinc-100">
        <span className="block font-semibold mb-2 text-zinc-400 dark:text-zinc-300 text-xl lg:text-2xl">
          <i className="fas fa-hand-holding-heart mr-2 text-yellow-400" />
          Halo, Selamat Datang...
        </span>
        Komisi Pemuda Remaja
        {" "}
        <span className="block font-semibold mt-2 text-rose-600 text-4xl lg:text-5xl">GKJ Slogohimo</span>
        <span className="block font-normal text-zinc-400 text-base lg:text-xl mt-3 dark:text-zinc-300">
          <blockquote className="italic font-light">
            "Barangsiapa melayani Aku, ia harus mengikut Aku dan di mana Aku berada,
            di situ pun pelayan-Ku akan berada. Barangsiapa melayani Aku, ia akan dihormati Bapa."
          </blockquote>
        </span>
        <span className="block font-bold text-slate text-base lg:text-xl mt-2">
          Yohanes 12:26
        </span>
      </h1>
    </div>
  );
}
