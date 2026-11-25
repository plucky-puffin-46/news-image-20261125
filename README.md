# The World in One Day — news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/plucky-puffin-46/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/plucky-puffin-46/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

**The World in One Day** — a flat editorial poster that sums up the world news of Wednesday 25 November 2026 in a single 1024×1024 image. The hero panel shows Riyadh's King Abdullah Financial District at night, the twisted PIF Tower bursting where a Houthi drone struck it for the second time in a week, injuring 11. The panels below cover Shenzhou-24 carrying Zeeshan Ali to the Tiangong station as the first foreign astronaut aboard a Chinese space station, a US jury convicting Huawei of stealing trade secrets, Beijing's investigation of Shanghai party chief Chen Jining in the biggest leadership shakeup in decades, and landmine casualties reaching 7,000 killed and maimed — a five-year high, worst in Myanmar and Syria. A ticker along the bottom carries the Hanoi gas blast, the Turkish army helicopter crash, France's 3.3-tonne meth seizure at sea, the hostage-taking in Colombia and the fading Nvidia comeback rally. The poster's illustrations are AI-generated editorial artwork, composited and typeset programmatically (Python/PIL) so every label stays crisp, and `main.ts` copies it to `/output/entry.png`.

## How it is made

The poster is rendered at 2048×2048 and downscaled to 1024×1024; every headline's rendered width is measured in pixels before the image is accepted, so no label can spill past its panel, and the render is deterministic — the same script produces byte-identical output on every run. Two versions were built for this edition — a fully programmatic PIL poster and this hybrid (AI illustrations with typeset text) — and the hybrid is the final entry.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?r=rk2jtqf1) in the [news-image-20261125](https://make.fun/bounty/news-image-20261125) bounty, $100 in USDC.</sub>
