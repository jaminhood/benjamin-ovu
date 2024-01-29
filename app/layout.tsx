import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"
import Header from "@/components/header"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
	title: "Benjamin Ovu",
	description: "Changing the world, One line of code at a time.",
}

export default function RootLayout({ children }: ChildrenProps) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Header />
				{children}
				<ContactUs />
				<Footer />
			</body>
		</html>
	)
}
