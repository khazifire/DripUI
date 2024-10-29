import copyToClipboard from "../../../utils/function/copyToClipBoard";
import { useRef, useState } from "react";
function Footer() {

    const footerRef = useRef(null);
    const [copySuccess, setCopySuccess] = useState(false);
    console.log(copySuccess)
    return (
        <div className="flex flex-col gap-y-4">
            <div 
                ref={footerRef}
                className="footer-component">
                <div
                    className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://dripui.vercel.app/" className="flex items-center mb-4 sm:mb-0">
                            
                            <span className="self-center text-2xl font-semibold whitespace-nowrap font-Cursive">DripUI</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://dripui.vercel.app/" className="hover:underline">DripUI™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>

            <button
                onClick={() => copyToClipboard(footerRef, setCopySuccess)}
                className="rounded-lg ring-2 w-fit p-2 mx-auto ring-black hover:bg-black hover:text-white transition-colors duration-500 ease-in font-bold"
            >
                Copy To clipboard
            </button>

            {
                copySuccess &&
                <span className="mx-auto gap-1 py-2 text-sm">
                    Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>{" "}
                </span>
            }
        </div>
    
    )
}

export default Footer
