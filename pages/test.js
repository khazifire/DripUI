import Link from "next/link";

export default function Test() {
  return (
    <>
      <nav className="flex justify-between items-center relative bg-drip-black py-3 lg:px-12 px-6 text-white w-10/12 mx-auto">
        <input type={"checkbox"} id="check" className="hidden peer" />
        <div className="w-16 h-16 basis-16 rounded-full bg-white text-drip-black flex items-center justify-center">
          Logo
        </div>
              <ul className="lg:flex lg:translate-x-0 lg:peer-checked:static absolute lg:static -translate-x-[100vh] lg:basis-3/5 justify-evenly font-bold peer-checked:translate-x-0 top-[88px] transition-transform duration-500 left-0 right-0  bg-black lg:bg-transparent">
          <li>
            <Link href={"/"}>
              <span className="p-6 cursor-pointer flex lg:p-0 hover:bg-gray-500 transition-colors duration-700 ease-in">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <span className="p-6 cursor-pointer flex lg:p-0 hover:bg-gray-500 transition-colors duration-700 ease-in">
                Career
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <span className="p-6 cursor-pointer flex lg:p-0 hover:bg-gray-500 transition-colors duration-700 ease-in">
                Events
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <span className="p-6 cursor-pointer flex lg:p-0 hover:bg-gray-500 transition-colors duration-700 ease-in">
                Product
              </span>
            </Link>
          </li>
        </ul>
        <label
          htmlFor="check"
                  className="lg:hidden w-10 h-1 relative rounded-full bg-white after:w-10 after:h-1 after:rounded-full after:bg-white before:w-10 before:h-1 before:rounded-full before:bg-white after:absolute after:top-2 before:-top-2 before:absolute cursor-pointer peer-checked:before:top-0 peer-checked:after:top-0 peer-checked:after:rotate-45 peer-checked:before:-rotate-45  after:transition-transform after:duration-500 before:transition-transform before:duration-500 ease-in peer-checked:bg-transparent"
        ></label>
      </nav>
    </>
  );
}
