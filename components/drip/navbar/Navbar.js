import Link from "next/link";
import { useRef, useState } from "react";

export default function Navbar({ navbar }) {
  const navEL = useRef(null);
  const [CopySuccess, setCopySuccess] = useState(false);
  const [btnId, setBtnId] = useState();
  const copyToClipboard = async () => {
    setCopySuccess(false);
    try {
      await navigator.clipboard.writeText(navEL.current.outerHTML);
      setCopySuccess(true);
    } catch (error) {
      setCopySuccess(false);
    }
    setTimeout(() => {
      setCopySuccess(false);
      setBtnId();
    }, 4000);
  };
  return (
    <div>
      <p className="text-lg font-bold">{navbar.type}</p>
      <div className="flex flex-col w-full mx-auto mt-8 gap-8 p-4 pt-6 rounded-lg shadow-lg shadow-slate-500/30 lg:mb-0 mb-72">
        {navbar.category.map((nav) => (
          <nav ref={navEL} key={nav.id} className={nav.style}>
            <input
              type={"checkbox"}
              id={`${nav.id}-checkbox`}
              className="hidden peer"
            />
            <div className={nav.logoStyle}>
              Logo
            </div>
            <ul className={nav.listContainerStyle}>
              {nav.children.map((child) => (
                <li key={child.id}>
                  <Link href={child.href}>
                    <span className={nav.childrenStyle}>{child.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <label
              htmlFor={`${nav.id}-checkbox`}
              className={nav.labelStyle}
            ></label>
          </nav>
        ))}
        <button
          onClick={copyToClipboard}
          className="rounded-lg ring-2 w-fit py-3 px-6 mx-auto ring-black hover:bg-black hover:text-white transition-colors duration-500 ease-in font-bold"
          >
          Copy To clipboard
        </button>
            {CopySuccess && (
                <span className="relative flex gap-1 py-2 text-sm items-center mx-auto w-fit ">
                    Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
                </span>
            )}
        
      </div>
    </div>
  );
}
