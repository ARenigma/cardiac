"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock } from "lucide-react"

const locations = [
  {
    id: "woodmen",
    name: "Woodmen Medical Plaza",
    address: "8890 N Union Blvd, Suite 250",
    city: "Colorado Springs, CO 80920",
    phone: "719.960.0363",
    fax: "719.413.5966",
    hours: [
      "Monday – Friday: 8:00 AM – 5:00 PM",
      "Saturday: By Appointment",
      "Sunday: Closed",
    ],
    mapUrl: "https://maps.google.com/?q=8890+N+Union+Blvd+Colorado+Springs+CO",
  },
  {
    id: "union",
    name: "Union Medical Campus",
    address: "6071 E Woodmen Rd, Suite 200",
    city: "Colorado Springs, CO 80923",
    phone: "719.960.0363",
    fax: "719.413.5966",
    hours: ["Monday – Friday: 8:00 AM – 5:00 PM", "Saturday: Closed", "Sunday: Closed"],
    mapUrl: "https://maps.google.com/?q=6071+E+Woodmen+Rd+Colorado+Springs+CO",
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
            alt="Colorado Springs Clinic"
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
            Our Locations
          </motion.h1>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 lg:py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-black/70 text-[15px] lg:text-[16px] font-sans leading-[1.9] max-w-3xl mb-16"
          >
            We have two convenient locations in Colorado Springs to serve you. Both offices offer
            comprehensive cardiac services and easy access to our full team of specialists.
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
                        Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#c4a35a] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-black/65 text-[13px] font-sans">Tel: {loc.phone}</p>
                      <p className="text-black/65 text-[13px] font-sans">Fax: {loc.fax}</p>
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
              Visit Us Today
            </h2>
            <p className="text-white/70 text-[15px] lg:text-[16px] font-sans leading-relaxed mb-10">
              Contact us to schedule your appointment at either of our convenient locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-[13px] font-sans font-semibold tracking-[0.15em] hover:bg-[#c4a35a] hover:text-black transition-colors"
              >
                CONTACT US
              </Link>
              <a
                href="tel:7199600363"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/25 text-white text-[13px] font-sans font-medium tracking-[0.15em] hover:border-white transition-colors"
              >
                CALL 719.960.0363
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
