import { motion } from "framer-motion";

import flower from "../../../assets/effects/flower.png";

function FloatingFlowers({
  count = 8,
  minSize = 18,
  maxSize = 42,
  duration = 12,
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(count)].map((_, index) => {
        const left = Math.random() * 100;

        const size = Math.random() * (maxSize - minSize) + minSize;

        const delay = Math.random() * duration;

        const rotate = Math.random() * 360;

        return (
          <motion.img
            key={index}
            src={flower}
            alt=""
            draggable={false}
            className="absolute select-none"
            style={{
              width: size,
              left: `${left}%`,
              top: "-10%",
            }}
            initial={{
              y: -120,
              opacity: 0,
              rotate,
              scale: 0.8,
            }}
            // animate={{
            //   y: "120vh",
            //   x: [0, -20, 18, -12, 0],
            //   rotate: rotate + 360,
            //   opacity: [0, 1, 1, 0],
            //   scale: [0.8, 1, 1, 0.9],
            // }}
            animate={{
              y: "120vh",
              x: [0, 15, -15, 10, -10, 0],
              rotate: [rotate, rotate + 20, rotate - 20, rotate + 15, rotate],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: duration + Math.random() * 6,

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

export default FloatingFlowers;
