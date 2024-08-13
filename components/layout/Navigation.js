import Link from "next/link";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const TWITTER_LINK =
  "https://twitter.com/intent/tweet?url=https://khazifire.com&text=DripUI%20is%20a%20collection%20of%20free%20Tailwind%20CSS%20components%20that%20can%20be%20used%20in%20your%20next%20project.%20%0A-%20By%20@khazifire%0A";
const GITHUB_LINK = "https://github.com/khazifire/DripUI";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOnClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="md:hidden block">
        {isOpen ? (
          <button onClick={handleOnClick}>
            <IoClose size={"20px"} />
          </button>
        ) : (
          <button onClick={handleOnClick}>
            {" "}
            <FaBars />
          </button>
        )}
      </div>

      <div
        className={`md:hidden fixed top-20 right-0 h-[100vh] w-full bg-white text-black overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen
            ? "transform translate-x-0 scale-100 opacity-100"
            : "transform translate-x-full scale-95 opacity-0"
        }`}
      >
        <div className=" absolute top-4 right-3"></div>
        <div className="flex flex-col items-center justify-center  h-[50vh] gap-9">
          <Link href="/docs/how-to-use">
            <a
              className="pr-3 text-sm border-b-2 border-drip-black/20 hover:text-drip-white/80"
              onClick={handleOnClick}
            >
              How to use
            </a>
          </Link>

          <a
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 pr-3 text-sm group hover:text-drip-white/80 border-b-2 border-drip-black/20"
            onClick={handleOnClick}
            href={TWITTER_LINK}
          >
            <i className="text-lg ri-twitter-line group-hover:-rotate-12"></i>{" "}
            Share on twitter
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={GITHUB_LINK}
            className="inline-flex items-center gap-2 pr-3 text-sm group hover:text-drip-white/80 "
            onClick={handleOnClick}
          >
            <i className="text-lg ri-github-line group-hover:-rotate-12"></i>
            Visit on Github
          </a>
        </div>
      </div>

      <div className="hidden  md:flex flex-row gap-4 items-center">
        <Link href="/docs/how-to-use">
          <a className="pr-3 text-sm border-r-2 md:text-lg border-drip-black/20 hover:text-drip-black/80">
            How to use
          </a>
        </Link>

        <a
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center  gap-2 pr-3 text-sm md:text-lg group hover:text-drip-black/80 border-r-2 border-drip-black/20"
          href={TWITTER_LINK}
        >
          <i className="text-lg ri-twitter-line group-hover:-rotate-12 "></i>{" "}
          Share on twitter
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={GITHUB_LINK}
          className=" hover:text-drip-black/80 hover:-rotate-12"
        >
          <i className="text-lg ri-github-line"></i>
        </a>
      </div>
    </>
  );
};

export default Navigation;
