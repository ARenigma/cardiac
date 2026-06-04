"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function TomorrowIsHere() {
  return (
    <section className="bg-black py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left — heading */}
          <div>
            <p className="text-white/50 text-[12px] font-sans font-medium tracking-widest uppercase mb-5">
              ABOUT OUR PRACTICE
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white leading-[1.05]">
              Tomorrow<br />is Here
            </h2>
          </div>

          {/* Right — body + CTA */}
          <div className="flex flex-col justify-center lg:pt-8">
            <p className="text-white text-[16px] font-sans leading-[1.85]">
              The treatment of cardiac disorders has entered a new era. Techniques are more refined.
              Incisions are smaller. Procedures that would take hours now take minutes. Recovery that
              would take months now takes a couple of weeks or even days.
            </p>
            <p className="text-white text-[16px] font-sans leading-[1.85] mt-4">
              But despite all of our advancements, one thing remains the same: a successful outcome
              depends on a close relationship between patient and physician.
            </p>
            <p className="text-white text-[16px] font-sans leading-[1.85] mt-4">
              And the most powerful procedure we have? Prevention. Identifying risk before it becomes disease. Catching the warning signs before they become emergencies. Because the best cardiac intervention is the one you never need.
            </p>
            <p className="text-white text-[16px] font-sans leading-[1.85] mt-4">
              Whether you are managing an existing condition or working to protect the heart you have — we are here, as your partner, every step of the way.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-4 text-white text-[12px] font-sans font-medium tracking-[0.18em] hover:opacity-60 transition-opacity group"
              >
                LEARN MORE
                <span className="w-10 h-px bg-white group-hover:w-16 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
