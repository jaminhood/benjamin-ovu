import { HeaderContentLogo } from "./HeaderContentLogo"
// import { HeaderContentMenu } from "./HeaderContentMenu"

const HeaderContent = () => {
	return (
		<div className="flex justify-between items-center">
			<HeaderContentLogo />
			{/* <HeaderContentMenu /> */}
		</div>
	)
}

export { HeaderContent }
