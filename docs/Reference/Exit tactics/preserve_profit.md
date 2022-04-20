---
sidebar_position: 3
tags: ["Reference", "exit tactics", "preserve profit"]
---
# Preserve Profit Exit Tactic

## Overview

Once the position has realized profit, we begin to watch the position to make sure that overall pnl does not fall below a user provided amount. This tactic attempts to essentially salvage a trade if things go very against you once they were doing well.


## Parameters
The field activationProfitAmount, says to wait until the realized pnl becomes a certain amount before watching for a retrace to the profit amount. This is useful if you have tight resting orders. If you have your first resting order for $5 profit profit, and your preserve profit amount at $1 overall profit, it would be very unfortunate if your unrealized pnl hit just -$5 and forced a flatten. If you set the activationProfitAmount field to $15, it would wait till realized pnl has $15 before activating.

## Example
Let's say preserve profit is set to 1, and you have realized gains so far of $100. If you ever from there on have an unrealized loss of $99 (100 - 99 = 1), the position will flatten.

## Notes
Unlike [Loss Limit](loss_limit.md), you provide us 1, for us to watch for a gain of 1. Additionally, we check that the activationProfitAmount can never be less than the loss limit amount, or else you'd result in an automatic close as the loss limit amount will be true instantly.

## Video

