import heroBg from "@/assets/imgs/hero-bg.jpeg"
import Image from "next/image"

const HeroBgOverlay = () => {
 return (
  <div className="absolute inset-0 -z-10 before:absolute before:inset-0 before:bg-gray-950 before:opacity-80">
   <Image src={heroBg} alt="" className="w-full h-full object-cover" />
  </div>
 )
}

export default HeroBgOverlay
