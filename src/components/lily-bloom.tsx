import { motion } from "framer-motion"

const LILY_URL =
  "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/3d264d6b-6ab7-4db4-86f9-5dcedcdabdd5.png"

export function LilyBloom() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Bottom-left lily */}
      <motion.img
        src={LILY_URL}
        alt=""
        className="absolute"
        style={{
          bottom: "-10%",
          left: "-8%",
          width: "55vmin",
          filter: "invert(1) brightness(2)",
          transformOrigin: "50% 100%",
        }}
        initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
        animate={{
          opacity: [0, 0.13, 0.13, 0],
          scale: [0.3, 1, 1, 1.05],
          rotate: [-20, 5, 5, 8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
          times: [0, 0.4, 0.85, 1],
        }}
      />

      {/* Top-right lily */}
      <motion.img
        src={LILY_URL}
        alt=""
        className="absolute"
        style={{
          top: "-12%",
          right: "-10%",
          width: "50vmin",
          filter: "invert(1) brightness(2)",
          transformOrigin: "50% 0%",
          transform: "scaleX(-1) rotate(30deg)",
        }}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{
          opacity: [0, 0.1, 0.1, 0],
          scale: [0.2, 0.95, 0.95, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 2,
          delay: 4,
          ease: "easeInOut",
          times: [0, 0.45, 0.85, 1],
        }}
      />
    </div>
  )
}
