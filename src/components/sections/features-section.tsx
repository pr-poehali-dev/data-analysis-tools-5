import { useState } from "react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Портретная съёмка",
    description: "Живые эмоции, глубина взгляда, настоящий характер.",
    tag: "Portrait",
    date: "I",
  },
  {
    title: "Репортажная съёмка",
    description: "События, праздники, моменты, которые нельзя упустить.",
    tag: "Reportage",
    date: "II",
  },
  {
    title: "Обработка",
    description: "Ретушь и цветокоррекция с вниманием к каждой детали.",
    tag: "Retouch",
    date: "III",
  },
]

const LILY_URL =
  "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/files/8ba55566-3506-4575-b9d8-41b1354d45a8.jpg"

const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`

// Paper height in px — used to offset correctly
const PAPER_H = 140

function EnvelopeCard({
  title,
  description,
  tag,
  date,
  index,
}: {
  title: string
  description: string
  tag: string
  date: string
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
      // Extra top padding so paper has room to slide up without pushing layout
      style={{ paddingTop: PAPER_H }}
    >
      {/* ── PAPER — positioned above envelope, slides up ── */}
      <motion.div
        className="absolute inset-x-5 z-20"
        // resting position: hidden behind top of envelope (bottom of paper = top of envelope)
        style={{ bottom: 0 }}
        animate={hovered ? { y: -(PAPER_H + 16) } : { y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          style={{
            background: "hsl(42 30% 97%)",
            borderRadius: "3px 3px 0 0",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.18)",
            border: "1px solid hsl(40 15% 87%)",
            borderBottom: "none",
            overflow: "hidden",
            height: PAPER_H,
          }}
        >
          {/* Ruled lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 23px, hsl(210 30% 85%) 23px, hsl(210 30% 85%) 24px)",
              opacity: 0.4,
            }}
          />
          {/* Left margin line */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{ left: 34, width: 1, background: "hsl(350 50% 78%)", opacity: 0.3 }}
          />
          <div className="relative px-5 pt-4 pb-4 pl-10">
            <p
              style={{ fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: "hsl(350 40% 38%)", fontFamily: "serif", marginBottom: 8 }}
            >
              {tag}
            </p>
            <h3 className="font-serif text-base leading-snug" style={{ color: "hsl(0 0% 7%)", marginBottom: 6 }}>
              {title}
            </h3>
            <p style={{ fontSize: 11, lineHeight: 1.6, color: "hsl(0 0% 25%)" }}>
              {description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── ENVELOPE BODY ── */}
      <div className="relative" style={{ borderRadius: 6 }}>
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: 6,
            background: "hsl(42 20% 96%)",
            boxShadow:
              "0 4px 6px rgba(0,0,0,0.07), 0 10px 30px rgba(0,0,0,0.13), inset 0 1px 0 rgba(255,255,255,0.8)",
            border: "1px solid hsl(40 15% 82%)",
            minHeight: 200,
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: NOISE, backgroundSize: "200px 200px", opacity: 0.045 }} />

          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 200" preserveAspectRatio="none">
            <line x1="0" y1="200" x2="150" y2="110" stroke="hsl(40 10% 72%)" strokeWidth="0.8" />
            <line x1="300" y1="200" x2="150" y2="110" stroke="hsl(40 10% 72%)" strokeWidth="0.8" />
            <line x1="0" y1="0" x2="150" y2="110" stroke="hsl(40 10% 76%)" strokeWidth="0.8" />
            <line x1="300" y1="0" x2="150" y2="110" stroke="hsl(40 10% 76%)" strokeWidth="0.8" />
          </svg>

          <div className="absolute inset-0 flex items-end pointer-events-none overflow-hidden" style={{ padding: "0 16px 16px" }}>
            <span className="font-serif italic text-4xl leading-none" style={{ color: "hsl(0 0% 10%)", opacity: 0.07, whiteSpace: "nowrap" }}>
              {title}
            </span>
          </div>

          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ maxWidth: 58 }}>
            <p style={{ fontSize: 6, lineHeight: 1.6, textTransform: "uppercase", letterSpacing: "0.05em", color: "hsl(0 0% 30%)", opacity: 0.3, fontFamily: "serif" }}>
              {description}
            </p>
          </div>

          <div className="absolute top-3 right-4">
            <span style={{ fontSize: 9, letterSpacing: "0.2em", color: "hsl(0 0% 45%)", fontFamily: "serif", opacity: 0.55 }}>{date}</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img src={LILY_URL} alt="" style={{ width: 88, height: 88, opacity: 0.11, mixBlendMode: "multiply", objectFit: "contain" }} />
          </div>

          <div style={{ minHeight: 200 }} />
        </div>

        {/* ── FLAP — lifts back ── */}
        <motion.div
          className="absolute inset-x-0 top-0 z-30"
          style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
          animate={hovered ? { rotateX: -155 } : { rotateX: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              height: 104,
              background: "hsl(42 18% 93%)",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: NOISE, backgroundSize: "150px 150px", opacity: 0.05 }} />
            <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: 28, paddingTop: 8 }}>
              <img src={LILY_URL} alt="" style={{ width: 58, height: 58, opacity: 0.2, mixBlendMode: "multiply", objectFit: "contain" }} />
            </div>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-2">
              {["DEUX", "MILLE", "NEUF"].map((w) => (
                <span key={w} style={{ fontSize: 6, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(0 0% 35%)", fontFamily: "serif", opacity: 0.55 }}>
                  {w}
                </span>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "hsl(40 10% 68%)", opacity: 0.6 }} />
          </div>
        </motion.div>

        {/* ── WAX SEAL ── */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 z-40 w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            top: 84,
            background: "radial-gradient(circle at 35% 35%, hsl(350 55% 38%), hsl(350 70% 22%))",
            boxShadow: "0 2px 8px hsl(350 60% 15% / 0.6), inset 0 1px 0 hsl(350 40% 50% / 0.3)",
            border: "1px solid hsl(350 45% 32%)",
          }}
          animate={hovered ? { scale: 0.5, opacity: 0, y: -8 } : { scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
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
      </div>

      {/* Label below */}
      <div className="mt-4 text-center">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {services.map((s, i) => (
            <EnvelopeCard key={i} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
