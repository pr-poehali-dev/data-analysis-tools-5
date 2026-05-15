import { motion } from "framer-motion"

const orbs = [
  { size: 600, x: "15%",  y: "20%",  color: "radial-gradient(circle, rgba(140,30,50,0.18) 0%, transparent 70%)",  duration: 18, delay: 0 },
  { size: 500, x: "70%",  y: "60%",  color: "radial-gradient(circle, rgba(100,20,40,0.14) 0%, transparent 70%)",  duration: 22, delay: 4 },
  { size: 350, x: "50%",  y: "10%",  color: "radial-gradient(circle, rgba(160,40,60,0.10) 0%, transparent 70%)",  duration: 16, delay: 2 },
  { size: 280, x: "85%",  y: "80%",  color: "radial-gradient(circle, rgba(80,10,30,0.12)  0%, transparent 70%)",  duration: 20, delay: 7 },
]

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.8 + 0.5,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 10,
  drift: (Math.random() - 0.5) * 60,
}))

export function BgAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Soft orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            transform: "translate(-50%, -50%)",
            background: orb.color,
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -30, 40, -20, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, p.drift, 0],
            opacity: [0, 0.35, 0.6, 0.35, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)",
        }}
      />
    </div>
  )
}
