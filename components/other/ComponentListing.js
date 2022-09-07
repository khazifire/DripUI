import Link from 'next/link'
import { useState, useEffect } from 'react';

const ComponentListing = ({featured=0}) => {
    const [list, setList] = useState(undefined)
    const components =[
        {
            'name':'buttons',
            'count':3,
            'icon': 'ri-toggle-line',
            'featured':true
        },
        {
            'name':'cards',
            'count':4,
            'icon':'ri-refund-line',
            'featured':true
        },
        {
            'name':'headers',
            'count':undefined,
            'icon': 'ri-layout-top-line',
            'featured':false
        },
        {
            'name':'footers',
            'count':undefined,
            'icon': 'ri-layout-bottom-line',
            'featured':false
        },
      
    ]

    useEffect(() => {
       if(featured != 0){
        setList([...components.slice(0,featured)])
       }
    },[featured]);


    return ( 
        <div className='grid grid-cols-2 gap-4 my-1 md:grid-cols-4 xl:grid-cols-6'>
            {(list||components)?.map((component) =>(
                <Link key={component.name} href={`/docs/${(component.count)?component.name :'#'}`}>
                    <a  className={`${(!component.count)?'opacity-60 pointer-events-none' :''} group component-listing-a `}>
                        <i className={`${component.icon} text-3xl`}></i>
                        {component.name}
                        <span className='text-sm'>
                            {(component.count>1)?
                                `${component.count} Components`:
                                (component.count)?
                                    `${component.count} Component`:
                                    'coming soon'}
                        </span>

                        <i className="ri-external-link-line absolute right-3 top-2 text-[17px] group-hover:animate-spin"></i>
                    </a>
                </Link>
            ))}


          </div>
     );
}
 
export default ComponentListing;