"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"
import { ThemeToggle } from "@/components/theme-toggle"
import GradientText from './GradientText'
import { HashLink } from 'react-router-hash-link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={10}
              showBorder={false}
              className="custom-class"
            >
            <Link to="/" className="text-2xl font-bold">geekeddhub.io</Link>
            </GradientText>
          </div>

          <div className="hidden md:flex items-center gap-8">
          <HashLink smooth to="/#features" className="text-muted-foreground hover:text-foreground transition">
            Features
          </HashLink>
          <HashLink smooth to="/#testimonials" className="text-muted-foreground hover:text-foreground transition">
            Testimonials
          </HashLink>
          <Link to="/explore" className="text-muted-foreground hover:text-foreground transition"> Explore </Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/sign-up">Get Started</Link>
            </Button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
          <HashLink smooth to="/#features" className="flex text-muted-foreground hover:text-foreground transition">
            Features
          </HashLink>
          <HashLink smooth to="/#testimonials" className="flex text-muted-foreground hover:text-foreground transition">
            Testimonials
          </HashLink>
          <Link to="/explore" className="flex text-muted-foreground hover:text-foreground transition"> Explore </Link>
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex justify-center pb-2">
                <ThemeToggle />
              </div>
            <Button variant="ghost" className="w-full" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
