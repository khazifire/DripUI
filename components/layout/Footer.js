import Image from 'next/image'
const Footer = () => {
    return ( 
        <footer className="flex h-16 py-2 border-t-2 border-gray-light  justify-center items-center text-white text-lg mt-auto">
            <a href="" target="_blank" rel="noopener noreferrer" className='flex justify-center items-center gap-2 no-underline text-drip-black'>Created with love by
              <span className='text-drip-black font-semibold font-Cursive text-2xl' >
                @khazifire
              </span>
          </a>/
            
          </footer>
     );
}
 
export default Footer;