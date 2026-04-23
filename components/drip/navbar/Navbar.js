import Link from "next/link";
import { useState } from "react";
import { Desktop } from "./icons";
import Mobile from "./icons/Mobile";
import { CodeVariant } from "../../other/CodePanel";

export default function Navbar({ navbar }) {
  const [desktopPreview, setDesktopPreview] = useState(true);
  return (
    <div>
      <p className="text-lg font-bold mb-8">{navbar.type}</p>
      
      {navbar.category.map((nav) => (
        <CodeVariant id={nav.id} key={nav.id}>
        <div className="flex flex-col w-full mx-auto gap-8 p-4 pt-6 rounded-lg shadow-lg shadow-slate-500/30">
          <div className="lg:flex gap-2 hidden">
            
            <Desktop className={`w-6 h-6 cursor-pointer ${desktopPreview ? \`fill-blue-600\` : \`fill-black\`} transition-colors duration-200 ease-in`} onClick={()=> setDesktopPreview(true) } />
            <Mobile className={`w-6 h-6 cursor-pointer ${!desktopPreview ? \`fill-blue-600\` : \`fill-black\`} transition-colors duration-200 ease-in`} onClick={()=> setDesktopPreview(false) } />
          </div>
            <nav className={desktopPreview ? nav.style : nav.mobileStyle}>
              <input
                type={"checkbox"}
                id={`${nav.id}-checkbox`}
                className="hidden peer"
              />
              <div className={nav.logoStyle}>Logo</div>
              <ul className={desktopPreview ? nav.listContainerStyle : nav.mobileListContainerStyle}>
                {nav.children.map((child) => (
                  <li key={child.id}>
                    <Link href={child.href}>
                      <span className={desktopPreview ? nav.childrenStyle : nav.mobileChildrenStyle }>{child.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='relative flex items-center justify-center w-12 h-12 cursor-pointer'>
              <label
                htmlFor={`${nav.id}-checkbox`}
                className={desktopPreview ? nav.labelStyle : nav.mobileLabelStyle}
              ></label>
              </div>
            </nav>
        </div>
        </CodeVariant>
      ))}
    </div>
  );
}
