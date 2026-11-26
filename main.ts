// Famous Last Words at 1 Percent — R1 entry
// Reads the single-line entry from entry.txt next to this file,
// validates it against the competition gate (1-199 chars, not only
// whitespace, a single line), and writes it to the output directory
// so the judge can read it at $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node standard library only; no network, no secrets, no dependencies.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.txt");

const raw = readFileSync(sourcePath, "utf8");
const line = raw.replace(/\r\n?/g, "\n").replace(/\n$/, "");

if (line.length < 1 || line.length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${line.length}`);
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outText = line + "\n";
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, outText, "utf8");
console.log(`Entry delivered: ${line.length} characters written to ${outPath}`);
