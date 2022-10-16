import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";
import { BasicBtns } from "../../components/drip/buttons/basicBtsns";
import { ColoredShadowBtns } from "../../components/drip/buttons/coloredShadowBtns";
import { basicNavbars } from "../../components/drip/navbar/basicNavbars";
import Navbar from "../../components/drip/navbar/Navbar";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";

export default function Buttons() {

  return (
    <section className="lg:px-12 px-3 ">
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

      <section className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Basic Navbar&apos;s</h2>
        <div className="flex flex-col lg:gap-8">
          {basicNavbars.map((navbar, index) => (<Navbar key={"Nav" + index} {...{ navbar }} />))}
        </div>
      </section>
    </section>
  );
}
