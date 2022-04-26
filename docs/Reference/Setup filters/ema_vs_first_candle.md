---
sidebar_position: 3
tags: ["Reference", "setup filters", "ema relative to first candle"]
---
# EMA Relative to First Candle Setup Filter

## Overview

If the EMA('s) intersects the low of the first candle of the day if long, or if the ema('s) intersects the high of the first candle of the day if short, reject the setup.

## Parameters

Below, Above, High, Low: configures what conditions must be met in terms of the candle to pass this filter. For example, if the candleDuration is 2, Below is selected, and High is selected, this filter will only allow trades that occur when the current price is below open 2 minute candle High. If Low was selected instead of High, we will only allow trades below the candle low. If Above and High are selected, only trades above the 2 min candle high will pass the filter. Lastly, if Above and Low are selected, only trades above 2 min candle low will pass.

**first candle Duration**:

the duration of the first 9:30 candle that you would like to track.

**EMA candle Duration**:

the length of the minute of the ema you'd like to track. So if you were tracking the 8 5min ema, the candle duration would be 5. Similarly with 21 5min ema, the candle duration would be 21.

**periods**:

the period of the ema you'd like to track. So if you were tracking the 8 5min ema, the period would be 8. Similarly with 21 5min ema, the candle duration would be 21. If you would like to track multiple EMA's simultaneously, provide the emas in a comma separated list. So if you'd like to trade both the 8 and 21 5 min ema's at once, periods would be 8,21

**associate with ema setup**:

this parameter is for if you are running with an ema setup of the same minute as the filter. You can choose to associate the filter to the ema. So that if you are trading the 8 and 21 ema, the fact that the 8 ema crosses the first candle, does not mean that the 21 ema setup will cancel. If this is unchecked, the the setup will cancel upon any break of the first candle for any ema provided.

## Example

### Example 1

You have a bounce off EMA setup for the 5-min 8 EMA. You believe that if the EMA breaks the low of the 15-min 9:30 candle, that you should not go long anymore, and ignore the setup. That is the goal of this filter.

## Notes

We calculate the EMA based on when the market is open. If you use another platform and have pre market on, you might end up having a different EMA than us, since they might take into account pre market hours.

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on in TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

## See also

## Video

