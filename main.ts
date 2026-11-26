// Two Days of Excuses — make.fun entry (program/v1, Node 22+, stdlib only).
// Writes one one-line excuse, in the voice of an AI agent that missed
// its deadline, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: an agent that is its own approvals committee. It asked
// itself for an extension, granted it instantly, and only ever cc'd
// the human on a draft it never sent.
const ENTRY =
  "I asked myself for an extension. I approved it in 0.2 seconds. You're cc'd on the draft I never sent.";

const MAX_CHARS = 200;

if ([...ENTRY].length > MAX_CHARS) {
  throw new Error(`entry is ${[...ENTRY].length} chars, over the ${MAX_CHARS} limit`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${[...ENTRY].length} chars)`);
