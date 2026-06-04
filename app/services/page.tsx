"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    title: "Clinical Cardiology",
    subtitle: "Comprehensive Cardiac Evaluation",
    description:
      "The foundation of your cardiovascular care — comprehensive evaluation, diagnostic testing, and ongoing management of all cardiac conditions. Includes ECG, echocardiogram, stress testing, Holter monitoring, coronary calcium scoring, and pre-operative cardiac clearance.",
    image: "/images/blog-visit.jpg",
    href: "/contact",
  },
  {
    title: "Interventional Cardiology",
    subtitle: "Advanced Catheter-Based Procedures",
    description:
      "Advanced catheter-based coronary intervention across the full spectrum of complexity — from routine angiography and PCI to CTO intervention, rotational atherectomy, intracoronary lithotripsy, and Impella-supported high-risk PCI in cardiogenic shock. All procedures performed transradially (wrist access) when possible.",
    image: "/images/proc-room.jpg",
    href: "/contact",
  },
  {
    title: "Structural Heart Program",
    subtitle: "Minimally Invasive Valve & Structural Therapies",
    description:
      "Minimally invasive transcatheter therapies for complex valvular and structural heart disease. TAVR, MitraClip / TEER mitral valve repair, PFO & ASD closure, left atrial appendage occlusion (LAAO), and transcatheter tricuspid interventions — guided by our multidisciplinary heart team.",
    image: "/images/cond-structural.jpg",
    href: "/contact",
  },
  {
    title: "Advanced Heart Failure",
    subtitle: "Guideline-Directed Management",
    description:
      "Comprehensive, guideline-directed management of all stages and phenotypes of heart failure. GDMT optimization for HFrEF and HFpEF, cardiogenic shock stabilization with Impella, CardioMEMS remote pressure monitoring, and advanced cardiomyopathy evaluation — with a goal of keeping patients out of the hospital and living fully.",
    image: "/images/heart-failure.jpg",
    href: "/contact",
  },
  {
    title: "Peripheral Vascular",
    subtitle: "Endovascular & Limb Salvage",
    description:
      "Comprehensive endovascular care for peripheral arterial and venous disease, with emphasis on limb salvage and restoration of circulation. PAD, chronic limb-threatening ischemia, peripheral angioplasty and stenting, carotid disease, venous disease, and DVT management.",
    image: "/images/cond-coronary.jpg",
    href: "/contact",
  },
  {
    title: "Rhythm Management",
    subtitle: "Arrhythmia Diagnosis & Treatment",
    description:
      "Comprehensive evaluation and management of all major cardiac arrhythmias — from atrial fibrillation to ventricular rhythm disorders. Rate and rhythm strategy for AFib, anticoagulation management, cardioversion, pacemaker & ICD coordination, and catheter ablation referral.",
    image: "/images/cond-arrhythmia.jpg",
    href: "/contact",
  },
  {
    title: "Preventive Cardiology",
    subtitle: "Stop Heart Disease Before It Starts",
    description:
      "Advanced cardiovascular risk assessment using ApoB, Lp(a), LDL-P, coronary artery calcium scoring, and inflammatory biomarkers to identify hidden risk. PCSK9 inhibitors, GLP-1 agonists, SGLT-2 inhibitors, and hypertension management — guided by ACC/AHA guidelines. Because the best intervention is the one you never need.",
    image: "/images/blog-diet.jpg",
    href: "/conditions/preventive-cardiology",
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
            alt="Sierra Heart & Vascular Institute procedure laboratory"
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
            ADVANCED CARDIAC & VASCULAR CARE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-light text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]"
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-8 lg:px-16 border-b border-black/8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-black/70 text-[15px] lg:text-[16px] font-sans leading-[1.9] max-w-3xl">
            Sierra Heart & Vascular Institute offers a full spectrum of cardiovascular services —
            from clinical evaluation and preventive cardiology through complex structural heart
            procedures and vascular intervention. Dr. Sanam brings subspecialty-level expertise
            across all seven service lines, coordinated under one roof in Fresno, California.
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
              LET&apos;S TALK ABOUT YOUR HEART
            </p>
            <h2 className="text-4xl md:text-5xl font-sans font-light text-white mb-6">
              SCHEDULE APPOINTMENT
            </h2>
            <p className="text-white/70 text-[15px] lg:text-[16px] font-sans leading-relaxed mb-10">
              Dr. Sanam is currently accepting new patients. Urgent and same-day referrals accommodated promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-[13px] font-sans font-semibold tracking-[0.15em] hover:bg-[#c4a35a] transition-colors"
              >
                SCHEDULE APPOINTMENT
              </Link>
              <a
                href="tel:5592180076"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/25 text-white text-[13px] font-sans font-medium tracking-[0.15em] hover:border-white transition-colors"
              >
                CALL (559) 218-0076
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
