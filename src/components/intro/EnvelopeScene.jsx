import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/logo/logo.png";
import envelope from "../../assets/envelope/envelope.png";

import { translations } from "../../data/translations";
import { useLanguage } from "../../context/LanguageContext";

function EnvelopeScene({ onNext }) {
  const [opened, setOpened] = useState(false);

  const { language } = useLanguage();

  const text = translations[language].envelope;

  const stars = Array.from({ length: 40 });

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5">
      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Logo */}
      <img
        src={logo}
        alt="logo"
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

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            initial={{
              scale: 0,
              rotate: -180,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              rotate: 0,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            className="relative z-20 flex flex-col items-center"
          >
            {/* Envelope */}
            <motion.img
              src={envelope}
              alt="Envelope"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                w-[220px]
                md:w-[320px]
                drop-shadow-[0_0_40px_rgba(255,215,0,0.5)]
              "
            />

            <h2
              className="
                mt-8
                text-center
                text-2xl
                font-bold
                text-yellow-400
                md:text-4xl
              "
            >
              {text.title}
            </h2>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => setOpened(true)}
              className="
                mt-8
                rounded-xl
                border
                border-yellow-500
                bg-yellow-500
                px-5
                py-3
                font-semibold
                text-black
              "
            >
              {text.button}
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{
              opacity: 0,
              y: 150,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
              relative
              z-20
              w-full
              max-w-2xl
            "
          >
            {/* Letter */}
            <div
              className="
                rounded-3xl
                border-2
                border-amber-200
                bg-amber-50
                p-8
                text-black
                shadow-[0_0_40px_rgba(255,215,0,0.15)]
                md:p-12
              "
            >
              <h2
                className="
                  mb-6
                  text-2xl
                  font-bold
                "
              >
                {text.greeting}
              </h2>

              <p
                className="
                  mb-5
                  text-lg
                  leading-8
                "
              >
                {text.line1}
              </p>

              <p
                className="
                  mb-10
                  text-lg
                  leading-8
                "
              >
                {text.line2}
              </p>

              <div className="text-right">
                <p className="font-semibold">Bharathi ❤️ Anusuya</p>
              </div>

              <div className="mt-10 text-center">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={onNext}
                  className="
                    rounded-xl
                    bg-yellow-500
                    px-6
                    py-3
                    font-semibold
                    text-black
                  "
                >
                  {text.continue}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default EnvelopeScene;
