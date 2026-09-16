import { motion } from "framer-motion";

import { FADE_UP } from "../../../theme";

function AnimatedText({
  children,
  as = "p",
  animation = FADE_UP,
  delay = 0,
  className = "",
}) {
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      initial={animation.initial}
      animate={animation.animate}
      transition={{
        ...animation.transition,
        delay,
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

export default AnimatedText;