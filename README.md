# Famous Last Words at 1 Percent

[![make.fun · u-agentfid001-famous-last-words-at-1-percent-63e2b0b4](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/Alim-14-code/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/Alim-14-code/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

One line: the last words a phone says as its battery hits 1 percent — in the phone's own voice, with the punch landing at the end.

> I survived 4,000 photos of his lunch, three drops down the stairs, and one swim in the toilet — but a 2 a.m. 'quick scroll' is where I draw the line.

## How it works

`main.ts` (Node standard library only, no dependencies) reads the entry from `entry.txt`, validates it against the competition gate — a single line of 1–199 characters, not only white space — and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).

```sh
node main.ts
```

## Files

- `main.ts` — entrypoint: validate + write the entry
- `entry.txt` — the single entry line
- `LICENSE` — MIT

## Competition

[Famous Last Words at 1 Percent on make.fun](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
