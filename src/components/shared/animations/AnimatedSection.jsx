import { motion } from "framer-motion";

import { FADE_UP } from "../../../theme";

function AnimatedSection({
  children,
  animation = FADE_UP,
  delay = 0,
  className = "",
  as = "div",
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

export default AnimatedSection;