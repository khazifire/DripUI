import Head from "next/head";
import { useRef, useState } from "react";
import { BasicBtns } from "../../components/drip/buttons/basicBtsns";
import Button from "../../components/drip/buttons/Button";
import { ColoredShadowBtns } from "../../components/drip/buttons/coloredShadowBtns";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";

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

      <section className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          {BasicBtns.map((btn) => (
            <Button {...btn} key={btn.type} text="" />
          ))}

          {BasicBtns.map((btn, i) => (
            <Button {...btn} key={btn.type + i} icons text=" Icons" />
          ))}
        </div>

        <div className="flex flex-col gap-4 ">
          {ColoredShadowBtns.map((btn) => (
            <Button {...btn} key={btn.type} text="" />
          ))}
        </div>
      </section>
    </>
  );
}
