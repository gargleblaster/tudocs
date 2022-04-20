---
sidebar_position: 3
tags: ["Reference", "exit tactics", "atr trail"]
---
# ATR Trail Exit Tactic

## Overview

The ATR Trail exit tactic provides a trailing stop relative to the current ATR, or Average True Range, of the stock or underlying price. The user can define the parameters of the ATR calculation as well as the percentage of the ATR that will be utilized.

As the price changes and more candles are defined, the calculated ATR will be recalculated. The stop is then placed at the previous candle close minus the percentage of ATR selected(if short, the inverse of this). If the next calculated stop is lower that the current stop(higher if short), the stop remains at the current level.

## Parameters

**% of ATR**: This parameter defines the percentage of the calculated ATR that will be used. For example, if the ATR is currently one dollar, the user selects 50%, the stop will be placed 50 cents below the current price.

**Candles Back**: This parameter defines how many candles back from the current candle will be included in the ATR calculation.

**ATR Type**: This parameter defines the method used to calculate the ATR. Wilder is the most common of these methods. For more information about these formulas, take a look at this page:{' '} ATR Calculation Methods and Formulas

**ATR Candle Duration**: This parameter defines the candle duration and time unit with which the ATR calculation is made.

## Example

## Notes

## See also
[Candle Trail](candle_trail.md)
[MFE Retracement](mfe_retracement.md)

## Video

How to add an ATR trail (or modify it)
https://www.screencast.com/t/pGe3MGuq


