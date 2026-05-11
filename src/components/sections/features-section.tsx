import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function TypeTester() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.5 : 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.span
        className="font-serif text-6xl md:text-8xl text-foreground"
        animate={{ scale }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Aa
      </motion.span>
    </div>
  )
}

function LayoutAnimation() {
  const [layout, setLayout] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const layouts = ["grid-cols-2 grid-rows-2", "grid-cols-3 grid-rows-1", "grid-cols-1 grid-rows-3"]

  return (
    <div className="h-full p-4 flex items-center justify-center">
      <motion.div className={`grid ${layouts[layout]} gap-2 w-full max-w-[140px]`} layout>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="bg-primary/20 rounded-md min-h-[30px]"
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
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
              <TypeTester />
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
              <LayoutAnimation />
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
              <h3 className="font-serif text-xl text-foreground">Сроки обработки</h3>
              <p className="text-muted-foreground text-sm mt-1">Готовность фотографий зависит от загруженности в конкретный период.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}