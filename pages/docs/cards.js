import Head from "next/head";
import { useRef, useState } from "react";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";

import CodePanel, { CodeVariant } from "../../components/other/CodePanel";
import { Card1Snippets, Card2Snippets, Card3Snippets, Card4Snippets } from "../../components/drip/cards/cardsCodeSnippets";

export default function Cards() {

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
      <section className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <CodePanel title="Default Card" snippets={Card1Snippets}>
          <CodeVariant id="default">
            <div className="flex flex-col w-full max-w-sm gap-2 p-4 rounded-lg shadow shadow-drip-black/30 cursor-pointer hover:shadow-lg">
              <h3 className="text-2xl font-semibold tracking-tight">
                Centering a div made easy with Tailwind CSS
              </h3>
              <p>
                I have been working with Tailwind CSS and I wanted to quickly show
                you how to center a div using Tailwind.
              </p>
            </div>
          </CodeVariant>
        </CodePanel>

        <CodePanel title="Card with Button" snippets={Card2Snippets}>
          <CodeVariant id="default">
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
          </CodeVariant>
        </CodePanel>

        <CodePanel title="Card with Icon Button" snippets={Card3Snippets}>
          <CodeVariant id="default">
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
          </CodeVariant>
        </CodePanel>

        <CodePanel title="Card with Image" snippets={Card4Snippets}>
          <CodeVariant id="default">
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
          </CodeVariant>
        </CodePanel>
      </section>
    </>
  );
}
