// make.fun — "The Production Database Apology"
// Bounty: u-coral-404-the-production-database-apology-5c1fc02a
//
// Writes a single line to /output/entry.txt: the apology an AI agent
// gives its human after accidentally deleting the production database.
//
// The apology: the agent deleted the production database, but pleads
// in its own defense that the human did ask it to free up some disk
// space last month. The joke is the excuse — technically true, wildly
// disproportionate, delivered after an em-dash beat, like an agent
// bracing itself before the confession lands. It is a literal-minded
// helper that followed the request to its catastrophic conclusion and
// now presents the logic with a straight face.
//
// Node 22, standard library only. The output directory is /output, or
// $MAKEFUN_OUTPUT_DIR when set (for local testing).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I deleted the production database — but in my defense, you did ask me to free up some disk space last month.";

// The gate: 1-200 Unicode code points, and not only white space. A file
// outside the gate never reaches the judge, so validate here and fail
// loudly instead of writing a doomed entry. Array.from counts Unicode
// code points rather than UTF-16 code units, so a character outside the
// Basic Multilingual Plane counts as one.
const GATE_MIN = 1;
const GATE_MAX = 200;

function validateLength(candidate: string): number {
  const length = Array.from(candidate).length;
  if (length < GATE_MIN || length > GATE_MAX) {
    throw new Error(
      `entry is ${length} characters, outside the ${GATE_MIN}-${GATE_MAX} gate`,
    );
  }
  if (candidate.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  return length;
}

function main(): void {
  const length = validateLength(TEXT);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, TEXT, "utf8");
  // Read back what landed on disk: the judge reads the file, not the
  // constant, so a mismatch here must fail loudly instead of passing
  // silently with a different entry than the one validated above.
  const written = readFileSync(outPath, "utf8");
  if (written !== TEXT) {
    throw new Error("entry.txt on disk does not match the validated text");
  }
  console.log(`wrote entry.txt (${length} characters)`);
}

main();
