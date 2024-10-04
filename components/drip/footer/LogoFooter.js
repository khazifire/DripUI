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
                <footer class="flex flex-col bg-[#f2f2f2] py-40 px-20 text-sm sm:flex-row sm:justify-between text-black">
                    <div class="logo mx-auto w-full sm:w-full md:w-3/5">
                        <svg id="logo-70" width="78" height="30" viewBox="0 0 78 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z" class="ccustom" fill="#394149"></path>
                        <path d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z" class="ccustom" fill="#394149"></path>
                        </svg>
                        <h2 class="mb-2 mt-6 text-xl font-bold">DripUI - Tailwind css components</h2>
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
                            <a class="mb-1 cursor-pointer hover:underline">Terms of use</a>
                            <a class="mb-1 cursor-pointer hover:underline">Privacy policy</a>
                            <a class="mb-1 cursor-pointer hover:underline">Cookie policy</a>
                        </nav>
                    </div>
                </footer>
                <span className="block bg-[#f2f2f2] py-4 text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://dripui.vercel.app/" className="hover:underline">DripUI™</a>. All Rights Reserved.
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
