import { ProjectProps } from "@/types/projects"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const ProjectCard: FC<ProjectProps> = ({ project }) => {
 return (
  <div className="border-2 border-gray-300">
   <Image src={project.img} alt="" />
   <div className="p-4">
    <Link href={project.path} target="_blank">
     <h4 className="text-xl font-bold capitalize">{project.title}</h4>
    </Link>
    <p className="text-sm font-normal mt-2">{project.role}</p>
   </div>
  </div>
 )
}

export default ProjectCard
