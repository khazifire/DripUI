import PageHeading from "../../components/other/PageHeadings";
import Input from "../../components/drip/inputs/Input";
import Meta from "../../components/layout/meta";
import { useState, useRef, createRef } from "react";
import copyToClipboard from "../../utils/function/copyToClipBoard";

const inputs = () => {
  const [copyStatus, setCopyStatus] = useState(false);
  const ref = useRef(null);

  return (
    <section className="lg:px-12 px-3 ">
      <Meta
        title={"DripUI - Tailwind CSS Buttons"}
        description={
          "DripUI offers a wide range of responsive NavBars, including outlined navbar, animated hamburger menus, ...."
        }
        url={"/components/inputs"}
      />
      <PageHeading
        title={"Input Components"}
        alt={"input"}
        description={
          "Input fields are essential in web applications and websites for collecting user data, ranging from text and numbers to dates and selections. DripUI provides a versatile collection of responsive input elements, including text fields, checkboxes, and dropdowns, ensuring a seamless user experience across devices."
        }
      />

      <section>
        <h2 className="text-3xl font-semibold mb-10">Input Fields</h2>
        <div className="p-4 rounded-lg shadow-inner shadow-drip-black/30 max-w-md flex items-center">
          <div className="w-full">
            <div className="flex gap-2 items-center mb-1">
              <Input
                placeholder="I'm a dynamic input field"
                ref={ref}
                className="w-full"
              />
              <i
                className="ri-file-copy-line"
                onClick={() => copyToClipboard(ref, setCopyStatus)}></i>
            </div>
            {copyStatus && (
              <span className="relative flex gap-1 py-2 text-sm items-center mx-auto w-fit ">
                Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
              </span>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default inputs;
