import Head from "next/head";

const Meta = ({title,description, url='/'}) => {
    return ( 
        <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>{title}</title>
            <meta name="title" content={title}/>
            <meta name="description" content={description}/>

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
            <meta property="og:url" content={`https://dripui.vercel.app${url}`}/>
            <meta property="og:image" content="https://dripui.vercel.app/cover.png"/>
            <meta property="og:description" content={description}/>

            {/* <!-- Twitter --> */}
            <meta property="twitter:title" content={title}/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={`https://dripui.vercel.app${url}`}/>
            <meta property="twitter:image" content="https://dripui.vercel.app/cover.png"/>
            <meta property="twitter:description" content={description}/>
        </Head>
     );
}
 
export default Meta;