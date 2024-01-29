"use client"

import { projectsData } from "@/constants/projects"
import Heading from "../shared/Heading"
import Section from "../shared/Section"
import ProjectCard from "./ProjectCard"

const Projects = () => {
	return (
		<Section cls="">
			<Heading
				cls="items-center"
				sub="View Experiences"
				title="My Professional Experience"
			/>
			<div className="grid md:grid-cols-3 px-12 grid-cols-1 gap-4 mt-8">
				{projectsData.map(data => (
					<ProjectCard
						key={data.id}
						project={data}
					/>
				))}
			</div>
		</Section>
	)
}

export default Projects
