import Meta from "../../components/layout/meta"
import PageHeading from "../../components/other/PageHeadings"
import LogoFooter from "../../components/drip/footer/LogoFooter"
import AnimatedGrid from "../../components/drip/grid/animatedGrid"

export default function Grids(){
  return(
    <section className="lg:px-12 px-3 ">
      <Meta
        title={"DripUI - Tailwind CSS Grids"}
        description={
          "DripUI offers a wide range of responsive Grids"
        }
        url={"/components/grid"}
      />

      <PageHeading
        title={"Grid Components"}
        alt={"grid"}
        description={
          "Grid components provide a flexible layout system to organize content in a structured and responsive manner. DripUI includes a variety of grid layouts that adapt seamlessly across screen sizes, making it easy to display information in a clean and visually appealing way."
        }
      />

      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold">Animated Grid</h2>
        
          {/* Grid #1 */}
          <div className="mb-12">
            <h3 className="mb-4"> A dynamic and visually engaging way to highlight key features or services on your website. </h3>
            <AnimatedGrid  />
          </div>

      </section>
    </section>
  )
}