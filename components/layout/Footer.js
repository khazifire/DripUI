import Image from 'next/image'
const Footer = () => {
    return (
		<footer
			className="flex flex-row items-center justify-center gap-2 text-drip-black"
			style={{
				border: "0px solid red",
				padding: "0px 10px",
			}}
		>
			<p>Created with love by</p>
			<a
				href="https://twitter.com/khazifire"
				target="_blank"
				rel="noopener noreferrer"
				className="no-underline hover:underline text-2xl font-semibold text-drip-black font-Cursive"
			>
				@khazifire
			</a>
		</footer>
	);
}
 
export default Footer;