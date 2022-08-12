import Head from "next/head";

const Meta = ({title='DripUI - Tailwind Components',description=undefined, url='',}) => {
    return ( 
        <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>DripUI - Tailwind Components</title>
            <meta name="title" content={title}/>
            <meta name="description" content={description||"DripUI a collection of free Tailwind CSS components to bootstrap your new apps, projects or landing sites!"}/>

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
            <meta property="og:url" content="https://metatags.io/"/>
            <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
            <meta property="og:description" content={description||"DripUI a collection of free Tailwind CSS components to bootstrap your new apps, projects or landing sites!"}/>

            {/* <!-- Twitter --> */}
            <meta property="twitter:title" content={title}/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://metatags.io/"/>
            <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
            <meta property="twitter:description" content={description||"DripUI a collection of free Tailwind CSS components to bootstrap your new apps, projects or landing sites!"}/>
        </Head>
     );
}
 
export default Meta;