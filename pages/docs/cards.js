import Head from "next/head";
import { useRef, useState } from "react";
import { BasicBtns } from "../../components/drip/buttons/basicBtsns";
import { ColoredShadowBtns } from "../../components/drip/buttons/coloredShadowBtns";
import DefaultCard from "../../components/drip/cards/defaultCard";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";

export default function Cards() {
  const cardAreaRef1 = useRef(null);
  const cardAreaRef2 = useRef(null);
  const cardAreaRef3 = useRef(null);
  const cardAreaRef4 = useRef(null);
  const [CopySuccess, setCopySuccess] = useState(false);
  const [cardId, setCardId] = useState();

  const copyToClipboard = async (El, cardId) => {
    setCopySuccess(false);
    try {
      await navigator.clipboard.writeText(El.current.outerHTML);
      setCopySuccess(true);
      setCardId(cardId);
    } catch (error) {
      setCopySuccess(false);
    }
    setTimeout(() => {
      setCopySuccess(false);
      setCardId();
    }, 4000);
  };

  return (
    <>
      <Meta
        title={"DripUI - Tailwind CSS Cards"}
        description={
          "DripUI offers a wide range of card made with tailwindCss you can use in your projects"
        }
        url={"/components/cards"}
      />
      <PageHeading
        title={"Card Components"}
        alt={"card"}
        description={
          "The Card component is used to show data and various information to users; such as blog post, user profiles, image galleries and many more."
        }
      />
      <section className="grid grid-cols-1 gap-16 md:grid-cols-4">
        {/* <DefaultCard /> */}
        <div
          ref={cardAreaRef1}
          onClick={() => copyToClipboard(cardAreaRef1, "card1")}
          className="relative flex flex-col gap-2 "
        >
          {/* <h2>Default Card</h2> */}
          <div className="flex flex-col w-full max-w-sm gap-2 p-4 rounded-lg shadow shadow-drip-black/30 cursor-pointer hover:shadow-lg">
            <h3 className="text-2xl font-semibold tracking-tight">
              Centering a div made easy with Tailwind CSS
            </h3>
            <p>
              I have been working with Tailwind CSS and I wanted to quickly show
              you how to center a div using Tailwind.
            </p>
          </div>
          {CopySuccess && cardId == "card1" ? (
            <span className="absolute inline-flex gap-1 py-2 text-sm -top-7">
              Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
            </span>
          ) : (
            ""
          )}
        </div>

        <div
          ref={cardAreaRef2}
          onClick={() => copyToClipboard(cardAreaRef2, "card2")}
          className="relative flex flex-col gap-2 "
        >
          {/* <h2>Default Card + btn</h2> */}
          <div className="flex flex-col w-full max-w-sm gap-2 p-4 rounded-lg shadow shadow-drip-black/30 cursor-pointer hover:shadow-lg">
            <h3 className="text-2xl font-semibold tracking-tight">
              Centering a div made easy with Tailwind CSS
            </h3>
            <p>
              I have been working with Tailwind CSS and I wanted to quickly show
              you how to center a div using Tailwind.
            </p>
            <button className="px-5 py-3 mt-1 text-sm text-white bg-gray-700 rounded-lg hover:bg-gray-700/90">
              {" "}
              Read More
            </button>
          </div>
          {CopySuccess && cardId == "card2" ? (
            <span className="absolute inline-flex gap-1 py-2 text-sm -top-7">
              Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
            </span>
          ) : (
            ""
          )}
        </div>

        <div
          ref={cardAreaRef3}
          onClick={() => copyToClipboard(cardAreaRef3, "card3")}
          className="relative flex flex-col gap-2 "
        >
          {/* <h2>Default Card + btn</h2> */}
          <div className="flex flex-col w-full max-w-sm gap-2 p-4 rounded-lg shadow shadow-drip-black/30 cursor-pointer hover:shadow-lg">
            <h3 className="text-2xl font-semibold tracking-tight">
              Centering a div made easy with Tailwind CSS
            </h3>
            <p>
              I have been working with Tailwind CSS and I wanted to quickly show
              you how to center a div using Tailwind.
            </p>
            <div>
              <button className="inline-flex items-center px-5 py-3 mt-1 text-sm text-white bg-gray-700 rounded-lg hover:bg-gray-700/90 group">
                {" "}
                Read More
                <svg
                  className={`flex-shrink-0 w-4 h-4 ml-3 fill-white group-hover:translate-x-1`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </button>
            </div>
          </div>
          {CopySuccess && cardId == "card3" ? (
            <span className="absolute inline-flex gap-1 py-2 text-sm -top-7">
              Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
            </span>
          ) : (
            ""
          )}
        </div>

        <div
          ref={cardAreaRef4}
          onClick={() => copyToClipboard(cardAreaRef4, "card4")}
          className="relative flex flex-col gap-2 "
        >
          {/* <h2>Default Card</h2> */}
          <div className="flex flex-col w-full max-w-sm gap-2 rounded-lg shadow shadow-drip-black/30 cursor-pointer hover:shadow-lg">
            <img
              className="object-cover object-center rounded-t-lg h-72"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="default card"
            />

            <div className="p-4">
              <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                Centering a div made easy with Tailwind CSS
              </h3>
              <p>
                I have been working with Tailwind CSS and I wanted to quickly
                show you how to center a div using Tailwind.
              </p>
            </div>
          </div>
          {CopySuccess && cardId == "card4" ? (
            <span className="absolute inline-flex gap-1 py-2 text-sm -top-7">
              Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
            </span>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}
