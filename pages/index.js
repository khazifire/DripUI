import Head from 'next/head'
import Link from 'next/link'
import Meta from '../components/layout/meta'
import ComponentListing from '../components/other/ComponentListing'
import HeroSection from '../components/other/HeroSection'


export default function Home() {

  return (
    <>
      <Meta 
        title={'DripUI - Tailwind Components'} 
        description="DripUI a collection of free Tailwind CSS components to bootstrap your new apps, projects or landing pages!" 
        />
      
      <HeroSection />
      <section className='mt-16 md:mt-4'>
        <h2 className='text-3xl'>Components</h2>
        <p className="mt-2 mb-4 text-lg text-drip-gray-dark">UI Tailwind CSS components, that will help you save your time</p>
        <ComponentListing featured={6}/>
      </section>
    </>
  )
}
