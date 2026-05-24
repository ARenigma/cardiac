"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    insurancePlan: "",
    service: "",
    referringPhysician: "",
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
      timestamp: submissionTimestamp,
      date: now.toLocaleDateString("en-US"),
      time: now.toLocaleTimeString("en-US"),
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      dateOfBirth: formData.dateOfBirth,
      insurancePlan: formData.insurancePlan,
      service: formData.service,
      referringPhysician: formData.referringPhysician,
      message: formData.message,
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

  const datePickerRef = useRef<HTMLInputElement>(null)

  // Auto-insert slashes eagerly: slash appears right after 2nd and 4th digit
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const prev = formData.dateOfBirth
    const incoming = e.target.value

    // Backspace — strip trailing slash too so deletion feels natural
    if (incoming.length < prev.length) {
      const trimmed = incoming.endsWith("/") ? incoming.slice(0, -1) : incoming
      setFormData({ ...formData, dateOfBirth: trimmed })
      return
    }

    // Strip everything non-digit from what was typed
    const digits = incoming.replace(/\D/g, "").slice(0, 8)

    let formatted = digits
    if (digits.length >= 2) formatted = digits.slice(0, 2) + "/" + digits.slice(2)
    if (digits.length >= 4) formatted = digits.slice(0, 2) + "/" + digits.slice(2, 4) + "/" + digits.slice(4)

    // Eagerly append trailing slash after DD (2 digits) and after DD/MM (4 digits)
    if (digits.length === 2) formatted += "/"
    if (digits.length === 4) formatted += "/"

    setFormData({ ...formData, dateOfBirth: formatted })
  }

  // When native date picker selects a date, convert YYYY-MM-DD → DD/MM/YYYY
  const handleDatePickerSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value // YYYY-MM-DD
    if (val) {
      const [year, month, day] = val.split("-")
      setFormData({ ...formData, dateOfBirth: `${day}/${month}/${year}` })
    }
  }

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
                    lines: ["(559) 218-0076"],
                  },
                  {
                    icon: <Clock className="w-4 h-4 text-[#c4a35a]" />,
                    label: "Office Hours",
                    lines: ["Hours Coming Soon"],
                  },
                  {
                    icon: <MapPin className="w-4 h-4 text-[#c4a35a]" />,
                    label: "Location",
                    lines: [
                      "Sierra Heart & Vascular Institute",
                      "Fresno, California",
                      "Address Coming Soon",
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
                    Request an Appointment
                  </h3>
                  {error && (
                    <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-600 text-[13px] font-sans">
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Row 1: First Name + Last Name */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="First"
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
                          placeholder="Last"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone Number */}
                    <div>
                      <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(559) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    {/* Row 3: Email Address */}
                    <div>
                      <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    {/* Row 4: Date of Birth + Insurance Plan */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                          Date of Birth
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            value={formData.dateOfBirth}
                            onChange={handleDateChange}
                            maxLength={10}
                            inputMode="numeric"
                            className={`${inputClass} pr-10`}
                          />
                          {/* Calendar icon — clicking opens native date picker */}
                          <button
                            type="button"
                            onClick={() => datePickerRef.current?.click()}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-[#c4a35a] transition-colors"
                            aria-label="Open date picker"
                          >
                            <Calendar className="w-4 h-4" />
                          </button>
                          {/* Hidden native date input — only used for picker UI */}
                          <input
                            ref={datePickerRef}
                            type="date"
                            onChange={handleDatePickerSelect}
                            className="absolute inset-0 opacity-0 pointer-events-none w-full"
                            tabIndex={-1}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                          Insurance Plan
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Aetna, Medicare"
                          value={formData.insurancePlan}
                          onChange={(e) => setFormData({ ...formData, insurancePlan: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Row 5: Reason for Visit */}
                    <div>
                      <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                        Reason for Visit
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Select a service...</option>
                        <option value="Clinical Cardiology / General Consultation">Clinical Cardiology / General Consultation</option>
                        <option value="Interventional Cardiology">Interventional Cardiology</option>
                        <option value="Structural Heart / TAVR Evaluation">Structural Heart / TAVR Evaluation</option>
                        <option value="Advanced Heart Failure">Advanced Heart Failure</option>
                        <option value="Peripheral Vascular">Peripheral Vascular</option>
                        <option value="Rhythm / Arrhythmia Management">Rhythm / Arrhythmia Management</option>
                        <option value="Preventive Cardiology">Preventive Cardiology</option>
                        <option value="Pre-Operative Cardiac Clearance">Pre-Operative Cardiac Clearance</option>
                        <option value="Second Opinion">Second Opinion</option>
                        <option value="Physician Referral">Physician Referral</option>
                      </select>
                    </div>

                    {/* Row 6: Referring Physician */}
                    <div>
                      <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                        Referring Physician (if applicable)
                      </label>
                      <input
                        type="text"
                        placeholder="Physician name & practice"
                        value={formData.referringPhysician}
                        onChange={(e) => setFormData({ ...formData, referringPhysician: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    {/* Row 7: Message / Clinical Notes */}
                    <div>
                      <label className="block text-black/65 text-[11px] font-sans font-medium tracking-wider uppercase mb-1.5">
                        Message / Clinical Notes (Optional)
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                        placeholder="Brief description of your concern..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-black text-white text-[13px] font-sans font-semibold tracking-[0.18em] hover:bg-[#c4a35a] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "SENDING..." : "SUBMIT APPOINTMENT REQUEST →"}
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
           F: Phone | G: Email | H: Date of Birth | I: Insurance Plan
           J: Reason for Visit | K: Referring Physician | L: Message

        2. Go to Extensions > Apps Script and paste:

        function doPost(e) {
          var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
          var data = JSON.parse(e.postData.contents);
          sheet.appendRow([
            data.timestamp, data.date, data.time,
            data.firstName, data.lastName, data.phone, data.email,
            data.dateOfBirth, data.insurancePlan, data.service,
            data.referringPhysician, data.message
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
