import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import BlurText from "./BlurText"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6 text-center">
          <BlurText
            text="Transform your life,"
            className="inline-block mr-2 justify-center"
          />
          <BlurText
            text="one goal at a time"
            className="inline-block text-muted-foreground justify-center"
          />
        </h1>
          <BlurText
            text="The complete platform to track your progress, build better habits, and achieve your goals. Join thousands who are already transforming their lives."
            className="block justify-center text-center text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
