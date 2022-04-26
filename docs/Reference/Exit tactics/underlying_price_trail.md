---
sidebar_position: 3
tags: ["Reference", "exit tactics", "underlying price trail"]
---
# Underlying Price Trail Exit Tactic

## Overview

This tactic sets a trail on the underlying stock. As the trade moves in the direction of the position, whether long or short, the trail adjusts in that direction.

The purpose of this tactic is when you are trading options, you are able to set up a trailing stop based on the movement of the underlying stock, rather than on the price of the option you are trading.

## Parameters

## Example
Let's say AAPL is at 449.75, and you want to buy on a break of 450. Once AAPL loses momentum though, you would want to sell it. This tactic could accomplish that goal. You would set a trail of let's say 25 cents on AAPL. As the stock continues to go higher, the trail adjusts higher with it, so that if AAPL hits 450.5, the trail, which originally was at around 449.75 (break price of 450-.25), will now adjust to 450.25. Once AAPL hits 450.25, the position would flatten.

## Notes

Because this exit tactic only applies when trading options, it does not appear in the Trade Plan form when the Instrument is set to trade stock.

## See also

## Video



