import { hyphenateSync as hyphenateEn } from "hyphen/en-us";
import { hyphenateSync as hyphenateSr } from "hyphen/sh-latn";

const hyphenators = {
  en: hyphenateEn,
  sr: hyphenateSr,
};

export function hyphenateText(text, locale) {
  if (!text) return text;

  const hyphenate = hyphenators[locale === "sr" ? "sr" : "en"];
  return hyphenate(text, { minWordLength: 6 });
}
