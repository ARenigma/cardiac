"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[#c4a35a] text-[12px] font-sans font-medium tracking-widest uppercase mb-6">
            TAKE THE FIRST STEP
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-6 leading-[1.08]">
            Your heart health<br />starts here
          </h2>
          <p className="text-white text-[16px] font-normal font-sans leading-[1.85] max-w-xl mx-auto mb-12">
            Schedule a consultation with our team of expert cardiologists. We are committed to
            providing you with the highest quality cardiac care using the latest minimally invasive
            techniques.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black text-[14px] font-sans font-semibold tracking-[0.15em] hover:bg-[#c4a35a] transition-colors w-full sm:w-auto"
            >
              SCHEDULE CONSULTATION
            </Link>
            <a
              href="tel:7199600363"
              className="px-8 py-4 border border-white/30 text-white text-[14px] font-sans font-semibold tracking-[0.15em] hover:border-white transition-colors w-full sm:w-auto"
            >
              CALL 719.960.0363
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
