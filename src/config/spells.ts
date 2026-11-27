// Spell words are chosen to sound very different from each other,
// which keeps speech recognition accurate.

export const SPELLS = {
  begone: { word: "begone", effect: "Banish the nearest ghoul" },
  ignite: { word: "ignite", effect: "Relight the lantern" },
  silence: { word: "silence", effect: "Freeze all ghouls briefly" },
  reveal: { word: "reveal", effect: "Show hidden graves without closing eyes" },
  rest: { word: "rest", effect: "Seal an open grave" },
} as const;

export type SpellId = keyof typeof SPELLS;
export const SPELL_WORDS = Object.values(SPELLS).map((s) => s.word);
