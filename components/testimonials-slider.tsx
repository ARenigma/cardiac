"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Additional reviews pending verification — add real Healthgrades/Google reviews here
const testimonials = [
  {
    id: 1,
    name: "Verified Patient",
    location: "Fresno, CA · Healthgrades",
    quote:
      "Dr. Sanam is a true 10-star doctor. After 4 years under his expert and personalized care, I feel significantly better and am twice as healthy and energetic as before.",
  },
]

export function TestimonialsSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [mobileActive, setMobileActive] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 8000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) setMobileActive(index)
          }
        })
      },
      { root: container, threshold: 0.55 }
    )
    cardRefs.current.forEach((ref) => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 80 : -80, opacity: 0 }),
  }

  return (
    <section className="bg-[#f5f4f0] py-20 lg:py-28" id="testimonials">
      <div className="max-w-5xl mx-auto px-6 lg:px-16">

        {/* Section label — centered */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-black/60 text-[12px] font-sans font-semibold tracking-widest uppercase mb-3">
            PATIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl lg:text-5xl font-sans font-light text-black">
            Voices of our patients
          </h2>
        </div>

        {/* ── DESKTOP: centered quote with side arrows ── */}
        <div className="hidden lg:block">
          {/* Arrow + quote container */}
          <div className="relative">
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-black/20 flex items-center justify-center hover:border-black transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-black" />
            </button>

            {/* Quote box — decorative mark is absolute so arrows center on the text */}
            <div className="px-16 relative min-h-[220px] flex items-center justify-center">
              {/* Decorative opening quote — overlaid, doesn't affect flow */}
              <div
                className="absolute top-0 left-16 text-[#c4a35a] font-serif leading-none select-none pointer-events-none"
                style={{ fontSize: "80px", opacity: 0.2 }}
              >
                &ldquo;
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45 }}
                  className="text-center pt-6"
                >
                  <blockquote className="text-[22px] font-sans font-normal text-black leading-[1.65] max-w-3xl mx-auto mb-6">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>
                  <p className="text-black/70 text-[12px] font-sans font-medium tracking-[0.2em] uppercase">
                    — {testimonials[current].name} &nbsp;·&nbsp; {testimonials[current].location}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => paginate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-black/20 flex items-center justify-center hover:border-black transition-colors z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
          </div>

          {/* Dots — outside relative div so they don't affect arrow centering */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-black" : "w-4 bg-black/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── MOBILE: full-width horizontal scroll-snap ── */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                ref={(el) => { cardRefs.current[i] = el }}
                className="snap-center flex-shrink-0 w-screen px-6 pb-4"
              >
                <div
                  className="text-[#c4a35a] font-serif opacity-20 select-none leading-none mb-3"
                  style={{ fontSize: "64px" }}
                >
                  &ldquo;
                </div>
                <blockquote className="text-[19px] font-sans font-normal text-black leading-[1.75] mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="text-black/65 text-[12px] font-sans font-medium tracking-[0.16em] uppercase">
                  — {t.name} &nbsp;·&nbsp; {t.location}
                </p>
              </div>
            ))}
          </div>

          {/* Page dots */}
          <div className="flex items-center gap-3 mt-7">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const container = scrollRef.current
                  if (container) container.scrollTo({ left: i * container.clientWidth, behavior: "smooth" })
                  setMobileActive(i)
                }}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === mobileActive ? "w-8 bg-black" : "w-4 bg-black/25"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
