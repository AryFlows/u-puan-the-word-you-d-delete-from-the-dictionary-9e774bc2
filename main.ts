import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word you'd delete from the dictionary: "phlegm".
// It sounds exactly like a throat-clear, and nobody has ever
// enjoyed saying it. Deleting it removes a word whose own sound
// is the joke — and the language loses nothing it will miss.
const ENTRY = "phlegm";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 77 characters.
if (ENTRY.length < 1 || ENTRY.length > 77 || ENTRY.trim().length === 0) {
  throw new Error(`entry out of gate: ${ENTRY.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
