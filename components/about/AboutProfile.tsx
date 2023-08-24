import profileImg from "@/assets/imgs/profile.jpeg"
import useDeviceType from "@/hooks/shared/useDeviceType"
import Image from "next/image"

const AboutProfile = () => {
 const { isMobile } = useDeviceType()

 if (isMobile) {
  return (
   <div className="col-span-2 pt-20 max-h-[70vh] overflow-hidden">
    <Image src={profileImg} alt="" className="w-full h-full object-cover" />
   </div>
  )
 }

 return (
  <div className="col-span-1 py-8 px-20 max-h-[70vh] overflow-hidden">
   <Image src={profileImg} alt="" className="w-full h-full object-cover" />
  </div>
 )
}

export default AboutProfile
