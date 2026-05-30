"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function DoctorSection() {
  return (
    <section id="physician" className="bg-white py-12 lg:py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

        {/* Doctor photo — full width on mobile, left col on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-[320px] lg:h-auto lg:min-h-[560px] overflow-hidden"
        >
          <Image
            src="/images/doctor.jpg"
            alt="Dr. Kumar Sanam, MD FACC FSCAI RPVI"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center px-6 lg:px-14 xl:px-16 py-8 lg:py-16 bg-white"
        >
          <p className="text-black/55 text-[12px] font-sans font-semibold tracking-widest uppercase mb-3 lg:mb-6">
            MEDICAL DIRECTOR
          </p>

          <h2 className="text-3xl lg:text-4xl font-sans font-light text-black leading-[1.1] mb-1 lg:mb-2">
            Dr. Kumar Sanam
          </h2>
          <p className="text-[#c4a35a] text-[12px] font-sans font-medium tracking-widest uppercase mb-4 lg:mb-6">
            MD, FACC, FSCAI, RPVI
          </p>

          <div className="w-8 h-px bg-black/15 mb-4 lg:mb-6" />

          <p className="text-[16px] font-normal text-black/80 leading-[1.85] font-sans mb-3 lg:mb-4">
            Dr. Kumar Sanam is a board-certified interventional and structural cardiologist based in
            Fresno, California, with over 17 years of experience in cardiovascular disease. He
            specializes in complex coronary intervention, structural heart therapy, and vascular medicine.
          </p>
          <p className="text-[16px] font-normal text-black/80 leading-[1.85] font-sans mb-3 lg:mb-4">
            He completed his Interventional Cardiology Fellowship at the Medical College of Georgia /
            Augusta University, following cardiovascular disease fellowship and residency training at
            the University of Alabama at Birmingham.
          </p>
          <p className="hidden lg:block text-[16px] font-normal text-black/80 leading-[1.85] font-sans mb-8">
            Patients consistently describe Dr. Sanam as attentive, compassionate, and deeply
            knowledgeable — a physician who takes a whole-person view of cardiovascular health and
            takes the time to truly listen.
          </p>

          <div className="flex flex-wrap gap-4 mt-2 lg:mt-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-4 text-black text-[12px] font-sans font-medium tracking-[0.18em] hover:opacity-55 transition-opacity group"
            >
              FULL BIOGRAPHY
              <span className="w-8 h-px bg-black group-hover:w-14 transition-all duration-300" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-black text-white text-[14px] font-sans font-semibold tracking-[0.15em] hover:bg-black/80 transition-colors"
            >
              SCHEDULE APPOINTMENT
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
