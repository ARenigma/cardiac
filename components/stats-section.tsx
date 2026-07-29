"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "17", suffix: "+", suffixClass: "text-3xl", label: "Years of Experience" },
  { value: "4",   suffix: "",  suffixClass: "",         label: "Hospital Affiliations" },
  { value: "20",  suffix: "+", suffixClass: "text-3xl", label: "Research Publications" },
]

export function StatsSection() {
  return (
    <section className="bg-[#f5f4f0] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-sans font-light text-black mb-1">
                {stat.value}<span className={`${stat.suffixClass} align-baseline`}>{stat.suffix}</span>
              </p>
              <p className="text-[12px] font-sans font-medium text-black/50 tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
