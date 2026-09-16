// import { motion } from "framer-motion";

// function BackgroundGlow({
//   size = 500,
//   color = "bg-yellow-500",
//   opacity = "10",
//   blur = 120,
// }) {
//   return (
//     <motion.div
//       animate={{
//         scale: [1, 1.12, 1],
//         opacity: [0.25, 0.45, 0.25],
//       }}
//       transition={{
//         duration: 6,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//       className={`
//         absolute
//         rounded-full
//         ${color}/${opacity}
//       `}
//       // style={{
//       //   width: size,
//       //   height: size,
//       //   filter: `blur(${blur}px)`,
//       // }}
//       style={{
//         background: glowColor,
//       }}
//     />
//   );
// }

// export default BackgroundGlow;

import { motion } from "framer-motion";
import { GLOW_COLORS } from "../../../theme/colors";

function BackgroundGlow({
  size = 500,
  glowColor = GLOW_COLORS.GOLD,
  blur = 120,
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.12, 1],
        opacity: [0.25, 0.45, 0.25],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: glowColor,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}

export default BackgroundGlow;
