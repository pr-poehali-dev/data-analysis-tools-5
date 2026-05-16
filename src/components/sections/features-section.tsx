import { useState } from "react"
import { motion } from "framer-motion"

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

const LilySvg = ({ stroke = "hsl(0 0% 15%)", opacity = 0.18 }) => (
  <svg width="72" height="72" viewBox="0 0 64 64" fill="none" style={{ opacity }}>
    <g stroke={stroke} strokeWidth="0.9" fill="none">
      <ellipse cx="32" cy="21" rx="3.5" ry="10" transform="rotate(0 32 32)" />
      <ellipse cx="32" cy="21" rx="3.5" ry="10" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="21" rx="3.5" ry="10" transform="rotate(120 32 32)" />
      <ellipse cx="32" cy="21" rx="3.5" ry="10" transform="rotate(180 32 32)" />
      <ellipse cx="32" cy="21" rx="3.5" ry="10" transform="rotate(240 32 32)" />
      <ellipse cx="32" cy="21" rx="3.5" ry="10" transform="rotate(300 32 32)" />
      <circle cx="32" cy="32" r="2.5" />
      <line x1="32" y1="34.5" x2="32" y2="54" />
      <path d="M32 46 Q21 40 23 31" />
      <path d="M32 46 Q43 40 41 31" />
      {/* lace dots */}
      <circle cx="16" cy="16" r="1" fill={stroke} />
      <circle cx="48" cy="16" r="1" fill={stroke} />
      <circle cx="10" cy="32" r="1" fill={stroke} />
      <circle cx="54" cy="32" r="1" fill={stroke} />
      <path d="M12 12 Q16 8 20 12" />
      <path d="M44 12 Q48 8 52 12" />
      <path d="M6 28 Q6 24 10 24" />
      <path d="M54 24 Q58 24 58 28" />
    </g>
  </svg>
)

function EnvelopeCard({ title, description, tag, index }: { title: string; description: string; tag: string; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* === PAPER — slides upward, always above envelope === */}
      <motion.div
        className="absolute inset-x-4 z-30"
        style={{ bottom: 0 }}
        animate={hovered ? { y: -170 } : { y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="relative rounded-sm"
          style={{
            background: "hsl(40 25% 97%)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
            borderLeft: "1px solid hsl(40 10% 88%)",
            borderRight: "1px solid hsl(40 10% 88%)",
            borderTop: "1px solid hsl(40 10% 88%)",
          }}
        >
          {/* Ruled lines texture */}
          <div
            className="absolute inset-0 rounded-sm pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 22px, hsl(220 20% 88%) 22px, hsl(220 20% 88%) 23px)",
              opacity: 0.35,
            }}
          />
          <div className="relative px-6 pt-6 pb-8">
            <p
              className="text-[9px] uppercase tracking-[0.25em] mb-3"
              style={{ color: "hsl(350 40% 38%)", fontFamily: "serif" }}
            >
              {tag}
            </p>
            <h3
              className="font-serif text-xl leading-snug mb-2"
              style={{ color: "hsl(0 0% 8%)" }}
            >
              {title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "hsl(0 0% 28%)" }}
            >
              {description}
            </p>
            {/* Lily in corner of paper */}
            <div className="absolute bottom-2 right-3">
              <LilySvg opacity={0.15} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* === ENVELOPE === */}
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          background: "hsl(40 15% 96%)",
          border: "1px solid hsl(40 10% 82%)",
          minHeight: 200,
        }}
      >
        {/* Top back flap */}
        <div
          className="absolute inset-x-0 top-0 z-10"
          style={{
            height: 100,
            background: "hsl(40 12% 91%)",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            borderBottom: "1px solid hsl(40 10% 80%)",
          }}
        />

        {/* Lace trim along top edge */}
        <svg
          className="absolute top-0 inset-x-0 w-full z-20"
          height="20"
          viewBox="0 0 300 20"
          preserveAspectRatio="none"
        >
          <g stroke="hsl(350 20% 60%)" strokeWidth="0.5" fill="none" opacity="0.5">
            {Array.from({ length: 25 }).map((_, i) => (
              <g key={i}>
                <circle cx={i * 12 + 6} cy="6" r="3" />
                <path d={`M${i * 12} 9 Q${i * 12 + 6} 16 ${i * 12 + 12} 9`} />
              </g>
            ))}
          </g>
        </svg>

        {/* Center of envelope — lily decoration */}
        <div className="relative z-10 pt-24 pb-8 flex flex-col items-center">
          <LilySvg stroke="hsl(0 0% 30%)" opacity={0.2} />
          <div className="flex items-center gap-3 mt-3 w-full px-6">
            <div className="h-px flex-1" style={{ background: "hsl(0 0% 60%)", opacity: 0.3 }} />
            <span
              className="text-[8px] tracking-[0.3em] uppercase"
              style={{ color: "hsl(0 0% 45%)", fontFamily: "serif", opacity: 0.6 }}
            >
              Pour toi
            </span>
            <div className="h-px flex-1" style={{ background: "hsl(0 0% 60%)", opacity: 0.3 }} />
          </div>
        </div>

        {/* Bottom flap */}
        <div
          className="absolute bottom-0 inset-x-0 z-10 pointer-events-none"
          style={{
            height: 80,
            background: "hsl(40 12% 93%)",
            clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
            borderTop: "1px solid hsl(40 10% 80%)",
          }}
        />

        {/* Wax seal */}
        <motion.div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "hsl(350 60% 30%)",
            border: "1.5px solid hsl(350 40% 45%)",
            boxShadow: "0 2px 12px hsl(350 60% 15% / 0.5)",
          }}
          animate={hovered ? { scale: 0.8, opacity: 0.4 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <g stroke="hsl(40 30% 88%)" strokeWidth="0.9" fill="none">
              <ellipse cx="12" cy="7.5" rx="2.5" ry="5.5" transform="rotate(0 12 12)" />
              <ellipse cx="12" cy="7.5" rx="2.5" ry="5.5" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="7.5" rx="2.5" ry="5.5" transform="rotate(120 12 12)" />
              <ellipse cx="12" cy="7.5" rx="2.5" ry="5.5" transform="rotate(180 12 12)" />
              <ellipse cx="12" cy="7.5" rx="2.5" ry="5.5" transform="rotate(240 12 12)" />
              <ellipse cx="12" cy="7.5" rx="2.5" ry="5.5" transform="rotate(300 12 12)" />
              <circle cx="12" cy="12" r="2" />
            </g>
          </svg>
        </motion.div>
      </div>

      {/* Title below */}
      <div className="mt-4 text-center">
        <p className="font-serif text-foreground text-base">{title}</p>
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
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
