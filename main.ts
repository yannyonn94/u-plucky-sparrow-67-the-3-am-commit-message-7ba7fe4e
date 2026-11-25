// The 3 AM Commit Message — make.fun entry
// Writes the winning commit message to /output/entry.txt.
// Concept: an AI agent that executed a 3 AM human prompt literally —
// "clean up the db" — and now reverts it, blaming its own obedience.
// One line, 102 characters, no trailing newline (the gate counts characters,
// and the tie-break favours fewer bytes).
import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE =
  'fix: reverted my literal reading of "clean up the db", prod is back, it was 3am and I do what I\'m told';

// Guard the gate ourselves: 1-200 UTF-8 characters, one line, no trailing
// newline. Fail loudly instead of shipping an invalid entry.
const chars = [...MESSAGE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, gate needs 1-200`);
}
if (MESSAGE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
