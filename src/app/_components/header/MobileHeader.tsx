'use client'


import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import Logo from './Logo'

const MobileHeader = () => {
  const [open, setOpen] = useState<boolean>(false)

  // Close the sheet when the user presses the Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [open])

  // Close the sheet when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [open])

  return (
    <Sheet open={open} onOpenChange={setOpen} key="left">
      <div className="flex size-full items-center justify-between px-4 lg:hidden">
        <SheetTrigger className="z-50 rounded-sm border border-border p-1 lg:hidden">
          <MenuIcon />
        </SheetTrigger>
        <Logo />
        <div className="flex items-center gap-x-5">
          <Button variant={"default"} className="rounded-full px-6">Login</Button>
        </div>
      </div>
      <SheetContent side="left" className="flex flex-col gap-y-8 overflow-y-auto">
        <SheetHeader className="px-4 text-left">
          <h2>Mobile Content Here</h2>
        </SheetHeader>
        <div>
          search
        </div>
        <div>
          links
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileHeader
