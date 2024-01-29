import { FC } from "react"
import Section from "../shared/Section"
import { SingleProjectInfo } from "./components/SingleProjectInfo"
import { SingleProjectSidebar } from "./components/SingleProjectSidebar"

const SingleProjectContent: FC<{ project: ProjectDataProp | undefined }> = ({ project }) => {
	return (
		<Section cls="">
			<div className="grid md:grid-cols-3 grid-cols-1 gap-8">
				<SingleProjectInfo project={project} />
				<SingleProjectSidebar project={project} />
			</div>
		</Section>
	)
}

export { SingleProjectContent }
