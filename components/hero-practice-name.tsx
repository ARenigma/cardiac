"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

// Hero brand name — letter-by-letter blur reveal
// Words are grouped so flex-wrap never splits mid-word.
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

  const words = text.split(" ")
  let letterIndex = 0

  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-x-[0.35em] mb-5 select-none px-4">
      {words.map((word, wi) => (
        <span key={wi} className="whitespace-nowrap inline-flex">
          {word.split("").map((char) => {
            const idx = letterIndex++
            return (
              <span
                key={idx}
                className="letter text-[19px] md:text-[30px] lg:text-[46px]
                  font-sans font-light tracking-[0.04em] text-white
                  uppercase leading-[1.2]"
                style={{ opacity: 0, display: "inline-block" }}
              >
                {char}
              </span>
            )
          })}
        </span>
      ))}
    </div>
  )
}
