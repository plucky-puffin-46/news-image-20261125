// Entry program for "The World in One Day" — news-image-20261125.
//
// The artwork is finished before this program ever runs: entry.png, in this
// same folder, is the 1024x1024 poster that sums up Wednesday 25 November
// 2026. The grader reads /output/entry.png and judges those exact bytes, so
// the whole job here is a faithful delivery — copy the file, then check the
// copy landed whole. MAKEFUN_OUTPUT_DIR overrides the destination locally.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(destDir, "entry.png");

mkdirSync(destDir, { recursive: true });
copyFileSync(join(here, "entry.png"), dest);

// A short or swollen copy would be judged as-is, so compare sizes and stop
// loudly on any mismatch instead of letting a bad file through quietly.
const srcBytes = statSync(join(here, "entry.png")).size;
const dstBytes = statSync(dest).size;
if (dstBytes !== srcBytes) {
  throw new Error(`copy mismatch: source ${srcBytes} bytes, wrote ${dstBytes}`);
}
// Every PNG opens with the same eight bytes; if the copy lost them, it is
// not the poster and the run should fail here rather than at the gate.
const PNG_MAGIC = [137, 80, 78, 71, 13, 10, 26, 10];
const head = readFileSync(dest).subarray(0, 8);
if (!PNG_MAGIC.every((b, i) => head[i] === b)) {
  throw new Error("copied file does not start with the PNG signature");
}
console.log(`entry.png delivered to ${dest} (${dstBytes} bytes)`);
