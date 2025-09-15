"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { value: "5+Millions", label: "people uses Bizticle" },
  { value: "10000+", label: "freelancers using Bizticle" },
  { value: "10+Countries", label: "businesses working with Bizticle" },
  { value: "5000+", label: "businesses using Bizticle" },
]

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mt-20 items-center px-4">
      {/* Globe Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center md:justify-start"
      >
        <Image
          src="/globe.png"
          alt="Globe Image"
          width={473}
          height={473}
          className="size-[300px] md:size-[473px] object-cover"
        />
      </motion.div>

      {/* Text + Stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Heading */}
        <motion.h3
          className="text-4xl text-center md:text-left max-w-[553px] font-semibold"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Discover the Millions of
          Freelancers and Businesses
          Chose Bizticle for their
          Business
        </motion.h3>

        {/* Stats Grid */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col text-center md:text-left"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h4 className="bg-gradient-to-r from-[#CC4FAF] to-[#72D9D4] bg-clip-text text-transparent text-[30px] font-semibold">
                {item.value}
              </h4>
              <p className="text-base text-[#535353]">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default StatsSection
