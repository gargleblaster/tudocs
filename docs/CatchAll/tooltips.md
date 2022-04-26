---
sidebar_position: 2
sidebar_label: "All tooltips"
tags: ["exit tactics", "setups", "entry tactics", "templates"]
---
# Tooltips

_This is a compilation of all tooltips from the original UI.  We will reorganize this and improve the content, but until then, the original text is here._




## Setups:

### Orb:



#### params:



### Ad hoc:



### Bounce:



### Bounce EMA:



#### params:



### Break:



### Break EMA:



####    params:



###    Candle Break Type:



####    params:



###    Candle Pattern:



##

### Candle Trigger:



#### params:



### Conviction Candle:



#### parameters:



### Flag:





#### parameters:



## Entry Tactics:

### Candle Break:



#### params:



### Limit Order:

place a limit order once the setup has been achieved.

#### params:

**offset from Price**: The Offset from the price at the time of the break. If long and break occurred at 1, and the offset is 10%, the limit order will be placed 1.1. If short, it will be placed at .9.

**QuantityBasisValue**: the amount you'd like to invest based on the QuantityBasis (dollars, quantity) that you chose. So if you would like to make an investment of max 1000$, the quantity basis would be dollars, and the quantityBasisValue would be 1000$. Similarly, if QuantityBasis of Quantity was chosen, and you'd like to buy 5 contracts/shares, this param would be set to 5.

**limitPrice**: A hard limit price to purchase at. If you put in 1.05, the limit price on the entry order will be 1.05. NOTE: this setting overrides "offset from price". If both fields are filled out, this field will take precedence. Additionally, this tactic should only be used if you are confident you know what the correct price will be.

### Market Order:

place a market order once the setup has been achieved.

#### params:

**QuantityBasisValue**: the amount you'd like to invest based on the QuantityBasis (dollars, quantity) that you chose. So if you would like to make an investment of max 1000$, the quantity basis would be dollars, and the quantityBasisValue would be 1000$. Similarly, if QuantityBasis of Quantity was chosen, and you'd like to buy 5 contracts/shares, this param would be set to 5.

## Setup Filters:

### Time Of Day:

This will allow that trades only occur between the start hour and minute and the end hour and minute. Please note that the time is according to "military time". So instead of 2 pm, you would do 14:00. Ex: If Start Hour is set to 11, start Minute is set to 30, end hour is set to 15, end minute is set to 15, this will filter out all entries that trigger before 11:30 am, and after 3:15 pm.

### FTFC:

This is a filter that tracks full time frame continuity. This setup only allow trades in which all time frames you provide us are above the open if long, or below the open if short.

You choose these setups by manipulating the list that shows when you click the FTFC setup. "m" is for minute, "d" is for day, "w is for week, "M" is for month. The parameter candle represents the candle duration of the time frame. If you wanted to trade the 60 minute candle (starting from 9:30), you would type in 60 for the candle parameter, and click "m" as the timeUnit.

The red X button on the right will remove the associated timeFrame. The green plus beneath with add another timeFrame.

**EX**:

Let's say I want to trade AAPL, either long or short, but I only want to if the 1 hour, the 1 day, the 1 week, and the 1 month, all are the same color. I would enter the filter as: 60m, 1d, 1w, and 1m. If, when the entry tactic triggers, all of those time frames are above their respective open (the UI will show green), and the tradePlan is long, the trade will pass the filter. If even one is red, the filter will fail. The opposite is true for shorts. If the tradePlan is short, and all of those time frames are below their respective open, it will allow a trigger short. If even one time frame is green, the filter will fail.

**NOTE**:

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

### Price Intersects First Candle:

If the price intersects the low of the first candle of the day if long, or if the price intersects the high of the first candle of the day if short, cancel the setup.

**Ex**: You have a bounce off ema setup for the 8 5 min ema. You believe that if price breaks the low of the 15min 9:30 candle, that you should not go long anymore, and cancel the setup. That is the goal of this filter.

#### params:

**candleDuration**: the duration of the first 9:30 candle that you would like to track.

Below, Above, High, Low: configures what conditions must be met in terms of the candle to filter. For example, if the candleDuration is 2, Below is selected, and High is selected, we will only allow trades that occur when the current price is below open 2 minute candle High. If Low was selected instead of High, we will only allow trades below the candle low. If Above and High are selected, only trades above the 2 min candle high will pass the filter. Lastly, if Above and Low are selected, only trades above 2 min candle low will pass.

**NOTE**:

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

### Ema Intersects First Candle:

If the ema('s) intersects the low of the first candle of the day if long, or if the ema('s) intersects the high of the first candle of the day if short, cancel the setup.

**Ex**: You have a bounce off ema setup for the 8 5 min ema. You believe that if ema breaks the low of the 15min 9:30 candle, that you should not go long anymore, and cancel the setup. That is the goal of this filter.

#### params:

Below, Above, High, Low: configures what conditions must be met in terms of the candle to filter. For example, if the candleDuration is 2, Below is selected, and High is selected, we will only allow trades that occur when the current price is below open 2 minute candle High. If Low was selected instead of High, we will only allow trades below the candle low. If Above and High are selected, only trades above the 2 min candle high will pass the filter. Lastly, if Above and Low are selected, only trades above 2 min candle low will pass.

**first candle Duration**:

the duration of the first 9:30 candle that you would like to track.

**EMA candle Duration**:

the length of the minute of the ema you'd like to track. So if you were tracking the 8 5min ema, the candle duration would be 5. Similarly with 21 5min ema, the candle duration would be 21.

**periods**:

the period of the ema you'd like to track. So if you were tracking the 8 5min ema, the period would be 8. Similarly with 21 5min ema, the candle duration would be 21. If you would like to track multiple EMA's simultaneously, provide the emas in a comma separated list. So if you'd like to trade both the 8 and 21 5 min ema's at once, periods would be 8,21

**associate with ema setup**:

this parameter is for if you are running with an ema setup of the same minute as the filter. You can choose to associate the filter to the ema. So that if you are trading the 8 and 21 ema, the fact that the 8 ema crosses the first candle, does not mean that the 21 ema setup will cancel. If this is unchecked, the the setup will cancel upon any break of the first candle for any ema provided.

**NOTE**:

We calculate the ema based on when the market is open. If you use another platform and have pre market on, you might end up having a different EMA than us, since they might take into account pre market hours.

## Position Tactics:

### Scaling In:

This tactic attempts to add to the position as the underlying moves against you.

**Ex**: Let's say AAPL is trading at 449, and you believe it won't go higher than 450. Because of the volatility of the stock, you also think that it might get a bit of a push higher, before turning around, and you would like to cost average to get the best entry you can. This is where scalingIn is effective. You would use setup bounce at 450 (and goShort), have a market order once the setup is triggered, and then use this tactic to add to your short as the position runs higher at user-selected intervals and amounts.

#### params:

**QuantityBasisValues**: The quantity values, based on what Quantity Basis (dollars/quantity) that should be invested per break prices. For example, Let's say you want to cost average, 1000$ per entry, while the stock moves against you, on break prices of 100,99,98. Your QuantityBasis would be 1000$, and the QuantityBasisValues would be 1000,1000,1000.

**Break Prices**: The prices you'd to enter at. Let's say you believed strongly on support for AAPL at 450, but if it broke lower, you'd want to add to your position, every 50 cents lower. Your break prices would be: 449.5,449,448.5.

**NOTE**: the bounce price of 450 included in the "break prices" documentation is not included as one of the "break prices" provided to scaling in. That belongs in the bounce setup, with its appropriate entry tactic.

### Add To Winner:

This tactic attempts to add to the position as the underlying confirms your trade.

**Ex**: Let's say AAPL is trading at 451, and you believe it will fall if it breaks 450. Because of the volatility of the stock, you are afraid that there might be a bit of a headfake at 450, and you would short just as the stock turns around, resulting in a quick loss. You would rather continue to add to your investment size as the stock moves in your favor, and only take the full position once AAPL has broken a lower barrier. This is what AddToWinner is supposed to accomplish. This tactic would add to your short as the positions runs lower at user-selected intervals and amounts.

#### params:

**QuantityBasisValues**: The quantity values, based on what Quantity Basis (dollars/quantity) that should be invested per break prices. For example, Let's say you want to cost average, 1000$ per entry, while the stock confirms your thesis, on break prices of 100.25,100.5,100.75. Your QuantityBasis would be dollars, and the QuantityBasisValues would be 1000,1000,1000.

**Break Prices**: The prices you'd to enter at. Let's say you believed strongly on support for AAPL at 450, and that if it broke, it could lead to further movement downward. Every 50 cents, you'd like to add to your position. Your break prices would be: 449.5,449,448.5.

**NOTE**: the break price of 450 included in the "break prices" documentation is not included as one of the "break prices" provided to scaling in. That belongs with the break setup, with its appropriate entry tactic.

## Exit Tactics:

### Underlying Price Trail:

This tactic sets a trail on the underlying stock. As the trade moves in the direction of the tradePlan (long/short), the trail adjusts in that direction.

**Ex**: Let's say AAPL is at 449.75, and you want to buy on a break of 450. Once AAPL loses momentum though, you would want to sell it. This tactic could accomplish that goal. You would set a trail of let's say 25 cents on AAPL. As the stock continues to go higher, the trail adjusts higher with it, so that if AAPL hits 450.5, the trail, which originally was at around 449.75 (break price of 450-.25), will now adjust to 450.25. Once AAPL hits 450.25, the position would flatten.

**NOTE**: The main use of this tactic is if you are trading options, but want to have a trail set on the underlying, and not the position.

### Underlying Price Exit:

Underlying Price Exit is an exit tactic used for adding price targets on the underlying price. In a stock trade, this will simply add orders at the defined price levels. For an option trade, it will place targets on the underlying price that can be modified in the tactic panel after creation or entry.

#### Parameters

**Price | Pct. per Level**: Each level is defined by a price and percentage pair. The percentage determines what percentage of the current position size should be closed at the defined price level. You must add at least one of these pairs to use this tactic. It is advised that you consult the current underlying price to ensure that all levels are above the current price(below for a short trade).



### Underlying Break Price/Break Price:

Flattens a trade plan by breaking through a support level. If long, will need to exceed below. If short, will need to exceed above.

**Ex**: You have a position in FB, and the stock is at 300.5. Your candle trail is set for 299, but your pretty confident that on a break of 300 you should flatten. You would enter 300 for this tactic in order to accomplish that.

#### params:

**prices**: provide a comma separated list of prices (100,99,98). The way the tactic interacts with the parameter is as follows: you provide us a list of potential support prices. At creation of the exits, we find the nearest price below the current price, and set that as price to break. If no prices are possible (ie if long, all support prices are above current price. If short, all prices are below current price), then the tactic is ignored. So if you were trading fb, and provided break prices: 302.5,300,297.5, and the current price is 300.5, 300 will become the break price.

**NOTE**:

Ideally, this tactic should be added after the position is taken, and not via the trade plan form, once you know what the current price is. In the above example, it would be quite frustrating if a position exited immediately bc of a support price at 300, and the current price when entering into the position was 300.02.


### MFE Retracement

[MFE Retracement](/TradePlans/ExitTactics/mfe-retracement.md)

### Candle Magnitude Exits

[Candle Magnitude Exits](/TradePlans/ExitTactics/exit-tactics.md#candle-magnitude)
