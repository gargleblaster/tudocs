---
sidebar_position: 3
tags: ["Reference", "exit tactics", "underlying break price"]
---
# Underlying Break Price Exit Tactic

## Overview

The Underlying Break Price Exit Tactic is a stop loss that flattens a trade plan by breaking through a support level. If long, it is triggered when the underlying price breaks below the specified level. If short, it is triggered when the underlying price breaks above.

## Parameters

**prices**: provide a comma separated list of prices (100,99,98). The way the tactic interacts with the parameter is as follows: you provide us a list of potential support prices. At creation of the exits, we find the nearest price below the current price, and set that as price to break. If no prices are possible (ie if long, all support prices are above current price. If short, all prices are below current price), then the tactic is ignored. So if you were trading fb, and provided break prices: 302.5,300,297.5, and the current price is 300.5, 300 will become the break price.

## Example

### Example 1

You have a position in FB, and the stock is at 300.5. Your candle trail is set for 299, but you are fairly confident that on a break of 300 you should flatten. You would enter 300 for this tactic in order to accomplish that.

## Notes

Ideally, this tactic should be added after the position is taken, and not via the trade plan form, once you know what the current price is. In the above example, it would be quite frustrating if a position exited immediately because of a support price at 300, if the entry price turned out to be 300.02.

## See also

## Video



