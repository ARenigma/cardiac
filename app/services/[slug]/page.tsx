"use client"

import { use } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

const services = {
  "clinical-cardiology": {
    title: "Clinical Cardiology",
    subtitle: "Comprehensive Cardiac Evaluation & Management",
    category: "GENERAL CARDIOLOGY",
    image: "/images/blog-visit.jpg",
    description:
      "Clinical cardiology is the foundation of your cardiovascular care — a thorough evaluation of your heart's health, identification of risk factors, and a clear management plan tailored to your needs. Every patient who walks through our doors receives a complete cardiac workup and an individualized treatment strategy, not a one-size-fits-all protocol.",
    procedures: [
      "12-Lead ECG (electrocardiogram) — resting heart rhythm and conduction evaluation",
      "Echocardiogram — ultrasound imaging of heart structure and function",
      "Stress testing — exercise and pharmacologic, with imaging when indicated",
      "Holter monitor & event recorder — ambulatory rhythm monitoring (24hr to 30 days)",
      "Coronary Artery Calcium (CAC) scoring — subclinical atherosclerosis detection",
      "Pre-operative cardiac clearance — surgical risk stratification",
      "Advanced lipid panel — ApoB, Lp(a), LDL-P, inflammatory markers",
      "Hypertension evaluation including 24-hour ambulatory blood pressure monitoring",
    ],
    whoNeedsIt: [
      "New cardiac symptoms — chest pain, shortness of breath, palpitations, syncope",
      "Newly diagnosed hypertension, diabetes, or high cholesterol",
      "Strong family history of heart attack or sudden cardiac death",
      "Pre-operative clearance before elective surgery",
      "Routine cardiovascular risk assessment in adults over 40",
      "Follow-up management of known cardiac conditions",
    ],
    relatedCondition: "/conditions/coronary-artery",
  },
  "interventional-cardiology": {
    title: "Interventional Cardiology",
    subtitle: "Advanced Catheter-Based Coronary Procedures",
    category: "INTERVENTIONAL",
    image: "/images/surgery-interventional-cardiology.jpg",
    description:
      "Interventional cardiology uses thin, flexible catheters — inserted through a small puncture in the wrist or groin — to diagnose and treat blockages in the coronary arteries without open-heart surgery. Dr. Sanam is fellowship-trained in complex coronary intervention and routinely performs the most technically demanding procedures using wrist-based (transradial) access, which means less bleeding, faster recovery, and same-day discharge for most patients.",
    procedures: [
      "Coronary angiography — diagnostic catheterization to visualize artery blockages",
      "Percutaneous coronary intervention (PCI) — balloon and stent placement",
      "Complex PCI — bifurcation stenting, left main intervention, multivessel disease",
      "Chronic total occlusion (CTO) intervention — opening 100% blocked arteries",
      "Rotational atherectomy — treating calcified, rigid plaque",
      "Intracoronary lithotripsy — shockwave therapy for severely calcified lesions",
      "Impella-assisted high-risk PCI — mechanical circulatory support during complex procedures",
      "Transradial (wrist) approach — preferred access for faster recovery and fewer complications",
    ],
    whoNeedsIt: [
      "Stable angina not controlled with medication",
      "Abnormal stress test with evidence of significant ischemia",
      "Acute coronary syndrome (unstable angina or heart attack)",
      "Coronary artery disease confirmed on CT angiography",
      "Prior stent with suspected re-narrowing (in-stent restenosis)",
      "High-risk anatomy requiring experienced interventional expertise",
    ],
    relatedCondition: "/conditions/coronary-artery",
  },
  "structural-heart": {
    title: "Structural Heart Program",
    subtitle: "Minimally Invasive Valve & Structural Therapies",
    category: "STRUCTURAL HEART",
    image: "/images/cond-structural-new.jpg",
    description:
      "Structural heart disease — abnormalities of the heart's valves, chambers, or walls — was once treated only with open-heart surgery requiring a large incision and weeks of recovery. Today, Dr. Sanam's Structural Heart Program offers transcatheter alternatives for many of these conditions: procedures performed through a small catheter, often through the leg, with most patients home within one to two days.",
    procedures: [
      "TAVR (Transcatheter Aortic Valve Replacement) — replacing the aortic valve without open surgery",
      "MitraClip / TEER — transcatheter mitral valve repair for mitral regurgitation",
      "Watchman / LAAO — left atrial appendage closure for stroke prevention in AFib",
      "PFO closure — treating patent foramen ovale after cryptogenic stroke",
      "ASD closure — closing atrial septal defects via catheter",
      "Transcatheter tricuspid interventions — emerging therapies for tricuspid regurgitation",
      "TEE (Transesophageal echocardiogram) — advanced structural imaging and procedural guidance",
      "Heart Team evaluation — multidisciplinary review of surgical vs. transcatheter options",
    ],
    whoNeedsIt: [
      "Severe aortic stenosis — especially in patients at intermediate or high surgical risk",
      "Significant mitral regurgitation causing symptoms or heart enlargement",
      "Atrial fibrillation with contraindication to long-term anticoagulation",
      "Cryptogenic stroke with PFO on echo",
      "Heart murmur under evaluation for structural significance",
      "Prior open-heart valve surgery with valve deterioration",
    ],
    relatedCondition: "/conditions/structural-heart",
  },
  "heart-failure": {
    title: "Advanced Heart Failure",
    subtitle: "Guideline-Directed Management & Device Therapy",
    category: "HEART FAILURE",
    image: "/images/cond-heart-failure.jpg",
    description:
      "Heart failure management has been transformed over the past decade. With four pillars of guideline-directed medical therapy (GDMT), device support, and remote monitoring, most patients with heart failure — regardless of phenotype — can achieve significant improvement in symptoms, quality of life, and survival. Dr. Sanam manages both HFrEF and HFpEF, including complex cardiomyopathy evaluation and cardiogenic shock stabilization.",
    procedures: [
      "Medication optimization — four-pillar GDMT for HFrEF; phenotype-guided therapy for HFpEF",
      "SGLT-2 inhibitors and GLP-1 agonists — cardiometabolic risk reduction",
      "Impella mechanical circulatory support — cardiogenic shock stabilization and high-risk PCI",
      "CardioMEMS remote pulmonary artery pressure monitoring — early congestion detection",
      "Cardiac resynchronization therapy (CRT) — coordination with electrophysiology",
      "ICD evaluation and management — sudden cardiac death prevention",
      "Advanced cardiomyopathy workup — ischemic vs. non-ischemic differentiation",
      "Cardiac MRI coordination — tissue characterization and viability assessment",
    ],
    whoNeedsIt: [
      "Newly diagnosed heart failure — HFrEF (reduced EF) or HFpEF (preserved EF)",
      "Heart failure with persistent symptoms despite initial therapy",
      "Frequent hospitalizations for fluid overload or decompensation",
      "Reduced ejection fraction below 35% — device therapy evaluation",
      "Cardiomyopathy of unclear etiology requiring advanced workup",
      "Post-myocarditis or post-partum cardiomyopathy under surveillance",
    ],
    relatedCondition: "/conditions/heart-failure",
  },
  "peripheral-vascular": {
    title: "Peripheral Vascular",
    subtitle: "Endovascular & Limb Salvage Therapy",
    category: "VASCULAR",
    image: "/images/leg-ultrasound.jpg",
    description:
      "Peripheral artery disease affects one in five adults over age 65, yet it is dramatically underdiagnosed and undertreated. Left untreated, PAD progresses to chronic limb-threatening ischemia — non-healing wounds, gangrene, and limb loss. Dr. Sanam offers a full spectrum of endovascular therapies to restore circulation in the legs, carotid arteries, and renal vessels, with a strong focus on limb salvage in the highest-risk patients.",
    procedures: [
      "Ankle-brachial index (ABI) — non-invasive screening for peripheral artery disease",
      "Peripheral angiography — diagnostic imaging of leg, carotid, and renal arteries",
      "Peripheral angioplasty and stenting — restoring blood flow to the lower extremities",
      "Atherectomy — directional, orbital, and laser plaque removal from peripheral arteries",
      "Chronic limb-threatening ischemia (CLTI) management — limb salvage protocols",
      "Carotid artery evaluation — stroke risk assessment and intervention planning",
      "Renal artery evaluation — secondary hypertension and renal insufficiency workup",
      "Venous disease and DVT management — deep vein thrombosis and chronic venous insufficiency",
    ],
    whoNeedsIt: [
      "Leg pain, cramping, or fatigue with walking that improves with rest (claudication)",
      "Non-healing wounds or ulcers on the feet or legs",
      "Cold, pale, or discolored feet — especially with hair loss on the lower legs",
      "Diabetes with peripheral neuropathy or foot complications",
      "History of smoking with leg symptoms",
      "Carotid bruit or TIA (transient ischemic attack) workup",
    ],
    relatedCondition: "/conditions/peripheral-artery",
  },
  "rhythm-management": {
    title: "Rhythm Management",
    subtitle: "Arrhythmia Diagnosis & Treatment",
    category: "ELECTROPHYSIOLOGY",
    image: "/images/cond-arrhythmia.jpg",
    description:
      "The heart's electrical system coordinates over 100,000 beats per day. When this system misfires, the result can range from a harmless extra beat to life-threatening ventricular fibrillation. Dr. Sanam evaluates and manages the full spectrum of cardiac arrhythmias, from atrial fibrillation to complex ventricular rhythm disorders, coordinating catheter ablation, device therapy, and anticoagulation management under one roof.",
    procedures: [
      "12-Lead ECG and ambulatory Holter monitoring — rhythm diagnosis",
      "Event recorder and implantable loop recorder — long-term monitoring for syncope and cryptogenic stroke",
      "Cardioversion — electrical restoration of normal sinus rhythm",
      "Antiarrhythmic medication management — rate and rhythm control strategies",
      "Catheter ablation referral and co-management — AFib, flutter, SVT, VT",
      "Pacemaker implantation and follow-up — sick sinus syndrome, heart block",
      "ICD (implantable cardioverter-defibrillator) evaluation and management",
      "Watchman device — stroke prevention in AFib without lifelong anticoagulation",
    ],
    whoNeedsIt: [
      "Palpitations, racing heart, or irregular heartbeat — especially with symptoms",
      "Unexplained syncope (fainting) or near-syncope",
      "Newly diagnosed atrial fibrillation or atrial flutter",
      "History of ventricular tachycardia or survived sudden cardiac arrest",
      "Bradycardia — heart rate too slow, causing fatigue or dizziness",
      "Cryptogenic stroke requiring long-term rhythm monitoring",
    ],
    relatedCondition: "/conditions/arrhythmia",
  },
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const service = services[slug as keyof typeof services]

  if (!service) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-sans font-light text-black mb-4">Service Not Found</h1>
            <Link href="/services" className="text-[#c4a35a] hover:underline font-sans text-sm">
              Return to Services
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
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
            {service.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-light text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]"
          >
            {service.title}
          </motion.h1>
        </div>
      </section>

      {/* Back link */}
      <div className="bg-white border-b border-black/8 px-8 lg:px-16 py-4 max-w-6xl mx-auto">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors text-[11px] font-sans font-medium tracking-wide"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to All Services
        </Link>
      </div>

      {/* Content */}
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-sans font-semibold text-black mb-6">
                {service.subtitle}
              </h2>
              <p className="text-black/70 text-[14px] lg:text-[16px] font-sans leading-[1.9] mb-10">
                {service.description}
              </p>

              <h3 className="text-[13px] font-sans font-semibold text-black tracking-[0.12em] uppercase mb-5">
                Who Should See Us
              </h3>
              <ul className="space-y-3">
                {service.whoNeedsIt.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#c4a35a] rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-black/70 text-[13px] font-sans leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#f5f4f0] p-8 lg:p-10">
                <h3 className="text-[13px] font-sans font-semibold text-black tracking-[0.12em] uppercase mb-7">
                  Procedures & Tests Offered
                </h3>
                <ul className="space-y-5">
                  {service.procedures.map((proc, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[#c4a35a] text-[11px] font-sans font-semibold tabular-nums mt-0.5">
                        0{i + 1}
                      </span>
                      <span className="text-black/60 text-[13px] font-sans leading-relaxed">
                        {proc}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-black/8">
                  <p className="text-black/65 text-[13px] font-sans leading-relaxed mb-4">
                    Dr. Sanam will review your history, imaging, and test results to determine the
                    most appropriate approach for your situation.
                  </p>
                  <Link
                    href={service.relatedCondition}
                    className="inline-flex items-center gap-3 text-black/50 text-[10px] font-sans font-medium tracking-[0.15em] hover:text-black transition-colors mb-6 group"
                  >
                    LEARN ABOUT THE CONDITION
                    <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
                  </Link>
                  <br />
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 text-black text-[10px] font-sans font-semibold tracking-[0.18em] hover:opacity-55 transition-opacity group"
                  >
                    SCHEDULE APPOINTMENT
                    <span className="w-8 h-px bg-black group-hover:w-14 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 bg-[#0a0a0a] px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#c4a35a] text-[10px] font-sans font-medium tracking-[0.28em] uppercase mb-4">
            EXPLORE MORE
          </p>
          <h2 className="text-3xl font-sans font-light text-white mb-12">
            Other Services We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(services)
              .filter(([s]) => s !== slug)
              .slice(0, 3)
              .map(([s, svc], i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/services/${s}`} className="group block">
                    <div className="relative h-52 mb-4 overflow-hidden">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                    </div>
                    <p className="text-[#c4a35a] text-[9px] font-sans tracking-[0.22em] uppercase mb-1">
                      {svc.category}
                    </p>
                    <h3 className="text-white text-[15px] font-sans font-medium group-hover:text-[#c4a35a] transition-colors">
                      {svc.title}
                    </h3>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
