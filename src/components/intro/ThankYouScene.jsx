import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

import {
  SceneContainer,
  BackgroundGlow,
  BackgroundStars,
  BrandHeader,
  GoldDivider,
  SparkleTrail,
} from "../shared";

import monogram from "../../assets/branding/couple_monogram.png";

function ThankYouScene() {
  const { language } = useLanguage();
  const text = translations[language].thankYou;

  return (
    <SceneContainer>
      <BackgroundGlow />
      <BackgroundStars />

      <SparkleTrail count={18} />

      <BrandHeader
        logoProps={{
          size: 90,
          glow: true,
          shine: true,
        }}
      />

      <div className="relative z-20 flex min-h-screen w-full flex-col items-center justify-center px-6 pt-24 text-center md:pt-28">

        {/* Monogram */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="relative mb-8"
        >
          {/* Glow */}
          <motion.div
            animate={{
              opacity: [0.25, 0.5, 0.25],
              scale: [0.95, 1.08, 0.95],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-yellow-400/20 blur-3xl"
          />

          <motion.img
            src={monogram}
            alt="Wedding Monogram"
            draggable={false}
            animate={{
              scale: [1, 1.025, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 h-36 w-36 object-contain md:h-48 md:w-48"
          />
        </motion.div>

        {/* Thank You */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="text-xs uppercase tracking-[0.5em] text-yellow-500/80 md:text-sm"
        >
          {text.badge}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="mt-4 font-heading text-4xl font-semibold text-yellow-300 md:text-6xl"
        >
          {text.title}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 130,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.4,
          }}
          className="my-6 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        />

        {/* Main Message */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.7,
          }}
          className="max-w-2xl"
        >
          <p className="font-tamil text-xl leading-relaxed text-white/90 md:text-3xl">
            {text.message}
          </p>

          <p className="mt-4 font-body text-sm leading-relaxed text-white/50 md:text-base">
            {text.subMessage}
          </p>
        </motion.div>

        {/* Names */}
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
            duration: 1,
            delay: 2.2,
          }}
          className="mt-8"
        >
          <p className="font-heading text-2xl tracking-wide text-yellow-300 md:text-4xl">
            {text.names}
          </p>
        </motion.div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.8,
          }}
          className="mt-10 text-[10px] uppercase tracking-[0.4em] text-white/30 md:text-xs"
        >
          {text.footer}
        </motion.p>

      </div>
    </SceneContainer>
  );
}

export default ThankYouScene;