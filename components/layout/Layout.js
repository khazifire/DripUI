import Footer from "./Footer";
import Header from "./Header";


const Layout = ({children}) => {
    return ( 
        <>
        <div className="flex flex-col min-h-screen">
            <Header />
                 <div className="custom-container mb-2 mt-8">{children}</div>
            <Footer />
        </div>
        </>
     );
}
 
export default Layout;