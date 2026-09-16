import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  SceneContainer,
  BackgroundGlow,
  BackgroundStars,
  BrandHeader,
  SparkleTrail,
  FloatingSymbols,
  PrimaryButton,
  TypewriterText,
} from "../../shared";

import heart from "../../../assets/effects/heart.png";
import ring from "../../../assets/effects/ring.png";
import flower from "../../../assets/effects/flower.png";
import sparkle from "../../../assets/effects/sparkle.png";

function PersonRevealSceneV2({
  image,
  badge,
  title,
  name,
  description,
  buttonText,
  onNext,
  glowColor = "#F8D7DA",
  children,
}) {
  /*
      intro
      reveal
      content
  */

  const [phase, setPhase] = useState("intro");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("reveal"), 1000),
      setTimeout(() => setPhase("content"), 2600),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <SceneContainer>
      {/* Background */}

      <BackgroundGlow />
      <BackgroundStars />

      <SparkleTrail count={12} />

      <FloatingSymbols count={8} symbols={[heart, ring, flower, sparkle]} />

      {/* Header */}

      <BrandHeader
        logoProps={{
          size: 90,
          glow: true,
          shine: true,
        }}
      />

      {/* Main */}

      <div
        className="
          relative
          z-20

          flex
          flex-1
          flex-col

          items-center
          justify-center

          w-full

          px-5
          pt-24
          pb-6

          md:px-10
          md:pt-28
        "
      >
        <AnimatePresence mode="wait">
          {/* =======================================
                  INTRO
          ======================================= */}

          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.8,
              }}
              className="text-center"
            >
              <motion.p
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  text-yellow-400

                  uppercase

                  tracking-[0.45em]

                  text-sm
                  md:text-lg
                "
              >
                {badge}
              </motion.p>
            </motion.div>
          )}

          {/* =======================================
                CINEMATIC PORTRAIT
          ======================================= */}

          {(phase === "reveal" || phase === "content") && (
            <motion.div
              key="portrait"
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                relative

                flex
                flex-col
                items-center

                w-full
              "
            >
              {/* Portrait Container */}

              <motion.div
                className="
                  relative

                  w-full

                  max-w-sm
                  sm:max-w-md
                  md:max-w-xl
                  lg:max-w-2xl

                  overflow-hidden
                "
              >
                {/* =====================================
        GOLDEN GLOW
===================================== */}

                <motion.div
                  animate={{
                    opacity: [0.25, 0.55, 0.25],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    inset-0
                    -z-10

                    bg-yellow-400/20
                    blur-[120px]
                "
                />

                {/* =====================================
        PORTRAIT
===================================== */}

                <motion.img
                  src={image}
                  alt={name}
                  draggable={false}
                  initial={{
                    opacity: 0,
                    scale: 1.12,
                    filter: "blur(18px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.05],
                    filter: "blur(0px)",
                  }}
                  transition={{
                    opacity: {
                      duration: 1,
                    },
                    filter: {
                      duration: 1.3,
                    },
                    scale: {
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear",
                    },
                  }}
                  className="
                        w-full

                        h-[48vh]
                        sm:h-[56vh]
                        md:h-[64vh]

                        object-contain
                        object-top
                    "
                />

                {/* =====================================
      LIGHT SWEEP
===================================== */}

                <motion.div
                  initial={{
                    x: "-130%",
                  }}
                  animate={{
                    x: "130%",
                  }}
                  transition={{
                    delay: 1.2,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="
                        absolute
                        inset-y-0

                        w-32

                        bg-gradient-to-r
                        from-transparent
                        via-white/30
                        to-transparent

                        rotate-12
                    "
                />

                {/* =====================================
      BOTTOM GRADIENT
===================================== */}

                <div
                  className="
                        absolute
                        inset-x-0
                        bottom-0

                        h-80

                        bg-gradient-to-t
                        from-black
                        via-black/70
                        to-transparent
                    "
                />

                {/* =====================================
      CONTENT
===================================== */}

                {phase === "content" && (
                  <div
                    className="
                        absolute
                        left-0
                        right-0

                        bottom-3 md:bottom-6
                        px-6
                        md:px-8
                        "
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="
                            uppercase

                            tracking-[0.45em]

                            text-yellow-400

                            text-xs
                            md:text-sm
                        "
                    >
                      {title}
                    </motion.p>

                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.7,
                      }}
                      className="mt-3"
                    >
                      <TypewriterText
                        text={name}
                        speed={160}
                        className="
                            text-white

                            text-3xl
                            md:text-5xl

                            font-bold
                            "
                      />
                    </motion.div>

                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 1.6,
                      }}
                      className="
                            mx-auto
                            mt-4

                            max-w-lg

                            text-white/90

                            text-sm
                            md:text-lg

                            leading-7
                        "
                    >
                      {description}
                    </motion.p>

                    {children}
                  </div>
                )}
              </motion.div>

              {phase === "content" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 2.4,
                  }}
                  className="
                        mt-8
                        flex
                        justify-center
                        "
                >
                  <PrimaryButton
                    title={buttonText}
                    onClick={onNext}
                    className="
                            w-[220px]
                            md:w-[260px]
                        "
                  />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SceneContainer>
  );
}

export default PersonRevealSceneV2;
