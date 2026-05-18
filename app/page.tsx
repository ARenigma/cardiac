import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TomorrowIsHere } from "@/components/tomorrow-is-here"
import { HeartUnderstanding } from "@/components/heart-understanding"
import { ConditionsGrid } from "@/components/conditions-grid"
import { StatsSection } from "@/components/stats-section"
import { DoctorSection } from "@/components/doctor-section"
import { VideoSection } from "@/components/video-section"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { BlogCarousel } from "@/components/blog-carousel"
import { LocationsSection } from "@/components/locations-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TomorrowIsHere />
      <HeartUnderstanding />
      <ConditionsGrid />
      <StatsSection />
      <DoctorSection />
      <VideoSection />
      <TestimonialsSlider />
      <BlogCarousel />
      <LocationsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
