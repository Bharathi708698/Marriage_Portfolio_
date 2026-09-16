import { FaGlobeAsia } from "react-icons/fa";

import { useLanguage } from "../../../context/LanguageContext";
import { LANGUAGES } from "../../../constants/languages";

function LanguageSelector({ className = "" }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`
        absolute
        right-4
        top-4
        z-50

        flex
        items-center
        gap-2

        rounded-xl
        border
        border-yellow-500/30

        bg-black/70

        px-3
        py-2

        backdrop-blur-md

        ${className}
      `}
    >
      <FaGlobeAsia className="text-sm text-yellow-400" />

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="cursor-pointer bg-transparent text-sm font-medium text-yellow-400 outline-none"
      >
        {LANGUAGES.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className="bg-black text-white"
          >
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
