"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const footerNavTop = [
  { name: "THE PRACTICE", href: "/about" },
  { name: "THE CONDITIONS", href: "/conditions/coronary-artery" },
  { name: "THE PROCEDURES", href: "/services" },
  { name: "THE VISIT", href: "/locations" },
  { name: "CONTACT", href: "/contact" },
]

const footerNavBottom: { name: string; href: string }[] = []

export function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus("done")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <footer className="bg-[#0a0a0a]">
      {/* Main Footer Content */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-8">
        {/* Navigation Links */}
        <nav className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 mb-3">
            {footerNavTop.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] font-sans font-medium tracking-[0.14em] text-white/50 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
            {footerNavBottom.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] font-sans font-medium tracking-[0.14em] text-white/50 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Badges, Newsletter, Social — 3-col grid on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-start">

          {/* Col 1 — Medical badges */}
          <div className="flex items-start justify-center lg:justify-start gap-4">
            {/* FACC */}
            <div className="flex flex-col items-center gap-2 w-16">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.2" className="text-white/60" />
                  <text x="20" y="17" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="700" letterSpacing="0.5" className="text-white/80">FACC</text>
                  <text x="20" y="27" textAnchor="middle" fill="currentColor" fontSize="4" letterSpacing="0.2" className="text-white/55">FELLOW ACC</text>
                </svg>
              </div>
              <span className="text-[8px] text-white/55 tracking-[0.12em] text-center leading-tight font-medium">FELLOW<br/>AM. COLLEGE</span>
            </div>
            {/* FSCAI */}
            <div className="flex flex-col items-center gap-2 w-16">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                  <rect x="4" y="4" width="32" height="32" stroke="currentColor" strokeWidth="1.2" className="text-white/60" />
                  <text x="20" y="17" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="700" letterSpacing="0.3" className="text-white/80">FSCAI</text>
                  <text x="20" y="28" textAnchor="middle" fill="currentColor" fontSize="3.8" letterSpacing="0.2" className="text-white/55">INTERVENTIONAL</text>
                </svg>
              </div>
              <span className="text-[8px] text-white/55 tracking-[0.12em] text-center leading-tight font-medium">FELLOW<br/>SCAI</span>
            </div>
            {/* RPVI */}
            <div className="flex flex-col items-center gap-2 w-16">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                  <path d="M20 4 L34 10 L34 22 Q34 32 20 36 Q6 32 6 22 L6 10 Z" stroke="currentColor" strokeWidth="1.2" className="text-white/60" />
                  <text x="20" y="20" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="700" letterSpacing="0.3" className="text-white/80">RPVI</text>
                  <text x="20" y="28" textAnchor="middle" fill="currentColor" fontSize="3.8" className="text-white/55">VASCULAR</text>
                </svg>
              </div>
              <span className="text-[8px] text-white/55 tracking-[0.12em] text-center leading-tight font-medium">REGISTERED PHYSICIAN<br/>IN VASCULAR INTERP.</span>
            </div>
            {/* ABMS */}
            <div className="flex flex-col items-center gap-2 w-16">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.2" className="text-white/60" />
                  <text x="20" y="17" textAnchor="middle" fill="currentColor" fontSize="7.5" fontWeight="700" letterSpacing="0.3" className="text-white/80">ABMS</text>
                  <text x="20" y="27" textAnchor="middle" fill="currentColor" fontSize="4" className="text-white/55">BOARD CERT.</text>
                </svg>
              </div>
              <span className="text-[8px] text-white/55 tracking-[0.12em] text-center leading-tight font-medium">BOARD<br/>CERTIFIED</span>
            </div>
          </div>

          {/* Col 2 — Newsletter (centered in its column) */}
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex w-full max-w-sm mx-auto"
          >
            {status === "done" ? (
              <p className="text-[11px] font-sans tracking-[0.1em] text-[#c4a35a] py-3">
                SUBSCRIBED — THANK YOU
              </p>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={status === "error" ? "TRY AGAIN" : "SIGN UP FOR NEWSLETTER"}
                  className={`flex-1 px-4 py-3 bg-transparent border text-white text-[11px] tracking-[0.1em] placeholder:text-white/40 focus:outline-none transition-colors ${
                    status === "error" ? "border-red-400/60 placeholder:text-red-400/60" : "border-white/20 focus:border-[#c4a35a]"
                  }`}
                  required
                  disabled={status === "sending"}
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-4 py-3 border border-white/20 border-l-0 text-white/60 hover:bg-[#c4a35a] hover:border-[#c4a35a] hover:text-black transition-all disabled:opacity-40"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </motion.form>

          {/* Col 3 — Social icons disabled — re-enable when social accounts are active */}
          {/* <div className="flex items-center justify-center lg:justify-end gap-3">
            <a href="#" className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/65 hover:text-white hover:border-white transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/65 hover:text-white hover:border-white transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/65 hover:text-white hover:border-white transition-colors" aria-label="X (Twitter)">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/65 hover:text-white hover:border-white transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-1">
          <p className="text-[11px] font-sans tracking-[0.08em] lg:tracking-[0.12em] text-white/35 leading-relaxed text-center sm:text-left">
            &copy; 2026 Sierra Heart &amp; Vascular Institute | Fresno, California | All rights reserved.
          </p>
          {/* Backlink — subtle */}
          <a
            href="https://axionix.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-sans font-medium tracking-[0.1em] text-white/30 hover:text-white/60 transition-colors whitespace-nowrap flex items-center gap-1"
          >
            POWERED BY AXIONIX TECH
            <svg className="w-2.5 h-2.5 opacity-60" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 8L8 2M8 2H4M8 2V6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
