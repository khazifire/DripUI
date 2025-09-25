import Head from "next/head";
import { useRef, useState } from "react";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";

export default function Cards() {
  const cardAreaRef1 = useRef(null);
  const cardAreaRef2 = useRef(null);
  const cardAreaRef3 = useRef(null);
  const cardAreaRef4 = useRef(null);
  const cardAreaRef5 = useRef(null);
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
      <section className="grid grid-cols-1 gap-15 md:grid-cols-3 gap-5">
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

        {/* UserProfile card */}

        <div
          ref={cardAreaRef5}
          onClick={() => copyToClipboard(cardAreaRef5, "card5")}
          className="relative flex flex-col gap-2 "
        >
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow shadow-drip-black/30 cursor-pointer  dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
            <div class="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span class="sr-only">Open dropdown</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
              <div
                id="dropdown"
                class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
              >
                <ul class="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
              <div class="flex mt-4 md:mt-6 gap-4">
                <a
                  href="#"
                  class="inline-flex  items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add friend
                </a>
                <a
                  href="#"
                  class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
          {CopySuccess && cardId == "card5" ? (
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
