"use client"

import { motion } from "framer-motion"
import AppButton from "../common/AppButton"

const ArrowIcon = () => (
  <svg
    width="24"
    height="21"
    viewBox="0 0 24 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.91675 10.1577L21.3262 10.1577"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8611 1.19946L22.8193 10.1577L13.8611 19.1159"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GetStartedSection = () => {
  return (
    <section className="relative bg-[url('/section-bg.png')] z-20 md:rounded-2xl overflow-hidden min-h-[616px] container bg-cover bg-center bg-no-repeat py-20">
      {/* Overlay */}
      <div className="absolute w-full inset-0 bg-[url('/overlay.png')] bg-cover -z-10 bg-center"></div>

      {/* Title */}
      <motion.h3
        className="text-[40px] leading-[55px] md:text-[60px] text-white font-semibold md:leading-[75px] md:text-start text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Get Started <br /> With Us
      </motion.h3>

      {/* Cards Wrapper */}
      <motion.div
        className="max-w-[504px] mt-7 space-y-6 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        {/* Card 1 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-3 bg-white rounded-lg px-8 py-6"
        >
          <h4 className="text-2xl font-medium">I am a Freelancer</h4>
          <p className="text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
          <AppButton label="Get Started" />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-black/30 rounded-lg px-8 py-6 flex justify-between items-center"
        >
          <h4 className="text-2xl font-medium text-white">I have a Business</h4>
          <ArrowIcon />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-black/30 rounded-lg px-8 py-6 flex justify-between items-center"
        >
          <h4 className="text-2xl font-medium text-white">I want to Explore</h4>
          <ArrowIcon />
        </motion.div>
      </motion.div>
    </section>
  )
}



export default GetStartedSection
