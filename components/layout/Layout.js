import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
    return ( 
        <>
        <Head>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="mt-8 mb-2 custom-container">{children}</main>
            <Footer />
        </div>
        </>
     );
}
 
export default Layout;