"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL

    // Timestamp is always captured as the first metadata field
    const now = new Date()
    const submissionTimestamp = now.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })

    const payload = {
      timestamp: submissionTimestamp,      // Column A — always first
      date: now.toLocaleDateString("en-US"),
      time: now.toLocaleTimeString("en-US"),
      ...formData,
    }

    if (!webhookUrl) {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsSubmitting(false)
      setSubmitted(true)
      return
    }

    try {
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      setSubmitted(true)
    } catch {
      setError("There was an error submitting your request. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    "w-full bg-[#f5f4f0] border border-black/10 px-4 py-3 text-black text-[13px] font-sans focus:border-[#c4a35a] focus:outline-none transition-colors placeholder:text-black/30"

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[45vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/blog-heart-failure.jpg"
            alt="Contact Cardiac"
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
                    lines: ["Tel: 719.960.0363", "Fax: 719.413.5966"],
                  },
                  {
                    icon: <Mail className="w-4 h-4 text-[#c4a35a]" />,
                    label: "Email",
                    lines: ["info@cardiac.com"],
                  },
                  {
                    icon: <Clock className="w-4 h-4 text-[#c4a35a]" />,
                    label: "Office Hours",
                    lines: ["Monday – Friday: 8:00 AM – 5:00 PM", "Saturday: By Appointment"],
                  },
                  {
                    icon: <MapPin className="w-4 h-4 text-[#c4a35a]" />,
                    label: "Locations",
                    lines: [
                      "Woodmen Medical Plaza — 8890 N Union Blvd, Suite 250",
                      "Union Medical Campus — 6071 E Woodmen Rd, Suite 200",
                      "Colorado Springs, CO",
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

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="h-full flex items-center justify-center text-center py-16 bg-[#f5f4f0] px-10">
                  <div>
                    <div className="w-14 h-14 bg-[#c4a35a]/15 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-6 h-6 text-[#c4a35a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-sans font-light text-black mb-3">Thank You</h3>
                    <p className="text-black/70 text-[13px] font-sans leading-relaxed">
                      We have received your message and will contact you shortly to confirm your
                      appointment.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-[#f5f4f0] p-8 lg:p-10">
                  <h3 className="text-[18px] font-sans font-semibold text-black mb-6">
                    Book an Appointment
                  </h3>
                  {error && (
                    <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-600 text-[13px] font-sans">
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                        Preferred Location
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Select a location</option>
                        <option value="Woodmen Medical Plaza">Woodmen Medical Plaza</option>
                        <option value="Union Medical Campus">Union Medical Campus</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Select a service</option>
                        <option value="TAVR">TAVR</option>
                        <option value="MitraClip">MitraClip</option>
                        <option value="Watchman">Watchman</option>
                        <option value="PFO Closure">PFO Closure</option>
                        <option value="Cardiac Catheterization">Cardiac Catheterization</option>
                        <option value="Electrophysiology">Electrophysiology</option>
                        <option value="General Cardiology">General Cardiology</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your symptoms or how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-black text-white text-[13px] font-sans font-semibold tracking-[0.18em] hover:bg-[#c4a35a] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "SENDING..." : "BOOK APPOINTMENT"}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/*
        GOOGLE SHEETS SETUP INSTRUCTIONS:
        1. Create a Google Sheet with these column headers in Row 1:
           A: Timestamp | B: Date | C: Time | D: First Name | E: Last Name
           F: Email | G: Phone | H: Location | I: Service | J: Message

        2. Go to Extensions > Apps Script and paste:

        function doPost(e) {
          var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
          var data = JSON.parse(e.postData.contents);
          sheet.appendRow([
            data.timestamp, data.date, data.time,
            data.firstName, data.lastName, data.email,
            data.phone, data.location, data.service, data.message
          ]);
          return ContentService.createTextOutput(JSON.stringify({success:true}))
            .setMimeType(ContentService.MimeType.JSON);
        }

        3. Deploy as Web App: Execute as Me, Access: Anyone
        4. Set NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL to the deployed URL
      */}

      <Footer />
    </main>
  )
}
