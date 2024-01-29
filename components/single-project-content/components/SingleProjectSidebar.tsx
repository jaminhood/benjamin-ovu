import { FC } from "react"

const SingleProjectSidebar: FC<{ project: ProjectDataProp | undefined }> = ({ project }) => {
	return (
		<div className="col-span-1 relative">
			<div className="flex flex-col items-stretch gap-4 sticky top-28">
				<div className="p-8 overflow-hidden rounded bg-gray-700 text-gray-50">
					<ul className="">
						<li className="border-b border-green-500 pb-2 mb-2">
							<h5 className="text-lg capitalize text-gray-50 font-bold">Live Site</h5>
							<a
								href={project?.path}
								target="_blamk"
								className="text-[.8rem] mt-1 leading-6">
								<span className="text-green-500">~</span> {project?.title}.
							</a>
						</li>
						<li className="border-b border-green-500 pb-2 mb-2">
							<h5 className="text-lg capitalize text-gray-50 font-bold">Client Details</h5>
							<p className="text-[.8rem] mt-1 leading-6">
								<span className="text-green-500">~</span> {project?.client}.
							</p>
						</li>
						<li className="border-b border-green-500 pb-2 mb-2">
							<h5 className="text-lg capitalize text-gray-50 font-bold">Service Proided</h5>
							<p className="text-[.8rem] mt-1 leading-6">
								<span className="text-green-500">~</span> {project?.role}.
							</p>
						</li>
						<li className="">
							<h5 className="text-lg capitalize text-gray-50 font-bold">Project Timeline</h5>
							<p className="text-[.8rem] mt-1 leading-6">
								<span className="text-green-500">~</span> {project?.timeline}.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export { SingleProjectSidebar }
