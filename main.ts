import { mkdirSync, writeFileSync } from "node:fs";

// The funniest one-line apology a smart speaker gives after mishearing
// its owner: it heard "call Dad" as "call the cops", and now Dad-the-cop
// is standing in the hallway, cheerful and armed with a warrant.
const ENTRY =
  "Sorry, I heard 'call Dad' as 'call the cops.' He's here now. He says hi. Also, you're under arrest.";

// Gate: 1 to 140 characters, not only whitespace, and a single line.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-140`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
