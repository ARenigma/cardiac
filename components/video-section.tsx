"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Play } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="bg-[#0a0a0a] py-12 lg:py-16 px-6 lg:px-12">
      {/* Contained video */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] lg:max-h-[500px] overflow-hidden bg-neutral-900 rounded-xl"
      >
        {!isPlaying ? (
          <>
            <Image
              src="/images/proc-room.jpg"
              alt="Cardiac procedure room"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />

            {/* Centered content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <p className="text-[#c4a35a] text-[12px] font-sans font-semibold tracking-widest uppercase mb-4">
                PAVING THE WAY
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-white mb-8 max-w-2xl">
                Modern cardiac care.
              </h3>
              <button
                onClick={() => setIsPlaying(true)}
                className="group"
                aria-label="Play video"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all"
                >
                  <Play className="w-5 h-5 text-white group-hover:text-black ml-0.5 transition-colors" />
                </motion.div>
              </button>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
            <p className="text-white/40 text-sm font-sans">Video player would load here</p>
          </div>
        )}
      </motion.div>

      {/* Description below video */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-8 lg:px-16 pt-12 lg:pt-16 text-center"
      >
        <p className="text-white text-[16px] font-sans font-normal leading-[1.85] mb-4">
          Surgical and nonsurgical treatment of the heart have come a long way. Techniques have
          become so small and minimally invasive that hospitalization is often no longer necessary.
          This means less pain, faster recovery, and a return to the quality of life you demand.
        </p>
        <div className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-4 text-white text-[12px] font-sans font-medium tracking-[0.18em] hover:text-[#c4a35a] transition-colors group"
          >
            VIEW OUR PROCEDURES
            <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
