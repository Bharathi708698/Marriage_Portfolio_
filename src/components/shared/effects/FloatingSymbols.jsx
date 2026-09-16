import { motion } from "framer-motion";

function FloatingSymbols({ symbols = [], count = 12 }) {
  return (
    <>
      {[...Array(count)].map((_, index) => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];

        return (
          <motion.img
            key={index}
            src={symbol}
            alt=""
            draggable={false}
            initial={{
              opacity: 0,
              scale: 0.5,
              x: (Math.random() - 0.5) * 350,
              y: 120,
              rotate: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: -280,
              rotate: Math.random() * 360,
              scale: [0.5, 1.1, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              w-8
              h-8
              object-contain
              select-none
            "
          />
        );
      })}
    </>
  );
}

export default FloatingSymbols;
