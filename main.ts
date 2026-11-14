// "The World in One Day" — one image summing up Friday 13 November 2026.
// A newspaper front page: masthead with the date, six photo panels with
// legible headlines (Nvidia CEO quits in scandal; FAA lifts the flight halt;
// Microsoft outage day two; US envoys meet Zelensky; China's Pacific drills;
// Qatar–Turkey defence pact) and an IEA oil-surplus strip at the bottom.
// The entry is the bundled image, copied to the output as entry.png.
// (The file is JPEG bytes under a .png name, which the gate allows: it is
// told apart by its first bytes, and the name stays entry.png either way.)
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const src = join(import.meta.dirname, "entry.png");
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
const size = statSync(dest).size;
console.log(`wrote entry.png (${size} bytes) — the world in one day, 13 Nov 2026`);
