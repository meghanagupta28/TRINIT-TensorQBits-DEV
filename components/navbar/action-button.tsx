'use client'
import React from 'react'
import { AlignJustify } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription, 
} from "@/components/ui/sheet"


import Link from 'next/link'


function ActionButton() {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className='lg:hidden'>
        <Sheet>
            <SheetTrigger>
                <AlignJustify />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetDescription>
                        <div className='flex flex-col space-y-4 items-start mt-10'>

                            
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default ActionButton