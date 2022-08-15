const DefaultCard = () => {
    return ( 
      <div className="flex flex-row gap-4">

            <div className='flex flex-col gap-2 '>
                <h2>Default Card</h2>
                <div className='flex flex-col w-full max-w-sm gap-2 p-4 rounded-lg shadow shadow-drip-black/30'>
                    <h3 className="text-2xl font-semibold tracking-tight">Centering a div made easy with Tailwind CSS</h3>
                    <p>I have been working with Tailwind CSS and I wanted to quickly show you how to center a div using Tailwind.</p>
                </div>       
            </div>

            <div className='flex flex-col gap-2 '>
                <h2>Default Card + btn</h2>
                <div className='flex flex-col w-full max-w-sm gap-2 p-4 rounded-lg shadow shadow-drip-black/30'>
                    <h3 className="text-2xl font-semibold tracking-tight">Centering a div made easy with Tailwind CSS</h3>
                    <p>I have been working with Tailwind CSS and I wanted to quickly show you how to center a div using Tailwind.</p>
                <button className="px-5 py-3 mt-1 text-sm text-white bg-gray-700 rounded-lg hover:bg-gray-700/90"> Read More</button>
                      
                </div> 
            </div>

            <div className='flex flex-col gap-2 '>
                <h2>Default Card + btn</h2>
                <div className='flex flex-col w-full max-w-sm gap-2 p-4 rounded-lg shadow shadow-drip-black/30'>
                    <h3 className="text-2xl font-semibold tracking-tight">Centering a div made easy with Tailwind CSS</h3>
                    <p>I have been working with Tailwind CSS and I wanted to quickly show you how to center a div using Tailwind.</p>
                    <div>
                        
                        <button className="inline-flex items-center px-5 py-3 mt-1 text-sm text-white bg-gray-700 rounded-lg hover:bg-gray-700/90 group"> Read More 
                        <svg className={`flex-shrink-0 w-4 h-4 ml-3 text-white group-hover:translate-x-1`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>

                        </button>
                    </div>
                      
                </div> 
            </div>

        
      </div>
           
       
     );
}
 
export default DefaultCard;