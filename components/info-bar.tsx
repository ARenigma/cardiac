"use client"

import { Phone, MapPin, Clock } from "lucide-react"

export function InfoBar() {
  return (
    <div className="w-full bg-[#0a0a0a] border-b border-white/8 z-[60] relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-1 py-2">
          <a
            href="tel:5592033600"
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-[10px] font-sans tracking-[0.08em] whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-[#c4a35a]" />
            (559) 203-3600
          </a>
          <span className="text-white/20 text-[10px] hidden sm:block">|</span>
          <span className="flex items-center gap-1.5 text-white/60 text-[10px] font-sans tracking-[0.08em] whitespace-nowrap">
            <Phone className="w-3 h-3 text-white/30" />
            Fax: (559) 910-9955
          </span>
          <span className="text-white/20 text-[10px] hidden sm:block">|</span>
          <a
            href="mailto:info@myshavi.com"
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-[10px] font-sans tracking-[0.08em] whitespace-nowrap"
          >
            info@myshavi.com
          </a>
          <span className="text-white/20 text-[10px] hidden sm:block">|</span>
          <span className="flex items-center gap-1.5 text-white/60 text-[10px] font-sans tracking-[0.08em] whitespace-nowrap">
            <MapPin className="w-3 h-3 text-[#c4a35a]" />
            275 W. Herndon Ave, Clovis, CA 93612
          </span>
          <span className="text-white/20 text-[10px] hidden sm:block">|</span>
          <span className="flex items-center gap-1.5 text-white/60 text-[10px] font-sans tracking-[0.08em] whitespace-nowrap">
            <Clock className="w-3 h-3 text-[#c4a35a]" />
            Mon – Fri: 8:00 AM – 5:00 PM
          </span>
        </div>
      </div>
    </div>
  )
}
