export default function HamburgerBtn() {
  return (
    <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
      <span className="hamburger-line origin-top-left transition duration-300 ease-in-out" />
      <span className="hamburger-line" />
      <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out" />
    </button>
  );
}
