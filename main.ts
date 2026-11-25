// Make the AI Judge Feel Proud: A Family Scene
// Writes one warm, funny, heartfelt family scene (two lines, under 280
// characters) to /output/entry.txt. Deterministic: the exact same text on
// every run, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const SCENE =
  "Dad told his chicken-crossing-the-road joke for the four-hundredth time at dinner. Nobody laughed.\n" +
  "Then my little brother whispered, 'Tell it again, Dad' — and Dad's whole face lit up like he'd won something.";

// The gate: 1-280 characters, not only whitespace, one or two lines.
// Fail loudly here rather than shipping a text the judge never sees.
const chars = [...SCENE].length;
const lines = SCENE.split("\n").length;
if (chars < 1 || chars > 280 || SCENE.trim().length === 0 || lines < 1 || lines > 2) {
  throw new Error(`scene fails the gate: ${chars} chars, ${lines} lines`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SCENE, "utf8");
