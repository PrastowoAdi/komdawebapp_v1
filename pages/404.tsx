import ButtonToTop from "../components/molecules/buttonToTop";
import Footer from "../components/organism/footer";
import Navbar from "../components/organism/navbar";

export default function Error() {
  return (
    <>
      <Navbar />
      <section className="pt-36 pb-20 dark:bg-zinc-900">
        <div className="container">
          <div className="w-3/4 mx-auto">
            <img src="/img/err-1.svg" alt="err-1" className="w-1/2 h-1/2 mx-auto animate-goyang" />
          </div>
        </div>
      </section>
      <ButtonToTop />
      <Footer />
    </>
  );
}
