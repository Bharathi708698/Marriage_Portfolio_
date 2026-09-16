// import { useState } from "react";
// import { motion } from "framer-motion";

// import giftBox from "../../assets/gifts/giftbox.png";
// import logo from "../../assets/logo/logo.png";

// import { translations } from "../../data/translations";
// import { useLanguage } from "../../context/LanguageContext";

// function GiftScene({ onNext }) {
//   const [opening, setOpening] = useState(false);
//   const [showBurst, setShowBurst] = useState(false);

//   const { language } = useLanguage();

//   const text = translations[language].gift;

//   const handleOpenGift = () => {
//     setOpening(true);

//     setTimeout(() => {
//       setShowBurst(true);
//     }, 700);

//     setTimeout(() => {
//       onNext();
//     }, 2800);
//   };

//   return (
//     <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-5">
//       {/* Background Glow */}
//       <div className="absolute h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[120px]" />

//       {/* Logo */}
//       <img
//         src={logo}
//         alt="Logo"
//         className="
//           absolute
//           top-5
//           left-1/2
//           z-40
//           w-24
//           -translate-x-1/2
//           opacity-90
//           md:w-32
//         "
//       />

//       {/* Stars */}
//       {[...Array(50)].map((_, index) => (
//         <motion.div
//           key={index}
//           className="absolute rounded-full bg-yellow-300"
//           style={{
//             width: Math.random() * 3 + 1,
//             height: Math.random() * 3 + 1,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -20, 0],
//             opacity: [0.2, 1, 0.2],
//           }}
//           transition={{
//             duration: 3 + Math.random() * 4,
//             repeat: Infinity,
//           }}
//         />
//       ))}

//       {/* Flash Effect */}
//       {showBurst && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: [0, 0.8, 0],
//           }}
//           transition={{
//             duration: 1,
//           }}
//           className="absolute inset-0 z-20 bg-yellow-200"
//         />
//       )}

//       {/* Gift Section */}
//       <div className="relative z-30 flex items-center justify-center">
//         {/* Gift Box */}
//         <motion.img
//           src={giftBox}
//           alt="Gift Box"
//           animate={
//             opening
//               ? {
//                   rotate: [0, -15, 15, -15, 15, 0],
//                   scale: [1, 1.1, 1.2, 1.5, 0],
//                   opacity: [1, 1, 1, 1, 0],
//                 }
//               : {
//                   y: [0, -12, 0],
//                 }
//           }
//           transition={
//             opening
//               ? {
//                   duration: 1.5,
//                 }
//               : {
//                   duration: 2,
//                   repeat: Infinity,
//                 }
//           }
//           className="
//             w-[180px]
//             md:w-[250px]
//             drop-shadow-[0_0_40px_rgba(255,215,0,0.8)]
//           "
//         />

//         {/* Burst Particles */}
//         {showBurst &&
//           [...Array(60)].map((_, index) => (
//             <motion.div
//               key={index}
//               className="
//                 absolute
//                 h-2
//                 w-2
//                 rounded-full
//                 bg-yellow-400
//               "
//               initial={{
//                 x: 0,
//                 y: 0,
//                 opacity: 1,
//                 scale: 1,
//               }}
//               animate={{
//                 x: (Math.random() - 0.5) * 700,
//                 y: (Math.random() - 0.5) * 700,
//                 opacity: 0,
//                 scale: 0,
//               }}
//               transition={{
//                 duration: 1.8,
//               }}
//             />
//           ))}

//         {/* Wedding Symbols */}
//         {showBurst && (
//           <>
//             <motion.div
//               initial={{
//                 opacity: 1,
//                 scale: 0,
//               }}
//               animate={{
//                 opacity: 0,
//                 scale: 2,
//                 y: -150,
//               }}
//               transition={{
//                 duration: 2,
//               }}
//               className="absolute text-5xl"
//             >
//               💍
//             </motion.div>

//             <motion.div
//               initial={{
//                 opacity: 1,
//                 scale: 0,
//               }}
//               animate={{
//                 opacity: 0,
//                 scale: 2,
//                 x: -120,
//                 y: -100,
//               }}
//               transition={{
//                 duration: 2,
//               }}
//               className="absolute text-5xl"
//             >
//               ❤️
//             </motion.div>

//             <motion.div
//               initial={{
//                 opacity: 1,
//                 scale: 0,
//               }}
//               animate={{
//                 opacity: 0,
//                 scale: 2,
//                 x: 120,
//                 y: -100,
//               }}
//               transition={{
//                 duration: 2,
//               }}
//               className="absolute text-5xl"
//             >
//               ✨
//             </motion.div>
//           </>
//         )}
//       </div>

//       {/* Title */}
//       <motion.h1
//         initial={{
//           opacity: 0,
//           y: 20,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 1,
//         }}
//         className="
//           relative
//           z-30
//           mt-8
//           text-center
//           text-2xl
//           font-bold
//           text-yellow-400
//           md:text-4xl
//         "
//       >
//         {text.title}
//       </motion.h1>

//       {/* Description */}
//       <p
//         className="
//           relative
//           z-30
//           mt-3
//           max-w-xl
//           text-center
//           text-gray-300
//         "
//       >
//         {text.description}
//       </p>

//       {/* Button */}
//       {!opening && (
//         <motion.button
//           whileHover={{
//             scale: 1.05,
//           }}
//           whileTap={{
//             scale: 0.95,
//           }}
//           onClick={handleOpenGift}
//           className="
//             relative
//             z-30
//             mt-8
//             rounded-xl
//             border
//             border-yellow-500
//             bg-yellow-500
//             px-5
//             py-2.5
//             text-sm
//             font-semibold
//             text-black
//             shadow-lg
//             shadow-yellow-500/30

//             md:px-8
//             md:py-4
//             md:text-lg
//           "
//         >
//           {text.button}
//         </motion.button>
//       )}
//     </div>
//   );
// }

// export default GiftScene;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/logo/logo.png";
import giftBox from "../../assets/gifts/giftbox.png";
import envelope from "../../assets/envelope/envelope.png";

import { translations } from "../../data/translations";
import { useLanguage } from "../../context/LanguageContext";
import { getFonts } from "../../utils/fonts";

function InvitationScene({ onNext }) {
  const { language } = useLanguage();

  const text = translations[language].invitation;

  const { headingFont, bodyFont } = getFonts(language);

  const [stage, setStage] = useState("gift");
  const [opening, setOpening] = useState(false);

  const handleGiftOpen = () => {
    setOpening(true);

    setTimeout(() => {
      setStage("burst");
    }, 800);

    setTimeout(() => {
      setStage("envelope");
    }, 2200);
  };

  const openLetter = () => {
    setStage("letter");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5">
      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-5 left-1/2 z-50 w-24 -translate-x-1/2 md:w-32"
      />

      <AnimatePresence mode="wait">
        {/* GIFT STAGE */}
        {(stage === "gift" || stage === "burst") && (
          <motion.div
            key="gift"
            className="relative z-20 flex flex-col items-center"
          >
            {/* Gift Box */}
            <motion.img
              src={giftBox}
              alt="Gift"
              animate={
                opening
                  ? {
                      rotate: [0, -15, 15, -15, 15, 0],
                      scale: [1, 1.2, 1.5, 2, 3],
                      opacity: [1, 1, 1, 1, 0],
                    }
                  : {
                      y: [0, -10, 0],
                    }
              }
              transition={
                opening
                  ? {
                      duration: 1.4,
                    }
                  : {
                      duration: 2,
                      repeat: Infinity,
                    }
              }
              className="
          w-[180px]
          md:w-[260px]
          drop-shadow-[0_0_40px_rgba(255,215,0,0.8)]
        "
            />

            {/* Title + Desc + Button */}
            <motion.div
              animate={{
                opacity: opening ? 0 : 1,
                y: opening ? 30 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mt-8 text-center"
            >
              <h1
                className="
            text-2xl
            md:text-4xl
            text-yellow-400
            ${headingFont}
          "
              >
                {text.giftTitle}
              </h1>

              <p
                className="
            mt-3
max-w-xl
text-gray-300
leading-8
${bodyFont}
          "
              >
                {text.giftDescription}
              </p>

              <button
                onClick={handleGiftOpen}
                className="
                cursor-pointer
            mt-8
            rounded-full
            bg-yellow-500
            px-5
            py-3
            font-semibold
            text-black
          "
              >
                {text.giftButton}
              </button>
            </motion.div>

            {/* FLASH */}
            {stage === "burst" && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
            absolute
            inset-0
            bg-yellow-100
          "
              />
            )}

            {/* CONFETTI */}
            {stage === "burst" &&
              [...Array(80)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  animate={{
                    x: (Math.random() - 0.5) * 800,
                    y: (Math.random() - 0.5) * 800,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 2,
                  }}
                  className="
              absolute
              h-2
              w-2
              rounded-full
              bg-yellow-400
            "
                />
              ))}

            {/* Wedding Icons */}
            {stage === "burst" && (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 2,
                    opacity: 0,
                    y: -150,
                  }}
                  transition={{
                    duration: 2,
                  }}
                  className="absolute text-6xl"
                >
                  💍
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 2,
                    opacity: 0,
                    x: -150,
                    y: -100,
                  }}
                  transition={{
                    duration: 2,
                  }}
                  className="absolute text-6xl"
                >
                  ❤️
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 2,
                    opacity: 0,
                    x: 150,
                    y: -100,
                  }}
                  transition={{
                    duration: 2,
                  }}
                  className="absolute text-6xl"
                >
                  ✨
                </motion.div>
              </>
            )}
          </motion.div>
        )}

        {/* ENVELOPE STAGE */}
        {stage === "envelope" && (
          <motion.div
            key="envelope"
            initial={{
              scale: 8,
              opacity: 1,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            onAnimationComplete={() => {
              setStage("ready");
            }}
            className="relative z-30"
          >
            <img
              src={envelope}
              alt="Envelope"
              className="
          w-[220px]
          md:w-[320px]
          drop-shadow-[0_0_40px_rgba(255,215,0,0.7)]
        "
            />
          </motion.div>
        )}
        {stage === "ready" && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="
      relative
      z-30
      flex
      flex-col
      items-center
    "
          >
            <img
              src={envelope}
              alt="Envelope"
              className="
        w-[220px]
        md:w-[320px]
        drop-shadow-[0_0_40px_rgba(255,215,0,0.7)]
      "
            />

            <h2
              className="
        mt-8
        text-center
        text-2xl
        text-yellow-400
        ${headingFont}
      "
            >
              {text.envelopeTitle}
            </h2>

            <button
              onClick={openLetter}
              className="
              cursor-pointer
        mt-8
        rounded-full
        bg-yellow-500
        px-5
        py-3
        text-black
        ${bodyFont}
      "
            >
              {text.envelopeButton}
            </button>
          </motion.div>
        )}
        {stage === "letter" && (
          <motion.div
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
      z-30
      w-full
      max-w-2xl
    "
          >
            <div
              className="
        rounded-3xl
        border-2
        border-amber-200
        bg-[#FFF8E7]
        p-4
        2xl:p-8
        text-black
        shadow-2xl
      "
            >
              <h2 className="mb-6 text-2xl ${headingFont}">{text.greeting}</h2>

              <p className="mb-5 leading-8 ${bodyFont}">{text.line1}</p>

              <p className="mb-10 leading-8 ${bodyFont}">{text.line2}</p>

              <div className="text-right">
                <p className="${headingFont} font-bold">BHARATHI ❤️ ANUSUYA</p>
              </div>

              <div className="mt-10 text-center">
                <button
                  onClick={onNext}
                  className="
                  cursor-pointer
            rounded-full
            bg-yellow-500
            px-6
            py-2
            2xl:py-3
            text-black
            ${bodyFont}
          "
                >
                  {text.continue}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default InvitationScene;
