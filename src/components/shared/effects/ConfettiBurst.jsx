import { motion } from "framer-motion";

function ConfettiBurst({
  show = true,
  count = 80,
  spread = 700,
  duration = 2,
}) {
  if (!show) return null;

  const colors = [
    "#FFD700",
    "#FFC107",
    "#FFF176",
    "#FFECB3",
    "#FFFFFF",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(count)].map((_, index) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * spread;

        return (
          <motion.div
            key={index}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              rotate: Math.random() * 720,
              opacity: 0,
              scale: 0.2,
            }}
            transition={{
              duration: duration + Math.random(),
              ease: "easeOut",
            }}
            className="absolute left-1/2 top-1/2 rounded-sm"
            style={{
              width: 8,
              height: 16,
              background:
                colors[Math.floor(Math.random() * colors.length)],
            }}
          />
        );
      })}
    </div>
  );
}

export default ConfettiBurst;