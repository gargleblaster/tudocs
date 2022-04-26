---
sidebar_position: 3
tags: ["Reference", "setups", "break candle type"]
---
# Break Candle Type Setup

## Overview

This is a setup that looks for a specific type of candle, and looks to break this candle. Whether that means your goal is break the last shooter or the last red candle, this is what this setup hopes to achieve. At the moment, we have only implemented breaking the last red or green candle. If your tradePlan is configured for a long trade, you are attempting to break the high of the candle, if short, you are attempting to break the low of the candle.

## Parameters

**CandleType**: The type of candle you would like to trade. Right now, LAST is the only available option, representing trading the last candle of a certain color.

**CandleColor**: The color of the candle you would like to trade. Right now, there is red or green. By selecting candleType of LAST and color candle of red, you can configure the setup to look to only trade based on the last red candle.

**candleDuration**: the duration of the candle you'd like to track.

**breakBy**: the amount the previous candle high/low needs to be broken by to enter. If long and the previous candle high was 100, and this field is set to .1, it will wait till a break of 100.1 to enter.

**filterForToday**: Sometimes, you might enter this tradePlan before a red candle has occurred during the day (say if you enter the tradePlan before the open). Our default behavior will be to look for the last red candle from the day prior, and set a trigger based on that. This filter will ensure that you only set a trigger based on today's candles.

**Note**:

If when you attempt to use this tactic, the current price is above the candle that you are tracking if long, or below the candle if short, the software will know to wait until the next time an appropriate candle occurs. This means you can leave this strategy running all day by unchecking the field "Restart System Once Position Has Flattened". Additionally, please note that if the trade is cancelled for other reasons, such as a failed option spread when trying to trade, or a failed filter, the trade plan will be terminated.

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

## Example

## Notes

## See also

## Video

