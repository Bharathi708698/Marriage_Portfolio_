import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import signature from "../../assets/signature/signature.png";
import heart from "../../assets/effects/heart.png";

import {
  SceneContainer,
  BackgroundGlow,
  BackgroundStars,
  BrandHeader,
  SparkleTrail,
  PrimaryButton,
  TypewriterText,
} from "../shared";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

import envelope from "../../assets/envelope/envelope.png";

import paperTexture from "../../assets/paper/paper-texture.jpg";
import waxSeal from "../../assets/paper/wax-seal.png";
import corner from "../../assets/paper/corner.png";

function LetterScene({ onNext }) {
  const { language } = useLanguage();

  const text = translations[language].letter;

  /*
      envelope
      seal
      open
      paper
      content
  */

  const [phase, setPhase] = useState("envelope");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("seal"), 500),

      setTimeout(() => setPhase("open"), 1300),

      setTimeout(() => setPhase("paper"), 2200),

      setTimeout(() => setPhase("content"), 3200),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <SceneContainer>
      {/* Background */}

      <BackgroundGlow />
      <BackgroundStars />
      <SparkleTrail count={14} />

      {/* Header */}

      <BrandHeader
        className="-top-6 md:-top-8"
        logoProps={{
          size: 90,
          glow: true,
          shine: true,
        }}
      />

      <div
        className="
          relative
          z-20

          flex
          flex-1

          items-center
          justify-center

          w-full

          px-6

          pt-20
          md:pt-24
        "
      >
        <AnimatePresence mode="wait">
          {/* =======================================
                    ENVELOPE
          ======================================== */}

          {(phase === "envelope" || phase === "seal" || phase === "open") && (
            <motion.div
              key="envelope"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.6,
              }}
              className="relative"
            >
              {/* Envelope */}

              <img
                src={envelope}
                alt="Envelope"
                draggable={false}
                className="
                  w-72
                  select-none

                  md:w-[420px]
                "
              />

              {/* ==========================
                      GOLD WAX SEAL
              =========================== */}

              <AnimatePresence>
                {(phase === "seal" || phase === "open") && (
                  <motion.img
                    src={waxSeal}
                    alt="Wax Seal"
                    initial={{
                      scale: 0,
                      rotate: -90,
                    }}
                    animate={{
                      scale: phase === "open" ? [1, 1.15, 0] : 1,

                      rotate: phase === "open" ? [0, 20, -20, 0] : 0,

                      opacity: phase === "open" ? [1, 1, 0] : 1,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="
                      absolute

                      left-1/2
                      top-1/2

                      w-20

                      -translate-x-1/2
                      -translate-y-1/2

                      pointer-events-none
                    "
                  />
                )}
              </AnimatePresence>

              {/* Golden Glow */}

              <AnimatePresence>
                {phase === "open" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.4, 2.5, 4],
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="
                      absolute

                      left-1/2
                      top-1/2

                      h-52
                      w-52

                      -translate-x-1/2
                      -translate-y-1/2

                      rounded-full
                      bg-yellow-300/40
                      blur-[80px]
                    "
                  />
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* =======================================
                    LUXURY LETTER
          ======================================== */}

          {(phase === "paper" || phase === "content") && (
            <motion.div
              key="paper"
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                relative
                overflow-hidden

                max-h-[78vh]
                overflow-y-auto

                rounded-3xl

                w-full
                max-w-sm
                sm:max-w-md
                md:max-w-2xl
                lg:max-w-3xl
              "
            >
              <motion.div
                initial={{
                  scaleY: 0,
                  opacity: 0,
                }}
                animate={{
                  scaleY: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.6,
                }}
                style={{
                  transformOrigin: "top",
                  backgroundImage: `url(${paperTexture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="
                  relative

                  overflow-hidden

                  rounded-3xl

                  border
                  border-yellow-300/30

                  shadow-2xl
                  shadow-yellow-500/20

                  px-5
                  py-2

                  sm:px-6
                  sm:py-8

                  md:px-12
                  md:py-14
                "
              >
                {/* Corner Top Left */}

                <img
                  src={corner}
                  alt=""
                  className="
                    absolute

                    left-0
                    top-0

                    w-20
                    sm:w-24
                    md:w-36

                    pointer-events-none
                    select-none
                  "
                />

                {/* Corner Bottom Right */}

                <img
                  src={corner}
                  alt=""
                  className="
                    absolute
                    mt-5

                    bottom-0
                    right-0

                    w-20
                    sm:w-24
                    md:w-36

                    rotate-270

                    pointer-events-none
                    select-none
                  "
                />
                {/* ===============================
                      LETTER CONTENT
                =============================== */}

                {phase === "content" && (
                  <>
                    {/* Greeting */}

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <TypewriterText
                        text={text.greeting}
                        className="
                          text-center         
                          font-semibold
                          text-amber-900
                          text-xl
                          sm:text-2xl
                          md:text-3xl
                        "
                        speed={45}
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
                        delay: 1.1,
                        duration: 0.5,
                      }}
                      className="
                        mx-auto
                        mt-2
                        h-[2px]
                        w-28

                        rounded-full

                        bg-gradient-to-r
                        from-transparent
                        via-yellow-500
                        to-transparent
                      "
                    />

                    {/* Line 1 */}

                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 1.4,
                      }}
                      className="mt-2 md:mt-10"
                    >
                      <TypewriterText
                        text={text.line1}
                        speed={28}
                        className="
                          text-center
                          text-stone-700                          
                          text-base
                          sm:text-lg
                          md:text-xl
                          leading-7
                          md:leading-9
                        "
                      />
                    </motion.div>

                    {/* Line 2 */}

                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 3.6,
                      }}
                      className="mt-2 md:mt-8"
                    >
                      <TypewriterText
                        text={text.line2}
                        speed={28}
                        className="
                          text-center
                          text-stone-700
                          
                          text-base
                          sm:text-lg
                          md:text-xl

                          leading-7
                          md:leading-9
                        "
                      />
                    </motion.div>

                    {/* Signature */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -40,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 6,
                        duration: 0.8,
                      }}
                      className="
                        mt-2
                        md:mt-2
                        flex
                        justify-end
                        pr-6
                        md:pr-12
                      "
                    >
                      <img
                        src={signature}
                        alt="Signature"
                        draggable={false}
                        className="
                          select-none
                          w-32
                          sm:w-44
                          md:w-60
                        "
                      />
                    </motion.div>

                    {/* <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: [1, 1.25, 1],
                      }}
                      transition={{
                        delay: 6.4,
                        duration: 0.8,
                        repeat: 2,
                      }}
                      className="
                        -mt-3
                        flex
                        justify-center
                        "
                    >
                      <img src={heart} alt="" className="w-8 h-8" />
                    </motion.div> */}

                    {/* <motion.div
                      initial={{
                        opacity: 0,
                        scaleX: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scaleX: 1,
                      }}
                      transition={{
                        delay: 7.8,
                        duration: 0.5,
                      }}
                      className="
                            mx-auto
                            mb-2
                            h-[2px]
                            w-40

                            rounded-full

                            bg-gradient-to-r
                            from-transparent
                            via-yellow-400
                            to-transparent
                        "
                    /> */}

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
                        delay: 8.2,
                        duration: 0.6,
                      }}
                      className="
                        mt-2
                        md:mt-12
                        flex
                        justify-center
                      "
                    >
                      <PrimaryButton
                        title={text.continue}
                        onClick={onNext}
                        className="
                          w-[160px]
                          py-2
                        "
                      />
                    </motion.div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SceneContainer>
  );
}

export default LetterScene;
