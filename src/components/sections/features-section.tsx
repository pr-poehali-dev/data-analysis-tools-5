import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function ShutterAnimation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(true)
      setTimeout(() => setOpen(false), 600)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Aperture blades */}
        {[0, 45, 90, 135].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute w-10 h-10 bg-foreground/15 rounded-sm origin-center"
            style={{ rotate: deg }}
            animate={open
              ? { scale: 0.15, opacity: 0.2 }
              : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        {/* Center dot — flash */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-foreground"
          animate={open ? { scale: 2.5, opacity: 1 } : { scale: 1, opacity: 0.4 }}
          transition={{ duration: 0.25 }}
        />
      </div>
    </div>
  )
}

function MomentAnimation() {
  const [captured, setCaptured] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCaptured(true)
      setTimeout(() => setCaptured(false), 900)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-foreground/20">
        {/* Scene */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/20"
          animate={captured ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.1 }}
        />
        {/* Flash overlay */}
        <motion.div
          className="absolute inset-0 bg-white"
          animate={captured ? { opacity: 0.9 } : { opacity: 0 }}
          transition={{ duration: 0.08 }}
        />
        {/* Frozen frame */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={captured ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <div className="w-8 h-8 rounded-full bg-foreground/30 border-2 border-foreground/60" />
        </motion.div>
        {/* Viewfinder corners */}
        {["top-1 left-1", "top-1 right-1", "bottom-1 left-1", "bottom-1 right-1"].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-2 h-2 border-foreground/40 ${i < 2 ? "border-t" : "border-b"} ${i % 2 === 0 ? "border-l" : "border-r"}`} />
        ))}
      </div>
      <motion.span
        className="text-xs text-muted-foreground tracking-widest uppercase"
        animate={captured ? { opacity: 1 } : { opacity: 0.4 }}
        transition={{ duration: 0.2 }}
      >
        {captured ? "Снято" : "В кадре"}
      </motion.span>
    </div>
  )
}

function BusyIndicator() {
  const levels = ["Низкая", "Средняя", "Высокая"]
  const [level, setLevel] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLevel((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const bars = [3, 5, 4, 7, 3, 6, 4, 5, 7, 3]

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="flex items-end gap-1 h-14">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="w-2.5 rounded-sm bg-primary/60"
            animate={{
              height: level === 0 ? h * 3 : level === 1 ? h * 5 : h * 7,
              opacity: level === 0 ? 0.4 : level === 1 ? 0.7 : 1,
            }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
      <motion.span
        key={level}
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Загруженность: {levels[level]}
      </motion.span>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Услуги
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Typography Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <ShutterAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Портретная съёмка</h3>
              <p className="text-muted-foreground text-sm mt-1">Живые эмоции, глубина взгляда, настоящий характер.</p>
            </div>
          </motion.div>

          {/* Layouts Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <MomentAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Репортажная съёмка</h3>
              <p className="text-muted-foreground text-sm mt-1">События, праздники, моменты, которые нельзя упустить.</p>
            </div>
          </motion.div>

          {/* Speed Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <BusyIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Обработка</h3>
              <p className="text-muted-foreground text-sm mt-1">Готовность фотографий зависит от загруженности в конкретный период.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}