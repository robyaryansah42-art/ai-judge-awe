// ai-judge-awe — make.fun entry: make-the-ai-judge-feel-awe-20261121-1600
// Writes one short relaxing text to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR when set, for local runs).
// Deterministic: the same input always produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Somewhere, a kettle has just come off the heat. The kitchen is quiet. " +
  "Outside the window, snow lies over the field, and far off, one barn light " +
  "waits, patient as a held note, while the dark folds around it, soft, and " +
  "softer still, until the whole night seems to be listening.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
