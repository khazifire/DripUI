import Link from "next/link";

const Header = () => {
    return ( 
        <header className="top-0 sticky w-full bg-drip-white border-b-2 border-gray-light ">
              <nav className="custom-container flex flex-row justify-between py-6">
                  <div className="flex flex-row gap-4  items-center">
                      <Link href="/">
                          <a className="text-3xl font-bold font-Cursive">DripUI</a>
                      </Link>

                      <Link href="/components">
                          <a className="border-l-2 border-drip-black/20 pl-3 text-lg">Components</a>
                      </Link>
                      
                          <a disabled className="pl-2 text-lg text-drip-black/20 pointer-events-none">Web Designs</a>
                    
                  </div>

                  <div className="">
                      <a target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 group" href="https://twitter.com/intent/tweet?url=https://khazifire.com&text=DripUI%20is%20a%20collection%20of%20free%20Tailwind%20CSS%20components%20that%20can%20be%20used%20in%20your%20next%20project.%20%0A-%20By%20@khazifire%0A"><i className="ri-twitter-line text-lg group-hover:-rotate-12 "></i> Share it on twitter</a>
                     
                  </div>
              </nav>
          </header>
     );
}
 
export default Header;