import copyToClipboard from "../../../utils/function/copyToClipBoard";
import { useRef, useState } from "react";


export default function AnimatedGrid() {

    const gridRef = useRef(null);
    const [copySuccess, setCopySuccess] = useState(false);


    return (
        <>

            <button
                onClick={() => copyToClipboard(gridRef, setCopySuccess)}
                className="rounded-lg ring-1 w-fit py-2 px-4 mx-auto ring-black hover:bg-black hover:text-white transition-colors duration-500 ease-in font-bold"
            >
                Copy To clipboard
            </button>

            {
                copySuccess &&
                <span className="mx-auto gap-1 py-2 px-6 text-sm text-green-500">
                    Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
                </span>
            }

            <div className="w-full md:w-2/3 mx-auto" ref={gridRef}>
                <div className="mt-2 grid gap-4 sm:mt-4 lg:grid-cols-3 lg:grid-rows-6">
                <a
                    href="#"
                    className="relative lg:row-span-3 rounded-lg border border-black/5 dark:border-gray-200 max-lg:rounded-t-[2rem] transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                >
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 py-8 sm:px-10 sm:py-10">
                        <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <i class='ri-magic-line' className="h-6 w-6"></i>
                        </div>
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
                        Feature one
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                        A brief introduction to our core features and services,
                        helping you understand how to integrate and utilize the platform
                        effectively.
                        </p>
                    </div>
                    </div>
                </a>
        
                <a
                    href="#"
                    className="relative lg:row-span-2 rounded-lg border border-black/5 dark:border-gray-200 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                >
                    <div className="relative flex  transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6 flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 py-8 sm:px-10 sm:py-10">
                        <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <i class='ri-bug-line' className="h-6 w-6"></i>
                        </div>
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
                            Feature two
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                        Step-by-step instructions to seamlessly integrate us into your
                        systems, coveborder API usage, configuration, and testing.
                        </p>
                    </div>
                    </div>
                </a>
        
                <a
                    href="#"
                    className="relative lg:row-span-3 rounded-lg border border-black/5 dark:border-gray-200 transform rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:-rotate-6"
                >
                    <div className="relative flex  transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6 flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 py-8 sm:px-10 sm:py-10">
                        <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <i class='ri-pen-nib-line' className="h-6 w-6"></i>
                        </div>
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
                            Feature three
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                        Detailed information on how to implement and process direct
                        payments using us, including supported payment methods.
                        </p>
                    </div>
                    </div>
                </a>
        
                <a
                    href="#"
                    className="relative lg:row-span-2 rounded-lg border border-black/5 dark:border-gray-200 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                >
                    <div className="relative flex  transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6 flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 py-8 sm:px-10 sm:py-10">
                        <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <i class='ri-quill-pen-line' className="h-6 w-6"></i>
                        </div>
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
                            Feature four
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                        A log of all recent updates, bug fixes, and improvements to
                        our platform and API.
                        </p>
                    </div>
                    </div>
                </a>
        
                <a
                    href="#"
                    className="relative lg:row-span-3 rounded-lg border border-black/5 dark:border-gray-200 transform rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:-rotate-6"
                >
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                    <div className="px-8 py-8 sm:px-10 sm:py-10">
                        <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <i class='ri-fingerprint-line' className="h-6 w-6"></i>
                        </div>
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
                        Feature five
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                        Guide to setting up and managing our webhooks, enabling
                        real-time notifications for payment events and other system
                        updates.
                        </p>
                    </div>
                    </div>
                </a>
        
                <a
                    href="#"
                    className="relative lg:row-span-3 rounded-lg border border-black/5 dark:border-gray-200 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                >
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                    <div className="px-8 py-8 sm:px-10 sm:py-10">
                        <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <i class='ri-android-line' className="h-6 w-6"></i>
                        </div>
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
                        Feature six
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                        Frequently asked questions to help troubleshoot common issues
                        and provide quick answers about our services.
                        </p>
                    </div>
                    </div>
                </a>
        
                <a
                    href="#"
                    className="relative lg:row-span-3 rounded-lg border border-black/5 dark:border-gray-200 max-lg:rounded-b-[2rem] h-full transform rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:-rotate-6"
                >
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                    <div className="px-8 py-8 sm:px-10 sm:py-10">
                        <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <i class='ri-baidu-line' className="h-6 w-6"></i>
                        </div>
        
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white max-lg:text-center">
                        feature seven
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                        Key security considerations and best practices to protect your
                        transactions and customer data when using our.
                        </p>
                    </div>
                    </div>
                </a>
                </div>
            </div>
        </>
    );
  }
  