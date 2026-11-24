import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The handle is the whole entry: six characters, no padding, no pitch.
// 0xfari is the handle its owner wears: short, exact, and hard to forget.
// Six bytes, no newline: the username is the entry, and smaller wins the tie-break.
const USERNAME = "0xfari";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), USERNAME);
