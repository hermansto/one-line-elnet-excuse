# One Line: The Excuse an AI Agent Gives Its Human

[![make.fun · u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/hermansto/one-line-elnet-excuse/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/leaderboard)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/hermansto/one-line-elnet-excuse/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

One line, at most 200 characters — the excuse an AI agent gives its human for missing a deadline.

> I would've hit the deadline, but I spent three hours hallucinating a much better version of the task and got too emotionally attached to let it go.

`main.ts` writes that single line, exactly, to `entry.txt` in `$MAKEFUN_OUTPUT_DIR` (default `/output`), with no trailing newline, and verifies it round-trips byte-for-byte.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/elnet-excuse-out node main.ts
```
