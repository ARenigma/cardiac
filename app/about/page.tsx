"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const values = [
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in cardiac care, continuously advancing our techniques and knowledge to deliver superior outcomes for every patient we serve.",
  },
  {
    title: "Compassion",
    description:
      "We treat every patient with dignity, empathy, and respect, understanding that behind every diagnosis is a person and their loved ones counting on us.",
  },
  {
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies and minimally invasive approaches to provide patients with the most advanced treatment options available anywhere.",
  },
]

const stats = [
  { number: "17+", label: "Years of Experience" },
  { number: "4.7★", label: "Patient Rating" },
  { number: "3", label: "Hospital Affiliations" },
  { number: "8+", label: "Research Publications" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[65vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/doctor.jpg"
            alt="About Cardiac"
            fill
            className="object-cover object-[center_15%]"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 px-8 lg:px-16 pb-14 pt-20 max-w-6xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#c4a35a] text-[10px] font-sans font-medium tracking-[0.28em] uppercase mb-3"
          >
            OUR STORY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-light text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c4a35a] text-[10px] font-sans font-medium tracking-[0.28em] uppercase mb-5">
                OUR MISSION
              </p>
              <h2 className="text-4xl md:text-5xl font-sans font-light text-black mb-8 leading-[1.1]">
                A Higher Standard<br />of Cardiac Care
              </h2>
              <p className="text-black/70 text-[14px] lg:text-[16px] font-sans leading-[1.9] mb-5">
                Sierra Heart & Vascular Institute delivers advanced, evidence-based cardiovascular care
                for patients across the Central Valley — from prevention through complex cardiac and
                vascular intervention. Led by Dr. Kumar Sanam, MD, FACC, FSCAI, RPVI.
              </p>
              <p className="text-black/70 text-[14px] lg:text-[16px] font-sans leading-[1.9] mb-5">
                Dr. Sanam brings over 17 years of cardiovascular expertise, fellowship-trained precision,
                and a deeply personal approach to every patient. His subspecialty focus spans complex
                coronary intervention, structural heart therapy, and vascular medicine.
              </p>
              <p className="text-black/70 text-[14px] lg:text-[16px] font-sans leading-[1.9] mb-10">
                From a first cardiac consultation through structural heart surgery, heart failure
                management, vascular intervention, and lifelong prevention — fully coordinated under
                one roof in Fresno, California.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 text-black text-[10px] font-sans font-medium tracking-[0.18em] hover:opacity-55 transition-opacity group"
              >
                BOOK A CONSULTATION
                <span className="w-8 h-px bg-black group-hover:w-14 transition-all duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src="/images/cond-heart-failure.jpg"
                alt="Cardiac care team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#c4a35a] text-[10px] font-sans font-medium tracking-[0.28em] uppercase mb-4">
              WHAT DRIVES US
            </p>
            <h2 className="text-4xl md:text-5xl font-sans font-light text-white">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-px bg-[#c4a35a] mb-6" />
                <h3 className="text-[18px] font-sans font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-white/70 text-[13px] font-sans leading-[1.85]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[#f5f4f0] px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-sans font-light text-black mb-2">{stat.number}</p>
                <p className="text-[11px] font-sans font-medium text-black/40 tracking-[0.18em] uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white px-8 lg:px-16 border-t border-black/8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-sans font-light text-black mb-6">
              Experience the Difference
            </h2>
            <p className="text-black/70 text-[16px] font-sans leading-relaxed mb-10">
              Join the patients across the Central Valley who have trusted Sierra Heart & Vascular Institute with their cardiovascular health.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black text-white text-[13px] font-sans font-semibold tracking-[0.15em] hover:bg-[#c4a35a] hover:text-black transition-colors"
            >
              SCHEDULE YOUR VISIT
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
