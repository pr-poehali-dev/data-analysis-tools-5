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
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/7ed88183-9088-469b-b91f-257427ff462c.jpg",
    category: "Студия",
    title: "Тень",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/cd1341d4-31de-4690-b2bb-87f16fb58590.jpg",
    category: "Портрет",
    title: "Лилии",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/c29dacc2-87b5-477b-877d-f89514aa2134.jpg",
    category: "Мода",
    title: "Синева",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/4bc47e73-5462-495a-8319-73d524a8d228.jpg",
    category: "Портрет",
    title: "Мечта",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/6974ef29-f31a-436e-aa87-59982a5b4e51.jpg",
    category: "Мода",
    title: "Редакция",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/471713b5-27f9-4947-b826-c4bb56754ceb.jpg",
    category: "Мода",
    title: "Шёлк",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/6f2f8498-5c24-4f6a-acee-7e0d879b5da1.jpg",
    category: "Студия",
    title: "Красный",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/1248e452-e4ab-4f95-bf3a-c1dfeea1c4e0.jpg",
    category: "Студия",
    title: "Силуэт",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/b96db91d-8f41-44f3-9872-efa16840c719.jpg",
    category: "Мода",
    title: "Стрит",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/2fd10725-42c0-4246-8278-d8d9d8744f6c.jpg",
    category: "Портрет",
    title: "Ветер",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/e01a2e97-4ab0-4db6-b199-374f26f6a686.jpg",
    category: "Мода",
    title: "Монохром",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/9144ee8a-784b-443a-8e29-610cd2445720.jpg",
    category: "Портрет",
    title: "Свет",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/bbeabeb7-57e0-4603-90db-274529273de9.jpg",
    category: "Студия",
    title: "Фиолет",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/95b34d1c-3d8e-49d6-a9a7-0ac9b17b90dc.jpg",
    category: "Натура",
    title: "Берег",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/e714a1a6-6ff1-4900-a15a-de49f5defc99.jpg",
    category: "Студия",
    title: "Чёрное",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/b35d251e-2e78-4fda-a909-b2d97dc31b28.jpg",
    category: "Студия",
    title: "Розовый",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/6ca5fa31-6207-4b4a-b4dd-2df8bf99842b.jpg",
    category: "Студия",
    title: "Алый",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/d5bd0188-f6c3-4afc-8fab-2a193af73d7d.jpg",
    category: "Портрет",
    title: "Лилия",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/100f1918-9843-438f-a9a0-68652bce276b.jpg",
    category: "Студия",
    title: "Перья",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/42db3c7d-8dbc-4a93-b8f3-979c9d9d323b.jpg",
    category: "Портрет",
    title: "Объятие",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/3c748bb9-b7b0-4f1e-a6aa-741e6e710c6e.jpg",
    category: "Мода",
    title: "Белый мех",
  },
  {
    src: "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/23ab7731-2525-44e8-9c1f-18047ba4a73e.jpg",
    category: "Студия",
    title: "Огонь",
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