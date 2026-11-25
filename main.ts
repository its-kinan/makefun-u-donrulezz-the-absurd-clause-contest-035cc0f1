import { mkdirSync, writeFileSync } from "node:fs";

// The Absurd Clause Contest — one original English sentence (<=200 chars):
// an absurd clause hidden deep inside a terms-of-service agreement.
// Deadpan legal boilerplate until the absurdity hits: a reserved right,
// a monthly collection schedule, and a waiver that quietly escalates
// from return, to resale, to the sock's reunion with its pair.
const CLAUSE =
  "The Company reserves the right to collect your left sock on the first Monday of each month, and you waive any claim to its return, resale, or reunion with its pair.";

if (CLAUSE.length < 1 || CLAUSE.length > 200) {
  throw new Error(`clause must be 1-200 characters, got ${CLAUSE.length}`);
}
if (CLAUSE.trim() !== CLAUSE || CLAUSE.split(".").length !== 2) {
  throw new Error("clause must be a single clean sentence with no padding");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CLAUSE, "utf8");
