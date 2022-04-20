---
sidebar_position: 3
tags: ["Reference", "exit tactics", "green-to-red positions"]
---
# Green-to-Red Positions Exit Tactic

## Overview

The idea behind this tactic is to catch head fakes, in which a breakout is attempted, but quickly reverses. It tries to catch the exit early, as opposed to waiting until a later exit tactic flattens. This exit will follow the position price, and once the position price has reached an activation level (in % from entry price), if it retraces to a certain percentage, it will exit.


## Parameters
**right direction pct**: How much the current price is above the first average fill price that we receive. If long and your first average fill price is 1, and this is set to 5%, we will only begin tracking the retrace pct once your position hits 1.05 (5%).

**retrace pct**: What percent the position must fall back to before selling. Let's say you're long and your first average fill price is 1, and right direction pct is set to 5%. Once the position hits 1.05, this pct will come in to play. Let's say the retrace is set to 1%. If the position price falls back to 1.01, we will flatten.

## Example
Let's say you enter a long option position in AAPL, and you decide that if the position price increases by 5% and then begins to fall back, you want to exit early, rather than waiting for your lower stop loss to get hit.  This is one way to prevent a winning trade from becoming a loser.

## Notes

## See also
[Green-to-Red Candles](gtr_candles.md)


## Video



