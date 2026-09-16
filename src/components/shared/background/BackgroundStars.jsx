import { motion } from "framer-motion";

function BackgroundStars({
  count = 30,
  color = "bg-yellow-300",
}) {
  const stars = Array.from({ length: count });

  return (
    <>
      {stars.map((_, index) => {
        const size = Math.random() * 3 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 2;

        return (
          <motion.div
            key={index}
            className={`absolute rounded-full ${color}`}
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
}

export default BackgroundStars;