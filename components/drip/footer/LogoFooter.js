import copyToClipboard from "../../../utils/function/copyToClipBoard";
import { useRef, useState } from "react";
function LogoFooter() {

    const footerRef = useRef(null);
    const [copySuccess, setCopySuccess] = useState(false);
    console.log(copySuccess)
    return (
        <div className="flex flex-col gap-y-4 ">
            <div 
                ref={footerRef}
                className="footer-component">
                <div class="flex flex-col bg-[#f2f2f2] px-5 sm:text-left py-10 sm:py-20 sm:px-20 text-sm sm:flex-row sm:justify-between text-black">
                    <div class="logo mx-auto w-full sm:w-full md:w-3/5 text-center sm:text-left">
                        <span className="mx-auto sm:mx-0 self-center text-3xl font-semibold whitespace-nowrap font-Cursive">DripUI</span>
                        <h2 class="mb-4 mt-6 text-xl font-bold">DripUI - Tailwind css components</h2>
                        <p>A collection of free UI components to help you develop your components</p>
                    </div>

                    <div class="links mt-10 flex w-full flex-row justify-between sm:w-full md:mt-0 md:w-2/5">
                        <nav class="links-section-1 flex flex-col">
                            <h6 class="mb-4 font-bold">SERVICES</h6>
                            <a class="mb-1 cursor-pointer hover:underline">Register</a>
                            <a class="mb-1 cursor-pointer hover:underline">Track</a>
                            <a class="mb-1 cursor-pointer hover:underline">Wishlist</a>
                            <a class="mb-1 cursor-pointer hover:underline">Blogs</a>
                        </nav>
                        <nav class="links-section-2 flex flex-col">
                            <h6 class="mb-4 font-bold">CONTACT</h6>
                            <a class="mb-1 cursor-pointer hover:underline">About us</a>
                            <a class="mb-1 cursor-pointer hover:underline">Contact</a>
                            <a class="mb-1 cursor-pointer hover:underline">FAQ</a>
                            <a class="mb-1 cursor-pointer hover:underline">Report</a>
                        </nav>
                        <nav class="links-section-3 flex flex-col">
                            <h4 class="mb-4 font-bold">LEGAL</h4>
                            <a class="mb-1 cursor-pointer hover:underline">Terms</a>
                            <a class="mb-1 cursor-pointer hover:underline">Privacy</a>
                            <a class="mb-1 cursor-pointer hover:underline">Disclaimer</a>
                        </nav>
                    </div>
                </div>
                <span className="block bg-[#f2f2f2] py-4 text-sm text-gray-500 text-center dark:text-gray-400">© 2022 <a href="https://dripui.vercel.app/" className="hover:underline">DripUI™</a>. All Rights Reserved.
                </span>

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

export default LogoFooter;
