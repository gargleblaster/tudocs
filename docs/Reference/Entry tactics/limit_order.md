---
sidebar_position: 3
tags: ["Reference", "entry tactics", "limit order"]
---
# Limit Order Entry Tactic

## Overview

Enters a position using a limit order, following the successful triggering of a setup.

## Parameters

**offset from Price**: The Offset from the price at the time of the break. If long and break occurred at 1, and the offset is 10%, the limit order will be placed 1.1. If short, it will be placed at .9.

**QuantityBasisValue**: the amount you'd like to invest based on the QuantityBasis (dollars, quantity) that you chose. So if you would like to make an investment of max 1000$, the quantity basis would be dollars, and the quantityBasisValue would be 1000$. Similarly, if QuantityBasis of Quantity was chosen, and you'd like to buy 5 contracts/shares, this param would be set to 5.

**limitPrice**: A hard limit price to purchase at. If you put in 1.05, the limit price on the entry order will be 1.05. NOTE: this setting overrides "offset from price". If both fields are filled out, this field will take precedence. Additionally, this tactic should only be used if you are confident you know what the correct price will be.

## Example

## Notes

## See also

## Video

