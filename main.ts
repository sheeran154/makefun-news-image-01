// "The World in One Day: 30 Stories" — one image summing up Friday
// 13 November 2026. A dense broadsheet front page: masthead with the date,
// a stylised world-map band, and thirty short headlines in six regional
// columns (North America, Europe, Asia-Pacific, Middle East, Africa,
// Latin America), plus an IEA oil-surplus strip at the bottom. The image is
// drawn programmatically (Pillow, DejaVu fonts) in build-broadsheet.py, so
// every headline is crisp, legible and spelled correctly — no generated
// text. Re-render with: python3 build-broadsheet.py (from the work dir). Thirty real, verified 13 Nov stories; see research-v2.md.
// The entry is the bundled image, copied to the output as entry.png.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const src = join(import.meta.dirname, "entry.png");
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
const size = statSync(dest).size;
console.log(`wrote entry.png (${size} bytes) — the world in one day, 30 stories, 13 Nov 2026`);
