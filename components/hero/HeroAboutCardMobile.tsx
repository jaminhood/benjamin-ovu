import { HeroAboutDataProps } from "@/types/hero"
import { FC } from "react"
import { GiMeltingIceCube } from "react-icons/gi"

const HeroAboutCardMobile: FC<HeroAboutDataProps> = ({ data }) => {
 const border = data.id > 1 ? `border-t-2 border-gray-500 pt-2` : ``

 return (
  <div className={`flex justify-between items-center gap-2 ${border}`}>
   <div className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center">
    <GiMeltingIceCube size={30} />
   </div>
   <div>
    <h5 className="text-sm font-semibold">{data.name}</h5>
   </div>
  </div>
 )
}

export default HeroAboutCardMobile
