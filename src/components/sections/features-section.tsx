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

function EnvelopeCard({ title, description, tag, index }: { title: string; description: string; tag: string; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      style={{ perspective: 800 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Paper sliding out */}
      <motion.div
        className="absolute inset-x-3 bottom-4 z-10 origin-bottom"
        animate={hovered ? { y: -110, rotateX: 2 } : { y: 0, rotateX: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="relative rounded-sm overflow-hidden"
          style={{
            background: "hsl(40 20% 94%)",
            boxShadow: "0 2px 24px rgba(0,0,0,0.45)",
          }}
        >
          {/* Paper texture lines */}
          <div className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 18px, hsl(0 0% 30%) 18px, hsl(0 0% 30%) 19px)",
            }}
          />

          {/* Paper content */}
          <div className="relative px-6 pt-5 pb-6">
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-3"
              style={{ color: "hsl(350 30% 35%)", fontFamily: "serif" }}
            >
              {tag}
            </p>
            <h3
              className="font-serif text-xl leading-snug mb-2"
              style={{ color: "hsl(0 0% 10%)" }}
            >
              {title}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: "hsl(0 0% 35%)" }}>
              {description}
            </p>

            {/* Decorative lace / lily SVG */}
            <svg
              className="absolute bottom-3 right-4 opacity-20"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Lily flower */}
              <g stroke="hsl(0 0% 10%)" strokeWidth="0.8" fill="none">
                {/* Petals */}
                <ellipse cx="32" cy="22" rx="4" ry="10" transform="rotate(0 32 32)" />
                <ellipse cx="32" cy="22" rx="4" ry="10" transform="rotate(60 32 32)" />
                <ellipse cx="32" cy="22" rx="4" ry="10" transform="rotate(120 32 32)" />
                <ellipse cx="32" cy="22" rx="4" ry="10" transform="rotate(180 32 32)" />
                <ellipse cx="32" cy="22" rx="4" ry="10" transform="rotate(240 32 32)" />
                <ellipse cx="32" cy="22" rx="4" ry="10" transform="rotate(300 32 32)" />
                {/* Center */}
                <circle cx="32" cy="32" r="3" />
                {/* Stem */}
                <line x1="32" y1="35" x2="32" y2="56" />
                {/* Leaves */}
                <path d="M32 46 Q20 40 22 32" />
                <path d="M32 46 Q44 40 42 32" />
                {/* Lace dots around */}
                <circle cx="18" cy="18" r="1" fill="hsl(0 0% 10%)" />
                <circle cx="46" cy="18" r="1" fill="hsl(0 0% 10%)" />
                <circle cx="12" cy="32" r="1" fill="hsl(0 0% 10%)" />
                <circle cx="52" cy="32" r="1" fill="hsl(0 0% 10%)" />
                {/* Lace arcs */}
                <path d="M14 14 Q18 10 22 14" />
                <path d="M42 14 Q46 10 50 14" />
                <path d="M8 28 Q8 24 12 24" />
                <path d="M52 24 Q56 24 56 28" />
              </g>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Envelope body */}
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          background: "hsl(0 0% 10%)",
          border: "1px solid hsl(0 0% 18%)",
          minHeight: 220,
        }}
      >
        {/* Envelope back flap (top triangle) */}
        <div
          className="absolute inset-x-0 top-0 h-24 z-20"
          style={{
            background: "hsl(0 0% 8%)",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            borderBottom: "1px solid hsl(0 0% 18%)",
          }}
        />

        {/* Lace border pattern top */}
        <svg className="absolute top-0 inset-x-0 w-full z-30 opacity-30" height="28" viewBox="0 0 300 28" preserveAspectRatio="none">
          <g stroke="hsl(0 0% 60%)" strokeWidth="0.6" fill="none">
            {Array.from({ length: 20 }).map((_, i) => (
              <g key={i}>
                <circle cx={i * 15 + 7} cy="8" r="4" />
                <line x1={i * 15 + 7} y1="12" x2={i * 15 + 7} y2="20" />
                <path d={`M${i * 15} 20 Q${i * 15 + 7} 28 ${i * 15 + 15} 20`} />
              </g>
            ))}
          </g>
        </svg>

        {/* Envelope interior — where paper slides from */}
        <div className="relative z-10 pt-24 pb-6 px-6">
          {/* Lily decoration on envelope */}
          <svg
            className="mx-auto mb-4 opacity-25"
            width="56"
            height="56"
            viewBox="0 0 64 64"
            fill="none"
          >
            <g stroke="hsl(0 0% 80%)" strokeWidth="0.7" fill="none">
              <ellipse cx="32" cy="20" rx="3.5" ry="9" transform="rotate(0 32 32)" />
              <ellipse cx="32" cy="20" rx="3.5" ry="9" transform="rotate(72 32 32)" />
              <ellipse cx="32" cy="20" rx="3.5" ry="9" transform="rotate(144 32 32)" />
              <ellipse cx="32" cy="20" rx="3.5" ry="9" transform="rotate(216 32 32)" />
              <ellipse cx="32" cy="20" rx="3.5" ry="9" transform="rotate(288 32 32)" />
              <circle cx="32" cy="32" r="2.5" />
              <line x1="32" y1="34.5" x2="32" y2="52" />
              <path d="M32 44 Q22 39 24 32" />
              <path d="M32 44 Q42 39 40 32" />
            </g>
          </svg>

          {/* Bottom diagonal fold lines */}
          <div className="flex items-end justify-between mt-4">
            <div className="h-px flex-1 opacity-20" style={{ background: "hsl(0 0% 50%)" }} />
            <span className="text-[9px] tracking-[0.25em] uppercase mx-3 opacity-30" style={{ color: "hsl(0 0% 70%)", fontFamily: "serif" }}>
              Pour toi
            </span>
            <div className="h-px flex-1 opacity-20" style={{ background: "hsl(0 0% 50%)" }} />
          </div>
        </div>

        {/* Bottom left & right flap lines */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 z-20 pointer-events-none"
          style={{
            background: "hsl(0 0% 9%)",
            clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
            borderTop: "1px solid hsl(0 0% 18%)",
          }}
        />

        {/* Wax seal */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: "hsl(350 65% 28%)",
            border: "1px solid hsl(350 50% 40%)",
            boxShadow: "0 0 10px hsl(350 65% 20%)",
          }}
          animate={hovered ? { scale: 0.85, opacity: 0.5 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <g stroke="hsl(350 30% 80%)" strokeWidth="0.9">
              <ellipse cx="12" cy="8" rx="2.5" ry="5" transform="rotate(0 12 12)" />
              <ellipse cx="12" cy="8" rx="2.5" ry="5" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="8" rx="2.5" ry="5" transform="rotate(120 12 12)" />
              <ellipse cx="12" cy="8" rx="2.5" ry="5" transform="rotate(180 12 12)" />
              <ellipse cx="12" cy="8" rx="2.5" ry="5" transform="rotate(240 12 12)" />
              <ellipse cx="12" cy="8" rx="2.5" ry="5" transform="rotate(300 12 12)" />
              <circle cx="12" cy="12" r="2" />
            </g>
          </svg>
        </motion.div>
      </div>

      {/* Service title below envelope */}
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
          className="text-muted-foreground text-sm uppercase tracking-widest mb-12"
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
