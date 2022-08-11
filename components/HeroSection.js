import Hero from "./Svgs/Hero";
import Arrow from "./Svgs/icons/doodleArrow";

const HeroSection = () => {
    return ( 
        <section className='flex flex-row items-center justify-center'>
          <div className='xl:ml-32'>
            <Hero style="w-40 md:w-48 lg:w-80" />
          </div>
          <div className='xl:w-1/2 flex flex-col gap-2 relative text-drip-black'>
              <h1 className='text-xl md:text-7xl font-bold font-Cursive'>DripUI</h1>
              <h2 className='text-2xl md:text-4xl font-semibold font-Cursive'>Tailwind CSS Components</h2>
              <h3 className='text-xl md:text-2xl md:w-[60%] font-Inter border-b-2 border-drip-black pb-4'>DripUI is a collection of free Tailwind CSS components to bootstrap your new apps, projects or landing sites!</h3>

               <div className='absolute -top-12 left-32 md:left-56 -md:top-0 rotate-12 animate-pulse'>
                <span className='text-2xl italic  font-Cursive font-semibold '>Free Open Source </span>
                <Arrow/>

              </div>     
          </div>
        </section>
     );
}
 
export default HeroSection;