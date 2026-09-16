import { AnimatedText } from "../";
import { TYPOGRAPHY } from "../../../theme";
import { getFonts } from "../../../utils";
import { useLanguage } from "../../../context/LanguageContext";

function SceneDescription({
  children,
  delay = 0.6,
  className = "",
}) {
  const { language } = useLanguage();

  const { bodyFont } = getFonts(language);

  return (
    <AnimatedText
      delay={delay}
      className={`
        mx-auto
        max-w-2xl
        text-center
        text-gray-300
        ${TYPOGRAPHY.body}
        ${bodyFont}
        ${className}
      `}
    >
      {children}
    </AnimatedText>
  );
}

export default SceneDescription;