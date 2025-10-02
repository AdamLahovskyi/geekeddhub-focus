import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Entrepreneur",
    content:
      "geekeddhub.io completely changed how I approach my goals. I've achieved more in 3 months than I did in the entire previous year.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content:
      "The habit tracking feature is incredible. I've built a consistent morning routine that's transformed my productivity.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Fitness Coach",
    content:
      "I recommend geekeddhub.io to all my clients. The progress visualization keeps them motivated and accountable.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-balance">Loved by thousands worldwide</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            See what our users have to say about their transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-base mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
