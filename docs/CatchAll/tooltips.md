---
sidebar_position: 2
sidebar_label: "All tooltips"
tags: ["exit tactics", "setups", "entry tactics", "templates"]
---
# Tooltips

_This is a compilation of all tooltips from the original UI.  We will reorganize this and improve the content, but until then, the original text is here._





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
