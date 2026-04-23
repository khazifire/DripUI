import Head from "next/head";
import { useRef, useState } from "react";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";
import {
  SoftColor,
  SolidAlert,
  RoundBorder,
  IconAlert,
} from "../../components/drip/alert/alertData";

import CodePanel, { CodeVariant } from "../../components/other/CodePanel";
import { SolidAlertSnippets, SoftColorSnippets, RoundBorderSnippets, IconAlertSnippets } from "../../components/drip/alert/alertCodeSnippets";

export default function Alerts() {

  return (
    <>
      <Meta
        title={"DripUI - Tailwind CSS Alerts"}
        description={
          "DripUI offers a wide range of alert styles and sizes, including outlined alert, multiple alert and sizes, alerts with icons, and more."
        }
        url={"/components/alerts"}
      />

      <PageHeading
        title={"Alert Components"}
        alt={"alert"}
        description={
          "Alert components are essential elements in applications and websites that serve to communicate important information or notifications to users. DripUI provides a versatile set of alert components, ensuring effective and visually appealing ways to convey messages."
        }
      />

      <section className="grid grid-cols-1 gap-16 md:grid-cols-1 lg:grid-cols-2">
        {/* Solid Color Alerts */}
        <CodePanel title="Solid Color Alerts" snippets={SolidAlertSnippets}>
          <div className="w-full relative flex flex-col gap-2">
            {SolidAlert.map((btn) => (
              <CodeVariant id={btn.id} key={btn.id}>
                <div className={btn.style} role="alert">
                  <span className="font-bold">{btn.span}</span> {btn.text}
                </div>
              </CodeVariant>
            ))}
          </div>
        </CodePanel>

        {/* Soft Color Alerts */}
        <CodePanel title="Soft Color Alerts" snippets={SoftColorSnippets}>
          <div className="w-full relative flex flex-col gap-2">
            {SoftColor.map((btn) => (
              <CodeVariant id={btn.id} key={btn.id}>
                <div className={btn.style} role="alert">
                  <span className="font-bold">{btn.span}</span> {btn.text}
                </div>
              </CodeVariant>
            ))}
          </div>
        </CodePanel>

        {/* Alerts with Round Border */}
        <CodePanel title="Round Border Alerts" snippets={RoundBorderSnippets}>
          <div className="w-full relative flex flex-col gap-2">
            {RoundBorder.map((btn) => (
              <CodeVariant id={btn.id} key={btn.id}>
                <div className={btn.style} role="alert">
                  <span className="font-bold">{btn.span}</span> {btn.text}
                </div>
              </CodeVariant>
            ))}
          </div>
        </CodePanel>

        {/* Alerts with Icon */}
        <CodePanel title="Round Border with Icons Alerts" snippets={IconAlertSnippets}>
          <div className="w-full relative flex flex-col gap-2">
            {IconAlert.map((btn) => (
              <CodeVariant id={btn.id} key={btn.id}>
                <div className={`${btn.style} flex flex-row items-center gap-2`} role="alert">
                  <i className={`${btn.icon} text-sm font-bold`}></i>
                  <span className="font-bold">{btn.span}</span> {btn.text}
                </div>
              </CodeVariant>
            ))}
          </div>
        </CodePanel>
      </section>
    </>
  );
}
