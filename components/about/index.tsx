"use client"

import Section from "../shared/Section"
import AboutInfo from "./AboutInfo"
import AboutProfile from "./AboutProfile"

const About = () => {
 return (
  <Section cls="py-20">
   <div className="grid grid-cols-2 gap-12">
    <AboutProfile />
    <AboutInfo />
   </div>
  </Section>
 )
}

export default About
