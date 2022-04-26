---
sidebar_position: 5
tags: ["behavior"]
---
# Behavior
Along with all of the more obvious trading features of a Trade Plan, there are a number of other configurations that determine the way a Trade Plan will behave.

:::warn

These are important to understand.  Failure to configure these as intended can lead to inadvertant trading losses.

:::

## Configuration:

### Datasource:

Select Live for live market data. Simulated will create randomized stock price movement, starting from $100 per share.

### Brokerage:

Select your brokerage to trade real money.  Select Simulated for paper trading.

### Account:

Select your account when trading live.

:::tip Account nicknames

You can give your accounts nicknames, rather than showing them as account numbers.  In the top nav bar, click the "profile" icon to view your accounts.  Click in the leftmost column (Nickname) to type your desired nickname for that account.

:::

#### Front Run / Evaluate Quotes:

By Default, Trade Unafraid utilizes quotes in evaluating triggers. This is in order to try and give the user a small advantage by getting in early even if no trade has occurred at the trigger price. The idea is that if the quote breaks the price, it is very likely that an ensuing trade will as well. Uncheck this field to disable this front-run feature.

Example: Let's say you have a break price of 100 to go long. If no trade above 100 occurs, but Trade Unafraid receives a quote of bid :99.95- ask: 100.01, the entry will trigger long on the break of 100 by the ask. Similarly, let's say you have a candle trail with a low of 99. If no trade below 99 occurs, but Trade Unafraid receives a quote of bid: 98.99-ask:99.01, the exit will trigger on the bid below the low of 99.

#### Flatten at market close:

This will flatten the existing trade plan a minute before market closes (around 3:59 for stocks)

#### Repeating:

Will try to repeat the trade plan once it has been completed.

Ex: Let's say you believe that AAPL will bounce at 450 constantly throughout the day. If this is set to true, once your trade plan has completed and the position exited, we will try to play the bounce of 450 again.

NOTE: We are currently only allowing this setup for setups Break Candle Type and Candle Pattern. We hope to continue to expand this functionality in the future.

### RestartSettings:

#### a)	Deactivate on restart

a.	When a tradePlan restarts, deactivate the trade plan. A button will appear that will allow you to activate the trade plan when you feel ready

#### b)	Max Loss:

a.	If a repeating trade plan exceeds this loss, the trade plan will terminate

#### c)	Max Attempts:

a.	Once a repeating trade plan has run this many times, it will terminate

#### d)	Max Minutes:

a.	Once a repeating trade plan has run for this many minutes, it will terminate. Please note that this is evaluated at the close of a position for that trade plan. Therefore, if this value is set for 15, and a position is closed 13 minutes into the trade plan&aposs existence, it will still run once more.

### Terminate When Flat:

This feature is only be available if multiple entry tactic, or a position tactic + an entry tactic is selected

By default, the trade plan will terminate once the position being traded closes. Unchecking this setting will prevent that. We will wait till all entry and position tactics are hit.

Ex: Let's say a user sets a bounce with scaling in at 449.5 at 450 on AAPL, and the bounce results in an exit tactic at 449.75. By default the system will terminate then. Another example could be bounce at 450, into a market order and candle break, with the candle break being confirmation of the bounce. If the first position from the market order closes, perhaps you will want to wait to buy on a candle break anyways. If this is unchecked, the system will continue waiting until price hits 449.75.

NOTE: use this with caution, as it will wait for every entry and position tactic to hit, which might occur much later on. It could be smarter to let the trade plan finish, and start another one with bounce at 449.5.

### Persist if filter failed:

By default, if a setup fails, either because of validation or because a setup filter fails, the tradePlan will terminate. This attribute will tell the system to hang in limbo, so that you can hit the enter now button if your ok with entering even though validation failed.

An example of a failed validation would be if you try to trade the break of the previous daily high (with the candle trigger setup), but the price is already above the previous day high.

An example of a failed setup filter would be if you utilize full time fame continuity, and one of the periods you have selected are not green (if long) or red (if short).

Instead of terminating the trade plan, it will hang in limbo, and you can manually either enter now, or cancel, as you'd like.
