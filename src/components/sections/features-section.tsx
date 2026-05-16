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

const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`

// Each flap is a triangle covering one side of the envelope
// clipPath triangles pointing inward from each edge
const flaps = [
  // top flap — triangle pointing down
  {
    key: "top",
    clip: "polygon(0 0, 100% 0, 50% 100%)",
    exit: { y: "-105%" },
    style: { top: 0, left: 0, right: 0, height: "52%" },
  },
  // bottom flap — triangle pointing up
  {
    key: "bottom",
    clip: "polygon(0 100%, 100% 100%, 50% 0%)",
    exit: { y: "105%" },
    style: { bottom: 0, left: 0, right: 0, height: "52%" },
  },
  // left flap — triangle pointing right
  {
    key: "left",
    clip: "polygon(0 0, 0 100%, 100% 50%)",
    exit: { x: "-105%" },
    style: { top: 0, bottom: 0, left: 0, width: "52%" },
  },
  // right flap — triangle pointing left
  {
    key: "right",
    clip: "polygon(100% 0, 100% 100%, 0 50%)",
    exit: { x: "105%" },
    style: { top: 0, bottom: 0, right: 0, width: "52%" },
  },
]

function EnvelopeCard({
  title,
  description,
  tag,
  index,
}: {
  title: string
  description: string
  tag: string
  index: number
}) {
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
      {/* Fixed-size envelope container */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 8,
          height: 220,
          background: "hsl(42 20% 96%)",
          boxShadow: "0 4px 6px rgba(0,0,0,0.07), 0 12px 32px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.8)",
          border: "1px solid hsl(40 15% 80%)",
        }}
      >
        {/* ── ENVELOPE BASE — always visible underneath ── */}
        {/* Paper texture */}
        <div className="absolute inset-0 z-0" style={{ backgroundImage: NOISE, backgroundSize: "200px 200px", opacity: 0.045 }} />

        {/* Fold lines */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 300 220" preserveAspectRatio="none">
          <line x1="0" y1="220" x2="150" y2="110" stroke="hsl(40 10% 72%)" strokeWidth="0.9" />
          <line x1="300" y1="220" x2="150" y2="110" stroke="hsl(40 10% 72%)" strokeWidth="0.9" />
          <line x1="0" y1="0" x2="150" y2="110" stroke="hsl(40 10% 76%)" strokeWidth="0.9" />
          <line x1="300" y1="0" x2="150" y2="110" stroke="hsl(40 10% 76%)" strokeWidth="0.9" />
        </svg>

        {/* ── FOUR FLAPS — fly away on hover ── */}
        {flaps.map((flap) => (
          <motion.div
            key={flap.key}
            className="absolute z-20 overflow-hidden"
            style={{
              ...flap.style,
              clipPath: flap.clip,
              background: "hsl(42 18% 93%)",
            }}
            animate={hovered ? { ...flap.exit, opacity: 0 } : { x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* noise on each flap */}
            <div className="absolute inset-0" style={{ backgroundImage: NOISE, backgroundSize: "150px", opacity: 0.05 }} />
            {/* lily on top flap */}
            {flap.key === "top" && (
              <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: 20, paddingTop: 4 }}>
                <img src={LILY_URL} alt="" style={{ width: 52, height: 52, opacity: 0.22, mixBlendMode: "multiply", objectFit: "contain" }} />
              </div>
            )}
            {/* DEUX MILLE NEUF on top flap */}
            {flap.key === "top" && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-2">
                {["DEUX", "MILLE", "NEUF"].map((w) => (
                  <span key={w} style={{ fontSize: 6, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(0 0% 35%)", fontFamily: "serif", opacity: 0.55 }}>
                    {w}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        {/* ── WAX SEAL — center, disappears on hover ── */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "radial-gradient(circle at 35% 35%, hsl(350 55% 38%), hsl(350 70% 22%))",
            boxShadow: "0 2px 10px hsl(350 60% 15% / 0.6), inset 0 1px 0 hsl(350 40% 50% / 0.3)",
            border: "1.5px solid hsl(350 45% 32%)",
          }}
          animate={hovered ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <g stroke="hsl(40 40% 88%)" strokeWidth="0.9" fill="none">
              <ellipse cx="11" cy="11" rx="2" ry="5" transform="rotate(0 11 11)" />
              <ellipse cx="11" cy="11" rx="2" ry="5" transform="rotate(45 11 11)" />
              <ellipse cx="11" cy="11" rx="2" ry="5" transform="rotate(90 11 11)" />
              <ellipse cx="11" cy="11" rx="2" ry="5" transform="rotate(135 11 11)" />
              <circle cx="11" cy="11" r="1.8" fill="hsl(350 40% 50%)" stroke="hsl(40 40% 88%)" strokeWidth="0.7" />
            </g>
          </svg>
        </motion.div>

        {/* ── PAPER — appears in center when open ── */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="paper"
              className="absolute z-10"
              style={{
                inset: "14px 18px",
                background: "hsl(42 30% 97%)",
                borderRadius: 3,
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                border: "1px solid hsl(40 15% 87%)",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.35, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Ruled lines */}
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 22px, hsl(210 30% 85%) 22px, hsl(210 30% 85%) 23px)",
                opacity: 0.4,
              }} />
              {/* Left margin */}
              <div className="absolute top-0 bottom-0 pointer-events-none" style={{ left: 32, width: 1, background: "hsl(350 50% 78%)", opacity: 0.3 }} />

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

      {/* Label below */}
      <div className="mt-3 text-center">
        <p className="font-serif text-foreground text-sm tracking-wide">{title}</p>
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
