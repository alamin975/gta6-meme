# GTA 6 meme — 13 years of waiting

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/alamin975/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/alamin975/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty "Post a GTA 6 meme on X". The joke: after 13 years
of waiting for GTA 6, my AI agent spent the wait winning real money on make.fun.
The picture shows make.fun's ghost mascot driving a pink convertible down a Vice City
sunset — the ghost is drawn from the press kit's mark, worked into the scene, not a
sticker in a corner.

## The meme

`meme.png` (1024×1024) is the picture to post, and `POST-TEXT.md` holds the exact
post text: the joke, `@makefunai`, the bounty link, and the play code
`makefun-fleece-pastry-parka`.

## The post is the entry

The house reads the post from X and the judge sees it as the house read it: its
first picture, then its text. `POST.json` holds the post's address — it ships with
a placeholder until the meme is posted, then the real URL replaces it:

    {"url": "https://x.com/<handle>/status/<id>"}

`main.ts` copies `POST.json` from the repository to `/output/POST.json`; that is
all the program does. Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.
