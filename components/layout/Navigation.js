import Link from "next/link";
import { useRef, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const TWITTER_LINK =
  "https://twitter.com/intent/tweet?url=https://khazifire.com&text=DripUI%20is%20a%20collection%20of%20free%20Tailwind%20CSS%20components%20that%20can%20be%20used%20in%20your%20next%20project.%20%0A-%20By%20@khazifire%0A";
const GITHUB_LINK = "https://github.com/khazifire/DripUI";

const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { width } = useWindowDimensions();
  const ref = useRef(null);
  const styleMobile =
    "flex absolute flex-col justify-evenly items-end mt-2 right-0 bg-black text-white p-3 w-64 min-w-full";

  if (width < 700) {
    return (
      <div className="md:hidden relative">
        <div
          className="flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <div
            className={`w-4 h-1 bg-gray-700 rounded-sm transform transition-transform duration-500 ${
              isMobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`w-4 h-1 bg-gray-700 rounded-sm transition-opacity duration-500 ${
              isMobileOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-4 h-1 bg-gray-700 rounded-sm transform transition-transform duration-500 ${
              isMobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
        {isMobileOpen && (
          <div className={styleMobile} ref={ref}>
            <Link href="/docs/how-to-use">
              <a className="pr-3 text-sm border-b-2 border-drip-black/20 hover:text-drip-white/80">
                How to use
              </a>
            </Link>

            <a
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 pr-3 text-sm group hover:text-drip-white/80 border-b-2 border-drip-black/20"
              href={TWITTER_LINK}
            >
              <i className="text-lg ri-twitter-line group-hover:-rotate-12"></i>{" "}
              Share on twitter
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href={GITHUB_LINK}
              className="inline-flex items-center gap-2 pr-3 text-sm group hover:text-drip-white/80"
            >
              <i className="text-lg ri-github-line group-hover:-rotate-12"></i>
              Visit on Github
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-4 items-center">
      <Link href="/docs/how-to-use">
        <a className="pr-3 text-sm border-r-2 md:text-lg border-drip-black/20 hover:text-drip-black/80">
          How to use
        </a>
      </Link>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-sm md:text-lg group hover:text-drip-black/80 border-r-2 border-drip-black/20"
          href={TWITTER_LINK}
        >
          <i className="text-lg ri-twitter-line group-hover:-rotate-12 "></i>{" "}
          Share on twitter
        </a>
      </div>

      <a
        target="_blank"
        rel="noreferrer"
        href={GITHUB_LINK}
        className=" hover:text-drip-black/80 hover:-rotate-12"
      >
        <i className="text-lg ri-github-line"></i>
      </a>
    </div>
  );
};

export default Navigation;
