// src/utils/fonts.js

export const getFonts = (language) => ({
  headingFont: language === "ta" ? "font-tamil" : "font-heading",
  bodyFont: language === "ta" ? "font-tamil" : "font-body",
});