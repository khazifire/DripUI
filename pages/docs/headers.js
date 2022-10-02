import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";
import { BasicBtns } from "../../components/drip/buttons/basicBtsns";
import { ColoredShadowBtns } from "../../components/drip/buttons/coloredShadowBtns";
import { basicNavbars } from "../../components/drip/navbar/basicNavbars";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";

export default function Buttons() {
  // const btnAreaRef = useRef(null);
  const [CopySuccess, setCopySuccess] = useState(false);
  const [btnId, setBtnId] = useState();

  const copyToClipboard = async (e) => {
    setCopySuccess(false);
    try {
      await navigator.clipboard.writeText(
        e.target.outerHTML
      );
      setCopySuccess(true);
      setBtnId(buttonId);
    } catch (error) {
      setCopySuccess(false);
    }
    setTimeout(() => {
      setCopySuccess(false);
      setBtnId();
    }, 4000);
  };

  return (
    <>
      <Meta
        title={"DripUI - Tailwind CSS Buttons"}
        description={
          "DripUI offers a wide range of responsive NavBars, including outlined navbar, animated hamburger menus, ...."
        }
        url={"/components/header"}
      />
      <PageHeading
        title={"Header Components"}
        alt={"header"}
        description={
          "The Header component is needed in applications and websites as a site must have a form of navigation for users, DripUI offers a wide range of responsive NavBars, including outlined navbar with animated hamburger menus for mobile state."
        }
      />

      <section className="flex flex-col">
          <h2 className="text-2xl font-semibold">Basic Navbar</h2>
        <div className="flex flex-col">
          {basicNavbars.map((navbar, index) => (
            <div key={"Nav" + index}>
              <p>{navbar.type}</p>
              <div className="flex flex-col w-10/12 mx-auto mt-8 gap-8 p-4 rounded-lg shadow-lg shadow-slate-500/30 mb-72">
                {navbar.category.map((nav) => (
                    <nav
                        tabIndex={5}
                        key={nav.id}
                        onClick={copyToClipboard}
                    className={nav.style}
                  >
                    <input
                      type={"checkbox"}
                      id={`${nav.id}-checkbox`}
                      className="hidden peer"
                    />
                        <div className="w-16 h-16 basis-16 rounded-full bg-white text-drip-black font-bold flex items-center justify-center">
                      Logo
                    </div>
                    <ul className={nav.listContainerStyle}>
                      {nav.children.map((child) => (
                        <li key={child.id}>
                          <Link href={child.href}>
                            <span className={child.style}>{child.text}</span>
                          </Link>
                        </li>
                      ))}
                        </ul>
                        <label htmlFor={`${nav.id}-checkbox`} className={nav.labelStyle}></label>
                  </nav>
                ))}
                      <button className="rounded-lg ring-2 w-fit py-3 px-6 mx-auto ring-drip-black hover:bg-drip-black hover:text-white transition-colors duration-500 ease-in">Copy To clipboard</button>
                {CopySuccess ? (
                  <span className="absolute inline-flex gap-1 py-2 text-sm -bottom-8">
                    Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
