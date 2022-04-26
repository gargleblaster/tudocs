---
sidebar_position: 3
tags: ["Reference", "setup filters", "ftfc"]
---
# Full Time Frame Continuity (FTFC) Setup Filter

## Overview

This is a filter that tracks full time frame continuity or FTFC. This setup filter only allows trades in which all time frames you specify are above the open if long, or below the open if short.

You choose these setups by manipulating the list that shows when you click the FTFC setup. "m" is for minute, "d" is for day, "w is for week, "M" is for month. The parameter candle represents the candle duration of the time frame. If you wanted to trade the 60 minute candle (starting from 9:30), you would type in 60 for the candle parameter, and click "m" as the timeUnit.

The red X button on the right will remove the associated time frame. The green plus beneath will add another time frame.

## Parameters

## Example

### Example 1

Let's say I want to trade AAPL, either long or short, but I only want to if the 1 hour, the 1 day, the 1 week, and the 1 month, all are the same color. I would enter the filter as: 60m, 1d, 1w, and 1m. If, when the entry tactic triggers, all of those time frames are above their respective open (the UI will show green), and the tradePlan is long, the trade will pass the filter. If even one is red, the filter will fail. The opposite is true for shorts. If the tradePlan is short, and all of those time frames are below their respective open, it will allow a trigger short. If even one time frame is green, the filter will fail.

## Notes

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on in TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

## See also

## Video

