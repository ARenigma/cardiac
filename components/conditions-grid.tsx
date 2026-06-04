"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Plus, X } from "lucide-react"

const conditions = [
  {
    id: "coronary",
    title: "CORONARY\nARTERY DISEASE",
    category: "THE VESSELS",
    description:
      "Coronary artery disease is caused by plaque buildup in the walls of the arteries that supply blood to the heart. When blood flow is reduced, the heart muscle is starved of oxygen — sometimes silently for years, and sometimes suddenly. Dr. Sanam's interventional expertise spans the full spectrum of CAD management, from medical therapy to the most complex catheter-based interventions.",
    image: "/images/acc-coronary.jpg",
    href: "/conditions/coronary-artery",
  },
  {
    id: "heart-failure",
    title: "HEART\nFAILURE",
    category: "THE PUMP",
    description:
      "When the heart muscle can no longer pump efficiently, the effects ripple through the entire body. Heart failure is not the end of the road — with modern guideline-directed therapy, device management, and close follow-up, most patients achieve meaningful improvement in symptoms and quality of life.",
    image: "/images/acc-heart-failure.jpg",
    href: "/conditions/heart-failure",
  },
  {
    id: "arrhythmia",
    title: "ARRHYTHMIA\nCONDITIONS",
    category: "THE RHYTHM",
    description:
      "An intricate electrical system coordinates every heartbeat. When this system misfires — whether too fast, too slow, or out of sequence — the result is an arrhythmia. Some are felt; some are silent; some are dangerous. Accurate diagnosis is the foundation of effective treatment.",
    image: "/images/acc-arrhythmia.jpg",
    href: "/conditions/arrhythmia",
  },
  {
    id: "structural",
    title: "STRUCTURAL\nHEART",
    category: "THE VALVES",
    description:
      "Structural heart disease refers to abnormalities of the heart's valves, walls, or chambers — conditions that were once treated only with open surgery. Today, transcatheter techniques allow Dr. Sanam's team to treat many of these conditions through a small catheter, with dramatically shorter recovery and equivalent outcomes.",
    image: "/images/acc-structural.jpg",
    href: "/conditions/structural-heart",
  },
]

export function ConditionsGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(null)

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIndex(null)
  }

  return (
    <section id="conditions" className="bg-[#f5f4f0] pb-0">
      {/* Section label */}
      <div className="px-6 lg:px-16 pt-8 pb-4 text-center">
        <p className="text-black text-[12px] font-sans font-medium tracking-widest uppercase">
          CONDITIONS WE TREAT
        </p>
      </div>

      {/* ── MOBILE: vertical expand-in-place accordion ── */}
      <div className="lg:hidden">
        {conditions.map((condition, index) => {
          const isOpen = mobileActiveIndex === index
          return (
            <div key={condition.id} className="border-b border-black/10">
              {/* Image — taller when open */}
              <div
                className={`relative overflow-hidden transition-all duration-500 ${isOpen ? "h-[220px]" : "h-[160px]"}`}
              >
                <Image
                  src={condition.image}
                  alt={condition.title}
                  fill
                  className="object-cover"
                />
                {isOpen && (
                  <div className="absolute inset-0 bg-black/20" />
                )}
              </div>

              {/* Header row — tap to toggle */}
              <div
                className="px-5 py-4 bg-white flex items-center justify-between cursor-pointer select-none"
                onClick={() => setMobileActiveIndex(isOpen ? null : index)}
              >
                <div>
                  <p className="text-black/55 text-[12px] font-sans font-semibold tracking-widest uppercase mb-1">
                    {condition.category}
                  </p>
                  <h4 className="text-xl font-sans font-bold text-black leading-tight whitespace-pre-line">
                    {condition.title}
                  </h4>
                </div>
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                    isOpen
                      ? "border-black bg-black text-white"
                      : "border-black/25 text-black hover:border-black"
                  }`}
                >
                  {isOpen ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-7 bg-white border-t border-black/5">
                      <div className="w-6 h-px bg-[#c4a35a] mt-4 mb-4" />
                      <p className="text-[16px] font-normal text-black/80 font-sans leading-[1.8] mb-5">
                        {condition.description}
                      </p>
                      <Link
                        href={condition.href}
                        className="inline-flex items-center gap-4 text-black text-[12px] font-sans font-medium tracking-[0.18em] hover:opacity-55 transition-opacity group"
                        onClick={(e) => e.stopPropagation()}
                      >
                        LEARN MORE
                        <span className="w-8 h-px bg-black group-hover:w-14 transition-all duration-300" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* ── DESKTOP: horizontal accordion ── */}
      <div className="hidden lg:flex h-[640px] w-full">
        {conditions.map((condition, index) => {
          const isActive = activeIndex === index
          const hasActive = activeIndex !== null
          const isCollapsed = hasActive && !isActive

          return (
            <motion.div
              key={condition.id}
              layout
              initial={false}
              animate={{
                flex: isActive ? 5 : isCollapsed ? 0.12 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 40,
                mass: 1.1
              }}
              className="relative overflow-hidden cursor-pointer"
              onClick={() => !isActive && setActiveIndex(index)}
            >
              {/* ── COLLAPSED STATE ── */}
              <AnimatePresence mode="wait">
                {isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center z-10"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.3 }}
                      className="text-[10px] font-sans font-medium tracking-[0.22em] text-white/70 whitespace-nowrap select-none"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {condition.title.replace("\n", " ")}
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── DEFAULT STATE ── */}
              <AnimatePresence mode="wait">
                {!hasActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col"
                  >
                    {/* Image — top ~70% */}
                    <div className="relative flex-[2.5] overflow-hidden group">
                      <Image
                        src={condition.image}
                        alt={condition.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Text block — bottom */}
                    <div className="bg-white px-5 py-4 flex flex-col gap-2 border-r border-black/8">
                      <p className="text-black/55 text-[11px] font-sans font-semibold tracking-[0.22em] uppercase">
                        {condition.category}
                      </p>
                      <h4 className="text-[16px] font-sans font-bold text-black leading-tight whitespace-pre-line">
                        {condition.title}
                      </h4>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-7 h-7 rounded-full border border-black/30 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all self-start mt-1 text-black"
                      >
                        <Plus className="w-3 h-3" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── EXPANDED STATE ── */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 flex bg-white"
                  >
                    {/* Image — left half */}
                    <motion.div
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-1/2 relative flex-shrink-0"
                    >
                      <Image
                        src={condition.image}
                        alt={condition.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Right — text content */}
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        hidden: { opacity: 0, x: 32 },
                        visible: {
                          opacity: 1, x: 0,
                          transition: { duration: 0.42, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.07, delayChildren: 0.28 }
                        }
                      }}
                      transition={{ duration: 0.2 }}
                      className="w-1/2 flex flex-col justify-center px-10 lg:px-14 py-10 bg-white overflow-hidden"
                    >
                      <motion.p
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}
                        className="text-[#c4a35a] text-[12px] font-sans font-semibold tracking-widest uppercase mb-4"
                      >
                        {condition.category}
                      </motion.p>
                      <motion.h3
                        variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.32 } } }}
                        className="text-2xl lg:text-3xl font-sans font-semibold text-black mb-5 leading-tight whitespace-pre-line"
                      >
                        {condition.title}
                      </motion.h3>
                      <motion.p
                        variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.32 } } }}
                        className="text-[16px] font-normal text-black/80 font-sans leading-[1.85] mb-8"
                      >
                        {condition.description}
                      </motion.p>
                      <motion.div
                        variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.28 } } }}
                        className="flex items-center gap-6"
                      >
                        <Link
                          href={condition.href}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-4 text-black text-[12px] font-sans font-medium tracking-[0.18em] hover:opacity-55 transition-opacity group"
                        >
                          LEARN MORE
                          <span className="w-8 h-px bg-black group-hover:w-14 transition-all duration-300" />
                        </Link>
                        <button
                          onClick={handleClose}
                          className="w-7 h-7 rounded-full border border-black/30 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all text-black ml-auto"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Divider */}
              {index < conditions.length - 1 && !hasActive && (
                <div className="absolute top-0 right-0 w-px h-full bg-black/8 z-10" />
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
