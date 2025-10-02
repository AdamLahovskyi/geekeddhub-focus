import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-balance">Ready to transform your life?</h2>
        <p className="text-lg text-muted-foreground mb-10 text-pretty leading-relaxed max-w-2xl mx-auto">
          Join thousands of people who are already achieving their goals and living their best lives. Start your free
          trial today—no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-8">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
            Schedule a Demo
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  )
}
