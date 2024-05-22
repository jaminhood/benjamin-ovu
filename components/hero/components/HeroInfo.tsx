import Link from "next/link"

const HeroInfo = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 text-gray-50 w-full">
			<div className="flex justify-center items-center text-center md:text-left md:items-start flex-col gap-4">
				<h6 className="text-lg font-normal capitalize mt-4 border-b-2 border-green-500 inline-block py-2">Hi There, I Am</h6>
				<h1 className="text-5xl md:text-7xl leading-10 font-bold capitalize">Benjamin Ovu</h1>
				<h6 className="text-lg font-normal capitalize mt-4 border-l-2 border-r-2 md:border-r-0 border-green-500 inline-block py-2 px-4">A Software Engineer</h6>
				<Link
					href="https://drive.google.com/file/d/1psbzSOhUS2ITgaPonwRGT_5rGIffWdHp/view?usp=sharing"
					target="_blank">
					<button className="py-2 px-6 mt-4 bg-green-500 text-gray-50 border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all ease-in-out duration-500 block">Download CV.</button>
				</Link>
			</div>
		</div>
	)
}

export default HeroInfo
