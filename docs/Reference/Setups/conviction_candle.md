---
sidebar_position: 3
tags: ["Reference", "setups", "conviction candle"]
---
# Conviction Candle Setup

## Overview

This is a setup designed for strategies based on the opening candle.  It is designed to recognize a certain degree of directional conviction and triggers when that bias is detected.

## Parameters

**candleDuration**: minute duration per candle. 5 for a 5 minute candles.

**Minimum first candle height**: Often, a setup like this will require some amount of volatility at the open. Set this parameter to define the min height of the first candle.

**rightColorCandle**: If long, the first candle close must be above open. If short, the close must be below open.

**Candle close pct**: Enforce that the first candle close must be a certain percentage of the candle height.

EX: if the first candle has: o: 99.25, l: 99, h:100, c: 99.3. It can very disadvantageous to buy well be on a break of 100, because of the length needed to travel to reach that height and the bearish nature of the first candle. We could set candle close pct to 60%, and we would not trigger a long unless the candle closed above 99.6

**Permitted Gap Pct**: Ensure that the open is in the direction that you want the trade to be in. Set the minimum the gap must be. If your gap is .25, then the open must be at least .25% in the direction that your trade will be. If your gap is -.25, then the open must be at least -.25% in the direction that your trade will be. Let's say AAPL closes the previous day at 450, and opens the next at 449. Setting permittedGapPct can prevent a buy on a false positive first candle, that reverses quickly after breaking the high.

**NOTE**:

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

## Example

## Notes

## See also

## Video

