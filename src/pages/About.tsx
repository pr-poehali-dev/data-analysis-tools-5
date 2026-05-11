import { motion } from "framer-motion"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { NavBar } from "@/components/nav-bar"
import { FooterSection } from "@/components/sections/footer-section"

const values = [
  {
    number: "01",
    title: "Свет",
    text: "Каждая съёмка начинается с поиска правильного света — естественного или студийного. Свет — это душа кадра.",
  },
  {
    number: "02",
    title: "Момент",
    text: "Я не снимаю позы. Я ловлю настоящие эмоции, мимолётные взгляды и живые истории.",
  },
  {
    number: "03",
    title: "Детали",
    text: "От выбора локации до финальной обработки — каждая деталь важна. Именно детали делают фото незабываемым.",
  },
]

export default function About() {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background min-h-screen">
        <CustomCursor />
        <NavBar />

        <section className="pt-32 pb-24 px-6">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-20"
            >
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Фотограф</p>
              <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight">
                Обо <em className="italic">мне</em>
              </h1>
            </motion.div>

            {/* Photo + bio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-32">
              <motion.div
                className="relative rounded-2xl overflow-hidden aspect-[3/4]"
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src="https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/fb1d8442-60d5-4ad8-84a1-52d3fbf40e90.jpg"
                  alt="Фотограф"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Я снимаю людей такими, какие они есть.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Фотограф с многолетним опытом в портретной и репортажной съёмке. Работаю в студии и на природе, нахожу красоту в простых моментах.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Для меня каждая съёмка — это не просто фотосессия, а создание истории. Я помогаю клиентам раскрыться и почувствовать себя свободно перед объективом.
                </p>
              </motion.div>
            </div>

            {/* Values */}
            <div className="divide-y divide-border">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  className="py-10 grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-8 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                >
                  <span className="text-muted-foreground/40 font-serif text-lg">{v.number}</span>
                  <h3 className="font-serif text-2xl text-foreground">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </LenisProvider>
  )
}