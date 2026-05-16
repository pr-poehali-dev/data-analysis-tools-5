import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const heroImage =
  "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/58f756bb-3a35-41b5-ac7f-2e2c58d9ba36.jpg"

export function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6 py-24 gap-12">

      {/* Single hero image */}
      <div className="relative flex items-center justify-center">
        {/* Soft glow behind */}
        <motion.div
          className="absolute w-[300px] md:w-[360px] aspect-[3/4] rounded-2xl"
          style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.07) 0%, transparent 70%)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.15 }}
          transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
        />

        {/* Frame border reveal */}
        <motion.div
          className="absolute w-[280px] md:w-[320px] aspect-[3/4] rounded-xl border border-foreground/10"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Main image */}
        <motion.div
          className="relative w-[280px] md:w-[320px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
          initial={{ clipPath: "inset(50% 50% 50% 50% round 12px)", opacity: 0, scale: 0.92 }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 12px)", opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={heroImage}
            alt="Портфолио"
            className="w-full h-full object-cover"
            initial={{ scale: 1.18 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* Floating corner accents */}
        {[
          "top-[-8px] left-[-8px] border-t-2 border-l-2",
          "top-[-8px] right-[-8px] border-t-2 border-r-2",
          "bottom-[-8px] left-[-8px] border-b-2 border-l-2",
          "bottom-[-8px] right-[-8px] border-b-2 border-r-2",
        ].map((cls, i) => (
          <motion.div
            key={i}
            className={`absolute w-5 h-5 border-foreground/30 ${cls}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>

      {/* Title */}
      <motion.div
        className="relative z-10 text-center mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-center text-foreground">
          Каждый кадр — <em className="italic">история</em>.
        </h1>
        <motion.button
          onClick={() => navigate("/portfolio")}
          className="mt-8 px-8 py-3 rounded-full border border-foreground/30 text-foreground/70 text-sm uppercase tracking-widest hover:border-foreground hover:text-foreground transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          data-clickable
        >
          Портфолио
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
