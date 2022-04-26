---
sidebar_position: 3
tags: ["Reference", "setups", "bounce"]
---
# Bounce Setup

## Overview

Triggers entry tactics on a bounce off a price.

Ex: If AAPL is currently at 451, we can buy on a bounce at 450. If AAPL is currently at 449, we can short on a bounce at 450.

**NOTE**: we attempt to validate the sensibility of the bounce, by terminating the trade plan if the bounce has already passed. For example, if you try to go long on a bounce at 450 when AAPL is at 449, the trade plan will be cancelled.

## Parameters

**Price to Bounce**: Enter the price where you expect the stock to bounce, i.e. reverse direction.  The direction of the trade matters here.  If the current price is 99, and you enter 100 as the bounce price, then your trade plan must be configured to go short.  If it were expected to go long, then it would make no sense for price to bounce at 100 from below.

![bounce.png](/img/bounce.png)

## Example

## Notes

## See also

## Video

