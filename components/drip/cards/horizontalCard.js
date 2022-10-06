const HorizontalCard = () => {
    return (
        <div className='relative flex flex-col gap-2 '>
            <h2>Horizontal Card</h2>

            <div className='flex flex-row w-full max-w-sm gap-2 rounded-lg shadow shadow-drip-black/30'>
                <div className='p-4'>
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight">Centering a div made easy with Tailwind CSS</h3>
                    <p>I have been working with Tailwind CSS and I wanted to quickly show you how to center a div using Tailwind.</p>
                </div>

                <img className="object-cover object-center rounded-r-lg h-auto" src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=200&h=280&dpr=1' alt='horizontal card' />
            </div> 
        </div>
     );
}
 
export default HorizontalCard;