import { useState } from "react"
import { motion } from "framer-motion"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { NavBar } from "@/components/nav-bar"
import { FooterSection } from "@/components/sections/footer-section"

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <LenisProvider>
      <main className="custom-cursor bg-background min-h-screen">
        <CustomCursor />
        <NavBar />

        <section className="pt-32 pb-24 px-6">
          <div className="max-w-5xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-20"
            >
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Связь</p>
              <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight">
                Запишитесь <br /><em className="italic">на съёмку</em>
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <p className="font-serif text-3xl text-foreground mb-3">Отлично!</p>
                    <p className="text-muted-foreground">Я получил вашу заявку и свяжусь с вами в ближайшее время.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Анна"
                        className="w-full bg-secondary border-0 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Телефон или email</label>
                      <input
                        type="text"
                        required
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 999 000 00 00"
                        className="w-full bg-secondary border-0 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Расскажите о съёмке</label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Портрет, дата, пожелания..."
                        rows={4}
                        className="w-full bg-secondary border-0 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-4 px-8 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                    >
                      Отправить заявку
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="space-y-10"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Телефон</p>
                  <a href="tel:+79990000000" className="font-serif text-2xl text-foreground hover:text-primary transition-colors">
                    +7 999 000 00 00
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</p>
                  <a href="mailto:photo@example.com" className="font-serif text-2xl text-foreground hover:text-primary transition-colors">
                    photo@example.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Соцсети</p>
                  <div className="flex gap-6">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-clickable>Instagram</a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-clickable>Telegram</a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-clickable>VK</a>
                  </div>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Отвечаю на заявки в течение 24 часов. Съёмки провожу в Москве и выезжаю на выездные сессии.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </LenisProvider>
  )
}
