import About from "@/components/about"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"

export default function Home() {
 return (
  <>
   {/* <Header /> */}
   <Hero />
   <About />
   <Skills />
   <Projects />
   <ContactUs />
   <Footer />
  </>
 )
}
