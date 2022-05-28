interface ItemAgendaTerdekatProps {
    shortDesc: string;
    title: string;
    desc: string;
    tempat: string;
    tanggal: string;
    jam: string;
    image: "PWO"
}

export default function ItemAgendaTerdekat(props: ItemAgendaTerdekatProps) {
  const {
    shortDesc, title, desc, tempat, tanggal, jam, image,
  } = props;
  return (
    <div className="flex flex-wrap">
      <div className="w-full px-4 self-center lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-white">
          <span className="block text-zinc-500 dark:text-white tracking-wide text-base">
            <i className="fas fa-bell text-yellow-600 text-xl" />
            {" "}
            {shortDesc}
          </span>
          {title}
        </h1>
        <p className="text-base lg:text-lg text-zinc-700 dark:text-zinc-200 mt-3 tracking-normal">
          {desc}
        </p>
        <ul>
          <li className="mt-2">
            <i className="fas fa-map-marker-alt text-yellow-400" />
            {" "}
            {tempat}
          </li>
          <li className="mt-2">
            <i className="fas fa-calendar-alt text-yellow-400" />
            {" "}
            {tanggal}
          </li>
          <li className="mt-2">
            <i className="fas fa-clock text-yellow-400" />
            {" "}
            {jam}
          </li>
        </ul>
      </div>
      <div className="px-4 mx-auto lg:w-1/2">
        <div className="mt-10">
          <img src={`/img/${image}.png`} alt="hero-bg" className="max-w-[300px] lg:max-w-[320px] mx-auto w-80 lg:w-80 rounded-md shadow-md shadow-zinc-400 " />
        </div>
      </div>
    </div>
  );
}
