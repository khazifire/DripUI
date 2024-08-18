import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b-2 bg-drip-white border-drip-gray-light z-50 relative ">
      <nav className="flex flex-row items-center justify-between py-6 px-4 ">
        <div className="flex flex-row items-center gap-4">
          <Link href="/">
            <a className="text-2xl font-bold md:text-3xl font-Cursive">
              DripUI
            </a>
          </Link>

          <Link href="/docs">
            <a className="pl-3 text-sm border-l-2 md:text-lg border-drip-black/20 hover:text-drip-black/80">
              Components
            </a>
          </Link>

          <a
            disabled
            className="pl-2 text-sm pointer-events-none md:text-lg text-drip-black/20"
          >
            Web Designs
          </a>
        </div>

        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
