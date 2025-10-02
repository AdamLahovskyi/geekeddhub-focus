"use client"

import { Target, TrendingUp, Calendar, Award, Bell, Users } from "lucide-react"
import { motion } from "framer-motion"
import SpotlightCard from './SpotlightCard'

const features = [
  {
    icon: Target,
    title: "Goal Setting",
    description:
      "Set clear, achievable goals and break them down into actionable steps with our intuitive goal-setting framework.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Visualize your progress with beautiful charts and insights that keep you motivated every step of the way.",
  },
  {
    icon: Calendar,
    title: "Habit Building",
    description:
      "Build lasting habits with daily reminders, streak tracking, and science-backed habit formation techniques.",
  },
  {
    icon: Award,
    title: "Achievements",
    description:
      "Celebrate your wins with milestone achievements and rewards that recognize your dedication and progress.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss a beat with intelligent reminders that adapt to your schedule and keep you on track.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Connect with like-minded individuals, share your journey, and get inspired by others' success stories.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/70 to-primary/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-balance">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Powerful features designed to help you stay focused, motivated, and on track to achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <SpotlightCard
                spotlightColor="rgba(0, 229, 255, 0.2)"
                className="p-6 flex flex-col items-start gap-4 transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{feature.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
