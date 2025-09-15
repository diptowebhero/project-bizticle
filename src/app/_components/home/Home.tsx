import Hero from "../hero/Hero"
import FindSolutionSection from "./FindSolutionSection"
import GetStartedSection from "./GetStartedSection"
import TestimonialSection from "./TestimonialSection"
import WhyChoiceUsSection from "./WhyChoiceUsSection"

const Home = () => {
  return (
    <>
      <Hero />
      <FindSolutionSection />
      <GetStartedSection />
      <WhyChoiceUsSection />
      <TestimonialSection />
    </>
  )
}

export default Home