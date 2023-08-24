import { HeadingProps } from "@/types/shared"
import { FC } from "react"

const Heading: FC<HeadingProps> = ({ cls, sub, title }) => {
 return (
  <div className={`flex flex-col justify-center mb-4 ${cls}`}>
   <h6 className="text-sm mb-4 capitalize text-green-500 font-bold">{sub}</h6>
   <h2 className="text-4xl font-bold capitalize">{title}</h2>
  </div>
 )
}

export default Heading
