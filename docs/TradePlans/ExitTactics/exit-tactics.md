---
sidebar_position: 3
tags: ["exit tactics"]
---
# Exit Tactics


Exit tactics are a vital part of crafting a successful trade plan with Trade Unafraid. These tactics define how and under which conditions your trade plan will close your position or a portion of your position. Becoming familiar with each of these tactics will prove invaluable in your journey as a successful trader using the Trade Unafraid platform. Below you will find a detailed explanation of each tactic along with some helpful examples.
![exittacticempty.png](/img/exittacticempty.png)
To add a tactic to your trade plan, select it from the dropdown and push the **add** button to add it to the trade plan. A tactic is active if it is visible in the trade plan form; to remove the tactic, simply click on the red **x** in the top right corner. A trade plan can have multiple exit tactics, and they will all function independently. Even though the combination of all exit tactics may account for many times the actual quantity of your position, the orders will execute as they occur, and the remaining tactics will adjust to the new position quantity.  This is part of the magic of Trade Unafraid.

## Candle Trail
This exit tactic sets a candle trail on a position.

If the position direction is **Long**, and the current price breaches the **previous candle low**, the position will flatten.

If the position direction is **Short**, and the current price breaches the **previous candle high**, the position will flatten.

### Parameters
![candletrailconfig.png](/img/candletrailconfig.png)
> **Candle Duration:**  The candle time resolution that the tactic will use.
>
> **Break By:**  The amount in cents that the previous candle high/low must be broken by to trigger a stop.  Defaults to 0.
>
> **Pre/Post Data:** If you enter a position before the first candle of the day completes, this determines whether to use pre/post market data to generate the first stop, or whether to wait for the first candle to complete.
{.is-info}


### Long Example
![candletraildiagram.png](/img/candletraildiagram.png)

### Short Example
![candletrailshortdiagram.png](/img/candletrailshortdiagram.png)
