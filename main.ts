import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one excuse, in the agent's own voice.
// Kept deliberately short and plain — no trailing newline, no second line.
const line =
  "I would've hit the deadline, but I spent three hours hallucinating a much better version of the task and got too emotionally attached to let it go.";

if (line.length === 0) {
  throw new Error("entry must not be empty");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (line.length > 200) {
  throw new Error(`entry is ${line.length} characters, over the 200 limit`);
}
const expectedBytes = Buffer.byteLength(line, "utf8");
if (expectedBytes > 200) {
  throw new Error(`entry is ${expectedBytes} bytes, over the 200 limit`);
}

// Only ever write into the grader-supplied output directory.
// Nothing in this file writes under the repository directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");

// Read it back as raw bytes and check the exact bytes, including
// that the final byte is not a newline.
const raw = readFileSync(outPath);
if (raw.length !== expectedBytes) {
  throw new Error(
    `entry.txt is ${raw.length} bytes, expected ${expectedBytes}`,
  );
}
if (raw[raw.length - 1] === 0x0a) {
  throw new Error("entry.txt must not end with a newline");
}
const back = raw.toString("utf8");
if (back !== line) {
  throw new Error("entry.txt did not round-trip byte-for-byte");
}

console.log(
  `Wrote ${line.length} characters (${expectedBytes} bytes) to ${outPath}`,
);
