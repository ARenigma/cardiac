"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

// ─────────────────────────────────────────────
// OPTION A — Letter-by-letter blur reveal
// Each character slides up and de-blurs in sequence.
// Feel: premium, editorial, luxury watch brand.
// ─────────────────────────────────────────────
export function OptionA_LetterBlur() {
  const ref = useRef<HTMLDivElement>(null)
  const text = "SIERRA HEART & VASCULAR INSTITUTE"

  useEffect(() => {
    const letters = ref.current?.querySelectorAll<HTMLElement>(".letter")
    if (!letters?.length) return
    gsap.fromTo(
      letters,
      { opacity: 0, y: 28, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        stagger: 0.035,
        ease: "power3.out",
        delay: 0.3,
      }
    )
  }, [])

  return (
    <div ref={ref} className="flex flex-wrap justify-center mb-6 select-none">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="letter text-[16px] md:text-[22px] lg:text-[26px]
            font-sans font-black tracking-[0.18em] text-[#c4a35a]
            uppercase leading-none"
          style={{ opacity: 0, display: "inline-block" }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </div>
  )
}


// ─────────────────────────────────────────────
// OPTION B — Clip-path curtain sweep
// A gold line sweeps left→right, revealing the text beneath it.
// Feel: cinematic, architectural, high-end agency.
// ─────────────────────────────────────────────
export function OptionB_CurtainSweep() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!curtainRef.current || !textRef.current) return

    const tl = gsap.timeline({ delay: 0.4 })

    // Text starts invisible and slightly scaled down
    gsap.set(textRef.current, { opacity: 0, scale: 0.96 })

    // Curtain sweeps across: right-inset shrinks 100%→0%
    tl.fromTo(
      curtainRef.current,
      { scaleX: 1, transformOrigin: "left center" },
      { scaleX: 0, duration: 0.85, ease: "power3.inOut" }
    )
    // Text fades in behind the curtain midway
    tl.to(
      textRef.current,
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
      "-=0.55"
    )
  }, [])

  return (
    <div ref={wrapRef} className="relative mb-6 overflow-hidden inline-block">
      <p
        ref={textRef}
        className="text-[18px] md:text-[24px] lg:text-[28px]
          font-sans font-semibold tracking-[0.28em] text-[#c4a35a]
          uppercase leading-none"
        style={{ opacity: 0 }}
      >
        SIERRA HEART &amp; VASCULAR INSTITUTE
      </p>
      {/* Gold curtain that sweeps across */}
      <div
        ref={curtainRef}
        className="absolute inset-0 bg-[#c4a35a] origin-left z-10"
      />
    </div>
  )
}


// ─────────────────────────────────────────────
// OPTION C — Scramble text decode
// Characters cycle through random uppercase letters,
// then snap to the correct character one by one.
// Feel: tech, data-driven, sophisticated.
// ─────────────────────────────────────────────
export function OptionC_ScrambleText() {
  const FINAL = "SIERRA HEART & VASCULAR INSTITUTE"
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ&"
  const CYCLES_PER_CHAR = 8   // how many random chars shown before locking
  const STAGGER_MS = 60        // ms between each character starting to resolve

  const [display, setDisplay] = useState<string[]>(
    FINAL.split("").map(c => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
  )

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    FINAL.split("").forEach((finalChar, index) => {
      if (finalChar === " ") return

      // Each character starts scrambling at a staggered time
      const startDelay = 400 + index * STAGGER_MS

      let cycle = 0
      const intervalMs = 55

      const startTimer = setTimeout(() => {
        const interval = setInterval(() => {
          if (cycle >= CYCLES_PER_CHAR) {
            clearInterval(interval)
            setDisplay(prev => {
              const next = [...prev]
              next[index] = finalChar
              return next
            })
            return
          }
          setDisplay(prev => {
            const next = [...prev]
            next[index] = CHARS[Math.floor(Math.random() * CHARS.length)]
            return next
          })
          cycle++
        }, intervalMs)
        timers.push(interval as unknown as ReturnType<typeof setTimeout>)
      }, startDelay)

      timers.push(startTimer)
    })

    return () => timers.forEach(t => clearTimeout(t))
  }, [])

  return (
    <p
      className="text-[18px] md:text-[24px] lg:text-[28px]
        font-sans font-semibold tracking-[0.28em] text-[#c4a35a]
        uppercase leading-none mb-6 font-mono"
    >
      {display.map((char, i) => (
        <span
          key={i}
          className={char === FINAL[i] ? "text-[#c4a35a]" : "text-white/40"}
        >
          {char}
        </span>
      ))}
    </p>
  )
}
