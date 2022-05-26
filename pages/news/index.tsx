/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */

import ButtonToTop from "../../components/molecules/buttonToTop";
import Footer from "../../components/organism/footer";

import Navbar from "../../components/organism/navbar";
import Hero from "../../components/organism/news/Hero";
import AgendaTerdekat from "../../components/organism/news/AgendaTerdekat";
import Information from "../../components/organism/news/Information";
import AgendaKomda from "../../components/organism/news/AgendaKomda";

export default function NewsPage() {
  return (
    <>
      <Navbar activeMenu="KabarKomda" />
      <Hero />
      <AgendaTerdekat />
      <Information />
      <AgendaKomda />
      <ButtonToTop />
      <Footer />
    </>
  );
}
