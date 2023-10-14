import Link from "next/link"

const HeroInfo = () => {
 return (
  <div className="flex justify-center items-center flex-col text-center text-gray-50 w-full">
   <div className="flex justify-center items-center flex-col">
    <h1 className="text-6xl md:text-8xl font-bold capitalize">Benjamin Ovu</h1>
    <h6 className="text-lg font-normal capitalize mt-4 border-y-2 border-green-500 inline-block py-2">
     Software Engineer
    </h6>
    <Link
     href="https://drive.google.com/file/d/1BLpM62B06Jo31bLE5XroGGjNoQcVAHY9/view?usp=sharing"
     target="_blank">
     <button className="py-2 px-6 mt-4 bg-green-500 text-gray-50 border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all ease-in-out duration-500 block">
      Download CV.
     </button>
    </Link>
   </div>
  </div>
 )
}

export default HeroInfo
