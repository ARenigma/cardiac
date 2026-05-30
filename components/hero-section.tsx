"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const scrollToContent = () => {
    const el = document.getElementById("conditions")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-heart.jpg"
          alt="Heart visualization"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">

        {/* Practice name — prominent centre */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[13px] md:text-[15px] font-sans font-semibold tracking-[0.35em] text-[#c4a35a] uppercase mb-5"
        >
          Sierra Heart &amp; Vascular Institute
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[38px] md:text-5xl lg:text-7xl font-sans font-light text-white max-w-4xl leading-[1.05]"
        >
          The New Era
          <br />
          of Cardiac Care
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-[12px] font-sans font-medium text-white/65 tracking-widest uppercase"
        >
          Cardiovascular Medicine.{" "}
          <strong className="text-white font-semibold">Reinvented.</strong>
        </motion.p>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-7 flex flex-row gap-3 items-center lg:hidden"
        >
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-black text-[14px] font-sans font-semibold tracking-[0.1em] hover:bg-[#c4a35a] transition-colors"
          >
            BOOK CONSULT
          </Link>
          <a
            href="tel:5592180076"
            className="px-6 py-3 border border-white/40 text-white text-[14px] font-sans font-medium tracking-[0.1em] hover:border-white transition-colors"
          >
            CALL US
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          onClick={scrollToContent}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors group cursor-pointer"
        >
          <span className="text-[11px] font-sans tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M6 0V16M6 16L1 11M6 16L11 11" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
