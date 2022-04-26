---
sidebar_position: 3
tags: ["Reference", "position tactics", "add to winner"]
---
# Add To Winner Position Tactic

## Overview

This tactic attempts to add to the position as the underlying confirms your trade.

## Parameters

**QuantityBasisValues**: The quantity values, based on what Quantity Basis (dollars/quantity) that should be invested per break prices. For example, Let's say you want to cost average, 1000$ per entry, while the stock confirms your thesis, on break prices of 100.25,100.5,100.75. Your QuantityBasis would be dollars, and the QuantityBasisValues would be 1000,1000,1000.

**Break Prices**: The prices you'd to enter at. Let's say you believed strongly on support for AAPL at 450, and that if it broke, it could lead to further movement downward. Every 50 cents, you'd like to add to your position. Your break prices would be: 449.5,449,448.5.

**NOTE**: the break price of 450 included in the "break prices" documentation is not included as one of the "break prices" provided to scaling in. That belongs with the break setup, with its appropriate entry tactic.

## Example

### Example 1

Let's say AAPL is trading at 451, and you believe it will fall if it breaks 450. Because of the volatility of the stock, you are afraid that there might be a bit of a headfake at 450, and you would short just as the stock turns around, resulting in a quick loss. You would rather continue to add to your investment size as the stock moves in your favor, and only take the full position once AAPL has broken a lower barrier. This is what AddToWinner is supposed to accomplish. This tactic would add to your short as the positions runs lower at user-selected intervals and amounts.

## Notes

## See also

## Video

