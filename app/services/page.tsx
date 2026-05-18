"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    title: "TAVR",
    subtitle: "Transcatheter Aortic Valve Replacement",
    description:
      "A minimally invasive procedure to replace a narrowed aortic valve that fails to open properly. TAVR offers an alternative to open-heart surgery for patients with severe aortic stenosis, with most patients going home within one to two days.",
    image: "/images/cond-structural.jpg",
    href: "/contact",
  },
  {
    title: "MitraClip",
    subtitle: "Mitral Valve Repair",
    description:
      "A catheter-based treatment for mitral regurgitation that does not require open-heart surgery. The MitraClip device clips together a portion of the mitral valve leaflets to reduce blood backflow and relieve symptoms.",
    image: "/images/cond-heart-failure.jpg",
    href: "/contact",
  },
  {
    title: "Watchman",
    subtitle: "Left Atrial Appendage Closure",
    description:
      "A one-time implant procedure that can reduce stroke risk in patients with atrial fibrillation not caused by a heart valve problem. Watchman provides an alternative to long-term blood thinners for eligible patients.",
    image: "/images/cond-arrhythmia.jpg",
    href: "/contact",
  },
  {
    title: "PFO Closure",
    subtitle: "Patent Foramen Ovale Closure",
    description:
      "A minimally invasive procedure to close a hole in the heart wall between the upper chambers. PFO closure can help prevent recurrent cryptogenic strokes in select patients, performed without open surgery.",
    image: "/images/cond-coronary.jpg",
    href: "/contact",
  },
  {
    title: "Cardiac Catheterization",
    subtitle: "Diagnostic & Interventional",
    description:
      "Advanced imaging and treatment procedures performed through a thin catheter inserted into blood vessels. Used to diagnose and treat various heart conditions — from coronary blockages to valve disease — with minimal recovery time.",
    image: "/images/proc-room.jpg",
    href: "/contact",
  },
  {
    title: "Electrophysiology",
    subtitle: "Heart Rhythm Management",
    description:
      "Comprehensive diagnosis and treatment of heart rhythm disorders including atrial fibrillation, SVT, and ventricular arrhythmias. We offer catheter ablation, high-density mapping, and device implantation for complex cases.",
    image: "/images/blog-arrhythmia.jpg",
    href: "/contact",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/proc-room.jpg"
            alt="Cardiac procedure laboratory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 px-8 lg:px-16 pb-14 pt-20 max-w-6xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#c4a35a] text-[10px] font-sans font-medium tracking-[0.28em] uppercase mb-3"
          >
            ADVANCED CARDIAC CARE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-light text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]"
          >
            Our Procedures
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-8 lg:px-16 border-b border-black/8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-black/70 text-[15px] lg:text-[16px] font-sans leading-[1.9] max-w-3xl">
            At Cardiac, we specialize in advanced structural heart procedures and interventional
            cardiology. Our team utilizes the latest minimally invasive techniques to provide
            exceptional care, faster recovery times, and better long-term outcomes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.href} className="group block">
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                  <h3 className="text-[18px] font-sans font-semibold text-black mb-1 group-hover:text-[#c4a35a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#c4a35a] text-[11px] font-sans font-medium tracking-wide mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-black/70 text-[13px] font-sans leading-[1.85] mb-5">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-3 text-black text-[10px] font-sans font-medium tracking-[0.15em] group-hover:text-[#c4a35a] transition-colors">
                    LEARN MORE
                    <span className="w-6 h-px bg-current" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0a0a0a] px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-[#c4a35a] text-[10px] font-sans font-medium tracking-[0.28em] uppercase mb-6">
              READY TO LEARN MORE
            </p>
            <h2 className="text-4xl md:text-5xl font-sans font-light text-white mb-6">
              Schedule a Consultation
            </h2>
            <p className="text-white/70 text-[15px] lg:text-[16px] font-sans leading-relaxed mb-10">
              Discuss which treatment option is right for you with our expert team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black text-[13px] font-sans font-semibold tracking-[0.15em] hover:bg-[#c4a35a] transition-colors"
            >
              BOOK A CONSULTATION
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
