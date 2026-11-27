# Progress

Deadline: Dec 4, 2026, 5 PM EST (Dec 5, 3 AM Pakistan time). Target submission: evening of Dec 4.
Legend: [✓] done, [~] in progress, [ ] not started, [-] cut

## Phase 0: Foundation (Nov 27)
- [✓] GitHub repo with MIT license
- [✓] Vite + TypeScript scaffold, dev server runs
- [✓] Prettier + tsc typecheck configured
- [✓] Folder structure
- [✓] Contract files: events.ts, spells.ts
- [✓] Steering files
- [✓] MCP servers: Context7, Playwright
- [-] GitHub power or MCP (skipped for now)
- [-] GitHub Projects board
- [~] Kiro credits plan decided

## Phase 1: Blink detection (Nov 28) — GO/NO-GO by end of day
- [ ] Spec: vision-input (requirements, design, tasks)
- [ ] FaceLandmarker running on webcam
- [ ] Blink with hysteresis, double blink, long close
- [ ] Calibration
- [ ] Head yaw
- [ ] Recording tool for blink sessions
- [ ] Property tests for blink state machine
- [ ] Replay hook

## Phase 2: Voice (Nov 29)
- [ ] Spec: voice-input
- [ ] Spell recognition + fuzzy matching
- [ ] Volume detection
- [ ] Property tests for spell matching
- [ ] Keyboard fallback for all events

## Phase 3: Game (Nov 30 – Dec 1)
- [ ] Spec: game-core, rendering
- [ ] Graveyard scene: fog, lantern, tombstones
- [ ] Ghouls move on blinks
- [ ] Spells banish ghouls; volume attracts
- [ ] Grave sight on long close
- [ ] Win / lose
- [ ] Boss staring contest
- [ ] Fear meter
- [ ] Property tests for game rules

## Phase 4: Polish (Dec 2) — FEATURE FREEZE end of day
- [ ] Postprocessing, sound, HUD, calibration screen
- [ ] Face mesh overlay for video
- [ ] Custom crypt MCP server
- [ ] Testing on another laptop and in bad lighting

## Phase 5: Ship (Dec 3 – 4)
- [ ] Deploy
- [ ] Demo video
- [ ] Kiro write-up
- [ ] Devpost page (student details for both members)
- [ ] Blog post (mentions Kiroween 2026)
- [ ] Social post starting with #KiroweenHackathon26
- [ ] Submit

## Cut list (in order)
1. Urdu voice mode  2. Head-turn camera  3. Fear meter  4. Vosk → Web Speech  5. 3D → 2.5D
