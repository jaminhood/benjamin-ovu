"use client"

import useDeviceType from "@/hooks/shared/useDeviceType"
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai"
import { BsWordpress } from "react-icons/bs"
import { DiCss3, DiSass } from "react-icons/di"
import { FaBootstrap, FaNode } from "react-icons/fa"
import { SiAppwrite, SiFirebase, SiJavascript, SiMongodb, SiMysql, SiNetlify, SiPhp, SiTailwindcss, SiTypescript } from "react-icons/si"
import Heading from "../shared/Heading"
import Section from "../shared/Section"

const Skills = () => {
	const { isMobile } = useDeviceType()

	if (isMobile) {
		return (
			<Section cls="bg-gray-950 text-gray-50">
				<Heading
					cls="items-center"
					sub="My Skills"
					title="My Tech Weapons"
				/>
				<div className="grid grid-cols-1 gap-8 pt-4">
					<div className="col-span-1 text-center">
						<h3 className="capitalize text-2xl">CMS</h3>
						<div className="flex gap-8 justify-center mt-4 flex-wrap">
							<BsWordpress size={50} />
						</div>
					</div>
					<div className="col-span-1 text-center">
						<h3 className="capitalize text-2xl">Frontend</h3>
						<div className="flex gap-8 justify-center mt-4 flex-wrap">
							<AiFillHtml5 size={50} />
							<DiCss3 size={50} />
							<DiSass size={50} />
							<FaBootstrap size={50} />
							<SiTailwindcss size={50} />
							<SiJavascript size={50} />
							<SiTypescript size={50} />
						</div>
					</div>
					<div className="col-span-1 text-center">
						<h3 className="capitalize text-2xl">Backend</h3>
						<div className="flex gap-8 justify-center mt-4 flex-wrap">
							<SiPhp size={50} />
							<FaNode size={50} />
							<SiMysql size={50} />
						</div>
					</div>
					<div className="col-span-1 text-center">
						<h3 className="capitalize text-2xl">Services</h3>
						<div className="flex gap-8 justify-center mt-4 flex-wrap">
							<SiMongodb size={50} />
							<SiFirebase size={50} />
							<AiFillGithub size={50} />
							<SiNetlify size={50} />
							<SiAppwrite size={50} />
						</div>
					</div>
				</div>
			</Section>
		)
	}

	return (
		<Section cls="bg-gray-950 text-gray-50">
			<Heading
				cls="items-center"
				sub="View Skills"
				title="My Skills"
			/>
			<div className="grid grid-cols-4 gap-8 pt-4 px-12">
				<div className="col-span-1 text-center">
					<h3 className="capitalize text-2xl">CMS</h3>
					<div className="flex gap-8 justify-center mt-4 flex-wrap">
						<BsWordpress size={50} />
					</div>
				</div>
				<div className="col-span-1 text-center">
					<h3 className="capitalize text-2xl">Frontend</h3>
					<div className="flex gap-8 justify-center mt-4 flex-wrap">
						<AiFillHtml5 size={50} />
						<DiCss3 size={50} />
						<DiSass size={50} />
						<FaBootstrap size={50} />
						<SiTailwindcss size={50} />
						<SiJavascript size={50} />
						<SiTypescript size={50} />
					</div>
				</div>
				<div className="col-span-1 text-center">
					<h3 className="capitalize text-2xl">Backend</h3>
					<div className="flex gap-8 justify-center mt-4 flex-wrap">
						<SiPhp size={50} />
						<FaNode size={50} />
						<SiMysql size={50} />
					</div>
				</div>
				<div className="col-span-1 text-center">
					<h3 className="capitalize text-2xl">Services</h3>
					<div className="flex gap-8 justify-center mt-4 flex-wrap">
						<SiMongodb size={50} />
						<SiFirebase size={50} />
						<AiFillGithub size={50} />
						<SiNetlify size={50} />
						<SiAppwrite size={50} />
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Skills
