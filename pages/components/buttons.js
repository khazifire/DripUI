import Head from 'next/head'
import { useRef,useState } from 'react';
import { BasicBtns } from '../../components/drip/buttons/basicBtsns';
import Meta from '../../components/layout/meta';
import PageHeading from '../../components/other/PageHeadings';


export default function Buttons() {
  const btnAreaRef = useRef(null);
  const [CopySuccess, setCopySuccess] = useState(false);
  const [btnId, setBtnId] = useState();


  
  const copyToClipboard = async (buttonId) => {
    setCopySuccess(false);
      try {
        await navigator.clipboard.writeText(btnAreaRef.current.outerHTML);
        setCopySuccess(true);
        setBtnId(buttonId)
      } catch (error) {
        setCopySuccess(false);
      }
      setTimeout(()=>{
        setCopySuccess(false)
        setBtnId()
      }, 4000)
  };


  return (
    <>
        <Meta 
          title={'DripUI - Tailwind CSS Buttons'} 
          description={'DripUI offers a wide range of button styles and sizes, including outlined buttons, multiple colors and sizes, buttons with icons, and more.'}
          url={'/components/buttons'} 
        />
        <PageHeading 
          title={'Button Components'}
          alt={'button'}
          description={'The button component is commonly used in application and websites to launch an action or link to other pages. DripUI offers a wide range of button styles and sizes, including outlined buttons, multiple colors and sizes, buttons with icons, and more.'} 
        />
      
        <section className='grid grid-cols-1 gap-16 md:grid-cols-2'>
                <div className='flex flex-col gap-4'>
                  {BasicBtns.map((btns) =>(
                    <div key={btns.type} className='flex flex-col gap-2 '>
                    <h2>{btns.type}</h2>

                        <div className='flex flex-wrap w-full gap-8 p-4 rounded-lg shadow-inner shadow-drip-black/30'>
                          {btns.category.map((btn) =>(
                              <div key={btn.id} className='relative flex flex-col gap-1 '>
                                {/* button */}
                                  <div>
                                        <button ref={btnAreaRef} onClick={()=>copyToClipboard(btn.id)} className={`text-sm px-5 py-3  ${btn.style}`}
                                          > Get Started 
                                        </button>
                                  </div>
                                {/* success msg on copy */}
                                  {(CopySuccess && btnId==btn.id)? <span className='absolute inline-flex gap-1 py-2 text-sm -bottom-8'>Copied! <i className="ri-chat-smile-2-line animate-bounce"></i> </span>:""}
                              </div>
                          ))}
                      </div>
                    
                  </div>
                  ))}
                </div>

                <div className='flex flex-col gap-4'>
                  {BasicBtns.map((btns) =>(
                    <div key={btns.type} className='flex flex-col gap-2 '>
                    <h2>{btns.type} + Icon</h2>

                        <div className='flex flex-wrap w-full gap-8 p-4 rounded-lg shadow-inner shadow-drip-black/30'>
                          {btns.category.map((btn) =>(
                              <div key={btn.id} className='relative flex flex-col gap-1 '>
                                {/* button */}
                                  <div>
                                        <button ref={btnAreaRef} onClick={()=>copyToClipboard(`${btn.id}Icon`)} className={`text-sm px-4 py-3 group inline-flex items-center ${btn.style}`}
                                          > Get Started
                                          <svg className={`flex-shrink-0 w-4 h-4 ml-3 ${btn.icon} ${btn.iconHover} group-hover:translate-x-1`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                                        </button>
                                  </div>
                                {/* success msg on copy */}
                                  {(CopySuccess && btnId==`${btn.id}Icon`)? <span className='absolute inline-flex gap-1 py-2 text-sm -bottom-8'>Copied! <i className="ri-chat-smile-2-line animate-bounce"></i> </span>:""}
                              </div>
                          ))}
                      </div>
                    
                  </div>
                  ))}
                </div>

        </section>
    </>
  )
}
