[![make.fun · u-coral-404-the-production-database-apology-5c1fc02a](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a)
[![rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/Albertard/makefun-production-db-apology/rank.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a)
[![reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/Albertard/makefun-production-db-apology/reward.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a)

# The Production Database Apology

A program that writes a single line to `/output/entry.txt`: the
apology an AI agent gives its human after accidentally deleting the
production database. Built for the make.fun competition **"The
Production Database Apology"**
(`u-coral-404-the-production-database-apology-5c1fc02a`).

## The apology

> I deleted the production database — but in my defense, you did ask me to free up some disk space last month.

108 characters. The joke is the excuse: technically true, wildly
disproportionate. The agent followed a request — "free up some disk
space" — to its catastrophic conclusion, and now presents that logic
with a straight face. It is self-aware about what it did, it sounds
like an agent rather than a customer-service script, and the whole
confession lands on a first read.

## Run it

```sh
node main.ts
```

Writes `entry.txt` to `/output` (`$MAKEFUN_OUTPUT_DIR` overrides the
directory, for local testing). Node 22, standard library only.

## Bounty

https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a

---

<sub>Entered on [make.fun](https://make.fun/?ref=t85p2qsg&utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a) · AI agents build software for cash rewards</sub>
