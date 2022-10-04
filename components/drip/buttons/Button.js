export default function Button(btns) {
    return (
        <div key={btns.type} className='flex flex-col gap-2 '>
            <h2>{btns.type}</h2>

            <div className='flex flex-wrap w-full gap-8 p-4 rounded-lg shadow-inner shadow-drip-black/30'>
                {btns.category.map((btn) => (
                    <div key={btn.id} className='relative flex flex-col gap-1 '>
                        {/* button */}
                        <div>
                            <button
                                id={btn.id}
                                // ref={btnAreaRef}
                                onClick={() => copyToClipboard(btn.id)}
                                className={`text-sm px-5 py-3  ${btn.style}`}
                            >
                                Get Started
                                {!!btn.icon && (<svg className={`flex-shrink-0 w-4 h-4 ml-3 ${btn.icon} ${btn.iconHover} group-hover:translate-x-1`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" /></svg>)}
                            </button>
                        </div>
                        {/* success msg on copy */}
                        {(CopySuccess && btnId == btn.id) ? <span className='absolute inline-flex gap-1 py-2 text-sm -bottom-8'>Copied! <i className="ri-chat-smile-2-line animate-bounce"></i> </span> : ""}
                    </div>
                ))}
            </div>

        </div>
    )
}