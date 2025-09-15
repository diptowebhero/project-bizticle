"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionTitle from "../common/SectionTitle"

const features = [
  { icon: "/why-choice-us/start_mark.png", title: "Quality and Excellence" },
  { icon: "/why-choice-us/savings.png", title: "No extra cost until you are hired" },
  { icon: "/why-choice-us/start_mark.png", title: "2000+ Customers Served" },
  { icon: "/why-choice-us/partners.png", title: "Some of the best partners" },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const WhyChoiceUsSection = () => {
  return (
    <section className="bg-[#E5E5E5] py-20">
      <SectionTitle
        title="Why Choose Bizticle"
        description="Solutions tailored for businesses to find and manage top people and talent."
      />

      {/* Motion Grid wrapper */}
      <motion.div
        className="container px-4 mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative flex min-h-[220px] w-full rounded-lg border border-[#d4d4d4] items-center justify-center flex-col gap-y-4 bg-white transition-all duration-500 ease-out hover:bg-[#272727] hover:bg-[url('/why-choice-us/card-bg.svg')] hover:bg-no-repeat hover:bg-center hover:bg-cover"
          >
            {/* Icon */}
            <Image
              src={item.icon}
              width={63}
              height={59}
              className="size-[65px] transition-transform duration-500 group-hover:scale-110"
              alt={item.title}
            />

            {/* Title */}
            <h3 className="text-lg font-medium text-center transition-colors duration-500 group-hover:text-white">
              {item.title}
            </h3>

            {/* Overlay */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-b from-[#CC4FAF] to-[#72D9D4]" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default WhyChoiceUsSection
