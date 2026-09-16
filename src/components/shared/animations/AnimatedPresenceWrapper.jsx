import { AnimatePresence, motion } from "framer-motion";

function AnimatedPresenceWrapper({
  children,
  sceneKey,
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={sceneKey}
        initial={{
          opacity: 0,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 1.02,
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedPresenceWrapper;