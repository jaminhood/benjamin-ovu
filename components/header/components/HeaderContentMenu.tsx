import { NavBarMenu } from "@/constants/header"
import Link from "next/link"

const HeaderContentMenu = () => {
	return (
		<ul className="flex items-center gap-8">
			{NavBarMenu.map(data => (
				<li key={data.render}>
					<Link
						className="font-bold text-sm cursor-pointer"
						href={data.path}>
						{data.render}
					</Link>
				</li>
			))}
		</ul>
	)
}

export { HeaderContentMenu }
