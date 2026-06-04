"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeartUnderstanding() {
  return (
    <section className="bg-[#f5f4f0] py-10 lg:py-14">

      {/* ── MOBILE: stacked (image top, text below) ── */}
      <div className="lg:hidden px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative w-[180px] h-[180px] flex-shrink-0">
            <Image
              src="/images/mandrakept-heart-5079717.png"
              alt="Anatomical human heart diagram"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center">
            <p className="text-[#c4a35a] text-[12px] font-sans font-medium tracking-widest uppercase mb-3">
              CARDIOLOGY EXPLAINED
            </p>
            <h2 className="text-3xl font-sans font-light text-black leading-[1.15] mb-4">
              A deeper understanding<br />of your heart
            </h2>
            <>
              <p className="text-black/75 text-[16px] font-sans font-normal leading-[1.85] mb-3">
                The heart is one of the most remarkable structures in the human body — beating over 100,000 times a day, every day, without pause. Yet for all its endurance, it is also a system of extraordinary complexity.
              </p>
              <p className="text-black/75 text-[16px] font-sans font-normal leading-[1.85] mb-3">
                At its core, the heart is four distinct systems working in perfect harmony — the pump, the rhythm, the vessels, and the valves. When all four are functioning as they should, most of us never give our hearts a second thought. But when one system falters, the effects can ripple through the rest.
              </p>
              <p className="text-black/75 text-[16px] font-sans font-normal leading-[1.85]">
                Understanding which system is affected is the first step toward the right treatment.
              </p>
            </>
          </div>
        </motion.div>
      </div>

      {/* ── DESKTOP: side-by-side, wide container so heading fits on one line ── */}
      <div className="hidden lg:block max-w-6xl mx-auto px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-row gap-14 items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative w-[240px] h-[240px]">
              <Image
                src="/images/mandrakept-heart-5079717.png"
                alt="Anatomical human heart diagram"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <div className="flex-1 min-w-0">
            <p className="text-[#c4a35a] text-[12px] font-sans font-medium tracking-widest uppercase mb-4">
              CARDIOLOGY EXPLAINED
            </p>
            <h2 className="text-5xl font-sans font-light text-black leading-[1.1] mb-5">
              A deeper understanding<br />of your heart
            </h2>
            <>
              <p className="text-black/75 text-[16px] font-sans font-normal leading-[1.85] max-w-2xl mb-3">
                The heart is one of the most remarkable structures in the human body — beating over 100,000 times a day, every day, without pause. Yet for all its endurance, it is also a system of extraordinary complexity.
              </p>
              <p className="text-black/75 text-[16px] font-sans font-normal leading-[1.85] max-w-2xl mb-3">
                At its core, the heart is four distinct systems working in perfect harmony — the pump, the rhythm, the vessels, and the valves. When all four are functioning as they should, most of us never give our hearts a second thought. But when one system falters, the effects can ripple through the rest.
              </p>
              <p className="text-black/75 text-[16px] font-sans font-normal leading-[1.85] max-w-2xl">
                Understanding which system is affected is the first step toward the right treatment.
              </p>
            </>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
