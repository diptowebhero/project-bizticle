"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  description: string
}

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <motion.div
      className="max-w-3xl text-center mx-auto px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-[40px] font-semibold">{title}</h2>
      <p className="font-normal text-[#272727] text-xl mt-4">{description}</p>
    </motion.div>
  )
}

export default SectionTitle
