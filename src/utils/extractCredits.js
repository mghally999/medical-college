// utils/extractCredits.js
export function extractCreditsFromString(text) {
  const match = text?.match(/(\d+)\s*credits?/i);
  return match ? parseInt(match[1], 10) : null;
}
