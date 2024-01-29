import useDeviceType from "@/hooks/shared/useDeviceType"
import { AboutContactMobile } from "./AboutContactMobile"

const AboutContact = () => {
	const { isMobile } = useDeviceType()

	if (isMobile) return <AboutContactMobile />

	return (
		<div className="py-4">
			<p className="text-sm flex justify-between items-center">
				<span className="font-bold w-1/3 inline-block">Phone:</span>
				<span className="font-normal w-2/3 inline-block">+2347040354706.</span>
			</p>
			<p className="text-sm flex justify-between items-center mt-4">
				<span className="font-bold w-1/3 inline-block">E-mail:</span>
				<span className="font-normal w-2/3 inline-block">official.benjaminovu@gmail.com</span>
			</p>
		</div>
	)
}

export default AboutContact
