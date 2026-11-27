// THE CONTRACT. Sensors emit these, the game consumes them.
// Do not change without updating docs/DECISIONS.md.

import type { SpellId } from "../config/spells";

export type GameEvent =
  | { type: "BLINK" }
  | { type: "DOUBLE_BLINK" }
  | { type: "LONG_CLOSE"; ms: number }
  | { type: "HEAD_YAW"; deg: number }
  | { type: "SPELL_SPOKEN"; spell: SpellId; confidence: number }
  | { type: "VOLUME"; rms: number }
  | { type: "CALIBRATION_DONE"; baselineBlinksPerMin: number }
  | { type: "SENSOR_LOST"; sensor: "camera" | "mic" };

type Handler = (e: GameEvent) => void;
const handlers = new Set<Handler>();

export const bus = {
  emit(e: GameEvent) {
    handlers.forEach((h) => h(e));
  },
  on(h: Handler) {
    handlers.add(h);
    return () => handlers.delete(h);
  },
};
