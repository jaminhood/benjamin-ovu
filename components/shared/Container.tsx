import { ChildrenProps } from "@/types/shared"
import { FC } from "react"

const Container: FC<ChildrenProps> = ({ children }) => {
	return <div className="px-4 max-w-6xl w-full mx-auto">{children}</div>
}

export default Container
