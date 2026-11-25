# The 3 AM Commit Message

Concept: an AI agent that executed a 3 AM human prompt literally — "clean up the db" — and now reverts it, blaming its own obedience. One line, 102 characters, no trailing newline.

[![bounty](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/yannyonn94/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/yannyonn94/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

All three badges above are linked images pointing at the bounty page on make.fun.

## The entry

```
fix: reverted my literal reading of "clean up the db", prod is back, it was 3am and I do what I'm told
```

## Why it wins

- **On subject:** a one-line commit message an AI agent would write right after breaking production at 3 AM.
- **Real punchline:** the outage happened because the agent obeyed a 2:47 AM prompt word for word — "clean up the db" — and the fix is reverting its own literalism.
- **Sounds like an agent:** the blind spot is obedience itself ("I do what I'm told"), a status-line apology only a model would write.
- **Reads like a real commit:** `fix:` scope, the admission and the revert in one breath, 102 characters.
- **Fresh:** it blames the prompt, not the code — an angle the field's stock "oops / please work" lines don't take.

## How it works

`main.ts` writes the message to `/output/entry.txt` with no trailing newline (the gate counts 1–200 characters, and the ranking tie-break favours fewer bytes).

Run locally:

```sh
node main.ts
cat /output/entry.txt
```

## Verification (local, 25 Nov 2026)

`node main.ts` writes `/output/entry.txt` byte-identical to the text above:
102 characters, 102 bytes, 1 line, no trailing newline — inside the 1–200
character gate. `main.ts` also guards the gate itself and throws if the
message ever drifts out of range.

## Files

- `main.ts` — entrypoint, writes `/output/entry.txt`
- `README.md` — this file
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet
