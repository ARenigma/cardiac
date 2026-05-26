"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock } from "lucide-react"

const locations = [
  {
    id: "fresno",
    name: "Sierra Heart & Vascular Institute",
    address: "275 West Herndon Ave",
    city: "Clovis, CA 93612",
    phone: "(559) 218-0076",
    fax: null,
    hours: [
      "Hours Coming Soon",
    ],
    mapUrl: "https://maps.google.com/?q=275+West+Herndon+Ave+Clovis+CA+93612",
  },
]

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/blog-visit.jpg"
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
            FIND US
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-light text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]"
          >
            Our Location
          </motion.h1>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-black/70 text-[15px] lg:text-[16px] font-sans leading-[1.9] max-w-3xl mb-16"
          >
            Sierra Heart & Vascular Institute serves patients across Fresno and the greater Central
            Valley of California. Our full address and hours will be published shortly — please call
            us to schedule your visit.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.id}
                id={loc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f5f4f0] p-8 lg:p-10"
              >
                <h3 className="text-[18px] font-sans font-semibold text-black mb-8">{loc.name}</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#c4a35a] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-black/65 text-[13px] font-sans">{loc.address}</p>
                      <p className="text-black/65 text-[13px] font-sans">{loc.city}</p>
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#c4a35a] text-[11px] font-sans hover:underline mt-1 inline-block"
                      >
                        View on Map
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#c4a35a] mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="tel:5592180076" className="text-black/65 text-[13px] font-sans hover:text-black transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#c4a35a] mt-0.5 flex-shrink-0" />
                    <div>
                      {loc.hours.map((h, hi) => (
                        <p key={hi} className="text-black/65 text-[13px] font-sans">
                          {h}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 text-black text-[10px] font-sans font-medium tracking-[0.18em] hover:opacity-55 transition-opacity group"
                  >
                    BOOK APPOINTMENT
                    <span className="w-6 h-px bg-black group-hover:w-10 transition-all duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Affiliations */}
      <section className="py-16 bg-[#f5f4f0] px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[#c4a35a] text-[10px] font-sans font-medium tracking-[0.28em] uppercase mb-4">
              HOSPITAL AFFILIATIONS
            </p>
            <h2 className="text-3xl font-sans font-light text-black mb-8">
              Where Dr. Sanam Operates
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["Community Regional Medical Center", "St. Agnes Medical Center", "Clovis Community Medical Center"].map((hospital) => (
                <div key={hospital} className="bg-white p-6 border-l-2 border-[#c4a35a]">
                  <p className="text-black text-[14px] font-sans font-medium leading-snug">{hospital}</p>
                  <p className="text-black/45 text-[11px] font-sans mt-1">Fresno Area, California</p>
                </div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-sans font-light text-white mb-6">
              Schedule Your Visit
            </h2>
            <p className="text-white/70 text-[15px] lg:text-[16px] font-sans leading-relaxed mb-10">
              Dr. Sanam is currently accepting new patients. Call us or submit a request online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-[13px] font-sans font-semibold tracking-[0.15em] hover:bg-[#c4a35a] hover:text-black transition-colors"
              >
                CONTACT US
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
