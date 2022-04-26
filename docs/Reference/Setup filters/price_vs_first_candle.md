---
sidebar_position: 3
tags: ["Reference", "setup filters", "price relative to first candle"]
---
# Price Relative to First Candle Setup Filter

## Overview

If the price intersects the low of the first candle of the day if long, or if the price intersects the high of the first candle of the day if short, reject the setup.

## Parameters

**candleDuration**: the duration of the first 9:30 candle that you would like to track.

Below, Above, High, Low: configures what conditions must be met in terms of the candle to filter. For example, if the candleDuration is 2, Below is selected, and High is selected, we will only allow trades that occur when the current price is below open 2 minute candle High. If Low was selected instead of High, we will only allow trades below the candle low. If Above and High are selected, only trades above the 2 min candle high will pass the filter. Lastly, if Above and Low are selected, only trades above 2 min candle low will pass.

## Example

### Example 1

You have a bounce off EMA setup for the 5-min 8 EMA. You believe that if price breaks the low of the 15-min 9:30 candle, that you should not go long anymore, and ignore the setup. That is the goal of this filter.

## Notes

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on in TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

## See also

## Video

