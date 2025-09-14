"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  return (
    <section className='relative py-12 lg:py-0 lg:min-h-[calc(100vh_-_70px)] bg-[url("/hero-img.png")] bg-cover bg-center flex items-center overflow-hidden'>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      <div className='container relative z-10'>
        <motion.div
          className='max-w-[500px] space-y-8'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h1
            className='text-3xl md:text-[50px] font-semibold leading-tight text-white'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Delivering solutions for <span className="text-[#72D9D4] underline">Businesses</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className='text-base md:text-lg text-gray-200'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Solutions tailored for businesses to find and manage top people and talent
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button className="rounded-full text-base px-6 py-3 bg-[#CC4FAF] hover:bg-[#CC4FAF]/90 border-0">
              Get Started
              <Image
                src="/icons/arrow.svg"
                alt="arrow right"
                width={14}
                height={12}
                className="inline-block ml-2"
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
