---
sidebar_position: 3
tags: ["Reference", "position tactics", "scaling in"]
---
# Scaling In Position Tactic

## Overview

This tactic attempts to add to the position as the underlying moves against you.

## Parameters

**QuantityBasisValues**: The quantity values, based on what Quantity Basis (dollars/quantity) that should be invested per break prices. For example, Let's say you want to cost average, 1000$ per entry, while the stock moves against you, on break prices of 100,99,98. Your QuantityBasis would be 1000$, and the QuantityBasisValues would be 1000,1000,1000.

**Break Prices**: The prices you'd to enter at. Let's say you believed strongly on support for AAPL at 450, but if it broke lower, you'd want to add to your position, every 50 cents lower. Your break prices would be: 449.5,449,448.5.

**NOTE**: the bounce price of 450 included in the "break prices" documentation is not included as one of the "break prices" provided to scaling in. That belongs in the bounce setup, with its appropriate entry tactic.

## Example

### Example 1

Let's say AAPL is trading at 449, and you believe it won't go higher than 450. Because of the volatility of the stock, you also think that it might get a bit of a push higher, before turning around, and you would like to cost average to get the best entry you can. This is where scalingIn is effective. You would use setup bounce at 450 (and goShort), have a market order once the setup is triggered, and then use this tactic to add to your short as the position runs higher at user-selected intervals and amounts.

## Notes

## See also

## Video

