---
sidebar_position: 3
tags: ["Reference", "entry tactics", "candle break"]
---
# Candle Break Entry Tactic

## Overview

Enters a position upon the break of the trigger candle, following the successful triggering of a setup. Will go long on the break of trigger candle high, and short on the break of the trigger candle low. 

## Parameters

**candleDuration**: the duration of the candle you'd like to track.

**QuantityBasisValue**: the amount you'd like to invest based on the QuantityBasis (dollars, quantity) that you chose. So if you would like to make an investment of max 1000$, the quantity basis would be dollars, and the quantityBasisValue would be 1000$. Similarly, if QuantityBasis of Quantity was chosen, and you'd like to buy 5 contracts/shares, this param would be set to
5.

**wait until current candle closes**: determine which candle to set the triggers based on.

wait until current candle closes _unchecked_: set the triggers based on the previous candle.

Ex: Let's say that the bounce occurs at 10:27. We will use the high from the candle beginning at 10:20 (10:20-10:25) to determine the high to break.

wait until current candle closes _checked_: set the triggers based on the current candle. We wait for the candle to complete, and then set the triggers.

**Ex**: Let's say you want to trade a fed announcement at 2 pm using 1 minute candles. If you enter this tactic at any time between 2:00 and 2:01, it will wait for the 2 pm candle to complete and set the triggers based on that candle. Once it is 2:01, the tactic will activate, and look for a break of the 2 pm candle. Similarly, let's say you want to trade a break of AAPL at 500, but you want confirmation of the break first. You can use a candle break entry tactic, with the trigger candle set to current. It will wait for the candle in which the break occured to complete, and only enter once it has broken that candle.

**breakBy**: the amount the previous candle high/low needs to be broken by to enter. If long and the previous candle high was 100, and this field is set to .1, it will wait till a break of 100.1 to enter.

**NOTE**:

validation is applied. If you set triggerCandle to previous try go long and the current price is above previous candle high (ie which would automatically set the order), we cancel the tradingSystem

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on in TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

## Example

### Example 1
Let's say you are confident that AAPL will bounce at 450. However, you only want to buy with confirmation that the bounce is actually happening, rather than buying as AAPL continues to fall below 450. Once AAPL hits 450, the bounce setup trigges. Let's say the previous candle was o: 450.5, h: 450.75 l :450.25, c: 450.5. Upon the break of 450.75, this Entry Tactic will place a market/work Order. As the following candles come in, the break high trigger will adjust lower. So if the current candle ends up having a high of 450.25, the high to break will adjust to 450.25. The same is true with short, except that it looks at candle low and adjusts upwards.  In this way, your trade will not enter until there is some confirmation in your intended direction.

## Notes

## See also

## Video

