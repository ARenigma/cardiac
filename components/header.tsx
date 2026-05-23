"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "THE PRACTICE", href: "/about" },
  { name: "THE CONDITIONS", href: "/conditions/heart-failure" },
  { name: "THE PROCEDURES", href: "/services" },
  { name: "THE VISIT", href: "/locations" },
  { name: "CONTACT", href: "/contact" },
]

const drawerLinks = [
  {
    name: "Services",
    href: "/services",
    subLinks: [
      { name: "Clinical Cardiology", href: "/services" },
      { name: "Interventional Cardiology", href: "/services" },
      { name: "Structural Heart / TAVR", href: "/services" },
      { name: "Advanced Heart Failure", href: "/services" },
      { name: "Peripheral Vascular", href: "/services" },
      { name: "Rhythm Management", href: "/services" },
      { name: "Preventive Cardiology", href: "/conditions/preventive-cardiology" },
    ],
  },
  {
    name: "About Us",
    href: "/about",
    subLinks: [
      { name: "Our Mission", href: "/about#mission" },
      { name: "Our History", href: "/about#history" },
    ],
  },
  {
    name: "Our Team",
    href: "/team",
    subLinks: [
      { name: "Physicians", href: "/team#physicians" },
      { name: "Staff", href: "/team#staff" },
    ],
  },
  {
    name: "Locations",
    href: "/locations",
    subLinks: [
      { name: "Woodmen Medical Plaza", href: "/locations#woodmen" },
      { name: "Union Medical Campus", href: "/locations#union" },
    ],
  },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [expandedLink, setExpandedLink] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showCTAs, setShowCTAs] = useState(true)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
      setShowCTAs(scrollY < 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isDrawerOpen])

  return (
    <>
      {/* Always-visible slim header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/60 backdrop-blur-md border-b border-white/8" : "bg-transparent"
        }`}
      >
        <div className="flex items-center h-[64px] lg:h-[76px]">
          {/* Logo — same width as CTA panel (w-40 = 160px), full header height */}
          <Link href="/" className="flex-shrink-0 w-40 h-[64px] lg:h-[76px] flex items-center justify-center px-4 py-2">
            <Image
              src="/images/sierrra-logo.png"
              alt="Sierra Heart & Vascular Institute"
              width={160}
              height={76}
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Desktop Nav — pushed to right */}
          <nav className="hidden lg:flex items-center gap-7 ml-auto pr-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] font-sans font-semibold tracking-[0.13em] text-white/75 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            {/* Hamburger beside nav */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="ml-2 w-12 h-12 flex flex-col items-center justify-center gap-[6px] group cursor-pointer flex-shrink-0"
              aria-label="Open menu"
            >
              <span className="w-[22px] h-[1.5px] bg-white/70 group-hover:bg-white transition-colors" />
              <span className="w-[22px] h-[1.5px] bg-white/70 group-hover:bg-white transition-colors" />
            </button>
          </nav>

          {/* Mobile: BOOK CONSULT + hamburger */}
          <div className="lg:hidden ml-auto flex items-center gap-2 pr-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-[13px] font-sans font-semibold tracking-[0.1em] text-black bg-white hover:bg-[#c4a35a] transition-colors whitespace-nowrap"
            >
              BOOK CONSULT
            </Link>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="w-12 h-12 flex flex-col items-center justify-center gap-[6px] group cursor-pointer flex-shrink-0"
              aria-label="Open menu"
            >
              <span className="w-[24px] h-[1.5px] bg-white group-hover:bg-[#c4a35a] transition-colors" />
              <span className="w-[24px] h-[1.5px] bg-white group-hover:bg-[#c4a35a] transition-colors" />
            </button>
          </div>
        </div>
      </header>

      {/* CTA column — left side, homepage only, hides on scroll */}
      <AnimatePresence>
        {showCTAs && isHomePage && (
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-[76px] z-40 hidden lg:block"
          >
            <div className="bg-black flex flex-col w-40">
              {[
                { label: "BOOK CONSULT", href: "/contact" },
                { label: "PATIENT PORTAL", href: "/contact" },
                { label: "UPLOAD IMAGES", href: "/contact" },
              ].map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className="block px-6 py-4 border-b border-white/10 text-white text-[11px] font-sans font-medium tracking-[0.18em] hover:bg-white hover:text-black transition-all duration-200"
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-page Navigation Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            {/* Close */}
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-5 right-6 p-2 text-white hover:text-[#c4a35a] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="absolute top-4 left-6">
              <Link href="/" onClick={() => setIsDrawerOpen(false)}>
                <Image
                  src="/images/sierrra-logo.png"
                  alt="Sierra Heart & Vascular Institute"
                  width={120}
                  height={48}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center justify-center h-full">
              <ul className="space-y-1 text-center">
                {drawerLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    {link.subLinks ? (
                      <button
                        onClick={() =>
                          setExpandedLink(expandedLink === link.name ? null : link.name)
                        }
                        className="text-4xl md:text-5xl font-sans font-light text-white hover:text-[#c4a35a] transition-colors duration-300 flex items-center gap-3 mx-auto cursor-pointer"
                      >
                        {link.name}
                        <span className="text-xl font-light">
                          {expandedLink === link.name ? "−" : "+"}
                        </span>
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className="text-4xl md:text-5xl font-sans font-light text-white hover:text-[#c4a35a] transition-colors duration-300 cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    )}

                    <AnimatePresence>
                      {link.subLinks && expandedLink === link.name && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-2 mb-1 space-y-1"
                        >
                          {link.subLinks.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                onClick={() => setIsDrawerOpen(false)}
                                className="text-[15px] font-sans text-white/50 hover:text-[#c4a35a] transition-colors tracking-wide cursor-pointer"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="absolute bottom-8 left-0 right-0 text-center"
              >
                <p className="text-white/40 text-[13px] tracking-[0.16em] font-sans">
                  CALL US:{" "}
                  <a href="tel:5592180076" className="text-[#c4a35a] hover:underline">
                    (559) 218-0076
                  </a>
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
