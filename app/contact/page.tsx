"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { WEAVE_SCHEDULING_URL } from "@/lib/constants"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[45vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/sierra.png"
            alt="Sierra Heart & Vascular Institute"
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
            GET IN TOUCH
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-light text-5xl md:text-6xl lg:text-7xl text-white"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">

            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-sans font-light text-black mb-6">
                Schedule Your Consultation
              </h2>
              <p className="text-black/70 text-[14px] lg:text-[16px] font-sans leading-[1.9] mb-12">
                Ready to take the first step toward better heart health? Contact us to schedule an
                appointment or ask any questions about our services. Our team typically responds
                within one business day.
              </p>

              <div className="space-y-7">
                {[
                  {
                    icon: <Phone className="w-4 h-4 text-[#c4a35a]" />,
                    label: "Phone",
                    lines: ["(559) 203-3600", "Fax: (559) 910-9955"],
                  },
                  {
                    icon: <Mail className="w-4 h-4 text-[#c4a35a]" />,
                    label: "Email",
                    lines: ["info@myshavi.com"],
                  },
                  {
                    icon: <Clock className="w-4 h-4 text-[#c4a35a]" />,
                    label: "Office Hours",
                    lines: ["Monday – Friday: 8:00 AM – 5:00 PM"],
                  },
                  {
                    icon: <MapPin className="w-4 h-4 text-[#c4a35a]" />,
                    label: "Location",
                    lines: [
                      "Sierra Heart & Vascular Institute",
                      "275 West Herndon Ave",
                      "Clovis, CA 93612",
                    ],
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#f5f4f0] flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-black text-[11px] font-sans font-semibold tracking-wide mb-1">
                        {item.label}
                      </h3>
                      {item.lines.map((l, i) => (
                        <p key={i} className="text-black/70 text-[13px] font-sans">
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — schedule CTA */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#f5f4f0] p-8 lg:p-10 flex flex-col justify-center"
            >
              <h3 className="text-[18px] font-sans font-semibold text-black mb-4">
                Request an Appointment
              </h3>
              <p className="text-black/70 text-[14px] font-sans leading-[1.85] mb-8">
                Use our online scheduling portal to request an appointment at a time that works
                for you. Our team will confirm your visit shortly after.
              </p>
              <a
                href={WEAVE_SCHEDULING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-black text-white text-[13px] font-sans font-semibold tracking-[0.15em] hover:bg-[#c4a35a] hover:text-black transition-colors"
              >
                SCHEDULE APPOINTMENT
              </a>
              <p className="text-black/45 text-[11px] font-sans leading-relaxed mt-6 border-l-2 border-[#c4a35a] pl-3">
                For a medical emergency, call 911. Do not use online scheduling for urgent concerns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
