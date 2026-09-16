import { AnimatedText } from "../";
import { TYPOGRAPHY } from "../../../theme";
import { getFonts } from "../../../utils";
import { useLanguage } from "../../../context/LanguageContext";

function SceneTitle({ children, delay = 0.4, className = "" }) {
  const { language } = useLanguage();

  const { headingFont } = getFonts(language);

  return (
    <AnimatedText
      as="h1"
      delay={delay}
      className={`
        text-center
      text-yellow-400
        leading-relaxed
        tracking-wide
        ${TYPOGRAPHY.heading}
        ${headingFont}
        ${className}
      `}
    >
      {children}
    </AnimatedText>
  );
}

export default SceneTitle;
