import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { NavBar } from "@/components/nav-bar"
import { FooterSection } from "@/components/sections/footer-section"

const photos = [
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/4766bad7-fbd3-4de0-9af9-f380b3be2ae6.jpg",
    category: "Портрет",
    title: "Образ",
  },
  {
    src: "/fashion-photography-editorial-black-and-white.jpg",
    category: "Мода",
    title: "Редакция",
  },
  {
    src: "/fashion-model-editorial-portrait-dramatic-lighting.jpg",
    category: "Портрет",
    title: "Драматика",
  },
  {
    src: "/interior-design-minimalist-living-room-natural-lig.jpg",
    category: "Интерьер",
    title: "Свет",
  },
  {
    src: "/modern-architecture-building-exterior-minimal.jpg",
    category: "Архитектура",
    title: "Минимализм",
  },
  {
    src: "/minimal-architecture-portfolio-with-clean-lines.jpg",
    category: "Архитектура",
    title: "Линии",
  },
]

function PhotoCard({ photo, index }: { photo: typeof photos[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-xl cursor-pointer"
      style={{ y }}
      initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      data-clickable
    >
      <div className="aspect-[3/4] overflow-hidden">
        <motion.img
          src={photo.src}
          alt={photo.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <p className="text-white/60 text-xs uppercase tracking-widest">{photo.category}</p>
          <h3 className="text-white font-serif text-2xl mt-1">{photo.title}</h3>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background min-h-screen">
        <CustomCursor />
        <NavBar />

        <section className="pt-32 pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Работы</p>
              <h1 className="text-5xl md:text-7xl font-serif text-foreground">Портфолио</h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, i) => (
                <PhotoCard key={i} photo={photo} index={i} />
              ))}
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </LenisProvider>
  )
}
