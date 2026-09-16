import { motion } from "framer-motion";

function SparkleTrail({
  count = 18,
  color = "#FFD700",
}) {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 4,
            height: 4,
            background: color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 12px ${color}`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.6, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
}

export default SparkleTrail;