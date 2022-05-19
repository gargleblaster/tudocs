---
sidebar_position: 3
tags: ["Reference", "exit tactics", "ratchet bracket"]
---
# Ratchet Bracket Exit Tactic

## Overview

This tactic creates brackets of closes around a position. As the position moves and hits targets of the bracket, the bracket shifts.

| Ratchet Bracket in Action                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <iframe width="250" height="250" src="https://curious-cassata-b5efed.netlify.app/ratchetbracket.html" title="Candle Trail" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> | If you like OCO Brackets, you're going to love Ratchet Brackets.  Ratchet Brackets are essentially a series of dynamic OCO Brackets that ratchet up (in the case of long trades), as each target is hit.<br/><br/>You have control over the size of the brackets and how much of your position to close at each target.<br/><br/>Ratchet Brackets let you take profits and protect your gains.  You can also ratchet up your stops without taking profits, much like a trailing stop that moves in increments, rather than tick by tick. |


## Parameters
**Mode**:

the mode that you would like to configure the Ratchet Bracket brackets. With equal interval, for each bracket, the target, stop, and qty are the same.

**target**:

The target amount that signals to advance to the next bracket. The boundary of the bracket that is in the direction of the position (top if long, bottom if short) become the resting order prices. If the ratchet bracket trail has begun, this price signals to adjust the trail to the next bracket. If Qty basis is either percent or quantity, then this number should be entered as a number of cents. It would be saying to place resting orders at 10 cent increments. If you choose profit, then this should number should entered as a dollar amount (such as 20$ brackets). More on the profit mode below...

**stop**:

The stop that signals to flatten the position. This is set for each bracket, and adjusted in the direction of the position upon each order fill.

If Qty basis is either percent or quantity, then this number should be entered as a number of cents. It would be saying to flatten at 10 cent below whatever the target of the previous bracket was.

If you choose profit, then this should number should entered as a dollar amount (such as 20$ brackets). More on the profit mode below...

**quantity basis value per bracket**:

The qty basis value that should be used per bracket. For example, if you set qtyBasis to PERCENT, and this to 10%, if your position qty is 10, each bracket will have a resting order of qty 1 (10*.1). If you set qty basis to quantity, and set this field with a value of 2, it will sell 2 qty per bracket. With profit, you supply us the number of brackets. more on that below...

**trail quantity basis value per bracket**:

Let's say you have position qty of 10, and you would like to only have 8 brackets, and leave 2 to trail. If your qty basis is profit or percent, You would set this field to .2. If it is quantity, you would set this to 2. This works the same as way as any bracket does, except when the target bracket hits, instead of placing a resting order, the target price and stop price is adjusted up another bracket. Let's say you are long, all your resting order orders are filled, the last order price was at 100, the target dollars is at .1, and the stop cents is .2. The first target price would be 100.1, and the stop 99.8. If 100.1 is hit, then the next target price becomes 100.2, and the stop 99.9. If 99.9 would then be hit, the position would flatten.

**qtyBasis**:

define if bracket qty should be calculated through qty, profit, or through percentage. If QUANTITY is selected, and you set quantityBasisValue to 2, then each bracket will place a resting order of qty 2. if PERCENT is selected, position qty is at 10, and quantityBasisValue is at .2, then each bracket will place a resting order of qty 2. Profit mode is explained below...

#### PROFIT MODE:

We felt that this required its in own explanation, as it very powerful and quite nuanced. An extremely powerful part of Trade Unafraid is option management. However, you don't always know what the price of the option will be. It hurts to be stuck taking small 10 cent gains on 5$ options, or hoping for a huge move so your 1$ options make 25$. This would also be an extremely powerful tool in other circumstances that you don't know what the exact qty will be. The way this tactic works is as follows: you provide a target amount of profit you'd like to make per bracket, a stop amount to lose, and the number of brackets you'd like to create. Let's say you are trading long a 5$ option with 5 qty, in other words your cost basis is at 2500. You set up ratchet bracket profit mode as follows: 50$ target, 100$ stop, 2 brackets, and .2 percent trail qty. The setup would be configured as follows:

An order with qty 2 at 5.25 limit, another order at qty 2 at 5.5 limit (leaving a trail qty of 1) would be placed.

You would have a stop placed at 4.8. If the order was filled at 5.25, the stop would ratchet up to 5.05.

Let's say instead though, that the option management chose a 1$ option, so you would have 25 qty, creating a cost basis of 2500. We would be prepared and the setup would be configured as follows:

An order with qty 10 at 1.05 limit, another order at qty 10 at 1.1 limit (leaving a trail qty of 5) would be placed.
You would have a stop placed at .96. If the order was filled at 1.05, the stop would ratchet up to 1.01.

**NOTES ON THIS MODE**:
1) Although the tradeplan view is specified in profit amounts, the soft order for the stop is placed in cents. The thinking is that if you wanted to quickly adjust the stop price, it be much easier to think in terms of how many cents do I want to adjust to, rather than what loss amount will equal a certain price.
2) the stop cents (relative to previous target price), stays the same as the stop cents that are calculated when we first see the position. As an example, let's say your option position qty of 5 results in a stop cents of 20 in order to hit a 100$ loss, and your first bracket of 2 qty is filled, leaving you with a position with 3 qty. Although a 20 cent move will now only result in a 60$ loss (and a 33 cent move for 100$), we are assuming that you would rather have tighter stops and the simplicity of knowing the stop will be 20 cents every bracket.

## Example

Let's say you open an AAPL long position at 450 with qty of 10. You would like to create resting orders at certain intervals that close as price moves in your favor, and flatten if the position hits the bottom of the bracket. As each resting order is hit, the stop is "ratcheted up". So let's say we'll define our target as 10 cents per bracket, and our stop is as 20 cents per bracket, and we'd like to sell 1 qty as each target is hit. The tactic will instantly set up ten close orders at ten cent intervals, 450.1, 450.2... all the way up until 451 (in which your position qty of 10 will fill). The first stop is set at 449.8 (450-.2), and with each fill, it is adjusted to the new bottom of the bracket. So when the 450.1 fills, it is adjusted to 449.9. When 450.2 fills, it is adjusted to 450, and so on.

## Notes

## See also
[Grab Cents](grab_cents.md)

[Candle Magnitude Exit](candle_magnitude.md)

## Video

Ratchet Brackets

https://www.youtube.com/watch?v=JhJfpjeGvAc&ab_channel=TradeUnafraid

Ratchet Bracket trailing stop

https://www.youtube.com/watch?v=939XgSg8URc&ab_channel=TradeUnafraid


