---
inclusion: fileMatch
fileMatchPattern: ["src/render/**", "src/input/vision.ts"]
---
# Performance budget

- Render at 60 fps on a mid-range laptop.
- Face detection at most ~30 times per second, under ~30 ms per detection.
- Use instanced meshes for repeated objects (tombstones, trees).
- Shadows off or a single low-resolution shadow map.
- Never allocate objects inside the render or detection loop.
