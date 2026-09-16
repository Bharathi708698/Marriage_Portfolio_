// Floating Animation (Logo, Gift, Envelope)
export const FLOAT_ANIMATION = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Fade Up
export const FADE_UP = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

// Fade Down
export const FADE_DOWN = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

// Fade Left
export const FADE_LEFT = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

// Fade Right
export const FADE_RIGHT = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

// Scale Animation
export const SCALE_IN = {
  initial: {
    opacity: 0,
    scale: 0.85,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
};

// Pop Animation
export const POP_IN = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    type: "spring",
    stiffness: 180,
    damping: 12,
  },
};

// Rotate Entry
export const ROTATE_IN = {
  initial: {
    opacity: 0,
    rotate: -10,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

// Glow Pulse
export const GLOW_PULSE = {
  animate: {
    scale: [1, 1.08, 1],
    opacity: [0.4, 0.75, 0.4],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Shine Sweep
export const SHINE_ANIMATION = {
  animate: {
    left: ["-120%", "220%"],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatDelay: 3,
    ease: "easeInOut",
  },
};
