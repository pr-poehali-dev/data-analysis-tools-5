import { motion } from "framer-motion"

const LILY_URL =
  "https://cdn.poehali.dev/projects/c71e270c-21b3-4982-a23f-edd51568962c/bucket/3d264d6b-6ab7-4db4-86f9-5dcedcdabdd5.png"

export function LilyBloom() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* SVG filter for metallic effect */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="metallic">
            <feColorMatrix
              type="matrix"
              values="0.9 0.1 0.2 0 0.05
                      0.7 0.7 0.7 0 0.05
                      0.6 0.3 1.0 0 0.1
                      0   0   0   1 0"
            />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      <motion.div
        className="absolute"
        style={{
          bottom: "-15%",
          left: "-5%",
          width: "100vw",
          height: "130vh",
          transformOrigin: "40% 100%",
        }}
        initial={{ scale: 0.04, rotate: -18, opacity: 0 }}
        animate={{
          scale:   [0.04, 0.05, 1,    1,    1.02],
          rotate:  [-18,  -15,  -4,   -4,   -2],
          opacity: [0,    0,    1,    1,    1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatDelay: 4,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 0.04, 0.55, 0.88, 1],
        }}
      >
        {/* Metallic shimmer overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(200,200,220,0) 0%, rgba(220,220,255,0.18) 35%, rgba(180,180,200,0) 55%, rgba(210,210,240,0.14) 75%, rgba(200,200,220,0) 100%)",
            mixBlendMode: "screen",
            zIndex: 2,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.img
          src={LILY_URL}
          alt=""
          className="w-full h-full object-contain object-bottom"
          style={{
            filter: "invert(1) brightness(8) contrast(0.5) url(#metallic)",
            position: "relative",
            zIndex: 1,
          }}
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{
            clipPath: [
              "inset(100% 0% 0% 0%)",
              "inset(96%  0% 0% 0%)",
              "inset(0%   0% 0% 0%)",
              "inset(0%   0% 0% 0%)",
              "inset(0%   0% 0% 0%)",
            ],
            opacity: [0, 0, 0.22, 0.22, 0.18],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatDelay: 4,
            ease: [0.16, 1, 0.3, 1],
            times: [0, 0.04, 0.55, 0.88, 1],
          }}
        />
      </motion.div>
    </div>
  )
}
