"use client"

import { ICON_SIZE_DESKTOP, ICON_SIZE_MOBILE } from "@/constants/contact-us"
import useDeviceType from "@/hooks/shared/useDeviceType"
import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi"
import Heading from "../shared/Heading"
import Section from "../shared/Section"

const ContactUs = () => {
	const { isMobile } = useDeviceType()

	if (isMobile) {
		return (
			<Section cls="bg-gray-950 text-gray-50">
				<Heading
					cls="items-center"
					sub="Contact Me"
					title="Get In Touch"
				/>
				<h4 className="text-base text-center">Have A Project In Mind?. Send Me A DM.</h4>
				<div className="grid grid-cols-2 mt-8 gap-4">
					<div className="col-span-1 flex justify-center items-center flex-col">
						<Link
							href="https://wa.link/sw1jx0"
							target="_blank">
							<BsWhatsapp size={ICON_SIZE_MOBILE} />
						</Link>
						<p className="text-[.7rem]">07040354706</p>
					</div>
					<div className="col-span-1 flex justify-center items-center flex-col">
						<Link
							href="https://www.linkedin.com/in/benjamin-ovu-b3b294237/"
							target="_blank">
							<FaLinkedinIn size={ICON_SIZE_MOBILE} />
						</Link>
						<p className="text-[.7rem]">Benjamin Ovu</p>
					</div>
					<div className="col-span-2 flex justify-center items-center flex-col">
						<Link
							href="mailto:official.benjaminovu@gmail.com"
							target="_blank">
							<TfiEmail size={ICON_SIZE_MOBILE} />
						</Link>
						<p className="text-[.7rem]">official.benjaminovu@gmail.com</p>
					</div>
				</div>
			</Section>
		)
	}

	return (
		<Section cls="bg-gray-950 text-gray-50">
			<Heading
				cls="items-center"
				sub="Contact Me"
				title="Get In Touch"
			/>
			<h4 className="text-base text-center">Have A Project In Mind?. Send Me A DM.</h4>
			<div className="grid grid-cols-3 mt-8">
				<div className="col-span-1 flex justify-center items-center flex-col">
					<Link
						href="https://wa.link/sw1jx0"
						target="_blank">
						<BsWhatsapp size={ICON_SIZE_DESKTOP} />
					</Link>
					<p className="text-sm">07040354706</p>
				</div>
				<div className="col-span-1 flex justify-center items-center flex-col">
					<Link
						href="mailto:official.benjaminovu@gmail.com"
						target="_blank">
						<TfiEmail size={ICON_SIZE_DESKTOP} />
					</Link>
					<p className="text-sm">official.benjaminovu@gmail.com</p>
				</div>
				<div className="col-span-1 flex justify-center items-center flex-col">
					<Link
						href="https://www.linkedin.com/in/benjamin-ovu-b3b294237/"
						target="_blank">
						<FaLinkedinIn size={ICON_SIZE_DESKTOP} />
					</Link>
					<p className="text-sm">Benjamin Ovu</p>
				</div>
			</div>
		</Section>
	)
}

export default ContactUs
