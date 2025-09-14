"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavigationMenus() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {/* For Freelancers */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>For Freelancers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4 p-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/freelancers/jobs">
                    <div className="font-medium">Find Jobs</div>
                    <div className="text-muted-foreground">
                      Browse freelance projects and gigs tailored for you.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/freelancers/resources">
                    <div className="font-medium">Resources</div>
                    <div className="text-muted-foreground">
                      Access guides, templates, and learning tools.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/freelancers/community">
                    <div className="font-medium">Community</div>
                    <div className="text-muted-foreground">
                      Connect and share experiences with other freelancers.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* For Business */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>For Business</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4 p-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/business/hire">
                    <div className="font-medium">Hire Freelancers</div>
                    <div className="text-muted-foreground">
                      Post jobs and find top-rated freelance talent.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/business/solutions">
                    <div className="font-medium">Business Solutions</div>
                    <div className="text-muted-foreground">
                      Explore tools to scale your business with ease.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/business/support">
                    <div className="font-medium">Support</div>
                    <div className="text-muted-foreground">
                      Get help and manage your projects seamlessly.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Explore */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/explore">Explore</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Why Bizticle */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/why-bizticle">Why Bizticle</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
