import SectionTitle from "../common/SectionTitle"
import FindSolutionCard, { CardData } from "./FindSolutionCard"
import StatsSection from "./StatsSection"

const cards: CardData[] = [
  {
    title: "Purple Page",
    image: "/features/feature-1.png",
  },
  {
    title: "Collab",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    image: "/features/collab.png",
    button: "Get Started",
  },
  {
    title: "Library",
    image: "/features/library.png",
  },
]

const FindSolutionSection = () => {
  return (
    <>
      <section className="bg-[#E5E5E5] bg-[url('/bg-wave.png')] bg-no-repeat bg-left-top py-20">
        <SectionTitle
          title="Find Solution You Need"
          description="Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mt-16 px-4">
          {cards.map((card, i) => (
            <FindSolutionCard key={i} {...card} />
          ))}
        </div>
        <StatsSection />
      </section>
    </>
  )
}

export default FindSolutionSection
