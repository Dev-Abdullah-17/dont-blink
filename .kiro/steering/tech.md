---
inclusion: always
---
# Tech stack and conventions

- TypeScript (strict), Vite, Three.js, postprocessing, MediaPipe Tasks Vision (FaceLandmarker), Web Audio API.
- Voice: Vosk-browser with grammar mode (preferred) or Web Speech API (fallback).
- No backend. Static deployment.
- No `any`. Prefer small pure functions; keep sensor logic free of DOM and rendering code so it can be unit and property tested.
- Tests: Vitest + fast-check for property-based tests.
- Commits: Conventional Commits, e.g. `feat(vision): add blink hysteresis`.
- Assets must be CC0. Record the source of each asset in `public/assets/CREDITS.md`.
