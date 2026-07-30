"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "TAVR: Replacing a Heart Valve Without Open-Heart Surgery",
    excerpt:
      "Transcatheter aortic valve replacement has transformed outcomes for patients with severe aortic stenosis. Dr. Sanam walks through who is a candidate, what the procedure involves, and what recovery looks like.",
    date: "March 15, 2026",
    category: "Procedures",
    image: "/images/blog-tavr-valve.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "Heart Failure: Early Warning Signs You Should Not Ignore",
    excerpt:
      "Shortness of breath, unexplained fatigue, and swollen ankles are among the most common — and most overlooked — signs of heart failure. Recognizing them early can make a significant difference in outcomes.",
    date: "March 10, 2026",
    category: "Education",
    image: "/images/blog-heart-failure.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "Beyond LDL: Why ApoB and Lp(a) Matter More Than You Think",
    excerpt:
      "Standard cholesterol panels miss a significant portion of cardiovascular risk. Advanced lipid testing — ApoB, Lp(a), and LDL particle number — reveals hidden danger and guides more precise treatment decisions.",
    date: "March 5, 2026",
    category: "Prevention",
    image: "/images/happy-faces-2.jpg",
    href: "#",
  },
  {
    id: 4,
    title: "Impella-Supported High-Risk PCI: Protecting the Heart During Complex Procedures",
    excerpt:
      "For patients with severely reduced heart function who require coronary intervention, Impella mechanical support allows Dr. Sanam's team to safely complete procedures that were once considered too dangerous.",
    date: "February 28, 2026",
    category: "Procedures",
    image: "/images/blog-arrhythmia.jpg",
    href: "#",
  },
  {
    id: 5,
    title: "What to Expect During Your First Cardiology Visit",
    excerpt:
      "Preparing for your first cardiology appointment can reduce anxiety and help you get more from the visit. Here is a step-by-step guide to what will happen and what questions to ask.",
    date: "February 20, 2026",
    category: "Patient Guide",
    image: "/images/blog-visit.jpg",
    href: "#",
  },
]

export function BlogCarousel() {
  // Desktop state
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  // Mobile scroll state
  const [mobileActive, setMobileActive] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const paginate = (dir: number) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + blogPosts.length) % blogPosts.length)
  }

  // IntersectionObserver tracks active mobile card
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

  const post = blogPosts[current]

  return (
    <section className="bg-[#0a0a0a] py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">

        {/* Header row */}
        <div className="flex items-end justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[#c4a35a] text-[12px] font-sans font-medium tracking-widest uppercase mb-3">
              LATEST NEWS
            </p>
            <h2 className="text-3xl lg:text-5xl font-sans font-light text-white">
              From Our Blog
            </h2>
          </motion.div>

          {/* Desktop-only nav arrows */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 border border-white/15 flex items-center justify-center text-white hover:border-white transition-colors"
              aria-label="Previous post"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-white/50 text-[12px] font-sans mx-2 tabular-nums">
              {current + 1} / {blogPosts.length}
            </span>
            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 border border-white/15 flex items-center justify-center text-white hover:border-white transition-colors"
              aria-label="Next post"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── MOBILE: horizontal scroll-snap ── */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {blogPosts.map((p, i) => (
              <div
                key={p.id}
                ref={(el) => { cardRefs.current[i] = el }}
                className="snap-center flex-shrink-0 w-screen px-6 pb-4"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-0">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-[#c4a35a] text-black text-[11px] font-sans font-semibold tracking-wider">
                      {p.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="bg-[#111] px-5 py-6">
                  <div className="flex items-center gap-1.5 text-white/50 text-[12px] font-sans mb-3">
                    <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                    {p.date}
                  </div>
                  <h3 className="text-xl font-sans font-semibold text-white leading-[1.3] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-white text-[15px] font-sans font-normal leading-[1.8] mb-5">
                    {p.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-3 text-white/30 text-[12px] font-sans font-medium tracking-[0.18em] cursor-default select-none">
                    COMING SOON
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Page dots */}
          <div className="flex items-center gap-3 mt-5 px-0">
            {blogPosts.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const container = scrollRef.current
                  if (container) container.scrollTo({ left: i * container.clientWidth, behavior: "smooth" })
                  setMobileActive(i)
                }}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === mobileActive ? "w-8 bg-white" : "w-4 bg-white/25"
                }`}
                aria-label={`Go to post ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP: AnimatePresence single-post ── */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={post.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-0 overflow-hidden"
          >
            {/* Image */}
            <div className="relative lg:min-h-[380px] overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#c4a35a] text-black text-[12px] font-sans font-semibold tracking-wider">
                  {post.category}
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="bg-[#111] flex flex-col justify-center px-14 py-12">
              <div className="flex items-center gap-1.5 text-white/50 text-[12px] font-sans mb-4">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </div>
              <h3 className="text-2xl font-sans font-semibold text-white leading-[1.3] mb-4">
                {post.title}
              </h3>
              <p className="text-white text-[16px] font-sans font-normal leading-[1.85] mb-7">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-4 text-white/30 text-[12px] font-sans font-medium tracking-[0.18em] self-start cursor-default select-none">
                COMING SOON
              </span>
            </div>
          </motion.article>
        </AnimatePresence>

        {/* All posts link */}
        <div className="mt-8 pt-8 border-t border-white/8 text-center">
          <span className="text-white/20 text-[12px] font-sans font-medium tracking-widest cursor-default select-none">
            MORE ARTICLES COMING SOON
          </span>
        </div>
      </div>
    </section>
  )
}
