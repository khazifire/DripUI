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

export default function Alerts() {
  const [CopySuccess, setCopySuccess] = useState(false);
  const [alertId, setAlertId] = useState("");
  const alertDataRef = useRef({});

  const copyToClipboard = async (el, btnId) => {
    try {
      const selectedDiv = alertDataRef.current[btnId];
      if (selectedDiv) {
        await navigator.clipboard.writeText(selectedDiv.outerHTML);
        setCopySuccess(true);
        setAlertId(el);
      }
    } catch (error) {
      setCopySuccess(false);
      setAlertId("");
    }
    setTimeout(() => {
      setCopySuccess(false);
      setAlertId("");
    }, 4000);
  };

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

      <section className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* Solid Color Alerts */}
        <div>
          <p class="pb-4 font-bold">
            Solid color alerts &nbsp;{" "}
            {CopySuccess && alertId === "Solid" ? (
              <span className=" inline-flex gap-1 text-sm font-thin">
                Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
              </span>
            ) : (
              ""
            )}
          </p>

          <div className="border rounded-sm shadow-sm p-4 bg-white-100 relative flex flex-col gap-2">
            {SolidAlert.map((btn) => (
              <div
                key={btn.id}
                class={btn.style}
                role="alert"
                onClick={() => copyToClipboard("Solid", btn.id)}
                ref={(ref) => (alertDataRef.current[btn.id] = ref)}
              >
                <span class="font-bold">{btn.span}</span> {btn.text}
              </div>
            ))}
          </div>
        </div>

        {/* Soft Color Alerts */}
        <div>
          <p class="pb-4 font-bold">
            Soft color alerts. &nbsp;{" "}
            {CopySuccess && alertId === "Soft" ? (
              <span className=" inline-flex gap-1 text-sm font-thin">
                Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
              </span>
            ) : (
              ""
            )}
          </p>

          <div className="border rounded-sm shadow-sm p-4 bg-white-100 relative flex flex-col gap-2">
            {SoftColor.map((btn) => (
              <div
                key={btn.id}
                class={btn.style}
                role="alert"
                onClick={() => copyToClipboard("Soft", btn.id)}
                ref={(ref) => (alertDataRef.current[btn.id] = ref)}
              >
                <span class="font-bold">{btn.span}</span> {btn.text}
              </div>
            ))}
          </div>
        </div>

        {/* Alerts with Round Border */}
        <div>
          <p class="pb-4 font-bold">
            Round Border Alerts. &nbsp;{" "}
            {CopySuccess && alertId === "Round" ? (
              <span className=" inline-flex gap-1 text-sm font-thin">
                Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
              </span>
            ) : (
              ""
            )}
          </p>

          <div className="border rounded-sm shadow-sm p-4 bg-white-100 relative flex flex-col gap-2">
            {RoundBorder.map((btn) => (
              <div
                key={btn.id}
                class={btn.style}
                role="alert"
                onClick={() => copyToClipboard("Round", btn.id)}
                ref={(ref) => (alertDataRef.current[btn.id] = ref)}
              >
                <span class="font-bold">{btn.span}</span> {btn.text}
              </div>
            ))}
          </div>
        </div>

        {/* Alerts with Icon */}
        <div>
          <p class="pb-4 font-bold">
            Round Border with Icons Alerts. &nbsp;{" "}
            {CopySuccess && alertId === "Icons" ? (
              <span className=" inline-flex gap-1 text-sm font-thin">
                Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
              </span>
            ) : (
              ""
            )}
          </p>

          <div className="border rounded-sm shadow-sm p-4 bg-white-100 relative flex flex-col gap-2">
            {IconAlert.map((btn) => (
              <div
                key={btn.id}
                class={`${btn.style} flex flex-row items-center gap-2`}
                role="alert"
                onClick={() => copyToClipboard("Icons", btn.id)}
                ref={(ref) => (alertDataRef.current[btn.id] = ref)}
              >
                <i className={`${btn.icon} text-sm font-bold`}></i>
                <span class="font-bold">{btn.span}</span> {btn.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
