import { motion } from "framer-motion"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { NavBar } from "@/components/nav-bar"
import { FooterSection } from "@/components/sections/footer-section"



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
                  Я люблю видеть прекрасное в людях и мире вокруг.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Я всегда чувствовал, что вокруг нас происходит что-то удивительное — в случайном взгляде, в игре света, в живых эмоциях людей. Фотография стала для меня способом останавливать эти моменты и сохранять их навсегда.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Эта сфера подходит мне по душе как никакая другая — здесь я могу делать то, что люблю: замечать красоту в обычных вещах и людях, и дарить им память об этом.
                </p>
              </motion.div>
            </div>


          </div>
        </section>

        <FooterSection />
      </main>
    </LenisProvider>
  )
}