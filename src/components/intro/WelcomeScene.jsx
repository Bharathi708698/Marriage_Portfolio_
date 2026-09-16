// import {
//   SceneContainer,
//   BackgroundGlow,
//   BackgroundStars,
//   AnimatedLogo,
//   AnimatedSection,
//   LanguageSelector,
//   PrimaryButton,
// } from "../shared";

// import { TYPOGRAPHY, SECTION_SPACING, Z_INDEX } from "../../theme";

// import { useLanguage } from "../../context/LanguageContext";
// import { translations } from "../../data/translations";
// import { getFonts } from "../../utils";

// function WelcomeScene({ onNext }) {
//   const { language } = useLanguage();

//   const text = translations[language].welcome;

//   const { headingFont } = getFonts(language);

//   return (
//     <SceneContainer>
//       <BackgroundGlow />

//       <BackgroundStars />

//       <LanguageSelector />

//       <AnimatedLogo />

//       <AnimatedSection
//         as="h1"
//         delay={0.4}
//         className={`
//           relative
//           text-center
//           ${TYPOGRAPHY.heading}
//           ${SECTION_SPACING.title}
//           ${Z_INDEX.CONTENT}
//           ${headingFont}
//         `}
//       >
//         {text.title}
//       </AnimatedSection>

//       <AnimatedSection
//         delay={0.8}
//         className={`
//           relative
//           ${SECTION_SPACING.button}
//           ${Z_INDEX.CONTENT}
//         `}
//       >
//         <PrimaryButton title={text.button} onClick={onNext} />
//       </AnimatedSection>
//     </SceneContainer>
//   );
// }

// export default WelcomeScene;

import {
  SceneContainer,
  BackgroundGlow,
  BackgroundStars,
  AnimatedLogo,
  LanguageSelector,
  GoldDivider,
  SceneTitle,
  PrimaryButton,
} from "../shared";

import { translations } from "../../data/translations";
import { useLanguage } from "../../context/LanguageContext";

function WelcomeScene({ onNext }) {
  const { language } = useLanguage();

  const text = translations[language].welcome;

  return (
    <SceneContainer>
      {/* Background */}
      <BackgroundGlow />
      <BackgroundStars />

      {/* Language Selector */}
      <LanguageSelector />

      {/* Hero Content */}
      <div
        className="
          relative
          z-20
          flex
          flex-1
          w-full
          flex-col
          items-center
          justify-center
          px-6
          md:px-10
        "
      >
        {/* Logo */}
        <AnimatedLogo size={320} glow shine className="mb-8 md:mb-10" />

        {/* Divider */}
        <GoldDivider className="mb-8" />

        {/* Title */}
        <SceneTitle className="max-w-xl leading-relaxed tracking-wide">
          {text.title}
        </SceneTitle>

        {/* Button */}
        <div className="mt-10 w-full flex justify-center">
          <PrimaryButton
            title={text.button}
            onClick={onNext}
            className="
              w-full
              max-w-xs
              md:max-w-sm
            "
          />
        </div>
      </div>
    </SceneContainer>
  );
}

export default WelcomeScene;

// import { motion } from "framer-motion";

// import {
//   SceneContainer,
//   BackgroundGlow,
//   BackgroundStars,
//   AnimatedLogo,
//   LanguageSelector,
//   PrimaryButton,
// } from "../shared";

// import { useLanguage } from "../../context/LanguageContext";
// import { translations } from "../../data/translations";
// import { getFonts } from "../../utils/fonts";

// function WelcomeScene({ onNext }) {
//   const { language } = useLanguage();

//   const text = translations[language].welcome;

//   const { headingFont } = getFonts(language);

//   return (
//     <SceneContainer>
//       {/* Background */}
//       <BackgroundGlow />
//       <BackgroundStars />

//       {/* Language */}
//       <LanguageSelector />

//       {/* Logo */}
//       <AnimatedLogo />

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
//           delay: 0.8,
//           duration: 0.8,
//         }}
//         className={`
//           relative
//           z-20
//           mt-8
//           text-center
//           text-2xl
//           font-bold
//           text-yellow-400

//           md:text-5xl

//           ${headingFont}
//         `}
//       >
//         {text.title}
//       </motion.h1>

//       {/* Button */}
//       <motion.div
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         transition={{
//           delay: 1.4,
//         }}
//         className="relative z-20 mt-8"
//       >
//         <PrimaryButton title={text.button} onClick={onNext} />
//       </motion.div>
//     </SceneContainer>
//   );
// }

// export default WelcomeScene;
