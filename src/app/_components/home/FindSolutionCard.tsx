"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export interface CardData {
  title: string
  image: string
  description?: string
  button?: string
}

const FindSolutionCard = ({ title, image, description, button }: CardData) => {
  return (
    <motion.div
      className="relative min-h-[446px] w-full rounded-[20px] overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
      animate="rest"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        width={382}
        height={400}
        className="size-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/80"></div>

      {/* Text Content */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center text-white px-4"
        variants={{
          rest: { opacity: 0, y: 40 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        {description && (
          <p className="text-sm mt-2 opacity-90">{description}</p>
        )}
        {button && (
          <button className="mt-3 text-sm font-medium  hover:underline">
            {button} <span className="text-[#CC4FAF]">→</span>
          </button>
        )}
      </motion.div>
    </motion.div>

  )
}

export default FindSolutionCard
