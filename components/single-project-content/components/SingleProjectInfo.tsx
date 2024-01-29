import Image from "next/image"
import { FC } from "react"

const SingleProjectInfo: FC<{ project: ProjectDataProp | undefined }> = ({ project }) => {
	return (
		<div className="md:col-span-2 col-span-1 flex flex-col items-stretch gap-4">
			<h2 className="text-3xl capitalize text-green-500 font-bold">{project?.title}</h2>
			<div className="bg-gray-300 overflow-hidden p-4">
				<Image
					src={project?.img}
					alt={project?.title || ``}
					className="w-full h-full object-cover rounded-xl shadow"
				/>
			</div>
			<p className="text-base leading-8 tracking-wide">{project?.description}</p>
			<div className="p-8 overflow-hidden rounded bg-gray-700 text-gray-50">
				<h2 className="text-lg capitalize text-gray-50 mb-4 font-bold">Tools</h2>
				<div className="flex gap-2 flex-wrap">
					{project?.tools.map((tool, idx) => (
						<span
							key={idx}
							className="bg-green-500 text-[.8rem] capitalize py-1 px-3 rounded-xl">
							{tool}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

export { SingleProjectInfo }
