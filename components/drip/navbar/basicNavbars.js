export const basicNavbars = [
    {
        type: "Navbar with animated three line Hamburger menu, with a translate animation on mobile devices",
        category: [
            {
                id: "Navbar-1",
                style: "flex justify-between items-center relative bg-black py-3 lg:px-12 px-6 text-white w-11/12 mx-auto",
                mobileStyle: "flex justify-between transition-all duration-500 ease-in items-center relative bg-black py-3 px-6 text-white w-11/12 mx-auto",
                labelStyle: "lg:hidden w-10 h-1 relative rounded-full bg-white after:w-10 after:h-1 after:rounded-full after:bg-white before:w-10 before:h-1 before:rounded-full before:bg-white after:absolute after:top-2 before:-top-2 before:absolute cursor-pointer peer-checked:before:top-0 peer-checked:after:top-0 peer-checked:after:rotate-45 peer-checked:before:-rotate-45  after:transition-transform after:duration-500 before:transition-transform before:duration-500 ease-in peer-checked:bg-transparent",
                mobileLabelStyle: "w-10 h-1 relative transition-all duration-500 ease-in rounded-full bg-white after:w-10 after:h-1 after:rounded-full after:bg-white before:w-10 before:h-1 before:rounded-full before:bg-white after:absolute after:top-2 before:-top-2 before:absolute cursor-pointer peer-checked:before:top-0 peer-checked:after:top-0 peer-checked:after:rotate-45 peer-checked:before:-rotate-45  after:transition-transform after:duration-500 before:transition-transform before:duration-500 ease-in peer-checked:bg-transparent",
                listContainerStyle: "lg:flex lg:translate-x-0 lg:peer-checked:static absolute lg:static -translate-x-[100vh] lg:basis-3/5 justify-evenly font-extrabold peer-checked:translate-x-0 top-[88px] transition-transform duration-500 left-0 right-0  bg-black lg:bg-transparent",
                mobileListContainerStyle: " absolute -translate-x-[200vh] justify-evenly font-extrabold peer-checked:translate-x-0 top-[88px] transition-all duration-700 left-0 right-0  bg-black",
                logoStyle: "w-16 h-16 basis-16 rounded-full bg-white text-black font-bold flex items-center justify-center",
                childrenStyle: "p-6 cursor-pointer flex lg:p-0 lg:hover:bg-inherit hover:bg-gray-500 transition-colors duration-700 ease-in",
                mobileChildrenStyle: "p-6 cursor-pointer flex hover:bg-gray-500 transition-colors duration-300 ease-in",
                children: [
                    {
                        id: "About-1",
                        text: "About",
                        href: "/docs/headers"
                    },
                    {
                        id: "Career-1",
                        text: "Career",
                        href: "/docs/headers"
                    },{
                        id: "Events-1",
                        text: "Events",
                        href: "/docs/headers"
                    },{
                        id: "Product-1",
                        text: "Product",
                        href: "/docs/headers"
                    },
                ]
            }
        ]
    },
    {
        type: "Navbar with an animated two line Hamburger menu, with a translate animation on mobile devices",
        category: [
            {
                id: "Navbar-2",
                style: "flex justify-between items-center relative bg-black py-3 lg:px-12 px-6 text-white w-11/12 mx-auto",
                mobileStyle: "flex justify-between transition-all duration-500 ease-in items-center relative bg-black py-3 px-6 text-white w-11/12 mx-auto",
                labelStyle: "lg:hidden w-10 h-1 relative rounded-full bg-transparent after:w-8 after:h-1 after:rounded-full after:bg-white before:w-8 before:h-1 before:rounded-full before:bg-white after:absolute after:top-1.5 before:-top-1.5 before:absolute cursor-pointer peer-checked:before:top-0 peer-checked:after:top-0 peer-checked:after:rotate-45 peer-checked:before:-rotate-45  after:transition-transform after:duration-500 before:transition-transform before:duration-500 ease-in peer-checked:bg-transparent",
                mobileLabelStyle: "w-10 h-1 relative transition-all duration-500 ease-in rounded-full bg-white after:w-10 after:h-1 after:rounded-full after:bg-white before:w-10 before:h-1 before:rounded-full before:bg-white after:absolute after:top-2 before:-top-2 before:absolute cursor-pointer peer-checked:before:top-0 peer-checked:after:top-0 peer-checked:after:rotate-45 peer-checked:before:-rotate-45  after:transition-transform after:duration-500 before:transition-transform before:duration-500 ease-in peer-checked:bg-transparent",
                listContainerStyle: "lg:flex lg:translate-x-0 lg:peer-checked:static absolute lg:static -translate-x-[100vh] lg:basis-3/5 justify-evenly font-extrabold peer-checked:translate-x-0 top-[88px] transition-transform duration-500 left-0 right-0  bg-black lg:bg-transparent",
                mobileListContainerStyle: " absolute -translate-x-[200vh] justify-evenly font-extrabold peer-checked:translate-x-0 top-[88px] transition-all duration-700 left-0 right-0  bg-black",
                logoStyle: "w-16 h-16 basis-16 rounded-full bg-white text-black font-bold flex items-center justify-center",
                childrenStyle: "p-6 cursor-pointer flex lg:p-0 lg:hover:bg-inherit hover:bg-gray-500 transition-colors duration-700 ease-in",
                mobileChildrenStyle: "p-6 cursor-pointer flex hover:bg-gray-500 transition-colors duration-300 ease-in",
                children: [
                    {
                        id: "About-1",
                        text: "About",
                        href: "/docs/headers"
                    },
                    {
                        id: "Career-1",
                        text: "Career",
                        href: "/docs/headers"
                    }, {
                        id: "Events-1",
                        text: "Events",
                        href: "/docs/headers"
                    }, {
                        id: "Product-1",
                        text: "Product",
                        href: "/docs/headers"
                    },
                ]
            }
        ]
    },
    {
        type: "Bordered Navbar with animated three line Hamburger menu, with a translate animation on mobile devices",
        category: [
            {
                id: "Navbar-3",
                style: "flex justify-between items-center relative border-black border-2 py-3 lg:px-12 px-6 lg:text-black text-white bg-white w-11/12 mx-auto",
                mobileStyle: "flex justify-between transition-all duration-500 border-black border-2 ease-in items-center relative bg-white py-3 px-6 text-white w-11/12 mx-auto",
                labelStyle: "lg:hidden w-10 h-1 relative rounded-full bg-black after:w-10 after:h-1 after:rounded-full after:bg-black before:w-10 before:h-1 before:rounded-full before:bg-black after:absolute after:top-2 before:-top-2 before:absolute cursor-pointer peer-checked:before:top-0 peer-checked:after:top-0 peer-checked:after:rotate-45 peer-checked:before:-rotate-45  after:transition-transform after:duration-500 before:transition-transform before:duration-500 ease-in peer-checked:bg-transparent",
                mobileLabelStyle: "w-10 h-1 relative transition-all duration-500 ease-in rounded-full bg-black after:w-10 after:h-1 after:rounded-full after:bg-black before:w-10 before:h-1 before:rounded-full before:bg-black after:absolute after:top-2 before:-top-2 before:absolute cursor-pointer peer-checked:before:top-0 peer-checked:after:top-0 peer-checked:after:rotate-45 peer-checked:before:-rotate-45  after:transition-transform after:duration-500 before:transition-transform before:duration-500 ease-in peer-checked:bg-transparent",
                listContainerStyle: "lg:flex lg:translate-x-0 lg:peer-checked:static absolute lg:static -translate-x-[100vh] lg:basis-3/5 justify-evenly font-extrabold peer-checked:translate-x-0 top-[88px] transition-transform duration-500 left-0 right-0  bg-black lg:bg-transparent",
                mobileListContainerStyle: " absolute -translate-x-[200vh] justify-evenly font-extrabold peer-checked:translate-x-0 top-[88px] transition-all duration-700 left-0 right-0  bg-black",
                logoStyle: "w-16 h-16 basis-16 rounded-full bg-black text-white font-bold flex items-center justify-center",
                childrenStyle: "p-6 cursor-pointer flex lg:p-0 lg:hover:bg-inherit hover:bg-gray-500 transition-colors duration-700 ease-in",
                mobileChildrenStyle: "p-6 cursor-pointer flex hover:bg-gray-500 transition-colors text-white duration-300 ease-in",
                children: [
                    {
                        id: "About-1",
                        text: "About",
                        href: "/docs/headers"
                    },
                    {
                        id: "Career-1",
                        text: "Career",
                        href: "/docs/headers"
                    },{
                        id: "Events-1",
                        text: "Events",
                        href: "/docs/headers"
                    },{
                        id: "Product-1",
                        text: "Product",
                        href: "/docs/headers"
                    },
                ]
            }
        ]
    },
    {
        type: "Bordered Navbar with an animated two line Hamburger menu, with a translate animation on mobile devices",
        category: [
            {
                id: "Navbar-4",
                style: "flex justify-between items-center relative border-black border-2 py-3 lg:px-12 px-6 lg:text-black text-white w-11/12 bg-white mx-auto",
                mobileStyle: "flex justify-between transition-all duration-500 ease-in items-center relative border-black border-2 bg-white py-3 px-6 text-white w-11/12 mx-auto",
                labelStyle: "lg:hidden w-10 h-1 relative rounded-full bg-transparent after:w-8 after:h-1 after:rounded-full after:bg-black before:w-8 before:h-1 before:rounded-full before:bg-black after:absolute after:top-1.5 before:-top-1.5 before:absolute cursor-pointer peer-checked:before:top-0 peer-checked:after:top-0 peer-checked:after:rotate-45 peer-checked:before:-rotate-45  after:transition-transform after:duration-500 before:transition-transform before:duration-500 ease-in peer-checked:bg-transparent",
                mobileLabelStyle: "w-10 h-1 relative transition-all duration-500 ease-in rounded-full bg-transparent after:w-10 after:h-1 after:rounded-full after:bg-black before:w-10 before:h-1 before:rounded-full before:bg-black after:absolute after:top-2 before:-top-2 before:absolute cursor-pointer peer-checked:before:top-0 peer-checked:after:top-0 peer-checked:after:rotate-45 peer-checked:before:-rotate-45  after:transition-transform after:duration-500 before:transition-transform before:duration-500 ease-in peer-checked:bg-transparent",
                listContainerStyle: "lg:flex lg:translate-x-0 lg:peer-checked:static absolute lg:static -translate-x-[100vh] lg:basis-3/5 justify-evenly font-extrabold peer-checked:translate-x-0 top-[88px] transition-transform duration-500 left-0 right-0  bg-black lg:bg-transparent",
                mobileListContainerStyle: " absolute -translate-x-[200vh] justify-evenly font-extrabold peer-checked:translate-x-0 top-[88px] transition-all duration-700 left-0 right-0  bg-black",
                logoStyle: "w-16 h-16 basis-16 rounded-full bg-black text-white font-bold flex items-center justify-center",
                childrenStyle: "p-6 cursor-pointer flex lg:p-0 lg:hover:bg-inherit hover:bg-gray-500 transition-colors duration-700 ease-in",
                mobileChildrenStyle: "p-6 cursor-pointer flex hover:bg-gray-500 text-white transition-colors duration-300 ease-in",
                children: [
                    {
                        id: "About-1",
                        text: "About",
                        href: "/docs/headers"
                    },
                    {
                        id: "Career-1",
                        text: "Career",
                        href: "/docs/headers"
                    }, {
                        id: "Events-1",
                        text: "Events",
                        href: "/docs/headers"
                    }, {
                        id: "Product-1",
                        text: "Product",
                        href: "/docs/headers"
                    },
                ]
            }
        ]
    }
] 