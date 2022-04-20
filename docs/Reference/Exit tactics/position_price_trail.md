---
sidebar_position: 3
tags: ["Reference", "exit tactics", "position price trail"]
---
# Position Price Trail Exit Tactic

## Overview

This tactic sets a trail on the position being traded, whether stock or option. As the trade moves in the direction of the position, whether long or short, the trail adjusts in that direction.


## Parameters

## Example
Let's say AAPL is at 449.75, and you want to buy on a break of 450, in options. Once the option loses 20 cents from its high, you would want to sell it. This tactic could accomplish that goal. You would set a trail of let's say 25 cents on AAPL. As the option continues to go higher, the trail adjusts higher with it. If you bought the option for $1, the trail would start with the stop at $0.75. If the option price moves to $1.5, the trail will adjust to $1.25. Once the option falls to $1.25, the position would flatten.

## Notes
The important distinction with this exit tactic is that it is trailing the price of the actual position being traded.  If you are trading shares, then the price of those shares is used to trail the stop.  If you are trading options, again, the price of those options is used to trail the stop.

## See also

## Video



