---
sidebar_position: 3
tags: ["Reference", "setups", "orb"]
---
# Opening Range Breakout Setup

## Overview

This setup is for trying to play an opening range breakout. If you are long, we place a trigger on the break of the first candle high. If short, we place a trigger on the break of the first candle low. The user defines if it is the 5min candles, 15 min candles, etc. This setup specifically watches for the first candle of the day, and never updates after.

## Parameters

**Candle duration**: If you want to trade ORB based on the first 5 min candle, you would enter "5" in this field.

**Break by**: If you want to give a little bit of space before triggering, set this field. For example, let's say the first candle high was 100. If you only want to enter the trade if the stock reaches 100.05, you would set this field to .05.

**Note**: validation is applied. If you try and enter an orb setup long, and the stock is already above the first candle high, the trade plan will be cancelled.

## Example

## Notes

## See also

## Video


