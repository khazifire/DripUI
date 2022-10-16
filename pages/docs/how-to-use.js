import Head from 'next/head'
import { useRef,useState } from 'react';
import { BasicBtns } from '../../components/drip/buttons/basicBtsns';
import { ColoredShadowBtns } from '../../components/drip/buttons/coloredShadowBtns';
import DefaultCard from '../../components/drip/cards/defaultCard';
import StickyHeader from '../../components/drip/header/StickyHeader';
import Meta from '../../components/layout/meta';
import PageHeading from '../../components/other/PageHeadings';


export default function Installation() {
 

  return (
    <>
        <Meta 
          title={'DripUI - How to use'} 
          description={'DripUI offers a wide range of card made with tailwindCss you can use in your projects'}
          url={'/components/cards'} 
        />
        <PageHeading 
          title={'Installation Process'}
          alt={''}
          description={'Coming soon'} 
          isComponent={false}
        />
      
        <section>
            
        </section>
    </>
  )
}
