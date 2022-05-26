export default function ButtonToTop() {
  return (
    <a href="#home" className="justify-center item-center h-14 w-14 bg-yellow-400 rounded-full fixed z-[9999] bottom-4 right-4 p-4 hover:animate-pulse hidden" id="to-top">
      <span className="block h-5 w-5 border-t-2 border-l-2 rotate-45 mt-1" />
    </a>
  );
}
