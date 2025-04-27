"use client"

import { motion } from "framer-motion"

const shapes = [
  { color: "bg-blue-500", size: "w-16 h-16" },
  { color: "bg-orange-500", size: "w-20 h-20" },
  { color: "bg-gray-500", size: "w-24 h-24" },
  { color: "bg-white", size: "w-12 h-12" },
  { color: "bg-blue-300", size: "w-16 h-16" },
]

export default function BackgroundShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${shape.color} ${shape.size} opacity-10`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

