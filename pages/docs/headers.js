import { basicNavbars } from "../../components/drip/navbar/basicNavbars";
import Navbar from "../../components/drip/navbar/Navbar";
import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";
import CodePanel from "../../components/other/CodePanel";
import { NavbarsSnippets } from "../../components/drip/navbar/navbarsCodeSnippets";

export default function Headers() {

  return (
    <section className="lg:px-12 px-3 ">
      <Meta
        title={"DripUI - Tailwind CSS Headers"}
        description={
          "DripUI offers a wide range of responsive NavBars, including outlined navbar, animated hamburger menus, ...."
        }
        url={"/components/header"}
      />
      <PageHeading
        title={"Header Components"}
        alt={"header"}
        description={
          "The Header component is needed in applications and websites as a site must have a form of navigation for users, DripUI offers a wide range of responsive NavBars, including outlined navbar with animated hamburger menus for mobile state."
        }
      />

      <section className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold mb-6">Basic Navbars</h2>
          <CodePanel title="Navbars" snippets={NavbarsSnippets}>
            <div className="flex flex-col w-full lg:gap-14">
              {basicNavbars.map((navbar, index) => (<Navbar key={"Nav" + index} {...{ navbar }} />))}
            </div>
          </CodePanel>
      </section>
    </section>
  );
}
