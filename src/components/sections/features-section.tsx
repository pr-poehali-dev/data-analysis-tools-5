import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  {
    title: "Портретная съёмка",
    description: "Живые эмоции, глубина взгляда, настоящий характер.",
    tag: "Portrait",
  },
  {
    title: "Репортажная съёмка",
    description: "События, праздники, моменты, которые нельзя упустить.",
    tag: "Reportage",
  },
  {
    title: "Обработка",
    description: "Ретушь и цветокоррекция с вниманием к каждой детали.",
    tag: "Retouch",
  },
]

const LILY_URL =
  "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/files/8ba55566-3506-4575-b9d8-41b1354d45a8.jpg"

const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`

const flaps = [
  { key: "top",    clip: "polygon(0 0, 100% 0, 50% 100%)",    exit: { y: "-110%" }, pos: { top: 0, left: 0, right: 0, height: "52%" },    bg: "hsl(42 14% 90%)" },
  { key: "bottom", clip: "polygon(0 100%, 100% 100%, 50% 0%)", exit: { y: "110%" },  pos: { bottom: 0, left: 0, right: 0, height: "52%" }, bg: "hsl(42 20% 95%)" },
  { key: "left",   clip: "polygon(0 0, 0 100%, 100% 50%)",     exit: { x: "-110%" }, pos: { top: 0, bottom: 0, left: 0, width: "52%" },    bg: "hsl(42 17% 92%)" },
  { key: "right",  clip: "polygon(100% 0, 100% 100%, 0 50%)",  exit: { x: "110%" },  pos: { top: 0, bottom: 0, right: 0, width: "52%" },   bg: "hsl(42 17% 92%)" },
]

function EnvelopeCard({ title, description, tag, index }: { title: string; description: string; tag: string; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 8,
          height: 220,
          background: "hsl(42 22% 96%)",
          boxShadow: [
            "0 2px 4px rgba(0,0,0,0.06)",
            "0 8px 24px rgba(0,0,0,0.12)",
            "0 20px 48px rgba(0,0,0,0.08)",
            "inset 0 1px 0 rgba(255,255,255,0.9)",
            "inset 0 -1px 0 rgba(0,0,0,0.04)",
          ].join(", "),
          border: "1px solid hsl(40 12% 78%)",
        }}
      >
        {/* Paper grain texture */}
        <div className="absolute inset-0 z-0" style={{ backgroundImage: NOISE, backgroundSize: "180px 180px", opacity: 0.06, mixBlendMode: "multiply" }} />

        {/* Base fold lines + depth shadows */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 300 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`gTop-${index}`} x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#6b5c3e" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#6b5c3e" stopOpacity="0" />
            </linearGradient>
            <linearGradient id={`gBot-${index}`} x1="0.5" y1="1" x2="0.5" y2="0">
              <stop offset="0%" stopColor="#6b5c3e" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#6b5c3e" stopOpacity="0" />
            </linearGradient>
            <linearGradient id={`gLeft-${index}`} x1="0" y1="0.5" x2="1" y2="0.5">
              <stop offset="0%" stopColor="#6b5c3e" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#6b5c3e" stopOpacity="0" />
            </linearGradient>
            <linearGradient id={`gRight-${index}`} x1="1" y1="0.5" x2="0" y2="0.5">
              <stop offset="0%" stopColor="#6b5c3e" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#6b5c3e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="0,0 300,0 150,110"   fill={`url(#gTop-${index})`} />
          <polygon points="0,220 300,220 150,110" fill={`url(#gBot-${index})`} />
          <polygon points="0,0 0,220 150,110"   fill={`url(#gLeft-${index})`} />
          <polygon points="300,0 300,220 150,110" fill={`url(#gRight-${index})`} />
        </svg>

        {/* Four flaps */}
        {flaps.map((flap) => (
          <motion.div
            key={flap.key}
            className="absolute z-20 overflow-hidden"
            style={{ ...flap.pos, clipPath: flap.clip, background: flap.bg }}
            animate={hovered ? { ...flap.exit, opacity: 0 } : { x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Grain on flap */}
            <div className="absolute inset-0" style={{ backgroundImage: NOISE, backgroundSize: "150px", opacity: 0.07, mixBlendMode: "multiply" }} />

            {/* Crease shadow inside each flap (edge toward center) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {flap.key === "top"    && <polygon points="0,0 100,0 50,100" fill="rgba(0,0,0,0.04)" />}
              {flap.key === "bottom" && <polygon points="0,100 100,100 50,0" fill="rgba(0,0,0,0.04)" />}
              {flap.key === "left"   && <polygon points="0,0 0,100 100,50" fill="rgba(0,0,0,0.04)" />}
              {flap.key === "right"  && <polygon points="100,0 100,100 0,50" fill="rgba(0,0,0,0.04)" />}
            </svg>

            {/* Lily on top flap */}
            {flap.key === "top" && (
              <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: 20, paddingTop: 6 }}>
                <img src={LILY_URL} alt="" style={{ width: 48, height: 48, opacity: 0.2, mixBlendMode: "multiply", objectFit: "contain" }} />
              </div>
            )}
          </motion.div>
        ))}

        {/* Calligraphic title — centered, fully readable */}
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
          style={{ zIndex: 28 }}
        >
          <span
            className="font-serif italic leading-tight select-none text-center px-4"
            style={{
              fontSize: 24,
              color: "hsl(0 0% 5%)",
              opacity: 0.85,
              letterSpacing: "0.01em",
              lineHeight: 1.3,
              fontWeight: 400,
            }}
          >
            {title}
          </span>
        </div>

        {/* Crease lines over flaps */}
        <svg className="absolute inset-0 w-full h-full z-25 pointer-events-none" viewBox="0 0 300 220" preserveAspectRatio="none" style={{ zIndex: 25 }}>
          {/* dark crease */}
          <line x1="0"   y1="0"   x2="150" y2="110" stroke="rgba(100,80,50,0.18)" strokeWidth="1.2" />
          <line x1="300" y1="0"   x2="150" y2="110" stroke="rgba(100,80,50,0.18)" strokeWidth="1.2" />
          <line x1="0"   y1="220" x2="150" y2="110" stroke="rgba(100,80,50,0.15)" strokeWidth="1.2" />
          <line x1="300" y1="220" x2="150" y2="110" stroke="rgba(100,80,50,0.15)" strokeWidth="1.2" />
          {/* light highlight parallel offset */}
          <line x1="1"   y1="0"   x2="151" y2="110" stroke="rgba(255,255,255,0.55)" strokeWidth="0.6" />
          <line x1="299" y1="0"   x2="149" y2="110" stroke="rgba(255,255,255,0.55)" strokeWidth="0.6" />
          <line x1="1"   y1="220" x2="151" y2="110" stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" />
          <line x1="299" y1="220" x2="149" y2="110" stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" />
        </svg>

        {/* Paper — appears on open */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="paper"
              className="absolute z-30"
              style={{
                inset: "14px 18px",
                background: "hsl(42 30% 97%)",
                borderRadius: 3,
                boxShadow: "0 2px 20px rgba(0,0,0,0.18)",
                border: "1px solid hsl(40 15% 87%)",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 22px, hsl(210 30% 86%) 22px, hsl(210 30% 86%) 23px)",
                opacity: 0.4,
              }} />
              <div className="absolute top-0 bottom-0 pointer-events-none" style={{ left: 32, width: 1, background: "hsl(350 50% 78%)", opacity: 0.28 }} />
              <div className="relative h-full flex flex-col justify-center px-5 pl-10 py-4">
                <p style={{ fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", color: "hsl(350 40% 38%)", fontFamily: "serif", marginBottom: 8 }}>
                  {tag}
                </p>
                <h3 className="font-serif text-base leading-snug" style={{ color: "hsl(0 0% 7%)", marginBottom: 8 }}>
                  {title}
                </h3>
                <p style={{ fontSize: 11, lineHeight: 1.65, color: "hsl(0 0% 28%)" }}>
                  {description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Услуги
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <EnvelopeCard key={i} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}