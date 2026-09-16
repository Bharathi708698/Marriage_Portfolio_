// import { FloatingHearts, FloatingFlowers } from "../shared";

// import PersonRevealScene from "./common/PersonRevealScene";

// import { translations } from "../../data/translations";
// import { useLanguage } from "../../context/LanguageContext";

// function BrideScene({ onNext }) {
//   const { language } = useLanguage();

//   const text = translations[language].bride;

//   const brideImage =
//     "https://imgs.search.brave.com/oXvP5C_p2qVqWApu5qQwIiI14knQ7_SBIPpqMYiYs0Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/MzIzLzExNi9zbWFs/bC9wb3J0cmFpdC1v/Zi1hLWJ1c2luZXNz/LXdvbWFuLXdpdGgt/YXJtcy1jcm9zc2Vk/LWZyZWUtcG5nLnBu/Zw";

//   return (
//     <PersonRevealScene
//       image={brideImage}
//       badge={text.badge}
//       title={text.title}
//       name={text.name}
//       description={text.description}
//       buttonText={text.button}
//       onNext={onNext}
//       glowColor="#F6C8D8"
//     >
//       <FloatingFlowers count={6} />

//       <FloatingHearts count={5} />
//     </PersonRevealScene>
//   );
// }

// export default BrideScene;

import { FloatingFlowers, FloatingHearts } from "../shared";

import { PersonRevealSceneV2 } from "./common";
import brideImage from "../../assets/images/bride.png";

import { translations } from "../../data/translations";
import { useLanguage } from "../../context/LanguageContext";

function BrideScene({ onNext }) {
  const { language } = useLanguage();

  const text = translations[language].bride;

  return (
    <PersonRevealSceneV2
      image={brideImage}
      badge={text.badge}
      title={text.title}
      name={text.name}
      description={text.description}
      buttonText={text.button}
      onNext={onNext}
      glowColor="#F6C8D8"
    >
      <FloatingFlowers count={7} duration={14} />

      <FloatingHearts count={5} duration={10} />
    </PersonRevealSceneV2>
  );
}

export default BrideScene;
