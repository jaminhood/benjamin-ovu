import { AboutInterestData } from "@/constants/about"
import useDeviceType from "@/hooks/shared/useDeviceType"

const AboutInterest = () => {
 const { isMobile } = useDeviceType()

 if (isMobile) {
  return (
   <div className="mt-4 text-center">
    <h4 className="text-xl font-bold capitalize mb-4">My Interests</h4>
    <div className="flex justify-center gap-8">
     {AboutInterestData.map((data) => (
      <p className="text-sm font-bold" key={data.id}>
       {data.name}
      </p>
     ))}
    </div>
   </div>
  )
 }

 return (
  <div className="mt-4">
   <h4 className="text-xl font-bold capitalize mb-4">My Interests</h4>
   <div className="flex gap-8">
    {AboutInterestData.map((data) => (
     <p className="text-sm font-bold" key={data.id}>
      {data.name}
     </p>
    ))}
   </div>
  </div>
 )
}

export default AboutInterest
