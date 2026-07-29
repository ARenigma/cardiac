"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Additional physicians will be enabled when they join the practice
// const upcomingDoctors = [
//   { name: "Dr. Sarah Chen", title: "Director, Structural Heart Program", credentials: "MD, PhD, FACC" },
//   { name: "Dr. Michael Torres", title: "Electrophysiologist", credentials: "MD, FHRS" },
//   { name: "Dr. Emily Rodriguez", title: "Non-Invasive Cardiologist", credentials: "MD, FACC" },
// ]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/procedure-room.jpg"
            alt="Sierra Heart & Vascular Institute"
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
            className="text-[#c4a35a] text-[12px] font-sans font-semibold tracking-[0.28em] uppercase mb-4"
          >
            PHYSICIAN. INNOVATOR. YOUR CARDIOLOGIST.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-light text-5xl md:text-6xl lg:text-7xl text-white"
          >
            Our Physician
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-white/70 text-[16px] font-sans font-normal leading-[1.85]">
              Sierra Heart & Vascular Institute is led by Dr. Kumar Sanam — a board-certified
              interventional and structural cardiologist with over 17 years of cardiovascular
              expertise and fellowship training at two nationally ranked academic cardiac centers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dr. Sanam full profile */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="grid lg:grid-cols-2 gap-12 bg-white/5 p-8 lg:p-12">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/dr-sanam-1.png"
                  alt="Dr. Kumar Sanam, MD FACC FSCAI RPVI"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-sans font-light text-2xl text-white mb-1">Dr. Kumar Sanam</h3>
                  <p className="text-[#c4a35a] text-[12px] font-sans font-medium tracking-widest uppercase">MD · FACC · FSCAI · RPVI</p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-white/55 text-[12px] font-sans font-semibold tracking-widest uppercase mb-2">MEDICAL DIRECTOR</p>
                <p className="text-white/55 text-[12px] font-sans font-medium mb-6">Interventional & Structural Cardiologist</p>

                <div className="w-8 h-px bg-[#c4a35a] mb-6" />

                <p className="text-[#c4a35a] text-[15px] font-sans font-medium italic leading-[1.7] mb-6">
                  "Exceptional heart care begins with an exceptional relationship."
                </p>
                <p className="text-white/75 text-[15px] font-sans font-normal leading-[1.85] mb-4">
                  Dr. Kumar Sanam specializes in all areas of general cardiology, heart failure, and complex and advanced cardiac procedures. Board certified in cardiology, interventional cardiology, echocardiography, nuclear cardiology, and vascular medicine, he brings over 17 years of cardiovascular expertise to every encounter. Based in Fresno, California, his practice spans the full spectrum — from preventive cardiology through high-risk structural heart intervention.
                </p>
                <p className="text-white/75 text-[15px] font-sans font-normal leading-[1.85] mb-4">
                  Dr. Sanam completed his Interventional Cardiology Fellowship at the Medical College of Georgia, Augusta University, building on a Heart Transplant Fellowship and Cardiovascular Disease Fellowship at the University of Alabama at Birmingham (UAB), and an Internal Medicine Residency from one of the nation's most rigorously trained programs. His Cardiology Fellowship at Providence Hospital in Michigan further shaped his comprehensive approach to cardiac medicine.
                </p>
                <p className="text-white/75 text-[15px] font-sans font-normal leading-[1.85] mb-4">
                  But credentials only tell part of the story. Dr. Sanam is attentive, compassionate, and deeply knowledgeable — a physician who takes a whole-person view of cardiovascular health and takes the time to truly care.
                </p>
                <p className="text-white/75 text-[15px] font-sans font-normal leading-[1.85] mb-6">
                  Because whether the goal is a life-saving intervention or preventing one from ever being necessary, Dr. Sanam believes the most powerful tool in cardiovascular medicine remains the same: a physician and the person they serve who trust each other completely.
                </p>

                {/* Peer-reviewed publications — sourced from myshavi.com */}
                <div className="mb-8">
                  <p className="text-[#c4a35a] text-[10px] font-sans font-medium tracking-[0.24em] uppercase mb-4">
                    PEER-REVIEWED RESEARCH
                  </p>
                  <ul className="space-y-3">
                    {[
                      {
                        title: "Renin-Angiotensin System Inhibition and Lower 30-Day All-Cause Readmission in Medicare Beneficiaries with Heart Failure",
                        authors: "Sanam K, Bhatia V, Bajaj NS, et al.",
                        journal: "American Journal of Cardiology",
                      },
                      {
                        title: "Is There Still a Role for Renal Artery Stenting in the Management of Renovascular Hypertension? A Single-Center Experience",
                        authors: "Khan Z, Tolia S, Sanam K, et al.",
                        journal: "Cardiovascular Revascularization Medicine",
                      },
                      {
                        title: "Long-Term Use of the Wearable Cardioverter Defibrillator in Patients with Explanted ICD",
                        authors: "Kaspar G, Sanam K, et al.",
                        journal: "International Journal of Cardiology · 2018",
                      },
                      {
                        title: "Successful Fluoroless Radiofrequency Catheter Ablation of Supraventricular Tachycardia During Pregnancy",
                        authors: "Kaspar G, Sanam K, et al.",
                        journal: "Clinical Case Reports · 2018",
                      },
                    ].map((pub) => (
                      <li key={pub.title} className="border-l border-white/15 pl-4">
                        <p className="text-white/80 text-[13px] font-sans font-medium leading-[1.5] mb-0.5">{pub.title}</p>
                        <p className="text-white/45 text-[11px] font-sans">{pub.authors}</p>
                        <p className="text-[#c4a35a]/70 text-[11px] font-sans italic">{pub.journal}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Credential tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Board Certified · Cardiovascular Disease", "Interventional Cardiology", "TAVR / Structural Heart", "Impella Certified", "RPVI · Vascular Imaging", "ABMS Board Certified"].map((cert) => (
                    <span key={cert} className="px-3 py-1 border border-white/15 text-white/55 text-[10px] font-sans tracking-wide">
                      {cert}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#c4a35a] text-black text-[13px] font-sans font-semibold tracking-[0.15em] hover:bg-white transition-colors self-start"
                >
                  SCHEDULE APPOINTMENT
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Training timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <p className="text-[#c4a35a] text-[10px] font-sans font-medium tracking-[0.28em] uppercase mb-8">
              EDUCATION & TRAINING
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { year: "2008", degree: "Doctor of Medicine (MD)", institution: "Kasturba Medical College, Manipal University", note: "Graduated with Honors" },
                { year: "2010–13", degree: "Internal Medicine Residency", institution: "University of Alabama at Birmingham (UAB)", note: "Top-Ranked Academic Medical Center" },
                { year: "2013–16", degree: "Cardiovascular Disease Fellowship", institution: "UAB · Providence Hospital, Michigan", note: "ACGME-Accredited Program" },
                { year: "2016–17", degree: "Heart Transplant Fellowship", institution: "University of Alabama at Birmingham (UAB)", note: "Advanced Heart Failure & Transplant" },
                { year: "2021–22", degree: "Interventional Cardiology Fellowship", institution: "Medical College of Georgia, Augusta University", note: "Structural Heart · Complex PCI · Vascular" },
              ].map((item) => (
                <div key={item.year} className="border-l border-white/15 pl-5">
                  <p className="text-[#c4a35a] text-[11px] font-sans font-semibold tracking-widest mb-2">{item.year}</p>
                  <p className="text-white text-[13px] font-sans font-medium mb-1">{item.degree}</p>
                  <p className="text-white/55 text-[12px] font-sans mb-1">{item.institution}</p>
                  <p className="text-white/30 text-[10px] font-sans italic">{item.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="font-sans font-light text-4xl md:text-5xl text-white mb-6">
              Schedule with Dr. Sanam
            </h2>
            <p className="text-white/60 text-[16px] font-sans font-normal mb-10">
              Dr. Sanam is currently accepting new patients. Urgent referrals welcomed.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#c4a35a] text-black text-[13px] font-sans font-semibold tracking-wide hover:bg-white transition-colors"
            >
              SCHEDULE APPOINTMENT
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
