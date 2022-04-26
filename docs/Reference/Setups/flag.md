---
sidebar_position: 3
tags: ["Reference", "setups", "flag"]
---
# Flag Setup

## Overview

This is a setup that attempts to trigger the entry tactics only once a sequence of candles have been completed. If long, the sequence is as follows: candle break high, candle fail to break high, candle break high. If short, the sequence is as follows: candle break low, candle fail to break low, candle break low. If you are unsure about direction, both goLong and goShort can be applied, and it will track each sequence separately.

## Parameters

**fail on first candle**:

It could be your preference that the second candle has to break the first candle's high (if long) in order to launch the setup, or you could be comfortable waiting until a high is finally achieved. If this is checked, it will terminate the tradePlan if the high is not broken. If unchecked, it will sit and wait.

**wait until current candle closes**:

If this is checked, then we will look for a break of previous candle. If unchecked, then we will wait for break of current candle.

wait until current candle closes _unchecked_ example:

Let's say it is currently 9:35:30 seconds, and you see the candle that began at 9:34 (9:34-9:35) was a spike, and therefore you'd like to apply a flag based on that candle. You would leave this uncheck, and when the 9:35-9:36 candle comes in at 9:36, we will look to see if that candle broke the 9:34 candle, and then proceed to the next candle sequence.

wait until current candle closes _checked_ example:

Let's say it is currently pre-market. You would like to trade a flag based on the 9:30 5min candle, but don't want to sit there waiting till 9:36 (if trading 5 minute candles) to enter this system . You would check this field, and once the 9:30 candle completes, it will, with the next candle, look for a break.

**candleDuration**:

the duration of the candles that you are running this setup on (1min, 5min...)

**breakBy**:

The amount of leniency provided at the edges of the candles. If try to break a candle, the price to break to achieve this sequence would be high/low +/- breakBy. So if high is 141, low is 139, and breakBy is .1, the price to break for high would be 141.1, for low 138.9. When you are attempting to fail to break the high, it gives more room to not break the high. So if, with the above example, price reached 141.05 and then showed resistance, the candle would achieve the sequence of fail to break high.

**NOTE**:

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

## Example

## Notes

### Explaining the sequence:

This is an example of a series of candles to achieve the break long, with some commentary to explain some of the nuances:

firstCandle: open: 100, high: 100.2, low: 99.8, close: 100.

Once this candle arrives, it will start to look for a break high of this candle. Whether breaking the first candle is a must is configurable (check param fail on first candle). You can elect that the tradePlan is terminated if this is not achieved, or whether it waits for a candle to actually break.

secondCandle: open: 100, high: 100.3, low: 99.8, close: 100.2.

In this scenario, the second candle breaks the first candle, and we will continue to the next sequence, fail to break high. In this sequence, we are waiting for a candle that does not break its previous high.

thirdCandle: open: 100.2, high: 100.4, low: 100.1, close: 100.3.

The next candle that comes in broke its previous high. Therefore we will wait for next candle to not break the high.

fourthCandle: open: 100.3, high: 100.3, low: 100.1, close: 100.2.

This candle does not break its previous high (100.4 versus 100.3). We move onto the next sequence, which is a break high. Once this break high is achieved, we will trigger the entry tactics.

fifthCandle: open: 100.2, high: 100.25, low: 100.1, close: 100.2.

The high is not broken, so our price to break is adjusted down from 100.3 to 100.25. If 100.3 had been passed, the entry tactics would have been triggered.

sixthCandle

If during this candle price breaks 100.25, we will trigger entry tactics.

## See also

## Video

