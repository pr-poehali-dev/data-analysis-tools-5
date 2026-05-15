import { motion } from "framer-motion"

const LILY_URL =
  "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/3d264d6b-6ab7-4db4-86f9-5dcedcdabdd5.png"

const bloomTransition = {
  duration: 10,
  repeat: Infinity,
  repeatDelay: 3,
  ease: [0.16, 1, 0.3, 1] as const,
  times: [0, 0.05, 0.55, 0.85, 1],
}

export function LilyBloom() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Bottom-left lily */}
      <motion.div
        className="absolute"
        style={{
          bottom: "-8%",
          left: "-6%",
          width: "52vmin",
          transformOrigin: "50% 100%",
        }}
        initial={{ scale: 0.05, rotate: -25 }}
        animate={{
          scale: [0.05, 0.08, 1, 1, 0.95],
          rotate: [-25, -20, 3, 3, 6],
        }}
        transition={{ ...bloomTransition, duration: 10, repeatDelay: 3 }}
      >
        <motion.img
          src={LILY_URL}
          alt=""
          className="w-full h-full object-contain"
          style={{
            filter: "invert(1) brightness(10) contrast(0.6)",
            transformOrigin: "50% 100%",
          }}
          initial={{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{
            opacity: [0, 0, 0.18, 0.18, 0],
            clipPath: [
              "inset(100% 0% 0% 0%)",
              "inset(95% 0% 0% 0%)",
              "inset(0% 0% 0% 0%)",
              "inset(0% 0% 0% 0%)",
              "inset(0% 0% 0% 0%)",
            ],
          }}
          transition={{ ...bloomTransition }}
        />
      </motion.div>

      {/* Top-right lily */}
      <motion.div
        className="absolute"
        style={{
          top: "-10%",
          right: "-8%",
          width: "46vmin",
          transformOrigin: "50% 0%",
          transform: "scaleX(-1) rotate(25deg)",
        }}
        initial={{ scale: 0.05 }}
        animate={{
          scale: [0.05, 0.08, 0.95, 0.95, 0.9],
        }}
        transition={{ ...bloomTransition, delay: 5, duration: 10, repeatDelay: 3 }}
      >
        <motion.img
          src={LILY_URL}
          alt=""
          className="w-full h-full object-contain"
          style={{
            filter: "invert(1) brightness(10) contrast(0.6)",
            transformOrigin: "50% 0%",
          }}
          initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{
            opacity: [0, 0, 0.14, 0.14, 0],
            clipPath: [
              "inset(0% 0% 100% 0%)",
              "inset(0% 0% 93% 0%)",
              "inset(0% 0% 0% 0%)",
              "inset(0% 0% 0% 0%)",
              "inset(0% 0% 0% 0%)",
            ],
          }}
          transition={{ ...bloomTransition, delay: 5 }}
        />
      </motion.div>
    </div>
  )
}
