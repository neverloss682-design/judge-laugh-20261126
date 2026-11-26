// judge-laugh-20261126 — make.fun "Make the Judge Laugh in One Line" entry.
// Generator: embeds one funny line (<=200 chars) and writes it to
// /output/entry.txt at runtime. No network, no secrets, no other files read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. Reversal: the meter — the thing that fines you — fines itself.
// Premise is fresh (parking meter, not a saturated one-liner premise) and the
// punch ("fined itself for loitering") cannot be guessed from the first clause.
// Self-judge vs the playbook: reversal (not 3-beat escalation), one specific
// concrete object, 86 chars (sweet spot 70-180), no abstract closing word,
// no stock pun, reads cleanly out loud in one breath.
const ENTRY =
  "I fed the parking meter an extra hour. It thanked me, then fined itself for loitering.";

// Gate from RULES.txt: /output/entry.txt must be UTF-8 text of 1..200
// characters, not only whitespace. Refuse anything outside that cap.
const MAX_CHARS = 200;

function main(): void {
  const text = ENTRY;
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `entry length ${text.length} chars is outside the 1..${MAX_CHARS} gate`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
