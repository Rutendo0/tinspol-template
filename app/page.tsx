import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutPreview } from "@/components/about-preview"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Gallery } from "@/components/gallery"
import { CTASection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Reveal } from "@/components/ui/reveal"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="space-y-24">
        <Reveal>
          <AboutPreview />
        </Reveal>
        <Reveal delay={80}>
          <Services />
        </Reveal>
        <Reveal delay={120}>
          <WhyChooseUs />
        </Reveal>
        <Reveal delay={140}>
          <Gallery />
        </Reveal>
        <Reveal delay={160}>
          <CTASection />
        </Reveal>
        <Reveal delay={180}>
          <Contact />
        </Reveal>
      </div>
      <Footer />
      <MobileCTA />
    </div>
  )
}
