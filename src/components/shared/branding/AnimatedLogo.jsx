// import { motion } from "framer-motion";

// // import logo from "../../../assets/logo/logo.png";
// import { FLOAT_ANIMATION } from "../../../theme/animations";
// import { ASSETS } from "../../../constants/assets";

// function AnimatedLogo({
//   size = 420,
//   glow = true,
//   shine = true,
//   className = "",
// }) {
//   return (
//     <motion.div
//       animate={FLOAT_ANIMATION.animate}
//       transition={FLOAT_ANIMATION.transition}
//       className={`relative z-20 ${className}`}
//     >
//       {/* Background Glow */}
//       {glow && (
//         <motion.div
//           animate={{
//             scale: [1, 1.12, 1],
//             opacity: [0.35, 0.7, 0.35],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//             absolute
//             left-1/2
//             top-1/2
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-yellow-300/30
//             blur-[80px]
//           "
//           style={{
//             width: size * 0.7,
//             height: size * 0.7,
//           }}
//         />
//       )}

//       {/* Logo */}
//       <div className="relative overflow-hidden rounded-2xl">
//         <img
//           src={ASSETS.LOGO}
//           alt="Bharathi & Anusuya"
//           draggable={false}
//           className="
//             relative
//             z-10
//             pointer-events-none
//             select-none
//           "
//           style={{
//             width: size,
//             maxWidth: "90vw",
//           }}
//         />

//         {/* Shine Effect */}
//         {shine && (
//           <motion.div
//             className="
//               absolute
//               top-0
//               left-[-120%]
//               h-full
//               w-[22%]
//               skew-x-12
//               bg-gradient-to-r
//               from-transparent
//               via-white/60
//               to-transparent
//             "
//             animate={{
//               left: ["-120%", "220%"],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               repeatDelay: 3,
//               ease: "easeInOut",
//             }}
//           />
//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default AnimatedLogo;

import { motion } from "framer-motion";

import logo from "../../../assets/logo/logo.png";

function AnimatedLogo({
  size = 320,
  glow = true,
  shine = true,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className={`
        relative
        flex
        items-center
        justify-center
        ${className}
      `}
    >
      {/* =========================
          OUTER GLOW
      ========================== */}
      {glow && (
        <>
          {/* Main Glow */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              rounded-full
              bg-yellow-400/30
              blur-[90px]
              -z-20
            "
            style={{
              width: size * 0.85,
              height: size * 0.85,
            }}
          />

          {/* Inner Glow */}
          <motion.div
            animate={{
              scale: [0.9, 1.05, 0.9],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              rounded-full
              bg-amber-300/40
              blur-[45px]
              -z-10
            "
            style={{
              width: size * 0.55,
              height: size * 0.55,
            }}
          />
        </>
      )}

      {/* =========================
            LOGO
      ========================== */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={logo}
          alt="Wedding Logo"
          draggable={false}
          className="
            relative
            z-20
            select-none
            pointer-events-none
          "
          style={{
            width: size,
            maxWidth: "90vw",
          }}
        />

        {/* =========================
              SHINE EFFECT
        ========================== */}
        {shine && (
          <motion.div
            className="
              absolute
              top-0
              left-[-120%]
              h-full
              w-[25%]
              skew-x-12

              bg-gradient-to-r
              from-transparent
              via-white/70
              to-transparent
            "
            animate={{
              left: ["-120%", "220%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        )}
      </div>

      {/* =========================
          SMALL GOLD PARTICLES
      ========================== */}
      {glow &&
        [...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className="
              absolute
              rounded-full
              bg-yellow-300
            "
            style={{
              width: Math.random() * 5 + 2,
              height: Math.random() * 5 + 2,
              left: `${35 + Math.random() * 30}%`,
              top: `${35 + Math.random() * 30}%`,
              boxShadow: "0 0 12px rgba(255,215,0,0.9)",
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
    </motion.div>
  );
}

export default AnimatedLogo;
