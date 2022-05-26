import ButtonToTop from "../components/molecules/buttonToTop";
import Footer from "../components/organism/footer";
import Navbar from "../components/organism/navbar";
import CeritaKami from "../components/organism/tentang/ceritaKami";
import GaleriTentang from "../components/organism/tentang/galeriTentang";

import HeroTentang from "../components/organism/tentang/hero";

export default function Tentang() {
  return (
    <>
      <Navbar activeMenu="Tentang" />
      <HeroTentang />
      <CeritaKami />
      <GaleriTentang />
      <Footer />
      <ButtonToTop />
    </>
  );
}
