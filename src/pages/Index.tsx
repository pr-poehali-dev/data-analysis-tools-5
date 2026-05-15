import { motion } from "framer-motion"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FooterSection } from "@/components/sections/footer-section"

const Index = () => {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        {/* Animated metallic lily — full page fixed background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <motion.img
            src="https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/files/3c3355f2-cb73-4208-9390-9719842cec74.jpg"
            alt=""
            className="absolute select-none"
            style={{
              width: "70vw",
              maxWidth: 900,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              opacity: 0.06,
              mixBlendMode: "screen",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <CustomCursor />
        <NavBar />
        <HeroSection />
        <ManifestoSection />
        <FeaturesSection />
        <ShowcaseSection />
        <CarouselSection />
        <InsightsSection />
        <PricingSection />
        <FooterSection />
      </main>
    </LenisProvider>
  )
}

export default Index