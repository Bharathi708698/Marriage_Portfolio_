import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import voice from "../../assets/audio/random_music.mp3";
import monogram from "../../assets/branding/couple_monogram.png";
import coupleImage from "../../assets/images/couple.png";

import { AudioInvitationCard } from "./common";

import {
  SceneContainer,
  BackgroundGlow,
  BackgroundStars,
  BrandHeader,
  SparkleTrail,
  FloatingFlowers,
  FloatingHearts,
  TypewriterText,
  PrimaryButton,
} from "../shared";

import { translations } from "../../data/translations";
import { useLanguage } from "../../context/LanguageContext";

function CoupleScene({ onNext }) {
  const { language } = useLanguage();

  const text = translations[language].couple;

  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [phase, setPhase] = useState("intro");

  const [showContent, setShowContent] = useState(false);

  const [showAudio, setShowAudio] = useState(false);

  const [audioCompleted, setAudioCompleted] = useState(false);

  const [showTapAnywhere, setShowTapAnywhere] = useState(false);

  // -------------------------------------------------
  // Intro Animation
  // -------------------------------------------------

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("monogram"), 500),

      setTimeout(() => setPhase("reveal"), 1700),

      setTimeout(() => {
        setPhase("content");
        setShowContent(true);
      }, 2900),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  // -------------------------------------------------

  return (
    <SceneContainer>
      <BackgroundGlow />

      <BackgroundStars />

      <SparkleTrail count={14} />

      <FloatingFlowers count={8} />

      <FloatingHearts count={5} />

      <BrandHeader
        logoProps={{
          size: 90,
          glow: true,
          shine: true,
        }}
      />

      <div
        className="
            relative

            flex
            flex-1

            items-center
            justify-center

            w-full

            overflow-hidden
        "
      >
        {/* ========================================

                    MONOGRAM

        ======================================== */}

        <AnimatePresence mode="wait">
          {(phase === "intro" || phase === "monogram") && (
            <motion.div
              key="mono"
              initial={{
                opacity: 0,
                scale: 0.45,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.4,
              }}
              transition={{
                duration: 1,
              }}
              className="
                    absolute

                    z-30
                "
            >
              <motion.img
                src={monogram}
                alt=""
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                        w-48
                        md:w-72

                        drop-shadow-[0_0_40px_rgba(255,215,0,.5)]
                    "
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================

                    PHOTO

        ======================================== */}

        {(phase === "reveal" || phase === "content") && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="
                    absolute
                    inset-0
                "
          >
            <motion.img
              src={coupleImage}
              alt="Couple"
              draggable={false}
              initial={{
                opacity: 0,
                scale: 1.12,
                filter: "blur(14px)",
              }}
              animate={{
                opacity: 1,

                filter: showAudio
                  ? "blur(0px) brightness(.55)"
                  : "blur(0px) brightness(1)",

                scale: [1, 1.015],
              }}
              transition={{
                filter: {
                  duration: 0.6,
                },

                scale: {
                  duration: 18,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                },
              }}
              // className="
              //           w-full
              //           h-full

              //           object-cover

              //           object-center
              //           lg:object-top

              //           select-none
              //       "
              className="
              absolute

              left-1/2
            

              -translate-x-1/2

              w-[85vw]
              max-w-[900px]

              h-auto

              object-contain
              select-none
            "
            />

            {/* Bottom Gradient */}

            <div
              className="
                    absolute

                    inset-x-0
                    bottom-0

                    h-[38%]

                    bg-gradient-to-t
                    from-black
                    via-black/70
                    to-transparent

                    z-10
                "
            />

            {/* Ambient Glow */}

            <motion.div
              animate={{
                opacity: showAudio ? [0.15, 0.35, 0.15] : 0,

                scale: showAudio ? [1, 1.08, 1] : 1,
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="
                    absolute

                    bottom-0
                    left-1/2

                    -translate-x-1/2

                    w-[90%]
                    h-44

                    rounded-full

                    bg-yellow-300/25

                    blur-[90px]

                    z-20
                "
            />
          </motion.div>
        )}

        {/* ========================================

                    CONTENT

        ======================================== */}

        {showContent && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            // className="
            //   absolute
            //   inset-0

            //   z-40

            //   flex
            //   flex-col
            //   items-center
            //   justify-end

            //   px-6
            //   pb-10

            //   text-center
            // "
            className="
            absolute

            top-[55%]
            md:top-[58%]

            left-1/2
            -translate-x-1/2

            z-40

            w-full
            max-w-4xl

            px-8

            text-center
            "
          >
            {/* Title */}

            <p
              className="
                uppercase

                tracking-[0.35em]

                text-yellow-400

                text-xs
                md:text-sm
              "
            >
              {text.title}
            </p>

            {/* Couple Name */}

            <div className="mt-3">
              <TypewriterText
                text={text.names}
                speed={120}
                className="
                  text-white

                  text-3xl
                  md:text-5xl

                  font-bold
                "
              />
            </div>

            {/* Divider */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              className="
                mx-auto
                mt-5
                h-[2px]
                w-40
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-yellow-400
                to-transparent
              "
            />

            {/* Quote */}

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
              className="
                mt-5

                max-w-xl
              "
            >
              <TypewriterText
                text={text.quote}
                speed={45}
                className="
                  text-white/90

                  text-base
                  md:text-xl

                  leading-8
                "
              />
            </motion.div>

            {/* Heart */}

            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: [0.8, 1.2, 1],
              }}
              transition={{
                delay: 1.2,
              }}
              className="
                mt-6
              "
            >
              <span className="text-3xl">❤️</span>
            </motion.div>

            {/* Continue Button */}

            {!showAudio && (
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
                  delay: 1.8,
                }}
                className="mt-8"
              >
                <PrimaryButton
                  title={text.voiceButton}
                  onClick={() => setShowAudio(true)}
                  className="
                  min-w-[240px]
                  px-8
                  md:min-w-[280px]
                "
                />
              </motion.div>
            )}
          </motion.div>
        )}

        {/* ========================================

                AUDIO POPUP

        ======================================== */}

        <AnimatePresence>
          {showAudio && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="
                fixed
                inset-0

                z-[100]

                flex
                items-center
                justify-center

                bg-black/45
                backdrop-blur-md

                px-6
              "
            >
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                <AudioInvitationCard
                  audio={voice}
                  title={text.voiceTitle}
                  buttonText={text.voiceButton}
                  onComplete={() => {
                    setAudioCompleted(true);
                    setShowAudio(false);

                    setTimeout(() => {
                      setShowTapAnywhere(true);
                    }, 500);
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* ========================================

                TAP ANYWHERE

        ======================================== */}

        <AnimatePresence>
          {showTapAnywhere && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={onNext}
              className="
                fixed
                inset-0

                z-[120]

                cursor-pointer

                flex
                items-end
                justify-center

                pb-12
              "
            >
              {/* Background Glow */}

              <motion.div
                animate={{
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/35
                  via-transparent
                  to-transparent
                "
              />

              {/* Tap Text */}

              <motion.div
                initial={{
                  y: 15,
                  opacity: 0,
                }}
                animate={{
                  y: [0, -6, 0],
                  opacity: 1,
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="
                  relative
                  z-20

                  rounded-full

                  border
                  border-yellow-400/25

                  bg-black/35

                  backdrop-blur-xl

                  px-8
                  py-4

                  shadow-[0_0_40px_rgba(255,215,0,.18)]
                "
              >
                <p
                  className="
                    text-yellow-300

                    tracking-[0.28em]

                    uppercase

                    text-xs
                    md:text-sm
                  "
                >
                  Tap Anywhere To Continue
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SceneContainer>
  );
}

export default CoupleScene;
