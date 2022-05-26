import ButtonToTop from "../components/molecules/buttonToTop";
import Feedback from "../components/organism/feedback";
import Footer from "../components/organism/footer";
import Hero from "../components/organism/hero";
import Contact from "../components/organism/landingPage/contact";
import News from "../components/organism/landingPage/news";
import Renungan from "../components/organism/landingPage/renungan";
import Navbar from "../components/organism/navbar";

export default function Home() {
  return (
    <>
      <Navbar activeMenu="Beranda" />
      <Hero />
      <News />
      <Feedback />
      <Renungan />
      <Contact />
      <Footer />
      <ButtonToTop />
    </>
  );
}
