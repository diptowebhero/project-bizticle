import { Button } from "@/components/ui/button"
import Logo from "./Logo"
import MobileHeader from "./MobileHeader"
import { NavigationMenus } from "./NavigationMenus"
import Search from "./Search"

const Header = () => {
  return (
    <div className="sticky top-0 z-40 h-[71px] w-full border-b border-b-[#4755691a] white">
      <div className="container flex h-full items-center">
        <div className="relative w-full hidden h-full lg:block">
          <div className="flex h-full items-center justify-between">
            <Logo />
            <div className="flex items-center space-x-6">
              <NavigationMenus />
              <Search />
              <Button variant={"default"} className="rounded-full px-6">Login</Button>
            </div>
          </div>
        </div>
        <MobileHeader />
      </div>
    </div>
  )
}

export default Header