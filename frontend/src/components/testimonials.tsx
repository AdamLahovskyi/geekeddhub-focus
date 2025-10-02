"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"
import SpotlightCard from "./SpotlightCard"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Entrepreneur",
    content:
      "geekeddhub.io completely changed me. I've achieved more in 3 months than I did in the entire previous year.",
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
    <section id="testimonials" className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-balance">
            Loved by thousands worldwide
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            See what our users have to say about their transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <SpotlightCard
                spotlightColor="rgba(255, 229, 0, 0.15)"
                className="p-6 flex flex-col gap-4 transition-shadow duration-300 hover:shadow-xl"
              >
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
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
