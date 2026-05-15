import { motion } from "framer-motion"

export function MetallicOrnaments() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

      {/* Центральная большая розетка — медленное вращение */}
      <motion.div
        className="absolute"
        style={{ top: "20%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <svg width="700" height="700" viewBox="0 0 700 700" fill="none" opacity={0.045}>
          <defs>
            <linearGradient id="metal1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c0a080" />
              <stop offset="50%" stopColor="#fff8f0" />
              <stop offset="100%" stopColor="#8a6040" />
            </linearGradient>
          </defs>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 350 350)`}>
              <path
                d="M350 350 Q320 280 350 180 Q380 280 350 350Z"
                fill="url(#metal1)"
                stroke="#c8a87a"
                strokeWidth="0.5"
              />
              <path
                d="M350 350 Q335 300 320 250 Q310 230 320 210 Q340 240 350 280 Q360 240 380 210 Q390 230 380 250 Q365 300 350 350Z"
                fill="url(#metal1)"
                opacity={0.6}
              />
              <circle cx="350" cy="185" r="6" fill="#c8a87a" opacity={0.7} />
              <circle cx="350" cy="200" r="3" fill="#fff8f0" opacity={0.5} />
            </g>
          ))}
          <circle cx="350" cy="350" r="40" fill="none" stroke="#c8a87a" strokeWidth="1" opacity={0.5} />
          <circle cx="350" cy="350" r="25" fill="none" stroke="#c8a87a" strokeWidth="0.5" opacity={0.4} />
          <circle cx="350" cy="350" r="10" fill="#c8a87a" opacity={0.3} />
        </svg>
      </motion.div>

      {/* Левый верхний угол — узор с арабесками */}
      <motion.div
        className="absolute -top-20 -left-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg width="420" height="420" viewBox="0 0 420 420" fill="none" opacity={0.04}>
          <defs>
            <linearGradient id="metal2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a08060" />
              <stop offset="50%" stopColor="#ffe8d0" />
              <stop offset="100%" stopColor="#705030" />
            </linearGradient>
          </defs>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 210 210)`}>
              <path
                d="M210 210 Q195 170 210 110 Q225 170 210 210Z"
                fill="url(#metal2)"
                stroke="#c8a87a"
                strokeWidth="0.5"
              />
              <path
                d="M210 210 Q200 165 185 140 Q195 125 210 145 Q225 125 235 140 Q220 165 210 210Z"
                fill="url(#metal2)"
                opacity={0.5}
              />
              <ellipse cx="210" cy="108" rx="5" ry="8" fill="#c8a87a" opacity={0.6} />
            </g>
          ))}
          <circle cx="210" cy="210" r="28" fill="none" stroke="#c8a87a" strokeWidth="0.8" opacity={0.5} />
          <circle cx="210" cy="210" r="14" fill="none" stroke="#c8a87a" strokeWidth="0.4" opacity={0.4} />
        </svg>
      </motion.div>

      {/* Правый нижний угол */}
      <motion.div
        className="absolute -bottom-20 -right-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      >
        <svg width="460" height="460" viewBox="0 0 460 460" fill="none" opacity={0.04}>
          <defs>
            <linearGradient id="metal3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b09070" />
              <stop offset="50%" stopColor="#fff0e0" />
              <stop offset="100%" stopColor="#806040" />
            </linearGradient>
          </defs>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 230 230)`}>
              <path
                d="M230 230 Q212 182 230 120 Q248 182 230 230Z"
                fill="url(#metal3)"
                stroke="#c8a87a"
                strokeWidth="0.5"
              />
              <ellipse cx="230" cy="118" rx="5" ry="9" fill="#c8a87a" opacity={0.6} />
            </g>
          ))}
          <circle cx="230" cy="230" r="32" fill="none" stroke="#c8a87a" strokeWidth="0.8" opacity={0.5} />
        </svg>
      </motion.div>

      {/* Правый верхний — маленький */}
      <motion.div
        className="absolute top-10 right-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" opacity={0.05}>
          <defs>
            <linearGradient id="metal4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b09070" />
              <stop offset="50%" stopColor="#fff0e0" />
              <stop offset="100%" stopColor="#806040" />
            </linearGradient>
          </defs>
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 110 110)`}>
              <path
                d="M110 110 Q100 82 110 55 Q120 82 110 110Z"
                fill="url(#metal4)"
                stroke="#c8a87a"
                strokeWidth="0.5"
              />
              <circle cx="110" cy="53" r="4" fill="#c8a87a" opacity={0.6} />
            </g>
          ))}
          <circle cx="110" cy="110" r="18" fill="none" stroke="#c8a87a" strokeWidth="0.6" opacity={0.5} />
          <circle cx="110" cy="110" r="8" fill="#c8a87a" opacity={0.15} />
        </svg>
      </motion.div>

      {/* Левый нижний — маленький */}
      <motion.div
        className="absolute bottom-32 left-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" opacity={0.045}>
          <defs>
            <linearGradient id="metal5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b09070" />
              <stop offset="50%" stopColor="#fff0e0" />
              <stop offset="100%" stopColor="#806040" />
            </linearGradient>
          </defs>
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 100 100)`}>
              <path
                d="M100 100 Q90 74 100 48 Q110 74 100 100Z"
                fill="url(#metal5)"
                stroke="#c8a87a"
                strokeWidth="0.5"
              />
              <circle cx="100" cy="46" r="4" fill="#c8a87a" opacity={0.6} />
            </g>
          ))}
          <circle cx="100" cy="100" r="16" fill="none" stroke="#c8a87a" strokeWidth="0.6" opacity={0.5} />
        </svg>
      </motion.div>

      {/* Центр нижней части — средний */}
      <motion.div
        className="absolute bottom-10 left-1/2"
        style={{ x: "-50%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" opacity={0.04}>
          <defs>
            <linearGradient id="metal6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a08060" />
              <stop offset="50%" stopColor="#ffe8d0" />
              <stop offset="100%" stopColor="#705030" />
            </linearGradient>
          </defs>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 150 150)`}>
              <path
                d="M150 150 Q138 115 150 75 Q162 115 150 150Z"
                fill="url(#metal6)"
                stroke="#c8a87a"
                strokeWidth="0.4"
              />
              <circle cx="150" cy="73" r="4" fill="#c8a87a" opacity={0.5} />
            </g>
          ))}
          <circle cx="150" cy="150" r="22" fill="none" stroke="#c8a87a" strokeWidth="0.6" opacity={0.4} />
          <circle cx="150" cy="150" r="10" fill="none" stroke="#c8a87a" strokeWidth="0.3" opacity={0.3} />
        </svg>
      </motion.div>

    </div>
  )
}
