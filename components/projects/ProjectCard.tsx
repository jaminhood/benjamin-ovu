import { ProjectProps } from "@/types/projects"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const ProjectCard: FC<ProjectProps> = ({ project }) => {
	return (
		<div className="relative z-0 aspect-video">
			<div className="bg-gray-300 p-2 aspect-video overflow-hidden">
				<Image
					src={project.img}
					alt=""
					className="h-full object-cover rounded"
				/>
			</div>
			<div className="p-2 relative z-0 flex flex-col text-center items-center gap-2">
				<Link href={`/projects/${project.title.toLowerCase().replace(/ /g, "-")}`}>
					<h4 className="text-xl font-bold capitalize">{project.title}</h4>
				</Link>
				<p className="text-sm font-normal text-green-500">{project.role}</p>
			</div>
		</div>
	)
}

export default ProjectCard
