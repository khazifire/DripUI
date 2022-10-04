import { useRef, useState } from "react";
import copyToClipboard from "../../../utils/function/copyToClipBoard";

export default function SingleButton(btn) {
    const [CopySuccess, setCopySuccess] = useState(false);
    const btnEL = useRef(null);
  return (
      <div className='relative flex flex-col gap-1 '>
          {/* button */}
          <div>
              {!btn.btns.icons
                  ?
                  <button
                      ref={btnEL}
                      onClick={() => copyToClipboard(btnEL, setCopySuccess)}
                      className={`text-sm px-5 py-3  ${btn.style}`}
                  >
                      Get Started

                  </button>
                  :
                  <button
                      ref={btnEL}
                      onClick={() => copyToClipboard(btnEL, setCopySuccess)}
                      className={`text-sm px-4 py-3 group inline-flex items-center ${btn.style}`}
                  >
                      Get Started
                      <svg className={`flex-shrink-0 w-4 h-4 ml-3 ${btn.icon} ${btn.iconHover} group-hover:translate-x-1 transition-transform duration-500 ease-in`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" /></svg>
                  </button>
              }

          </div>
          {CopySuccess  ? <span className='absolute inline-flex gap-1 py-2 text-sm -bottom-8'>Copied! <i className="ri-chat-smile-2-line animate-bounce"></i> </span> : ""}
      </div>
      
  );
}