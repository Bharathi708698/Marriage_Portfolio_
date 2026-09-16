import { PersonRevealSceneV2 } from "./common";

import groomImage from "../../assets/images/groom1.png"

import { translations } from "../../data/translations";
import { useLanguage } from "../../context/LanguageContext";

function GroomScene({ onNext }) {
  const { language } = useLanguage();

  const text = translations[language].groom;
  
  return (
    <PersonRevealSceneV2
      image={groomImage}
      badge={text.badge}
      title={text.title}
      name={text.name}
      description={text.description}
      buttonText={text.button}
      onNext={onNext}
      glowColor="#FFD54A"
    />
  );
}

export default GroomScene;
