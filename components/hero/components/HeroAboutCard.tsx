import useDeviceType from "@/hooks/shared/useDeviceType"
import { HeroAboutDataProps } from "@/types/hero"
import { FC } from "react"
import { GiMeltingIceCube } from "react-icons/gi"
import HeroAboutCardMobile from "./HeroAboutCardMobile"

const HeroAboutCard: FC<HeroAboutDataProps> = ({ data }) => {
 const { isMobile } = useDeviceType()
 const border = data.id > 1 ? `border-l-2 border-gray-500` : ``

 if (isMobile) {
  return <HeroAboutCardMobile data={data} />
 }

 return (
  <div className={`flex justify-center items-center gap-4 ${border}`}>
   <div className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center">
    <GiMeltingIceCube size={30} />
   </div>
   <div>
    <h5 className="text-base font-semibold">{data.name}</h5>
   </div>
  </div>
 )
}

export default HeroAboutCard
