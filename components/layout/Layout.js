import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({children}) => {
    return ( 
        <>
        <Head>
            
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