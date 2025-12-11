import { useRef, useState } from "react";
import { HorizontalTabs } from "../../components/drip/tabs/HorizontalTabs";
import { PillTabs } from "../../components/drip/tabs/PillTabs";
import { UnderlineTabs } from "../../components/drip/tabs/UnderlineTabs";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";

const copyToClipboard = (ref, setCopied) => {
  if (ref.current) {
    const code = ref.current.outerHTML;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }
};

const TabExample = ({ title, Component }) => {
  const ref = useRef();
  const [copied, setCopied] = useState(false);

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <button
          onClick={() => copyToClipboard(ref, setCopied)}
          className={`w-fit border border-gray-500 text-gray-700 hover:text-black rounded-full text-xs px-3 py-1 transition-all duration-300 font-medium`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <Component ref={ref} />
    </div>
  );
};

export default function TabsDocs() {
  return (
    <>
      <Meta
        title={"DripUI - Animated Tabs"}
        description="DripUI offers simple and elegant tab variations including horizontal, pill, and underline styles, designed to provide smooth transitions, intuitive interaction, and a consistent user experience across applications."
        url="/components/tabs"
      />

      <PageHeading
        title="Tabs Components"
        alt="tabs"
        description="Tabs are essential navigation elements that help users switch between different sections of content without leaving the current page. DripUI offers simple and elegant tab variations including horizontal, pill, and underline styles, designed to provide smooth transitions, intuitive interaction, and a consistent user experience across applications."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TabExample title="Horizontal Tabs" Component={HorizontalTabs} />
        <TabExample title="Underline Tabs" Component={UnderlineTabs} />
        <TabExample title="Pill Tabs" Component={PillTabs} />
      </div>
    </>
  );
}
