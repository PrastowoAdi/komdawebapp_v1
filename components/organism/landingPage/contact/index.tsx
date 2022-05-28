/* eslint-disable react/button-has-type */
import React from "react";
import TitleLandingPage from "../../../molecules/TitleLandingPage";

export default function Contact() {
  return (
    <section className="pt-10 pb-32 dark:bg-zinc-900" id="contact">
      <div className="container">
        <TitleLandingPage
          title="Suara Komda"
          shortDesc="KRITIK & SARAN"
          desc="Masukan dan saran maupun aprisiasi temen temen pemuda sangat berharga bagi kami, jadi monggo waktu dan tempat dipersilahkan"
          descLink="Lihat suara komda yang lain..."
          href="/#feedback"
        />

        <div className="flex flex-wrap">
          <div className="px-4 mx-auto lg:w-1/2">
            <div className="mb-10 lg:mt-5 lg:mb-10">
              <img src="/img/contactus.svg" alt="contact-bg" className="max-w-[320px] mx-auto w-80 lg:w-100" />
            </div>
          </div>
          <div className="w-full px-4 self-center lg:w-1/2">
            <form action="">
              <div className="w-full lg:w-3/4 lg:mx-auto">
                <div className="w-full px-1 mb-5">
                  <label htmlFor="name" className="text-base font-bold text-primary">Nama</label>
                  <input type="text" id="name" className="w-full bg-zinc-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                </div>
                <div className="w-full px-1 mb-5">
                  <label htmlFor="email" className="text-base font-bold text-primary">Pesan</label>
                  <textarea id="email" className="w-full bg-zinc-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32" />
                </div>
                <div className="w-full px-1">
                  <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                    Kirim
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
