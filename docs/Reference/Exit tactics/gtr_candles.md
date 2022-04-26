---
sidebar_position: 3
tags: ["Reference", "exit tactics", "green-to-red candles"]
---
# Green-to-Red Candles Exit Tactic

## Overview

The idea behind this tactic is to catch headFakes on candles, in which a breakout is attempted, but quickly reverses. It tries to catch the exit early, as opposed to waiting until a later exit tactic flattens. We all know that feeling when a stock quickly breaks a candle for a second, quickly pulls back, and you know your trade is dead. It updates candle by candle.


## Parameters
**right direction pct**: How much the current price is above the previous candle high (long) or low (short) before we begin tracking the retracement. If the prev candle high is 100, and the right direction pct is 0, then we will start tracking if it falls once the current candle hits 100. If the right direction pct is .1%, then we will start tracking retracement once the price hits 100.1.

**retrace pct**: The pct up the candle before flattening the position. It is set as follows: let's say we have a candle with L: 99 and H: 100, and the retrace pct is set to %60. If you are long, the trigger will be set to 99.4, a 60% retrace from the high. If short, the trigger will be set to 99.6.

**candleDuration**: the minute duration of the candles you'd like to track.

**min candle height**: The main goal of this to tactic is to catch a loss earlier. It is most effective on a larger candle, and trying to catch the loss a certain % up the candle. This tactful would be detrimental if used on a small candle. A candle height of 15 cents won't hurt, but having your position exit after moving 8 cents could be quite frustrating. Set this parameter to the min height the candle must be in order to utilize this tactic.


## Example

Let's say you enter a long position in AAPL, and the previous candle high is 450.25, and the low is 449.5. Let's say you have a right direction pct of 0, and retrace pct of 60%. To this tactic that would mean: once AAPL breaks 450.25, look to flatten if it falls to 449.8. With each incoming candle, this tactic resets its triggers. So let's say the next candle has high of of 450.75, and low of 450. We will now say: once AAPL breaks 450.75, we should flatten if the stock retraces back to 450.3, which is a 60% retracement from the high.

## Notes
We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on in TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

## See also
[Green-to-Red Position](gtr_positions.md)

## Video



