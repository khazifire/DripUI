import Link from "next/link";

const Header = () => {
    return (
		<header
			className="sticky top-0 w-full border-b-2 bg-drip-white border-drip-gray-light "
			style={{
                border: "0px solid red",
                padding: "0px 10px"
			}}
		>
			<nav className="flex flex-row justify-between py-6 custom-container">
				<div className="flex flex-row items-center gap-4">
					<Link href="/">
						<a className="text-2xl font-bold md:text-3xl font-Cursive">
							DripUI
						</a>
					</Link>

					<Link href="/docs">
						<a className="pl-3 text-sm border-l-2 md:text-lg border-drip-black/20 hover:text-drip-black/80">
							Components
						</a>
					</Link>
					<a
						disabled
						className="pl-2 text-sm pointer-events-none md:text-lg text-drip-black/20"
					>
						Web Designs
					</a>
          
           <Link href="/docs/how-to-use">
                         <a className="pr-3 text-sm border-r-2 md:text-lg border-drip-black/20 hover:text-drip-black/80">How to use</a>
                    </Link>
				</div>

				<div className="">
					<a
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 text-sm md:text-lg group hover:text-drip-black/80"
						href="https://twitter.com/intent/tweet?url=https://khazifire.com&text=DripUI%20is%20a%20collection%20of%20free%20Tailwind%20CSS%20components%20that%20can%20be%20used%20in%20your%20next%20project.%20%0A-%20By%20@khazifire%0A"
					>
						<i className="text-lg ri-twitter-line group-hover:-rotate-12 "></i>{" "}
						Share on twitter
					</a>
				</div>
			</nav>
		</header>
	);

}
 
export default Header;