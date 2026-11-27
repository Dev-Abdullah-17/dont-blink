# Brief: vision-input

## Goal
Detect blinks and head turns from the webcam and emit events on the bus.
Runs entirely in the browser. No video leaves the device.

## Must do
- Use MediaPipe FaceLandmarker (VIDEO mode, GPU delegate) with the local
  model at /models/face_landmarker.task.
- Use the eyeBlinkLeft / eyeBlinkRight blendshape scores (average of both eyes).
- Hysteresis with two thresholds (close and open) to avoid flicker.
- Emit BLINK for closures between 60 ms and 2000 ms.
- Emit LONG_CLOSE (with duration) for closures over 2000 ms.
- Emit DOUBLE_BLINK when two BLINKs happen within 500 ms.
- Ignore closures under 60 ms (noise).
- Calibration: about 5 seconds measuring open-eye and closed-eye scores, then set
  thresholds relative to them. Emit CALIBRATION_DONE with baseline blinks/min.
- Emit HEAD_YAW (degrees) from the facial transformation matrix, smoothed.
- Emit SENSOR_LOST when no face is detected for 1 second or the camera fails.
- Detection at most ~30 times per second; must not block 60 fps rendering.
- Keyboard fallback: space = BLINK, hold space 2s = LONG_CLOSE,
  arrow keys = HEAD_YAW.

## Design constraints
- Keep the blink state machine a pure function of (score, timestamp) so it
  can be tested without a webcam.
- Only use events from src/input/events.ts.
- A recording tool that saves (timestamp, score) sequences as JSON in
  tests/recordings/ for replay tests.

## Correctness properties (property-based tests)
- For any score sequence, BLINK is never emitted without a preceding close.
- LONG_CLOSE is emitted if and only if a closure lasted over 2000 ms.
- No event is emitted for closures under 60 ms.
- DOUBLE_BLINK is only emitted when two BLINKs are under 500 ms apart.
- Each closure produces at most one of BLINK or LONG_CLOSE.

## Out of scope
Gaze tracking, winks, multiple faces.