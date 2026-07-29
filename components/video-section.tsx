"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function VideoSection() {
  return (
    <section className="bg-[#0a0a0a] py-12 lg:py-16 px-6 lg:px-12">
      {/* Full-width cardiac image panel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] lg:max-h-[500px] overflow-hidden"
      >
        <Image
          src="/images/surgery-structural.jpg"
          alt="Advanced cardiac surgery at Sierra Heart & Vascular Institute"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-end px-10 lg:px-16 pb-12 lg:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#c4a35a] text-[11px] font-sans font-semibold tracking-widest uppercase mb-3"
          >
            ADVANCED CARDIAC CARE
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-white mb-6 max-w-lg leading-[1.2]"
          >
            Precision. Expertise.<br />Every procedure.
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-4 text-white text-[11px] font-sans font-medium tracking-[0.18em] hover:text-[#c4a35a] transition-colors group"
            >
              VIEW OUR PROCEDURES
              <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Description below */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-8 lg:px-16 pt-12 lg:pt-16 text-center"
      >
        <p className="text-white/70 text-[15px] lg:text-[16px] font-sans font-normal leading-[1.85]">
          Surgical and nonsurgical treatments of the heart have advanced dramatically. Many complex
          cardiac procedures are now performed through minimally invasive catheter-based techniques —
          meaning less pain, faster recovery, and a return to the quality of life you deserve.
        </p>
      </motion.div>
    </section>
  )
}
