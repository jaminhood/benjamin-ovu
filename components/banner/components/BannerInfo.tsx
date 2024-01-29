const BannerInfo = ({ heading, tagline }: any) => {
	return (
		<div className="flex justify-center items-center flex-col text-zinc-50">
			<h1 className="text-4xl md:text-7xl leading-10 font-bold capitalize">{heading}</h1>
			<h6 className="text-lg font-normal capitalize mt-4 inline-block py-2">{tagline}</h6>
		</div>
	)
}

export { BannerInfo }
