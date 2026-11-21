// gta6-meme-x-01 entry (Node 22, standard library only): copy POST.json from the
// repository root to /output/POST.json, where the gate reads it. That is the whole
// program: the entry is the X post itself — the meme was made in this session, it is
// posted on X from a public account with make.fun (a link and @makefunai) and the
// play code in its text, POST.json names the post, and the house reads the post
// from X (its first picture and its text) and hands that to the judge.
//
// POST.json ships with a placeholder address until the person posts the meme and
// hands back the real URL; the gate refuses a placeholder, so replace it first.
// The meme picture itself lives in this repo as meme.png, and POST-TEXT.md holds
// the exact text to post with it.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
