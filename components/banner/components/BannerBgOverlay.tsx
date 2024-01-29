import bannerBg from "@/assets/imgs/page-bg.jpg"
import Image from "next/image"

const BannerBgOverlay = () => {
	return (
		<div className="absolute inset-0 -z-10 before:absolute before:inset-0 before:bg-gray-950 before:opacity-75">
			<Image
				src={bannerBg}
				alt=""
				className="w-full h-full object-cover"
			/>
		</div>
	)
}

export { BannerBgOverlay }
