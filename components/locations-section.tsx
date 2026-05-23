"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"
import Link from "next/link"

const locations = [
  {
    name: "Sierra Heart & Vascular Institute",
    address: "Address Coming Soon",
    city: "Fresno, California",
    phone: "(559) 218-0076",
    hours: "Hours Coming Soon",
  },
]

export function LocationsSection() {
  return (
    <section id="locations" className="bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-black/35 text-[10px] font-sans font-medium tracking-[0.28em] uppercase mb-3">
            FIND US
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-light text-black">
            Our Locations
          </h2>
        </motion.div>

        {/* Locations */}
        <div className="grid grid-cols-1 md:grid-cols-1 max-w-lg gap-8">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f5f4f0] p-8 lg:p-10 group"
            >
              <h3 className="text-[17px] font-sans font-semibold text-black mb-6">
                {loc.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c4a35a] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-black/65 text-[13px] font-sans">{loc.address}</p>
                    <p className="text-black/65 text-[13px] font-sans">{loc.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#c4a35a] flex-shrink-0" />
                  <a
                    href={`tel:${loc.phone.replace(/\./g, "")}`}
                    className="text-black/65 text-[13px] font-sans hover:text-black transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#c4a35a] flex-shrink-0" />
                  <p className="text-black/65 text-[13px] font-sans">{loc.hours}</p>
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
  )
}
