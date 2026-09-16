import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  SceneContainer,
  BackgroundGlow,
  BackgroundStars,
  BrandHeader,
  SceneTitle,
  SceneDescription,
  PrimaryButton,
  SparkleTrail,
  ConfettiBurst,
  FloatingParticles,
  FloatingSymbols,
} from "../shared";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

// Assets
import giftBox from "../../assets/gifts/giftbox.png";
import envelope from "../../assets/envelope/envelope.png";

import heart from "../../assets/effects/heart.png";
import ring from "../../assets/effects/ring.png";
import flower from "../../assets/effects/flower.png";
import sparkle from "../../assets/effects/sparkle.png";

function GiftScene({ onNext }) {
  const { language } = useLanguage();

  const text = translations[language].gift;

  /*
      idle
      shake
      burst
      envelope-enter
      envelope-full
      envelope-center
      ready
  */

  const [phase, setPhase] = useState("idle");

  const handleGiftOpen = () => {
    setPhase("shake");

    setTimeout(() => {
      setPhase("burst");
    }, 800);

    setTimeout(() => {
      setPhase("envelope-enter");
    }, 1500);

    setTimeout(() => {
      setPhase("envelope-full");
    }, 2600);

    setTimeout(() => {
      setPhase("envelope-center");
    }, 3600);

    setTimeout(() => {
      setPhase("ready");
    }, 4600);
  };

  const hideContent = phase !== "idle";

  return (
    <SceneContainer>
      {/* Background */}
      <BackgroundGlow />
      <BackgroundStars />

      {/* Premium sparkles */}
      <SparkleTrail count={16} />

      {/* Brand Header */}
      <BrandHeader
        logoProps={{
          size: 90,
          glow: true,
          shine: true,
        }}
      />

      {/* ===============================
            CENTER CONTENT
      =============================== */}

      <div
        className="
          relative
          z-20
          flex
          h-full
          w-full
          flex-1
          flex-col
          items-center
          justify-center
          px-6
        "
      >
        {/* ===============================
                GIFT
        =============================== */}

        <AnimatePresence mode="wait">
          {(phase === "idle" || phase === "shake" || phase === "burst") && (
            <motion.div
              key="gift"
              initial={{
                opacity: 1,
                scale: 1,
              }}
              animate={{
                y: phase === "idle" ? [0, -12, 0] : 0,

                rotate: phase === "shake" ? [0, -12, 12, -10, 10, -6, 6, 0] : 0,

                scale: phase === "burst" ? [1, 1.25, 0] : 1,

                opacity: phase === "burst" ? [1, 1, 0] : 1,
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: phase === "idle" ? Infinity : 0,
                  ease: "easeInOut",
                },

                rotate: {
                  duration: 0.8,
                },

                scale: {
                  duration: 0.45,
                },

                opacity: {
                  duration: 0.45,
                },
              }}
              className="relative"
            >
              <img
                src={giftBox}
                alt="Gift Box"
                draggable={false}
                className="
                  w-56
                  select-none

                  md:w-72
                "
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===============================
              TITLE + DESCRIPTION
        =============================== */}

        <motion.div
          animate={{
            opacity: hideContent ? 0 : 1,
            y: hideContent ? 20 : 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            mt-10
            flex
            flex-col
            items-center
          "
        >
          <SceneTitle className="max-w-xl">{text.title}</SceneTitle>

          <SceneDescription className="mt-4 max-w-md">
            {text.description}
          </SceneDescription>

          <PrimaryButton
            title={text.button}
            onClick={handleGiftOpen}
            className="
              mt-10
              w-full
              max-w-xs
            "
          />
        </motion.div>

        {/* ===========================================
            PART 2 CONTINUES FROM HERE...
            - Confetti
            - FloatingParticles
            - FloatingSymbols
            - Envelope Animation
            - Open Letter Button
        =========================================== */}
        {/* ===========================================
                CONFETTI BURST
        =========================================== */}

        <AnimatePresence>
          {(phase === "burst" ||
            phase === "envelope-enter" ||
            phase === "envelope-full" ||
            phase === "envelope-center" ||
            phase === "ready") && (
            <>
              <ConfettiBurst show count={45} />

              <FloatingParticles count={20} spread={500} duration={2} />

              <FloatingSymbols
                count={8}
                symbols={[heart, ring, flower, sparkle]}
              />
            </>
          )}
        </AnimatePresence>

        {/* ===========================================
                    ENVELOPE
        =========================================== */}

        <AnimatePresence>
          {(phase === "envelope-enter" ||
            phase === "envelope-full" ||
            phase === "envelope-center" ||
            phase === "ready") && (
            <motion.div
              key="envelope"
              initial={{
                opacity: 0,
                scale: 0,
                rotate: -12,
              }}
              animate={{
                opacity: 1,

                scale:
                  phase === "envelope-enter"
                    ? 1
                    : phase === "envelope-full"
                      ? 8
                      : phase === "envelope-center"
                        ? 1.15
                        : 1,

                rotate: phase === "envelope-enter" ? 0 : 0,
              }}
              transition={{
                duration: phase === "envelope-full" ? 0.9 : 0.8,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-0
                z-40
                flex
                items-center
                justify-center
              "
            >
              <img
                src={envelope}
                alt="Envelope"
                draggable={false}
                className="
                  w-64
                  select-none

                  md:w-80
                "
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===========================================
                OPEN LETTER BUTTON
        =========================================== */}

        <AnimatePresence>
          {phase === "ready" && (
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
                duration: 0.6,
              }}
              className="
                absolute
                bottom-16
                z-50
                flex
                justify-center
                w-full
              "
            >
              <PrimaryButton
                title={text.openLetter}
                onClick={onNext}
                className="
                  max-w-xs
                  w-full
                "
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SceneContainer>
  );
}

export default GiftScene;
