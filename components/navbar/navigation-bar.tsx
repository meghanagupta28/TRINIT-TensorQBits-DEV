"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  ListItem
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>

      <NavigationMenuItem>
          <Link href="/" passHref legacyBehavior>
            <NavigationMenuLink>
              <Button variant="ghost">Home</Button>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

