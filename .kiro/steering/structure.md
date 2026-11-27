---
inclusion: always
---
# Project structure

- `src/input/`   sensors: vision.ts, voice.ts, keyboard.ts, events.ts (the contract)
- `src/game/`    state machine, ghouls, fear meter, boss
- `src/render/`  Three.js scene, effects, audio
- `src/ui/`      calibration screen, HUD, menus
- `src/config/`  spells and tunable constants
- `tests/recordings/` recorded blink sessions (JSON) replayed in tests
- `docs/`        PROGRESS, HANDOVER, DECISIONS, KIRO_LOG

Rules: the game never touches the camera or mic directly. Sensors only communicate through the event bus.
