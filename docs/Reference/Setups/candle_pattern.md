---
sidebar_position: 3
tags: ["Reference", "setups", "candle pattern"]
---
# Candle Pattern Setup

## Overview

This setup allows you to watch for a pattern of candles, and trigger if the pattern is achieved. If you want to trade the first inside candle, and then break high, you would tell the software to look for an INSIDE CANDLE, and then a BREAK HIGH. When the break high is hit, the entry tactics will trigger.

:::tip The Strat

For traders interested in trading Rob Smith's The Strat, the Candle Pattern Setup is the one you can use to automate The Strat.

:::

## Parameters

## Example

## Notes

###    Candle definitions:

**INSIDE CANDLE (1)**: A candle in which the high and low are within the previous candle. Let's say candle1 has a high of 101 and a low of 99. If candle 2 has a high of 101 or less, and a low of 99 or more, it is an inside candle. If it has a high of 101.1 and a low of 99.2, it is not an inside candle.

**OUTSIDE CANDLE (3)**: A candle in which the high and low extend past the previous candle. Let's say candle1 has a high of 101 and a low of 99. If candle 2 has a high of more than 101, and a low of less than 99, it is an outside candle. If it has a high of 101.1 and a low of 99, it is not an outside candle.

**BREAK HIGH (2u)**: A candle in which just the high of the previous candle is broken. If the low is also broken, this is not considered valid. Let's say candle1 has a high of 101 and a low of 99. If candle 2 has a high of more than 101, and a low of 99 or more, it is a break high candle. If it has a high of less than 101, or a low of less than 99, it is not a break high candle.

**BREAK LOW (2d)**: A candle in which just the low of the previous candle is broken. If the high is also broken, this is not considered valid. Let's say candle1 has a high of 101 and a low of 99. If candle 2 has a low of less than 99, and a high of 101 or less, it is a break low candle. If it has a low of more than 99, or a high of more than 101, it is not a break low candle.

**FAIL TO BREAK HIGH (fbh)**: A candle in which the high of the previous candle is not broken. Let's say candle1 has a high of 101. If candle 2 has a high of less than 101, it is a fail break high candle. If it has a high of more than 101, it is not a break high candle.

**FAIL TO BREAK LOW (fbl)**: A candle in which the low of the previous candle is not broken. Let's say candle1 has a low of 99. If candle 2 has a low of more than 99, it is a break low candle. If it has a low of less than 99.

**BREAK CANDLE (2)**: This is to look for a break of either the high or low of previous candle. This can only be added as the last sequence in a pattern. So for example, you can configure a 1-2, and this will look for an inside candle, and enter the position on either the break of the high or the break of the low of the previous candle

**Note**:
1) The first sequence is set to keep retrying until the first sequence is achieved.
2) If the pattern fails, the sequence will be restarted. So if you are looking for a 2d-1-2u setup, and on sequence 2u the pattern fails, we begin again at 2d.
3) There is some "look back" functionality to this setup if a sequence fails. For example, if you are looking for a 2d-1-2u setup, and while you are at sequence "1", the next candle is a 2d candle instead, the tradePlan will recognize that the 2d was achieved, and keep looking for a "1".

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on in TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

The notion of 1's, 2's, and 3's comes from Rob Smith's The Strat. The Strat has many resources and a very active community. Refer to https://twitter.com/RobInTheBlack and https://twitter.com/search?q=%23TheStrat&src=hashtag_click to learn more.

## See also

## Video

