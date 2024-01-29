"use client"

import { HeroAboutData } from "@/constants/hero"
import useDeviceType from "@/hooks/shared/useDeviceType"
import HeroAboutCard from "./HeroAboutCard"

const HeroAbout = () => {
	const { isMobile } = useDeviceType()

	if (isMobile) {
		return (
			<div className="p-4 bg-gray-800 text-gray-50 absolute -bottom-44 rounded-lg w-full shadow-md flex justify-center items-center">
				<div className="grid grid-cols-1 gap-4 w-full">
					{HeroAboutData.map(data => (
						<HeroAboutCard
							data={data}
							key={data.id}
						/>
					))}
				</div>
			</div>
		)
	}

	return (
		<div className="px-8 py-12 bg-gray-800 text-gray-50 h-28 w-full absolute bottom-0 shadow-md flex justify-center items-center">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
				{HeroAboutData.map(data => (
					<HeroAboutCard
						data={data}
						key={data.id}
					/>
				))}
			</div>
		</div>
	)
}

export default HeroAbout
