"use client"

import { Banner } from "@/components/banner"
import { SingleProjectContent } from "@/components/single-project-content"
import { projectsData } from "@/constants/projects"

export default function SingleProject({ params }: any) {
	const project = projectsData.find(data => data.title.toLowerCase() == params.title.toLowerCase().replace(/-/g, " "))
	return (
		<>
			<Banner
				heading={project?.title}
				tagline={project?.role}
			/>
			<SingleProjectContent project={project} />
		</>
	)
}
