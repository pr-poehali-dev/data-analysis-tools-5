import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const articles = [
  {
    title: "За какое время до съемки нужно бронировать дату и время?",
    category: "Советы",
    image: "/fashion-model-editorial-portrait-dramatic-lighting.jpg",
    answer:
      "Лучше думать об этом заранее — желательно записываться минимум за 2–4 недели. Популярные даты и выходные расходятся быстро, особенно в сезон. Если хочешь конкретный день и время — не откладывай: чем раньше напишешь, тем больше выбор и тем спокойнее будет подготовка.",
  },
  {
    title: "Как происходит отбор лучших кадров и могу ли я повлиять на их выбор?",
    category: "Советы",
    image: "/fashion-photography-editorial-black-and-white.jpg",
    answer:
      "После съёмки я загружаю все исходники на Яндекс Диск и даю тебе доступ. Если хочешь сам выбрать фотографии для обработки — пожалуйста, это твоё право. Если предпочитаешь доверить выбор мне — сделаю это сама, отберу самые сильные кадры. Оба варианта рабочие, просто скажи как тебе удобнее.",
  },
  {
    title: "Можно ли заказать срочную обработку фотографий?",
    category: "Советы",
    image: "/interior-design-minimalist-living-room-natural-lig.jpg",
    answer:
      "Да, срочная обработка возможна. Готовность зависит от текущей загруженности — уточняй наличие свободного времени заранее. Дополнительная стоимость за срочность обговаривается индивидуально — напиши мне, уточним детали и договоримся.",
  },
  {
    title: "Нужно ли отдавать предоплату?",
    category: "Советы",
    image: "/modern-architecture-building-exterior-minimal.jpg",
    answer:
      "Да, предоплата обязательна. Перед съёмкой вносится 50% от стоимости — это подтверждает бронь даты. Оставшиеся 50% оплачиваются в день фотосессии.",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const toggleAnswer = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Часто задаваемые вопросы
        </motion.p>

        <div className="divide-y divide-border">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="flex items-center justify-between py-6 cursor-pointer"
                onClick={() => article.answer && toggleAnswer(i)}
                data-clickable
              >
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </div>
                <button
                  className="ml-4 flex-shrink-0"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (article.answer) toggleAnswer(i)
                  }}
                  data-clickable
                >
                  <motion.div
                    animate={article.answer && openIndex === i ? { rotate: 45 } : { rotate: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </button>
              </div>

              {article.answer && (
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-muted-foreground leading-relaxed text-sm md:text-base max-w-2xl">
                        {article.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </div>

        {/* Floating hover image */}
        <AnimatePresence>
          {hoveredIndex !== null && openIndex !== hoveredIndex && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={articles[hoveredIndex].image || "/placeholder.svg"}
                alt={articles[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}