---
sidebar_position: 3
tags: ["Reference", "exit tactics", "loss limit"]
---
# Loss Limit Exit Tactic

## Overview

Sets the max loss you are willing to take on a position before you exit.  If this is set to $200, then once your positions overall pnl reaches -200, we will flatten the position.


## Parameters
**mode**: percent (%) or amount ($). If you are in percent mode, set the amount value to a percentage, let's say 10%. If your cost basis is $2500, we will translate that to a $250 stop loss. If you use amount, you provide us the max dollar amount to lose. In the above example, you would set the amount field to $250.

**NOTE**: You provide us 200, not -200, for us to watch for a loss of 200. 

**NOTE**: Once in a trade, if you have selected percent mode, this tactic shifts internally to amount mode. Meaning that let's say you have a position with cost basis of $2500, and a loss limit percent of 10%.  Once in an open position, the loss limit will be $250. If you want to decrease the loss limit from that point forward, you would not change from 10% to 8%, but rather from $250 to $240. It is much easier on the user to not have to think in terms of percentage at this point, and rather to go back to dollars.

## Example

## Notes

## See also

## Video



