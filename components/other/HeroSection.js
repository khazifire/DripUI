import Hero from "./Svg/Hero";
import Arrow from "./Svg/icons/doodleArrow";

const HeroSection = () => {
    return ( 
        <section className='flex flex-col sm:items-center sm:justify-center sm:flex-row'>
          <div className='xl:ml-32'>
            <Hero style="w-48 md:w-48 lg:w-80" />
          </div>
          <div className='relative flex flex-col gap-2 xl:w-1/2 text-drip-black'>
              <h1 className='text-5xl font-bold md:text-7xl font-Cursive'>DripUI</h1>
              <h2 className='text-3xl font-semibold md:text-4xl font-Cursive'>Tailwind CSS Components</h2>

              {/* <h3 className='text-xl md:text-2xl md:w-[60%] font-Inter'>DripUI is a collection of free Tailwind CSS components to bootstrap your new apps, projects or landing sites!</h3> */}
              <h3 className='text-xl md:text-2xl md:w-[60%] font-Inter'>DripUI is a collection of free UI components to help you develop your component easier and better!</h3>
               <div className='absolute -top-12 right-24 md:left-56 -md:top-0 rotate-12 animate-pulse'>
                <span className='text-xl italic font-semibold md:text-2xl font-Cursive '>Free Open Source </span>
                <Arrow/>

              </div>     
          </div>
        </section>
     );
}
 
export default HeroSection;