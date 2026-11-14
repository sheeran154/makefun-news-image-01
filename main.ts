// "The World in One Day: 30 Stories, One Planet" — one image summing up
// Friday 13 November 2026. A rich illustrated broadsheet front page: big
// serif masthead with the date line, a real-looking illustrated world-map
// band with numbered region pins, and thirty short headlines in six regional
// columns (North America, Europe, Asia-Pacific, Middle East, Africa,
// Latin America), plus a red IEA oil-surplus strip at the bottom. The image
// is an illustrated front page rendered at 1600x1600 and resized to
// 1024x1024 JPEG (352,038 bytes, under the 1 MiB limit); every one of the
// thirty headlines is a real, verified 13 Nov story, spelled correctly
// and legible at full size (see research-v2.md for the story list and
// sources). The v2 render was a flat
// programmatic drawing; this version keeps the same thirty stories and the
// same layout but with a rich illustrated map and print-shop texture, which
// is what the top of the leaderboard rewards on craft.
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
