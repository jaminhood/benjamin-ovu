import useDeviceType from "@/hooks/shared/useDeviceType"
import Heading from "../shared/Heading"
import AboutContact from "./AboutContact"
import AboutInterest from "./AboutInterest"

const AboutInfo = () => {
 const { isMobile } = useDeviceType()

 if (isMobile) {
  return (
   <div className="col-span-2">
    <Heading cls="items-center" sub="Hey There!" title="About Me" />
    <p className="text-sm text-center pb-4">
     I am a skilled Software Engineer experienced in building visually appealing
     and user-friendly websites using HTML, CSS, JavaScript, and jQuery, with
     proficiency in WordPress and backend integraon using PHP and mySQLi. I have
     a strong collaborave approach, translang design concepts into funconal
     websites and developing custom WordPress plugins to enhance user
     dashboards, all while staying up to date with industry trends and bringing
     a unique blend of technical experse and problem-solving skills to every
     project.
    </p>
    <AboutContact />
    <AboutInterest />
   </div>
  )
 }

 return (
  <div className="col-span-1 py-8">
   <Heading cls="items-start" sub="Hey There!" title="About Me" />
   <p className="text-base pb-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, atque
    dicta eaque at eum amet, ab eveniet dolorum quod natus corporis inventore
    quaerat! Animi, error ullam dolorum distinctio dicta, fugiat maiores minima
    id, dolor ea minus sit quae. Hic quae dolorum sed dignissimos dolore cumque
    doloribus qui debitis facere tempora?
   </p>
   <AboutContact />
   <AboutInterest />
  </div>
 )
}

export default AboutInfo
