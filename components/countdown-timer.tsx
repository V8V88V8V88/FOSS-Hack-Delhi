"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const targetDate = new Date("2025-02-22T08:00:00")

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate]) // Added targetDate to dependencies

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl" />

      <div className="relative bg-white/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
        <h3 className="text-2xl font-semibold text-center mb-8 text-[#1a1a1a]">Hackathon Starts In</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <motion.div
                  key={block.value}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="bg-[#1a1a1a] text-white rounded-2xl p-4 aspect-square flex items-center justify-center"
                >
                  <div className="text-center">
                    <span className="text-4xl md:text-5xl font-bold tabular-nums">
                      {block.value.toString().padStart(2, "0")}
                    </span>
                    <span className="block text-xs md:text-sm mt-1 text-white/70">{block.label}</span>
                  </div>
                </motion.div>
              </div>

              {/* Decorative dots */}
              {index < timeBlocks.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 space-x-0.5">
                  <div className="w-1 h-1 rounded-full bg-[#1a1a1a]/40" />
                  <div className="w-1 h-1 rounded-full bg-[#1a1a1a]/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

