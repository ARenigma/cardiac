"use client"

import { use } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

const conditions = {
  "heart-failure": {
    title: "Heart Failure",
    subtitle: "Understanding & Treating Heart Failure",
    category: "THE PUMP",
    image: "/images/cond-heart-failure.jpg",
    description:
      "Heart failure occurs when the heart muscle does not pump blood as well as it should. This condition develops when the heart cannot keep up with its workload, causing blood to back up and fluid to build up in the lungs and other parts of the body. With modern therapy, most patients experience significant improvement in symptoms and quality of life.",
    symptoms: [
      "Shortness of breath during activity or when lying down",
      "Fatigue and weakness",
      "Swelling in the legs, ankles, and feet",
      "Rapid or irregular heartbeat",
      "Reduced ability to exercise",
      "Persistent cough or wheezing",
    ],
    treatments: [
      "Lifestyle modifications and medication management",
      "Cardiac resynchronization therapy (CRT)",
      "Implantable cardioverter-defibrillator (ICD)",
      "Left ventricular assist devices (LVAD)",
      "Heart valve repair or replacement",
    ],
  },
  arrhythmia: {
    title: "Arrhythmia",
    subtitle: "Heart Rhythm Disorders",
    category: "THE RHYTHM",
    image: "/images/cond-arrhythmia.jpg",
    description:
      "An arrhythmia is an irregular heartbeat — your heart may beat too fast, too slow, or with an irregular pattern. While many arrhythmias are harmless, others can be serious or life-threatening and require expert management. Our electrophysiology team specializes in diagnosing and treating the full spectrum of heart rhythm disorders.",
    symptoms: [
      "Fluttering sensation in the chest (palpitations)",
      "Racing heartbeat (tachycardia)",
      "Slow heartbeat (bradycardia)",
      "Chest pain or discomfort",
      "Shortness of breath",
      "Dizziness or lightheadedness",
    ],
    treatments: [
      "Antiarrhythmic medications",
      "Catheter ablation",
      "Pacemaker implantation",
      "Implantable cardioverter-defibrillator (ICD)",
      "Watchman device for AFib patients",
    ],
  },
  "coronary-artery": {
    title: "Coronary Artery Disease",
    subtitle: "Understanding CAD",
    category: "THE VESSELS",
    image: "/images/cond-coronary.jpg",
    description:
      "Coronary artery disease (CAD) is caused by plaque buildup in the walls of the arteries that supply blood to the heart. This buildup causes the inside of the arteries to narrow over time, which can partially or totally block blood flow. Our interventional team uses advanced imaging and minimally invasive techniques to restore healthy circulation.",
    symptoms: [
      "Chest pain or discomfort (angina)",
      "Pain in the shoulders, arms, neck, jaw, or back",
      "Shortness of breath",
      "Fatigue with exertion",
      "Heart palpitations",
      "Nausea or sweating",
    ],
    treatments: [
      "Lifestyle changes and risk factor management",
      "Medication therapy (statins, blood thinners)",
      "Coronary angioplasty and stenting",
      "Coronary artery bypass grafting (CABG)",
      "Enhanced external counterpulsation (EECP)",
    ],
  },
  "structural-heart": {
    title: "Structural Heart Disease",
    subtitle: "Heart Valve & Structure Conditions",
    category: "THE VALVES",
    image: "/images/cond-structural.jpg",
    description:
      "Structural heart disease refers to defects or abnormalities in the heart's valves, walls, or chambers. These conditions can be congenital or develop over time due to wear and disease. Our Structural Heart Program offers advanced transcatheter solutions — TAVR, MitraClip, Watchman, and more — many of which require no open surgery.",
    symptoms: [
      "Heart murmur",
      "Shortness of breath",
      "Fatigue and reduced exercise tolerance",
      "Swelling in the ankles or abdomen",
      "Chest discomfort",
      "Irregular heartbeat",
    ],
    treatments: [
      "TAVR (Transcatheter Aortic Valve Replacement)",
      "MitraClip / TEER for mitral regurgitation",
      "PFO & ASD closure",
      "Left Atrial Appendage Occlusion (LAAO / Watchman)",
      "Transcatheter tricuspid interventions",
      "3D Echo & CT pre-procedural planning",
    ],
  },
  "preventive-cardiology": {
    title: "Preventive Cardiology",
    subtitle: "Stop Heart Disease Before It Starts",
    category: "PREVENTION",
    image: "/images/acc-heart-failure.jpg",
    description:
      "Dr. Sanam takes a proactive, data-driven approach to cardiovascular prevention. Using advanced lipid profiling — including ApoB, Lp(a), and LDL particle number — alongside coronary artery calcium scoring and inflammatory biomarker testing, we identify hidden cardiovascular risk that standard screening misses. Whether you are managing multiple risk factors, have a strong family history of heart disease, or are a post-MI patient working to prevent a second event, our program creates a personalized, aggressive prevention strategy guided by the most current ACC/AHA guidelines.",
    symptoms: [
      "High LDL or non-HDL cholesterol, elevated ApoB or Lp(a)",
      "Hypertension — including resistant hypertension",
      "Metabolic syndrome, insulin resistance, or pre-diabetes",
      "Strong family history of heart attack or stroke",
      "Prior MI, stent, or bypass — secondary prevention",
      "Elevated hsCRP or other inflammatory markers",
    ],
    treatments: [
      "Advanced lipid panel — ApoB, Lp(a), LDL-P; PCSK9 inhibitors; Inclisiran & Bempedoic Acid",
      "Coronary Artery Calcium (CAC) scoring and CT coronary angiography",
      "Hypertension management including 24-hr ambulatory BP monitoring",
      "GLP-1 & SGLT-2 therapy for cardiometabolic risk reduction",
      "Post-MI GDMT optimization and DAPT antiplatelet management",
      "Dietary counseling, exercise prescription, smoking cessation, sleep apnea assessment",
    ],
  },
}

export default function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const condition = conditions[slug as keyof typeof conditions]

  if (!condition) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-sans font-light text-black mb-4">Condition Not Found</h1>
            <Link href="/" className="text-[#c4a35a] hover:underline font-sans text-sm">
              Return to Home
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
            src={condition.image}
            alt={condition.title}
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
            {condition.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-light text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]"
          >
            {condition.title}
          </motion.h1>
        </div>
      </section>

      {/* Back link */}
      <div className="bg-white border-b border-black/8 px-8 lg:px-16 py-4 max-w-6xl mx-auto">
        <Link
          href="/#conditions"
          className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors text-[11px] font-sans font-medium tracking-wide"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to All Conditions
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
                {condition.subtitle}
              </h2>
              <p className="text-black/70 text-[14px] lg:text-[16px] font-sans leading-[1.9] mb-10">
                {condition.description}
              </p>

              <h3 className="text-[13px] font-sans font-semibold text-black tracking-[0.12em] uppercase mb-5">
                Common Symptoms
              </h3>
              <ul className="space-y-3">
                {condition.symptoms.map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#c4a35a] rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-black/70 text-[13px] font-sans leading-relaxed">
                      {symptom}
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
                  Treatment Options
                </h3>
                <ul className="space-y-5">
                  {condition.treatments.map((treatment, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[#c4a35a] text-[11px] font-sans font-semibold tabular-nums mt-0.5">
                        0{i + 1}
                      </span>
                      <span className="text-black/60 text-[13px] font-sans leading-relaxed">
                        {treatment}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-black/8">
                  <p className="text-black/65 text-[13px] font-sans leading-relaxed mb-6">
                    Our specialists will work with you to determine the best treatment approach based
                    on your individual condition and health goals.
                  </p>
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

      {/* Related Conditions */}
      <section className="py-24 bg-[#0a0a0a] px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#c4a35a] text-[10px] font-sans font-medium tracking-[0.28em] uppercase mb-4">
            EXPLORE MORE
          </p>
          <h2 className="text-3xl font-sans font-light text-white mb-12">
            Other Conditions We Treat
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(conditions)
              .filter(([condSlug]) => condSlug !== slug)
              .slice(0, 3)
              .map(([condSlug, cond], i) => (
                <motion.div
                  key={condSlug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/conditions/${condSlug}`} className="group block">
                    <div className="relative h-52 mb-4 overflow-hidden">
                      <Image
                        src={cond.image}
                        alt={cond.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                    </div>
                    <p className="text-[#c4a35a] text-[9px] font-sans tracking-[0.22em] uppercase mb-1">
                      {cond.category}
                    </p>
                    <h3 className="text-white text-[15px] font-sans font-medium group-hover:text-[#c4a35a] transition-colors">
                      {cond.title}
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
