import { SectionProps } from "@/types/shared"
import { FC } from "react"
import Container from "./Container"

const Section: FC<SectionProps> = ({ cls, children }) => {
 return (
  <section className={`py-12 relative z-0 ${cls}`}>
   <Container>{children}</Container>
  </section>
 )
}

export default Section
