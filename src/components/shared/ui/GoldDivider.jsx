import { motion } from "framer-motion";

function GoldDivider({ width = 220 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleX: 0,
      }}
      animate={{
        opacity: 1,
        scaleX: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="flex items-center justify-center mb-8"
    >
      <div
        style={{
          width,
        }}
        className="flex items-center"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-500 to-yellow-300" />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            mx-4
            h-3
            w-3
            rounded-full
            bg-yellow-400
            shadow-[0_0_15px_rgba(255,215,0,0.8)]
          "
        />

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-yellow-500 to-yellow-300" />
      </div>
    </motion.div>
  );
}

export default GoldDivider;
