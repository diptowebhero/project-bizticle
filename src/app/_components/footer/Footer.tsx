"use client"

import Image from "next/image"
import AppButton from "../common/AppButton"
import { LogoFooter } from "../header/Logo"

const Footer = () => {
  const navLinks1 = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Solutions", href: "#" },
  ]

  const navLinks2 = [
    { name: "Purple Page", href: "#" },
    { name: "Collab", href: "#" },
    { name: "Library", href: "#" },
  ]

  const socialLinks = [
    { label: "Facebook", icon: "/icons/facebook.svg", href: "#" },
    { label: "Twitter", icon: "/icons/twitter.svg", href: "#" },
    { label: "Instagram", icon: "/icons/insta.svg", href: "#" },
    { label: "YouTube", icon: "/icons/youtube.svg", href: "#" },
  ]

  return (
    <footer className="relative w-full bg-[#1B1B1B] bg-[url('/footer-bg-wave.png')] bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left Section */}
        <div>
          <LogoFooter />
          <p className="text-gray-300 mt-6 text-sm max-w-xs">
            Solutions tailored for businesses to find and manage top people and talent
          </p>
          <div className="flex items-center gap-4 mt-6">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label}>
                <Image src={item.icon} alt={item.label} width={36} height={36} className="w-6 h-6 hover:opacity-80" />
              </a>
            ))}
          </div>

        </div>

        {/* Middle Section */}
        <div className="flex gap-16 md:justify-center">
          <ul className="space-y-3 text-sm">
            {navLinks1.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-white hover:text-gray-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm">
            {navLinks2.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-white hover:text-gray-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-white font-medium mb-4">Subscribe to our Newsletter</h4>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="px-4 py-2 rounded bg-[#3A3A3A] text-sm text-white placeholder-gray-400 focus:outline-none flex-1"
            />
            <AppButton label="Subscribe" />
          </form>

        </div>

      </div>
      <div className="py-5 md:py-10 container flex items-center flex-col-reverse md:flex-row justify-between w-full">
        <p className="text-base text-[#A8A8A8] mt-6">All Rights Reserved ©Bizticle 2023</p>
        <div className="flex gap-6 mt-6 text-base text-[#A8A8A8]">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
