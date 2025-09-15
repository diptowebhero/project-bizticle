"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Logo from "./Logo"
import MobileHeader from "./MobileHeader"
import { NavigationMenus } from "./NavigationMenus"
import Search from "./Search"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`sticky top-0 z-40 h-[71px] w-full border-b transition-colors duration-300 ${isScrolled ? "bg-white border-b-gray-200 shadow-sm" : "bg-transparent border-b-[#4755691a]"
        }`}
    >
      <div className="container flex h-full items-center">
        <div className="relative w-full hidden h-full lg:block">
          <div className="flex h-full items-center justify-between">
            <Logo />
            <div className="flex items-center space-x-6">
              <NavigationMenus />
              <Search />
              <Button
                variant={"default"}
                className="rounded-full px-6"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
        <MobileHeader />
      </div>
    </div>
  )
}

export default Header
