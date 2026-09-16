import { useState } from "react";
import WelcomeScene from "./components/intro/WelcomeScene";
// import InvitationScene from "./components/intro/InvitationScene";
// import QuoteScene from "./components/intro/QuoteScene";
import { SCENES } from "./data/scenes";
import { LanguageProvider } from "./context/LanguageContext";
import GiftScene from "./components/intro/GiftScene";
import LetterScene from "./components/intro/LetterScene";
import GroomScene from "./components/intro/GroomScene";
import BrideScene from "./components/intro/BrideScene";
import CoupleScene from "./components/intro/CoupleScene";
import EngagementScene from "./components/intro/EngagementScene";
import MarriageScene from "./components/intro/MarriageScene";
import ReceptionScene from "./components/intro/ReceptionScene";
import ThankYouScene from "./components/intro/ThankYouScene";

// import {
//   WelcomeScene,
//   GiftScene,
//   LetterScene,
//   GroomScene,
//   BrideScene,
//   CoupleScene,
//   PersonRevealScene,
// } from "../components/intro";

function App() {
  const [currentScene, setCurrentScene] = useState(SCENES.WELCOME);

  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden bg-black">
        {currentScene === SCENES.WELCOME && (
          <WelcomeScene onNext={() => setCurrentScene(SCENES.GIFT)} />
        )}
        {currentScene === SCENES.GIFT && (
          <GiftScene onNext={() => setCurrentScene(SCENES.LETTER)} />
        )}
        {currentScene === SCENES.LETTER && (
          <LetterScene onNext={() => setCurrentScene(SCENES.GROOM)} />
        )}
        {currentScene === SCENES.GROOM && (
          <GroomScene onNext={() => setCurrentScene(SCENES.BRIDE)} />
        )}
        {currentScene === SCENES.BRIDE && (
          <BrideScene onNext={() => setCurrentScene(SCENES.COUPLE)} />
        )}
        {/* {currentScene === SCENES.COUPLE && (
          <CoupleScene onNext={() => setCurrentScene(SCENES.SELECTION)} />
        )} */}
        {currentScene === SCENES.COUPLE && (
          <CoupleScene onNext={() => setCurrentScene(SCENES.ENGAGEMENT)} />
        )}

        {currentScene === SCENES.ENGAGEMENT && (
          <EngagementScene onNext={() => setCurrentScene(SCENES.MARRIAGE)} />
        )}
        {currentScene === SCENES.MARRIAGE && (
          <MarriageScene onNext={() => setCurrentScene(SCENES.RECEPTION)} />
        )}
        {currentScene === SCENES.RECEPTION && (
          <ReceptionScene onNext={() => setCurrentScene(SCENES.THANK_YOU)} />
        )}
        {currentScene === SCENES.THANK_YOU && <ThankYouScene />}

        {/* {currentScene === SCENES.WEDDING && (
          <WeddingScene onNext={() => setCurrentScene(SCENES.RECEPTION)} />
        )}

        {currentScene === SCENES.RECEPTION && (
          <ReceptionScene onNext={() => setCurrentScene(SCENES.END)} />
        )}

        {currentScene === SCENES.END && <EndScene />} */}
      </div>
    </LanguageProvider>
  );
}

export default App;

// Couple glowColor
// glowColor="#FFE8A3"
