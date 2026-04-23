export default function LogoFooter() {
    return (
        <div>
            <div className="flex flex-col bg-[#f2f2f2] px-5 sm:text-left py-10 sm:py-20 sm:px-20 text-sm sm:flex-row sm:justify-between text-black">
                <div className="logo mx-auto w-full sm:w-full md:w-3/5 text-center sm:text-left">
                    <span className="mx-auto sm:mx-0 self-center text-3xl font-semibold whitespace-nowrap font-Cursive">DripUI</span>
                    <h2 className="mb-4 mt-6 text-xl font-bold">DripUI - Tailwind css components</h2>
                    <p>A collection of free UI components to help you develop your components</p>
                </div>

                <div className="links mt-10 flex w-full flex-row justify-between sm:w-full md:mt-0 md:w-2/5">
                    <nav className="links-section-1 flex flex-col">
                        <h6 className="mb-4 font-bold">SERVICES</h6>
                        <a className="mb-1 cursor-pointer hover:underline">Register</a>
                        <a className="mb-1 cursor-pointer hover:underline">Track</a>
                        <a className="mb-1 cursor-pointer hover:underline">Wishlist</a>
                        <a className="mb-1 cursor-pointer hover:underline">Blogs</a>
                    </nav>
                    <nav className="links-section-2 flex flex-col">
                        <h6 className="mb-4 font-bold">CONTACT</h6>
                        <a className="mb-1 cursor-pointer hover:underline">About us</a>
                        <a className="mb-1 cursor-pointer hover:underline">Contact</a>
                        <a className="mb-1 cursor-pointer hover:underline">FAQ</a>
                        <a className="mb-1 cursor-pointer hover:underline">Report</a>
                    </nav>
                    <nav className="links-section-3 flex flex-col">
                        <h4 className="mb-4 font-bold">LEGAL</h4>
                        <a className="mb-1 cursor-pointer hover:underline">Terms</a>
                        <a className="mb-1 cursor-pointer hover:underline">Privacy</a>
                        <a className="mb-1 cursor-pointer hover:underline">Disclaimer</a>
                    </nav>
                </div>
            </div>
            <span className="block bg-[#f2f2f2] py-4 text-sm text-gray-500 text-center dark:text-gray-400">© 2022 <a href="https://dripui.vercel.app/" className="hover:underline">DripUI™</a>. All Rights Reserved.
            </span>
        </div>
    )
}
