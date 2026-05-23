import Head from "next/head";
import { useState } from "react";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";
import Signin from "../../components/drip/signin/Signin";
import { SigninComponentCode } from "./signInComponent";

export default function Alerts() {
  const [CopySuccess, setCopySuccess] = useState(false);



  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(SigninComponentCode

      );
      setCopySuccess(true);
    } catch (error) {
      setCopySuccess(false);
    }
    setTimeout(() => {
      setCopySuccess(false);
    }, 4000);
  };

  return (
    <>
      <Meta
        title={"DripUI - Tailwind CSS Signin"}
        description={
          "DripUI offers a wide range of signin components made with Tailwind CSS you can use in your projects"
        }
        url={"/components/signin"}
      />

      <PageHeading
        title={"Signin Components"}
        alt={"signin"}
        description={
          "Signin components are used to authenticate users on your website or application. DripUI offers a wide range of signin components made with Tailwind CSS you can use in your projects."
        }
      />


      <section className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div onClick={copyToClipboard} className="cursor-pointer relative">
      <p className="pb-4 font-bold absolute left-40">
        {CopySuccess && (
          <span className="inline-flex gap-1 text-sm font-thin">
            Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>
          </span>
        )}
      </p>
          <Signin />
        </div>
      </section>
    </>
  );
}
