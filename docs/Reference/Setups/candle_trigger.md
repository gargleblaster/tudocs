---
sidebar_position: 3
tags: ["Reference", "setups", "candle trigger"]
---
# Candle Trigger Setup

## Overview

Triggers based on the break of a previous or current candle. If the Trade Plan Direction is Long, this setup will trigger on the break of a candle high. If the Trade Plan Direction is Short, this setup will trigger on the break of a candle low.

:::tip Long, Short, or Both

Trade Plans can be configured such that Long and Short are both active at the same time.

:::

## Parameters

**timeUnit**: determine the time unit of the candle you'd like to trade, between minutes, days, weeks, and months. If you choose day and click current, you are looking for a break of the current day's candle. If you choose weeks and set candles back to 1, you are looking for a break of last week's candle.

**candlesBack**: # of candles back to determine which candle you'd like to have the break occur on. For example, if you select 0 and days, you are looking for a break of today's candle. If you select 1 and weeks, you are looking for a break of last week's candle. A last example is if you select 2 and months, in which you would look for a break of the candle occurring 2 months ago. If you select minutes, you must choose the previous candle.

**candle duration**: the duration of time unit's candle. If you'd like 15 minute candles, set this to 15. If you want 3 day candles, set this to 3.

**validate candle**: With most tactics, we apply validation to check if the setup is possible. For example, we reject a bounce setup if the price has already passed the bounce price. Or with a candle break entry tactic, we reject the setup if you are long, and price is already above candle high. Here, we provide you the option to choose whether you want to do that. It might be your preference to go right into entry tactics if the current has already passed yesterday's low/high.

**breakBy**: the amount the previous candle high/low needs to be broken by to enter. If long and the previous candle high was 100, and this field is set to .1, it will wait till a break of 100.1 to enter.

**NOTE**:

If time unit minutes are selected, then the tactic will behave like the entry tactic candleBreak, in that it will update the trigger with each incoming candle. For example, let's say you are long and trading 15 minute candles. The first high comes in at 100. If the high is never broken, and the next 15 min candle only has a high of 99.5, the trigger will be adjusted to 99.5.

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on in TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

## Example

## Notes

## See also

## Video

