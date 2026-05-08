import { useState } from "react";

const BasicModal = ({ children, basicModalRef, onClose, open }) => {
  const closeModal = () => {
    onClose(false);
  };
  return (
    <div
      ref={basicModalRef}
      onClick={closeModal}
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <article
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col w-full max-w-[90vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
      >
        <header className="flex items-center justify-between p-4 sm:p-6 bg-white border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Welcome to the modal
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-sm text-sm inline-flex h-8 w-8 sm:h-9 sm:w-9 justify-center items-center transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
        </header>
        <main className="p-4 sm:p-6 bg-white overflow-y-auto max-h-[60vh] sm:max-h-[70vh]">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            eligendi quo possimus corporis. Aliquam adipisci ipsum earum, nam et
            in voluptatum nesciunt eveniet, repudiandae corporis reiciendis.
            Voluptas libero enim officiis, at obcaecati, dolores quidem
            accusantium autem officia nisi itaque nostrum vel repellendus hic
            cupiditate saepe perferendis nobis illo impedit sit ad deserunt
            repellat cum inventore? Ut quo quisquam dolorem consequuntur in, eum
            aspernatur voluptas sapiente, illo sunt optio ipsum, eos aut est
            eius temporibus eveniet harum. Neque error quo deserunt id
            laudantium
          </p>
        </main>
        <footer className="flex items-center justify-end gap-2 p-4 sm:p-6 bg-white border-t border-gray-200">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-sm text-sm sm:text-base inline-flex h-8 sm:h-9 px-4 sm:px-6 justify-center items-center transition-colors duration-200"
          >
            Cancel
          </button>

          <button
            onClick={closeModal}
            className="text-slate-50 hover:text-slate-100 bg-slate-700 hover:bg-slate-900  rounded-sm text-sm sm:text-base inline-flex h-8 sm:h-9 px-4 sm:px-6 justify-center items-center transition-colors duration-200"
          >
            Accept
          </button>
        </footer>
      </article>
    </div>
  );
};

export default BasicModal;
