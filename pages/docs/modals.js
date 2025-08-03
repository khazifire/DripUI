import { useState, useRef } from "react";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";
import BasicModal from "../../components/drip/modal/BasicModal";
import ConfirmationModal from "../../components/drip/modal/ConfirmationModal";

const modals = () => {
  const [CopySuccess, setCopySuccess] = useState(false);
  const [openBasic, setOpenBasic] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const basicModalRef = useRef();
  const ConfirmationModalRef = useRef();
  const [modalId, setModalId] = useState("");

  const openBasicModal = () => {
    setOpenBasic(true);
  };
  const openConfirmationModal = () => {
    setOpenConfirmation(true);
  };
  const closeBasic = () => {
    setOpenBasic(false);
  };
  const closeConfirm = () => {
    setOpenConfirmation(false);
  };
  const onConfirm = () => {
    setOpenConfirmation(false);
  };
  const onCancel = () => {
    setOpenConfirmation(false);
  };

  const copyToClipboard = async (El, modalId) => {
    setCopySuccess(false);
    try {
      await navigator.clipboard.writeText(El.current.outerHTML);
      setCopySuccess(true);
      setModalId(modalId);
    } catch (error) {
      setCopySuccess(false);
    }
    setTimeout(() => {
      setCopySuccess(false);
      setModalId("");
    }, 4000);
  };

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
        title={"Modal Components"}
        alt={"modal"}
        description={
          "The Modal component is used to display content in a focused dialog overlay, often to get user attention or input. Modals are perfect for confirmations, forms, alerts, or any interactive content that needs to appear above the main page."
        }
      />
      <section className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {/* Basic Modal */}
        <div className="flex flex-col gap-2">
          <p class="pb-4 font-bold">
            Basic Modal &nbsp;{" "}
            {CopySuccess && modalId == "basic-modal" ? (
              <span className=" inline-flex gap-1 text-sm font-thin">
                Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
              </span>
            ) : (
              ""
            )}
          </p>

          <div className="border rounded-sm shadow-sm p-4 bg-white-100 relative flex flex-col items-center justify-center gap-2">
            <button
              onClick={openBasicModal}
              class="text-sm px-4 py-3 group inline-flex items-center text-white bg-gray-700 rounded-lg hover:bg-gray-700/90"
            >
              Open
            </button>
          </div>
          <div className="text-center m-5">
            <button
              onClick={() => copyToClipboard(basicModalRef, "basic-modal")}
              className="rounded-lg ring-2 w-fit p-2 mx-auto ring-black hover:bg-black hover:text-white transition-colors duration-500 ease-in font-bold"
            >
              Copy To clipboard
            </button>
          </div>
        </div>
        {/* --------------------- */}
        <BasicModal
          basicModalRef={basicModalRef}
          onClose={closeBasic}
          open={openBasic}
        />
        {/* Confirmation Modal */}
        <div>
          <p class="pb-4 font-bold">
            Confirmation modal. &nbsp;{" "}
            {CopySuccess && modalId == "confirmation-modal" ? (
              <span className=" inline-flex gap-1 text-sm font-thin">
                Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
              </span>
            ) : (
              ""
            )}
          </p>

          <div className="border rounded-sm shadow-sm p-4 bg-white-100 relative flex flex-col items-center justify-center gap-2">
            <button
              onClick={openConfirmationModal}
              class="text-sm px-4 py-3 group inline-flex items-center text-white bg-gray-700 rounded-lg hover:bg-gray-700/90"
            >
              Open
            </button>
          </div>
          <div className="text-center m-5 flex flex-col">
            <button
              onClick={() =>
                copyToClipboard(ConfirmationModalRef, "confirmation-modal")
              }
              className="rounded-lg ring-2 w-fit p-2 mx-auto ring-black hover:bg-black hover:text-white transition-colors duration-500 ease-in font-bold"
            >
              Copy To clipboard
            </button>
          </div>
        </div>

        {/* component */}
        <ConfirmationModal
          ConfirmationModalRef={ConfirmationModalRef}
          onClose={closeConfirm}
          open={openConfirmation}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </section>
    </>
  );
};

export default modals;
