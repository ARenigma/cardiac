"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

// Hero brand name — letter-by-letter blur reveal
// White, large, font-light — IS the main headline on the hero.
export function HeroBrandName() {
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
    <div ref={ref} className="flex flex-wrap justify-center mb-5 select-none px-4">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="letter text-[22px] md:text-[32px] lg:text-[46px]
            font-sans font-light tracking-[0.06em] text-white
            uppercase leading-[1.15]"
          style={{ opacity: 0, display: "inline-block" }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </div>
  )
}
