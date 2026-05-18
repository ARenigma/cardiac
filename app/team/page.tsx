"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const doctors = [
  {
    name: "Dr. James Mitchell",
    title: "Medical Director, Interventional Cardiology",
    credentials: "MD, FACC, FSCAI",
    bio: "Dr. Mitchell is a board-certified interventional cardiologist with over 25 years of experience. He specializes in structural heart disease and has performed over 500 TAVR procedures.",
    image: "/images/doctor.jpg"
  },
  {
    name: "Dr. Sarah Chen",
    title: "Director, Structural Heart Program",
    credentials: "MD, PhD, FACC",
    bio: "Dr. Chen leads our Structural Heart Program and is recognized nationally for her expertise in MitraClip and Watchman procedures. She completed her fellowship at Cleveland Clinic.",
    image: "/images/doctor.jpg"
  },
  {
    name: "Dr. Michael Torres",
    title: "Electrophysiologist",
    credentials: "MD, FHRS",
    bio: "Dr. Torres specializes in the diagnosis and treatment of heart rhythm disorders. He is an expert in catheter ablation and cardiac device implantation.",
    image: "/images/doctor.jpg"
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Non-Invasive Cardiologist",
    credentials: "MD, FACC",
    bio: "Dr. Rodriguez provides comprehensive cardiac care with a focus on preventive cardiology and cardiac imaging. She is passionate about heart disease prevention in women.",
    image: "/images/doctor.jpg"
  }
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/procedure-room.jpg"
            alt="Our Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4"
          >
            Expert Cardiologists
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white"
          >
            Our Team
          </motion.h1>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-400 text-lg leading-relaxed">
              Our team of board-certified cardiologists brings together decades of experience 
              and expertise in all aspects of cardiovascular care. Each physician is committed 
              to providing personalized, compassionate care using the most advanced techniques 
              available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-[400px] mb-6 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl text-white mb-1">{doctor.name}</h3>
                    <p className="text-[#c9a227] text-sm">{doctor.credentials}</p>
                  </div>
                </div>
                <p className="text-white font-medium mb-2">{doctor.title}</p>
                <p className="text-neutral-400 leading-relaxed">{doctor.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Meet Our Specialists
            </h2>
            <p className="text-neutral-400 text-lg mb-10">
              Schedule an appointment to discuss your cardiac care with our expert team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#c9a227] text-black font-medium tracking-wide hover:bg-[#b89223] transition-colors"
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
