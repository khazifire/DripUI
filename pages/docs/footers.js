import Meta from "../../components/layout/meta"
import PageHeading from "../../components/other/PageHeadings"
import Footer from "../../components/drip/footer/Footer"
import LogoFooter from "../../components/drip/footer/LogoFooter"

export default function Footers(){
  return(
    <section className="lg:px-12 px-3 ">
      <Meta
        title={"DripUI - Tailwind CSS Footers"}
        description={
          "DripUI offers a wide range of responsive Footers"
        }
        url={"/components/footer"}
      />

      <PageHeading
        title={"Footer Components"}
        alt={"footer"}
        description={
          "The footer component is an important place for a website to store important links and contact information. DripUI provides wide range of responsive footers"
        }
      />

      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold">Basic Footers</h2>
          {/* Foorter #1 */}
          <div className="mb-12">
            <h3 className="mb-4"> Basic strip footer with links and Copyright </h3>
            <Footer  />
          </div>

          <div className="mb-12">
            <h3 className="mb-4"> Footer with a logo section and important links </h3>
            <LogoFooter />  
          </div>

      </section>
    </section>
  )
}