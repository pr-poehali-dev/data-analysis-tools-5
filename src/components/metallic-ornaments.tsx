import { motion } from "framer-motion"

const TRIBAL_1 = "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/files/b9526b44-f50b-49a9-a004-3c70f355ba3e.jpg"
const TRIBAL_2 = "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/files/42580a22-3801-4ff8-8355-640f54039bd5.jpg"
const TRIBAL_REF = "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/8ee2d6fe-d013-4a3e-beed-cc011d95e247.jpg"

export function MetallicOrnaments() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

      {/* Центральный трибал — плавное покачивание */}
      <motion.img
        src={TRIBAL_REF}
        alt=""
        className="absolute select-none"
        style={{
          width: "55vw",
          maxWidth: 700,
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          opacity: 0.06,
          mixBlendMode: "screen",
        }}
        animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.04, 0.97, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Левый верхний */}
      <motion.img
        src={TRIBAL_1}
        alt=""
        className="absolute select-none"
        style={{
          width: "30vw",
          maxWidth: 380,
          top: "-5%",
          left: "-8%",
          opacity: 0.05,
          mixBlendMode: "screen",
        }}
        animate={{ rotate: [0, -12, 12, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Правый нижний */}
      <motion.img
        src={TRIBAL_2}
        alt=""
        className="absolute select-none"
        style={{
          width: "32vw",
          maxWidth: 400,
          bottom: "-5%",
          right: "-8%",
          opacity: 0.05,
          mixBlendMode: "screen",
        }}
        animate={{ rotate: [0, 15, -10, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Правый верхний — маленький */}
      <motion.img
        src={TRIBAL_1}
        alt=""
        className="absolute select-none"
        style={{
          width: "18vw",
          maxWidth: 220,
          top: "5%",
          right: "3%",
          opacity: 0.04,
          mixBlendMode: "screen",
        }}
        animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.08, 0.95, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Левый нижний — маленький */}
      <motion.img
        src={TRIBAL_2}
        alt=""
        className="absolute select-none"
        style={{
          width: "20vw",
          maxWidth: 240,
          bottom: "8%",
          left: "2%",
          opacity: 0.04,
          mixBlendMode: "screen",
        }}
        animate={{ rotate: [0, -18, 14, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

    </div>
  )
}
