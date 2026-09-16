import { motion } from "framer-motion";

import logo from "../../assets/logo/logo.png";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

function QuoteScene({ onNext }) {
  const { language } = useLanguage();

  const text = translations[language].quote;

  const stars = Array.from({ length: 50 });

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5">
      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="
          absolute
          top-5
          left-1/2
          z-50
          w-24
          -translate-x-1/2
          opacity-90
          md:w-32
        "
      />

      {/* Stars */}
      {stars.map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-yellow-300"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}

      <div className="relative z-20 text-center">
        {/* Line 1 */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            text-3xl
            font-bold
            text-yellow-400
            md:text-5xl
          "
        >
          {text.line1}
        </motion.h1>

        {/* Line 2 */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 1.2,
          }}
          className="
            mt-6
            text-xl
            text-white
            md:text-3xl
          "
        >
          {text.line2}
        </motion.h2>

        {/* Voice Button */}
        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 3.5,
            duration: 1,
          }}
          className="
            mt-12
            rounded-xl
            border
            border-yellow-500
            bg-black
            px-6
            py-3
            font-semibold
            text-yellow-400
          "
        >
          {text.voiceButton}
        </motion.button>

        {/* Continue */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 4.5,
            duration: 1,
          }}
        >
          <button
            onClick={onNext}
            className="
              mt-8
              rounded-xl
              bg-yellow-500
              px-6
              py-3
              font-semibold
              text-black
            "
          >
            {text.continue}
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default QuoteScene;
