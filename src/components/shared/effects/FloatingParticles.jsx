import { motion } from "framer-motion";

function FloatingParticles({
  count = 40,
  color = "#FFD54A",
  size = 8,
  spread = 500,
  duration = 2,
  className = "",
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {[...Array(count)].map((_, index) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * spread;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        return (
          <motion.div
            key={index}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            animate={{
              x,
              y,
              opacity: 0,
              scale: 0,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: duration + Math.random(),
              ease: "easeOut",
            }}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: Math.random() * size + 4,
              height: Math.random() * size + 4,
              background: color,
              boxShadow: `0 0 12px ${color}`,
            }}
          />
        );
      })}
    </div>
  );
}

export default FloatingParticles;
