"use client"

import { projectsData } from "@/constants/projects"
import useDeviceType from "@/hooks/shared/useDeviceType"
import Heading from "../shared/Heading"
import Section from "../shared/Section"
import ProjectCard from "./ProjectCard"

const Projects = () => {
 const { isMobile } = useDeviceType()

 return (
  <Section cls="">
   <Heading cls="items-center" sub="View Projects" title="My Projects" />
   {isMobile ? (
    <div className="grid grid-cols-1 gap-8 mt-8">
     {projectsData.map((data) => (
      <ProjectCard key={data.id} project={data} />
     ))}
    </div>
   ) : (
    <div className="grid grid-cols-3 gap-8 mt-8 px-12">
     {projectsData.map((data) => (
      <ProjectCard key={data.id} project={data} />
     ))}
    </div>
   )}
  </Section>
 )
}

export default Projects
