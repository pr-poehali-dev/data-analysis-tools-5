import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useNavigate } from "react-router-dom"

const plans = [
  {
    name: "Индивидуальная",
    price: "3 000",
    period: " руб",
    description: "Индивидуальная фотосессия",
    features: ["2 часа съёмки", "30–35 обработанных фото", "Онлайн-галерея", "Передача прав"],
  },
  {
    name: "Парная",
    price: "4 000",
    period: " руб",
    description: "С подругой или второй половинкой",
    features: ["1–2 часа съёмки", "35–40 обработанных фото", "Онлайн-галерея", "Передача прав"],
    popular: false,
  },
]

export function PricingSection() {
  const navigate = useNavigate()

  return (
    <section className="relative px-6 py-24 overflow-hidden" style={{ backgroundColor: "#0d0d0d" }}>
      {/* Animated grain overlay */}
      <div className="grain-overlay" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Пакеты съёмки</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">Выберите формат — остальное возьму на себя.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${plan.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-clickable
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Популярный
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <h3 className="font-serif text-xl text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-serif text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => navigate("/contacts")}
                whileHover={{ scale: 1.03, backgroundColor: "#4A0E1A" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground"
                }`}
                style={{}}
              >
                Записаться
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}