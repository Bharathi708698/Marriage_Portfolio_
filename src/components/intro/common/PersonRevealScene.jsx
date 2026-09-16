import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  SceneContainer,
  BackgroundGlow,
  BackgroundStars,
  BrandHeader,
  SparkleTrail,
  SceneTitle,
  SceneDescription,
  TypewriterText,
  PrimaryButton,
} from "../../shared";

function PersonRevealScene({
  image,
  badge,
  title,
  name,
  description,
  buttonText,
  onNext,
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
      setTimeout(() => setPhase("content"), 2200),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <SceneContainer>
      {/* Background */}

      <BackgroundGlow />
      <BackgroundStars />
      <SparkleTrail count={20} />

      {/* Header */}

      <BrandHeader
        logoProps={{
          size: 110,
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

          px-6
          pt-20

          md:px-10
          md:pt-24
        "
      >
        <AnimatePresence mode="wait">
          {/* ==============================
                  INTRO
          ============================== */}

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
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  text-yellow-400
                  text-lg
                  md:text-xl
                  tracking-[0.35em]
                "
              >
                {badge}
              </motion.p>
            </motion.div>
          )}

          {/* ==============================
                PORTRAIT REVEAL
          ============================== */}

          {(phase === "reveal" || phase === "content") && (
            <motion.div
              key="portrait"
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                flex
                flex-col
                items-center
                w-full
              "
            >
              {/* Portrait */}

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255,215,0,.15)",
                    "0 0 60px rgba(255,215,0,.45)",
                    "0 0 20px rgba(255,215,0,.15)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  relative

                  overflow-hidden

                  rounded-[2rem]

                  border
                  border-yellow-400/30

                  bg-white/5
                  backdrop-blur-md
                "
              >
                {/* Glow */}

                <motion.div
                  animate={{
                    opacity: [0.25, 0.6, 0.25],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    inset-0

                    bg-yellow-400/20
                    blur-3xl
                  "
                />

                {/* Image */}

                <motion.img
                  src={image}
                  alt={name}
                  draggable={false}
                  initial={{
                    scale: 1.15,
                    filter: "blur(18px)",
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    filter: "blur(0px)",
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.4,
                    ease: "easeOut",
                  }}
                  className="
                    relative
                    z-10

                    h-[340px]
                    w-[260px]

                    object-cover

                    md:h-[480px]
                    md:w-[360px]

                    select-none
                  "
                />
              </motion.div>
              {/* ==============================
                    CONTENT
              ============================== */}

              {phase === "content" && (
                <>
                  {/* Title */}

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
                      delay: 0.2,
                    }}
                    className="mt-8"
                  >
                    <SceneTitle className="text-center">{title}</SceneTitle>
                  </motion.div>

                  {/* Name */}

                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.8,
                    }}
                    className="mt-2"
                  >
                    <TypewriterText
                      text={name}
                      speed={180}
                      cursor
                      className="
                        text-center

                        text-yellow-300

                        text-2xl
                        md:text-4xl

                        font-semibold

                        tracking-wide
                      "
                    />
                  </motion.div>

                  {/* Divider */}

                  <motion.div
                    initial={{
                      scaleX: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scaleX: 1,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 1.6,
                    }}
                    className="
                      mx-auto
                      mt-5

                      h-[2px]
                      w-32

                      rounded-full

                      bg-gradient-to-r
                      from-transparent
                      via-yellow-400
                      to-transparent
                    "
                  />

                  {/* Description */}

                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 2,
                    }}
                    className="
                      mt-6

                      max-w-2xl
                    "
                  >
                    <SceneDescription>
                      <TypewriterText text={description} speed={120} />
                    </SceneDescription>
                  </motion.div>

                  {/* Continue */}
                  {children}

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
                      delay: 4,
                    }}
                    className="
                      mt-10
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
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SceneContainer>
  );
}

export default PersonRevealScene;
