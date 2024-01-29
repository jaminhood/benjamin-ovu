"use client"

import { useEffect, useState } from "react"
import Container from "../shared/Container"
import { HeaderContent } from "./components/HeaderContent"

const Header = () => {
	const [isFixed, setIsFixed] = useState<Boolean>(false)

	useEffect(() => {
		window.addEventListener("scroll", () => (window.scrollY > 0 ? setIsFixed(true) : setIsFixed(false)))
	}, [])

	return (
		<header
			className={`p-4 h-20 fixed top-0 left-0 w-full z-50 flex justify-center items-center transition-all ease-in-out duration-500 ${
				isFixed ? `bg-gray-800 text-zinc-50 shadow-sm` : `bg-transparent text-gray-50`
			}`}>
			<Container>
				<HeaderContent />
			</Container>
		</header>
	)
}

export default Header
