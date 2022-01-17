---
sidebar_position: 5
tags: ["getting started"]
---
# Soft Orders
At this point, you may be wondering how Trade Unafraid is able to accomplish what it does, allowing your Trade Plan to have so many ways to exit the same position.  If a broker won't accept this, how does it work?  Part of the magic lies in the use of soft orders.

In contrast to soft orders, there are resting orders.  A resting order is a stop loss or limit order that has been transmitted to the exchange.  It is resting there, waiting to be filled when price moves to it.  You don't have to do anything, because your order is already there waiting.

Soft orders are different, because they are not resting in the exchange.  Instead, they are resting in Trade Unafraid, which is watching every quote, every tick, every trade, waiting for price or some other criterion to trigger sending an order.

So TU behaves basically the way the exchange does, looking for the moment when your order becomes executable.  The difference is that the exchange has rigid rules about what it will accept.  Trade Unafraid's soft orders are far more flexible.



---


Soft Orders are the key to Trade Unafraid's unique power.  Your broker won't let you do what TU does, because they only accept Resting Orders, which are market, limit, or stop orders which are sent to the exchange as executable orders.  They will not accept, for example, closing orders that exceed the quantity of your position.  The most exotic thing they will do is OTO (one triggers other) and OCO (one cancels other) orders.

TU, on the other hand, uses soft orders which can co-exist, even though they would be conflicting from your broker's perspective.  So you can have an exit if the low of the prior candle gets broken, as well as an exit if your profitable position is about to turn into a loser, as well as if price reverses and retraces the prior candle by 50%, etc.  Your broker would not let you have exit orders at multiple levels that add up to more than the quantity you hold.  But TU has no problem juggling these soft orders.  You can also close your option position based on price action of the underlying stock, which, again, is not something most brokers are willing to handle.
