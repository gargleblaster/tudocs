---
sidebar_position: 3
tags: ["Reference", "exit tactics", "candle trail"]
---
# Candle Trail Exit Tactic

## Overview

This exit tactic sets a candle trail on a position.  That is, if the previous candle is breached, the position will be closed.  This is similar to a trailing stop, except that the stop is moved only when candles of the specified duration close.

If the position direction is **Long**, and the current price breaches the **previous candle low**, the position will flatten.

If the position direction is **Short**, and the current price breaches the **previous candle high**, the position will flatten.



## Parameters
![candletrailconfig.png](/img/candletrailconfig.png)
> **Candle Duration:**  The duration of the candle you would like to track, e.g. 5-minute candles.
>
> **Break By:**  The amount in cents that the previous candle's high/low must be broken by to trigger a stop.  Defaults to 0.  If long and the previous candle low was 100, and this field is set to .1, it will wait till a break of 99.9 to flatten.
>
> **Pre/Post Data:** If you enter a position before the first candle of the day completes, this determines whether to use pre/post market data to generate the first stop, or whether to wait for the first candle to complete.  
>For example, let's say you have 5 min candles, and you enter a position at 9:33, ie, before the first candle appears. If this is set to false, it will wait till 9:35 for the first candle to set the trail. If it is true, it will use the last candle leading up till 9:30 for the candle trail.


## Example

### Long Example
![candletraildiagram.png](/img/candletraildiagram.png)

### Short Example
![candletrailshortdiagram.png](/img/candletrailshortdiagram.png)

## Notes

When we set the trail, we get both the current candle and the previous candle. If you are long and the current candle low is lower than the previous candle's low, or if you are short and the current candle high is higher than the previous candle's high, we use the current candle to set the trail.

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

## See also

## Video



