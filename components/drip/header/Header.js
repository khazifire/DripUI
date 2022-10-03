import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";



export default function Header() {
    const navigation = [
        "About us",
        "Contact us",
        "Blog",
        "Need some components?",
    ];

    return (
        <div className="w-full font-[roboto]">
            <nav className="container relative flex flex-wrap items-center justify-between p-2 mx-auto lg:justify-between xl:px-0">
                {/* Logo  */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                                <Link to="/" className="flex items-center space-x-2 text-2xl font-medium text-[#4176FF] dark:text-blue-100">

                                  
                          <a className="text-2xl font-bold md:text-3xl font-Cursive">DripUI</a>
                      


                                </Link>

                                <Disclosure.Button
                                    aria-label="Toggle Menu"
                                    className="px-2 py-1 ml-auto text-blue-500 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:text-blue-300 dark:focus:bg-trueblue-700">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        {open && (
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                            />
                                        )}
                                        {!open && (
                                            <path
                                                fillRule="evenodd"
                                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                            />
                                        )}
                                    </svg>
                                </Disclosure.Button>

                                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                                    <>
                                        {navigation.map((item, index) => (
                                            <Link key={index} to="/" className="w-full font-medium font-bold px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-blue-300 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 dark:focus:bg-blue-800 focus:outline-none dark:focus:bg-trueblue-700">

                                                {item}

                                            </Link>
                                        ))}


                                        <Link to="/" className="w-full px-6 py-2 mt-3 font-[grotesk] text-center text-white bg-[#4176FF] rounded-md lg:ml-5">

                                            Signin

                                        </Link>
                                    </>
                                </Disclosure.Panel>
                            </div>
                        </>
                    )}
                </Disclosure>

                {/* menu  */}
                <div className="hidden pl-18 text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        {navigation.map((menu, index) => (
                            <li className="mr-3 nav__item" key={index}>
                                <Link to="/" className="inline-block font-medium px-4 py-2 text-base font-bold text-gray-600 no-underline rounded-md dark:text-blue-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-blue-800">

                                    {menu}

                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden mr-3 space-x-4 lg:flex nav__item">

                    <Link to="/" className="px-6 py-2 bg-[#4176FF] font-medium text-white rounded-md md:ml-5">

                        Start Investing

                    </Link>

                    <Link to="/" className="px-6 py-2 font-medium text-[#4176FF]  border-2 border-[#4176FF] rounded-md md:ml-5">

                        Get Template

                    </Link>


                </div>
            </nav>
        </div>
    );
}
