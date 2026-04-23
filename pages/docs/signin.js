import Head from "next/head";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";
import Signin from "../../components/drip/signin/Signin";
import CodePanel, { CodeVariant } from "../../components/other/CodePanel";
import { SigninSnippets } from "../../components/drip/signin/signinCodeSnippets";

export default function SigninDocs() {
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

      <section className="grid grid-cols-1 gap-16 md:grid-cols-1">
        <CodePanel title="Sign-In Form" snippets={SigninSnippets}>
          <CodeVariant id="default">
            <Signin />
          </CodeVariant>
        </CodePanel>
      </section>
    </>
  );
}
