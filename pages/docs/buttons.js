import Head from "next/head";
import { useRef, useState } from "react";
import { BasicBtns } from "../../components/drip/buttons/basicBtsns";
import Button from "../../components/drip/buttons/Button";
import { ColoredShadowBtns } from "../../components/drip/buttons/coloredShadowBtns";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";
import CodePanel from "../../components/other/CodePanel";
import { BasicBtnsSnippets, BasicIconsBtnsSnippets, ColoredShadowBtnsSnippets } from "../../components/drip/buttons/buttonsCodeSnippets";

export default function Buttons() {
  return (
    <>
      <Meta
        title={"DripUI - Tailwind CSS Buttons"}
        description={
          "DripUI offers a wide range of button styles and sizes, including outlined buttons, multiple colors and sizes, buttons with icons, and more."
        }
        url={"/components/buttons"}
      />
      <PageHeading
        title={"Button Components"}
        alt={"button"}
        description={
          "The button component is commonly used in application and websites to launch an action or link to other pages. DripUI offers a wide range of button styles and sizes, including outlined buttons, multiple colors and sizes, buttons with icons, and more."
        }
      />

      <section className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-12">
          {BasicBtns.map((btn) => (
            <CodePanel title="Basic Buttons" snippets={BasicBtnsSnippets} key={btn.type}>
              <Button {...btn} text="" />
            </CodePanel>
          ))}

          {BasicBtns.map((btn, i) => (
            <CodePanel title="Basic Buttons with Icons" snippets={BasicIconsBtnsSnippets} key={btn.type + i}>
              <Button {...btn} icons text=" Icons" />
            </CodePanel>
          ))}
        </div>

        <div className="flex flex-col gap-12">
          {ColoredShadowBtns.map((btn) => (
            <CodePanel title="Colored Shadow Buttons" snippets={ColoredShadowBtnsSnippets} key={btn.type}>
              <Button {...btn} text="" />
            </CodePanel>
          ))}
        </div>
      </section>
    </>
  );
}
