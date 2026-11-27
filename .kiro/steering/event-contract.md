---
inclusion: always
---
# Event contract

All communication between sensors and the game uses ONLY the events defined here:

#[[file:src/input/events.ts]]

Spell words come ONLY from:

#[[file:src/config/spells.ts]]

Never invent new event types or spell words. If a feature seems to need one, stop and propose the change instead of implementing it.
