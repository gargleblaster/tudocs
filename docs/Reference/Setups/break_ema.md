---
sidebar_position: 3
tags: ["Reference", "setups", "break EMA"]
---
# Break EMA Setup

## Overview

Tracks a series of Exponential Moving Averages and triggers entry tactics based on a break through each of them. If you are long and current price is 449 and the EMA you are tracking is at 450, it will trigger the entry tactic upon breaking that EMA.

:::info

The EMA level is recalculated with every tick.

:::

## Parameters

**candleDuration**: the length of the minute of the ema you'd like to track. So if you were tracking the 8 5min ema, the candle duration would be 5. Similarly with 21 5min ema, the candle duration would be 21.

**periods**: the period of the ema you'd like to track. So if you were tracking the 8 5min ema, the period would be 8. Similarly with 21 5min ema, the candle duration would be 21. If you would like to trade multiple EMA's simultaneously, provide the emas in a comma separated list. So if you'd like to trade both the 8 and 21 5 min ema's at once, periods would be 8,21

**NOTE**:
1) We apply break validation, so that if you setup a long break off ema in which current price
   is above ema price, the trade plan will terminate.
2) For each period you provide, we treat it as a seperate tradeplan. So the completion of the trade plan tracking the 8 ema, doesn't mean the 21 ema will cancel.
3) We prevent systems from placing multiple purchases on ema's at similar times. So that if, while the 8 ema is attempting to open a position or is in a position, the 21 ema cannot open as well.


We calculate the ema based on when the market is open. If you use another platform and have pre market on, you might end up having a different EMA than us, since they might take into account pre market hours.

## Example

## Notes

## See also

## Video

