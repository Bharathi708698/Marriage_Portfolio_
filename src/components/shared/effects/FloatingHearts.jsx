import { motion } from "framer-motion";

import heart from "../../../assets/effects/heart.png";

function FloatingHearts({
  count = 6,
  minSize = 18,
  maxSize = 36,
  duration = 10,
}) {
  const opacity = 0.5 + Math.random() * 0.5;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(count)].map((_, index) => {
        const left = Math.random() * 100;

        const size = Math.random() * (maxSize - minSize) + minSize;

        const delay = Math.random() * duration;

        const rotate = Math.random() * 30 - 15;

        return (
          <motion.img
            key={index}
            src={heart}
            alt=""
            draggable={false}
            className="absolute select-none"
            // style={{
            //   width: size,
            //   left: `${left}%`,
            //   bottom: "-12%",
            // }}
            style={{
              width: size,
              left: `${left}%`,
              bottom: "-12%",
              opacity,
            }}
            initial={{
              y: 0,
              opacity: 0,
              rotate,
              scale: 0.8,
            }}
            animate={{
              y: "-120vh",

              x: [0, -18, 12, -15, 10, 0],

              rotate: [rotate, rotate + 8, rotate - 8, rotate + 5, rotate],

              scale: [0.8, 1, 1.08, 1, 0.9],

              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: duration + Math.random() * 4,

              delay,

              repeat: Infinity,

              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}

export default FloatingHearts;
