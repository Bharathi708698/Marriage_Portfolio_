import AnimatedLogo from "./AnimatedLogo";
import LanguageSelector from "../navigation/LanguageSelector";

// function BrandHeader({
//   logoSize = 120,
//   showLogo = true,
//   showLanguage = true,
//   glow = false,
//   shine = true,
//   className = "",
// }) {
//   return (
//     <>
//       {/* Language */}
//       {showLanguage && <LanguageSelector />}

//       {/* Logo */}
//       {showLogo && (
//         <div
//           className={`
//             absolute
//             top-5
//             left-1/2
//             -translate-x-1/2
//             z-40
//             ${className}
//           `}
//         >
//           <AnimatedLogo
//             size={logoSize}
//             glow={glow}
//             shine={shine}
//           />
//         </div>
//       )}
//     </>
//   );
// }

function BrandHeader({
  showLogo = true,
  showLanguage = true,
  logoProps = {},
  className = "",
}) {
  return (
    <>
      {showLanguage && <LanguageSelector />}

      {showLogo && (
        <div
          className={`
            absolute
            top-6
            md:top-10
            mb-10
            left-1/2
            -translate-x-1/2
            z-40
            ${className}
          `}
        >
          <AnimatedLogo {...logoProps} />
        </div>
      )}
    </>
  );
}

export default BrandHeader;
