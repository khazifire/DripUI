const ConfirmationModal = ({
  open,
  onClose,
  ConfirmationModalRef,
  title,
  onConfirm,
  onCancel,
}) => {
  return (
    <>
      <div
        ref={ConfirmationModalRef}
        onClick={onClose}
        style={{ display: open ? "flex" : "none" }}
        className="flex justify-center items-center w-full h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,.5)] z-50 transition-opacity duration-300"
      >
        <article
          onClick={(e) => e.stopPropagation()}
          className="relative backdrop-blur-md  p-4 w-full max-w-md max-h-full"
        >
          <div className="relative bg-white rounded-sm shadow-sm">
            <button
              type="button"
              onClick={onClose}
              className="absolute b top-3 right-3 end-2.5 text-gray-400 bg-[rgba(0,0,0,.1)]   rounded-sm text-sm w-8 h-8 ms-auto inline-flex justify-center items-center cursor-pointer "
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                {title || " Are you sure you want to delete this product?"}
              </h3>
              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  onClick={onConfirm}
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-sm text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={onCancel}
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ConfirmationModal;
