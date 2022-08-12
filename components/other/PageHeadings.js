const PageHeading = ({title, description, isComponent=true, alt=undefined}) => {
    return ( 
        <article className='mb-4 md:w-1/2 text-drip-black'>
            <h1 className='text-5xl font-semibold font-Cursive'>{title}</h1>
            <p className="mt-4 text-lg text-drip-gray-dark">{description}</p>
            {isComponent && <p className='mt-4'><span className='font-semibold'>How to use: </span>simply click on the {alt} you like</p>}
        </article>
     );
}
export default PageHeading;