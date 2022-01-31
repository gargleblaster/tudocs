---
sidebar_position: 2
sidebar_label: "All tooltips"
tags: ["exit tactics", "setups", "entry tactics", "templates"]
---
# Tooltips

_This is a compilation of all tooltips from the original UI.  We will reorganize this and improve the content, but until then, the original text is here._



Configuration:

Datasource:

Select live for live trading. Simulated will create randomized stock price movement, starting from 100$ a share.

Front Run / Evaluate Quotes:

By Default, Trade Unafraid utilizes quotes in evaluating triggers. This is in order to try and give the user a small advantage by getting in early even if no trade has occurred at the trigger price. The idea is that if the quote breaks the price, it is very likely that an ensuing trade will as well. Uncheck this field to disable this front-run feature.

Example: Let's say you have a break price of 100 to go long. If no trade above 100 occurs, but Trade Unafraid receives a quote of bid :99.95- ask: 100.01, the entry will trigger long on the break of 100 by the ask. Similarly, let's say you have a candle trail with a low of 99. If no trade below 99 occurs, but Trade Unafraid receives a quote of bid: 98.99-ask:99.01, the exit will trigger on the bid below the low of 99.

Flatten at market close:

This will flatten the existing trade plan a minute before market closes (around 3:59 for stocks)

Repeating:

Will try to repeat the trade plan once it has been completed.

Ex: Let's say you believe that AAPL will bounce at 450 constantly throughout the day. If this is set to true, once your trade plan has completed and the position exited, we will try to play the bounce of 450 again.

NOTE: We are currently only allowing this setup for setups Break Candle Type and Candle Pattern. We hope to continue to expand this functionality in the future.

RestartSettings:

a)	Deactivate on restart

a.	When a tradePlan restarts, deactivate the trade plan. A button will appear that will allow you to activate the trade plan when you feel ready

b)	Max Loss:

a.	If a repeating trade plan exceeds this loss, the trade plan will terminate

c)	Max Attempts:

a.	Once a repeating trade plan has run this many times, it will terminate

d)	Max Minutes:

a.	Once a repeating trade plan has run for this many minutes, it will terminate. Please note that this is evaluated at the close of a position for that trade plan. Therefore, if this value is set for 15, and a position is closed 13 minutes into the trade plan&aposs existence, it will still run once more.

Terminate When Flat:

This feature is only be available if multiple entry tactic, or a position tactic + an entry tactic is selected

By default, the trade plan will terminate once the position being traded closes. Unchecking this setting will prevent that. We will wait till all entry and position tactics are hit.

Ex: Let's say a user sets a bounce with scaling in at 449.5 at 450 on AAPL, and the bounce results in an exit tactic at 449.75. By default the system will terminate then. Another example could be bounce at 450, into a market order and candle break, with the candle break being confirmation of the bounce. If the first position from the market order closes, perhaps you will want to wait to buy on a candle break anyways. If this is unchecked, the system will continue waiting until price hits 449.75.

NOTE: use this with caution, as it will wait for every entry and position tactic to hit, which might occur much later on. It could be smarter to let the trade plan finish, and start another one with bounce at 449.5.

Persist if filter failed:

By default, if a setup fails, either because of validation or because a setup filter fails, the tradePlan will terminate. This attribute will tell the system to hang in limbo, so that you can hit the enter now button if your ok with entering even though validation failed.

An example of a failed validation would be if you try to trade the break of the previous daily high (with the candle trigger setup), but the price is already above the previous day high.

An example of a failed setup filter would be if you utilize full time fame continuity, and one of the periods you have selected are not green (if long) or red (if short).

Instead of terminating the trade plan, it will hang in limbo, and you can manually either enter now, or cancel, as you'd like.

Setups:

Orb:

This setup is for trying to play an opening range breakout. If you are long, we place a trigger on the break of the first candle high. If short, we place a trigger on the break of the first candle low. The user defines if it is the 5min candles, 15 min candles, etc. This setup specifically watches for the first candle of the day, and never updates after.

params:

Candle duration: If you want to trade ORB based on the first 5 min candle, you would enter "5" in this field.

Break by: If you want to give a little bit of space before triggering, set this field. For example, let's say the first candle high was 100. If you only want to enter the trade if the stock reaches 100.05, you would set this field to .05.

Note: validation is applied. If you try and enter an orb setup long, and the stock is already above the first candle high, the trade plan will be cancelled.

Ad hoc:

This is tactic tells the system to go straight into entry tactics.

Ex: if you dont want to utilize any of the setups, and would like to buy just on a break of a candle, you would set setup to adhoc, and entry tactic to candleBreak. If you would like to enter now, you can set the setup to Ad hoc, and the entry tactic to market order.

bounce:

Triggers entry tactics on a bounce off a price.

Ex: If AAPL is currently at 451, we can buy on a bounce at 450. If AAPL is currently at 449, we can short on a bounce at 450.

NOTE: we attempt to validate the sensibility of the bounce, by terminating the trade plan if the bounce has already passed. For example, if you try to go long on a bounce at 450 when AAPL is at 449, the trade plan will be cancelled.

Bounce ema:

track a series of EMA's and triggers entry tactics based on a bounce off the ema. If you are long and current price is 451 and the ema your tracking is 450, it will trigger the entry tactic upon hitting that ema.

params:

candleDuration: the length of the minute of the ema you'd like to track. So if you were tracking the 8 5min ema, the candle duration would be 5. Similarly with 21 5min ema, the candle duration would be 21.

periods: the period of the ema you'd like to track. So if you were tracking the 8 5min ema, the period would be 8. Similarly with 21 5min ema, the candle duration would be 21. If you would like to trade multiple EMA's simultaneously, provide the emas in a comma separated list. So if you'd like to trade both the 8 and 21 5 min ema's at once, periods would be 8,21

NOTE:
1) We apply bounce validation, so that if you setup a long bounce off ema in which current price is below ema price, the trade plan will terminate.
2) For each period you provide, we treat it as a seperate tradeplan. So the completion of the trade plan tracking the 8 ema, doesn't mean the 21 ema will cancel.
3) We prevent systems from placing multiple purchases on ema's at similar times. So that if, while the 8 ema is attempting to open a position or is in a position, the 21 ema cannot open as well.


   We calculate the ema based on when the market is open. If you use another platform and have pre market on, you might end up having a different EMA than us, since they might take into account pre market hours.

   break:

   triggers entry tactics on a break through a price.

   Ex: If AAPL is currently at 449, we can buy on a break of 450. If AAPL is currently at 451, we can short on a break at 450.

   NOTE: we attempt to validate the sensibility of the break, by terminating the trade plan if the break has already passed. For example, if you try to go long on a break at 450 when AAPL is at 451, the trade plan will be cancelled.

   Break ema:

   track a series of EMA's and triggers entry tactics based on a break of the ema. If you are long and current price is 449 and the ema your tracking is 450, it will trigger the entry tactic upon hitting that ema.

   params:

   candleDuration: the length of the minute of the ema you'd like to track. So if you were tracking the 8 5min ema, the candle duration would be 5. Similarly with 21 5min ema, the candle duration would be 21.

   periods: the period of the ema you'd like to track. So if you were tracking the 8 5min ema, the period would be 8. Similarly with 21 5min ema, the candle duration would be 21. If you would like to trade multiple EMA's simultaneously, provide the emas in a comma separated list. So if you'd like to trade both the 8 and 21 5 min ema's at once, periods would be 8,21

   NOTE:
1) We apply break validation, so that if you setup a long break off ema in which current price
   is above ema price, the trade plan will terminate.
2) For each period you provide, we treat it as a seperate tradeplan. So the completion of the trade plan tracking the 8 ema, doesn't mean the 21 ema will cancel.
3) We prevent systems from placing multiple purchases on ema's at similar times. So that if, while the 8 ema is attempting to open a position or is in a position, the 21 ema cannot open as well.


   We calculate the ema based on when the market is open. If you use another platform and have pre market on, you might end up having a different EMA than us, since they might take into account pre market hours.

   Candle Break Type:

   This is a setup that looks for a specific type of candle, and looks to break this candle. Whether that means your goal is break the last shooter or the last red candle, this is what this setup hopes to achieve. At the moment, we have only implemented breaking the last red or green candle. If your tradePlan is configured for a long trade, you are attempting to break the high of the candle, if short, you are attempting to break the low of the candle.

   params:

   CandleType: The type of candle you would like to trade. Right now, LAST is the only available option, representing trading the last candle of a certain color.

   CandleColor: The color of the candle you would like to trade. Right now, there is red or green. By selecting candleType of LAST and color candle of red, you can configure the setup to look to only trade based on the last red candle.

   candleDuration: the duration of the candle you'd like to track.

   breakBy: the amount the previous candle high/low needs to be broken by to enter. If long and the previous candle high was 100, and this field is set to .1, it will wait till a break of 100.1 to enter.

   filterForToday: Sometimes, you might enter this tradePlan before a red candle has occurred during the day (say if you enter the tradePlan before the open). Our default behavior will be to look for the last red candle from the day prior, and set a trigger based on that. This filter will ensure that you only set a trigger based on today's candles.

   Note:

   If when you attempt to use this tactic, the current price is above the candle that you are tracking if long, or below the candle if short, the software will know to wait until the next time an appropriate candle occurs. This means you can leave this strategy running all day by unchecking the field "Restart System Once Position Has Flattened". Additionally, please note that if the trade is cancelled for other reasons, such as a failed option spread when trying to trade, or a failed filter, the trade plan will be terminated.

   We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

   Candle Pattern:

   This setup allows you to watch for a pattern of candles, and trigger if the pattern is achieved. If you want to trade the first inside candle, and then break high, you would tell the software to look for an INSIDE CANDLE, and then a BREAK HIGH. When the break high is hit, the entry tactics will trigger.

   Candle definitions:

   INSIDE CANDLE (1): A candle in which the high and low are within the previous candle. Let's say candle1 has a high of 101 and a low of 99. If candle 2 has a high of 101 or less, and a low of 99 or more, it is an inside candle. If it has a high of 101.1 and a low of 99.2, it is not an inside candle.

   OUTSIDE CANDLE (3): A candle in which the high and low extend past the previous candle. Let's say candle1 has a high of 101 and a low of 99. If candle 2 has a high of more than 101, and a low of less than 99, it is an outside candle. If it has a high of 101.1 and a low of 99, it is not an outside candle.

   BREAK HIGH (2u): A candle in which just the high of the previous candle is broken. If the low is also broken, this is not considered valid. Let's say candle1 has a high of 101 and a low of 99. If candle 2 has a high of more than 101, and a low of 99 or more, it is a break high candle. If it has a high of less than 101, or a low of less than 99, it is not a break high candle.

   BREAK LOW (2d): A candle in which just the low of the previous candle is broken. If the high is also broken, this is not considered valid. Let's say candle1 has a high of 101 and a low of 99. If candle 2 has a low of less than 99, and a high of 101 or less, it is a break low candle. If it has a low of more than 99, or a high of more than 101, it is not a break low candle.

   FAIL BREAK HIGH (fbh): A candle in which the high of the previous candle is not broken. Let's say candle1 has a high of 101. If candle 2 has a high of less than 101, it is a fail break high candle. If it has a high of more than 101, it is not a break high candle.

   FAIL BREAK LOW (fbl): A candle in which the low of the previous candle is not broken. Let's say candle1 has a low of 99. If candle 2 has a low of more than 99, it is a break low candle. If it has a low of less than 99.

   BREAK CANDLE (2): This is to look for a break of either the high or low of previous candle. This can only be added as the last sequence in a pattern. So for example, you can configure a 1-2, and this will look for an inside candle, and enter the position on either the break of the high or the break of the low of the previous candle

   Note:
1) The first sequence is set to keep retrying until the first sequence is achieved.
2) If the pattern fails, the sequence will be restarted. So if you are looking for a 2d-1-2u setup, and on sequence 2u the pattern fails, we begin again at 2d.
3) There is some "look back" functionality to this setup if a sequence fails. For example, if you are looking for a 2d-1-2u setup, and while you are at sequence "1", the next candle is a 2d candle instead, the tradePlan will recognize that the 2d was achieved, and keep looking for a "1".

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

   The notion of 1's, 2's, and 3's comes from Rob Smith's The Strat. The Strat has many resources and a very active community. Refer to https://twitter.com/RobInTheBlack and https://twitter.com/search?q=%23TheStrat&src=hashtag_click to learn more.

Candle Trigger:

Create entry tactics based on a break a previous or current candle. If goLong is true, will look for break of candle high. if goShort is true, will try look for break of candle low. (both go long and go short can be selected).

params:

timeUnit: determine the time unit of the candle you'd like to trade, between minutes, days, weeks, and months. If you choose day and click current, you are looking for a break of the current day's candle. If you choose weeks and set candles back to 1, you are looking for a break of last week's candle.

candlesBack: # of candles back to determine which candle you'd like to have the break occur on. For example, if you select 0 and days, you are looking for a break of today's candle. If you select 1 and weeks, you are looking for a break of last week's candle. A last example is if you select 2 and months, in which you would look for a break of the candle occurring 2 months ago. If you select minutes, you must choose the previous candle.

candle duration: the duration of time unit's candle. If you'd like 15 minute candles, set this to 15. If you want 3 day candles, set this to 3.

validate candle: With most tactics, we apply validation to check if the setup is possible. For example, we reject a bounce setup if the price has already passed the bounce price. Or with a candle break entry tactic, we reject the setup if you are long, and price is already above candle high. Here, we provide you the option to choose whether you want to do that. It might be your preference to go right into entry tactics if the current has already passed yesterday's low/high.

breakBy: the amount the previous candle high/low needs to be broken by to enter. If long and the previous candle high was 100, and this field is set to .1, it will wait till a break of 100.1 to enter.

NOTE:

If time unit minutes are selected, then the tactic will behave like the entry tactic candleBreak, in that it will update the trigger with each incoming candle. For example, let's say you are long and trading 15 minute candles. The first high comes in at 100. If the high is never broken, and the next 15 min candle only has a high of 99.5, the trigger will be adjusted to 99.5.

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

Conviction Candle:

This is a setup designed for strategies based on the opening candle.

parameters:

candleDuration: minute duration per candle. 5 for a 5 minute candles.

Minimum first candle height: Often, a setup like this will require some amount of volatility at the open. Set this parameter to define the min height of the first candle.

rightColorCandle: If long, the first candle close must be above open. If short, the close must be below open.

Candle close pct: Enforce that the first candle close must be a certain percentage of the candle height.

EX: if the first candle has: o: 99.25, l: 99, h:100, c: 99.3. It can very disadvantageous to buy well be on a break of 100, because of the length needed to travel to reach that height and the bearish nature of the first candle. We could set candle close pct to 60%, and we would not trigger a long unless the candle closed above 99.6

Permitted Gap Pct: Ensure that the open is in the direction that you want the trade to be in. Set the minimum the gap must be. If your gap is .25, then the open must be at least .25% in the direction that your trade will be. If your gap is -.25, then the open must be at least -.25% in the direction that your trade will be. Let's say AAPL closes the previous day at 450, and opens the next at 449. Setting permittedGapPct can prevent a buy on a false positive first candle, that reverses quickly after breaking the high.

NOTE:

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

Flag:

This is a setup that attempts to trigger the entry tactics only once a sequence of candles have been completed. If long, the sequence is as follows: candle break high, candle fail to break high, candle break high. If short, the sequence is as follows: candle break low, candle fail to break low, candle break low. If you are unsure about direction, both goLong and goShort can be applied, and it will track each sequence separately.

Explaining the sequence:

This is an example of a series of candles to achieve the break long, with some commentary to explain some of the nuances:

firstCandle: open: 100, high: 100.2, low: 99.8, close: 100.

Once this candle arrives, it will start to look for a break high of this candle. Whether breaking the first candle is a must is configurable (check param fail on first candle). You can elect that the tradePlan is terminated if this is not achieved, or whether it waits for a candle to actually break.

secondCandle: open: 100, high: 100.3, low: 99.8, close: 100.2.

In this scenario, the second candle breaks the first candle, and we will continue to the next sequence, fail to break high. In this sequence, we are waiting for a candle that does not break its previous high.

thirdCandle: open: 100.2, high: 100.4, low: 100.1, close: 100.3.

The next candle that comes in broke its previous high. Therefore we will wait for next candle to not break the high.

fourthCandle: open: 100.3, high: 100.3, low: 100.1, close: 100.2.

This candle does not break its previous high (100.4 versus 100.3). We move onto the next sequence, which is a break high. Once this break high is achieved, we will trigger the entry tactics.

fifthCandle: open: 100.2, high: 100.25, low: 100.1, close: 100.2.

The high is not broken, so our price to break is adjusted down from 100.3 to 100.25. If 100.3 had been passed, the entry tactics would have been triggered.

sixthCandle

If during this candle price breaks 100.25, we will trigger entry tactics.

parameters:

fail on first candle:

It could be your preference that the second candle has to break the first candle's high (if long) in order to launch the setup, or you could be comfortable waiting until a high is finally achieved. If this is checked, it will terminate the tradePlan if the high is not broken. If unchecked, it will sit and wait.

wait until current candle closes:

If this is checked, then we will look for a break of previous candle. If unchecked, then we will wait for break of current candle.

wait until current candle closes unchecked example:

Let's say it is currently 9:35:30 seconds, and you see the candle that began at 9:34 (9:34-9:35) was a spike, and therefore you'd like to apply a flag based on that candle. You would leave this uncheck, and when the 9:35-9:36 candle comes in at 9:36, we will look to see if that candle broke the 9:34 candle, and then proceed to the next candle sequence.

wait until current candle closes checked example:

Let's say it is currently pre-market. You would like to trade a flag based on the 9:30 5min candle, but don't want to sit there waiting till 9:36 (if trading 5 minute candles) to enter this system . You would check this field, and once the 9:30 candle completes, it will, with the next candle, look for a break.

candleDuration:

the duration of the candles that you are running this setup on (1min, 5min...)

breakBy:

The amount of leniency provided at the edges of the candles. If try to break a candle, the price to break to achieve this sequence would be high/low +/- breakBy. So if high is 141, low is 139, and breakBy is .1, the price to break for high would be 141.1, for low 138.9. When you are attempting to fail to break the high, it gives more room to not break the high. So if, with the above example, price reached 141.05 and then showed resistance, the candle would achieve the sequence of fail to break high.

NOTE:

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

Entry Tactics:

Candle Break:

Open a position upon a break of the trigger candle, once the setup has been achieved. Will go long on a break of trigger candle high, and short on break of prev candle low. Ex: Let's say you are confident that if AAPL will achieve a bounce at 450. However, you only want to buy with confirmation. Once AAPL hits 450, it will set off this tactic. Let's say the previous candle was o: 450.5, h: 450.75 l :450.25, c: 450.5. Upon the break of 450.75, we will place a market/work Order. As the following candles come in, the break high trigger will adjust lower. So if the current candle ends up having a high of 450.25, the high to break will adjust to 450.25. The same is true with short, except that it looks at candle low and adjusts upwards.

params:

candleDuration: the duration of the candle you'd like to track.

QuantityBasisValue: the amount you'd like to invest based on the QuantityBasis (dollars, quantity) that you chose. So if you would like to make an investment of max 1000$, the quantity basis would be dollars, and the quantityBasisValue would be 1000$. Similarly, if QuantityBasis of Quantity was chosen, and you'd like to buy 5 contracts/shares, this param would be set to
5.

wait until current candle closes: determine which candle to set the triggers based on.

wait until current candle closes unchecked: set the triggers based on the previous candle.

Ex: Let's say that the bounce occurs at 10:27. We will use the high from the candle beginning at 10:20 (10:20-10:25) to determine the high to break.

wait until current candle closes checked: set the triggers based on the current candle. We wait for the candle to complete, and then set the triggers.

Ex: Let's say you want to trade a fed announcement at 2 pm using 1 minute candles. If you enter this tactic at any time between 2:00 and 2:01, it will wait for the 2 pm candle to complete and set the triggers based on that candle. Once it is 2:01, the tactic will activate, and look for a break of the 2 pm candle. Similarly, let's say you want to trade a break of AAPL at 500, but you want confirmation of the break first. You can use a candle break entry tactic, with the trigger candle set to current. It will wait for the candle in which the break occured to complete, and only enter once it has broken that candle.

breakBy: the amount the previous candle high/low needs to be broken by to enter. If long and the previous candle high was 100, and this field is set to .1, it will wait till a break of 100.1 to enter.

NOTE:

validation is applied. If you set triggerCandle to previous try go long and the current price is above previous candle high (ie which would automatically set the order), we cancel the tradingSystem

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

Limit Order:

place a limit order once the setup has been achieved.

params:

offset from Price: The Offset from the price at the time of the break. If long and break occurred at 1, and the offset is 10%, the limit order will be placed 1.1. If short, it will be placed at .9.

QuantityBasisValue: the amount you'd like to invest based on the QuantityBasis (dollars, quantity) that you chose. So if you would like to make an investment of max 1000$, the quantity basis would be dollars, and the quantityBasisValue would be 1000$. Similarly, if QuantityBasis of Quantity was chosen, and you'd like to buy 5 contracts/shares, this param would be set to 5.

limitPrice: A hard limit price to purchase at. If you put in 1.05, the limit price on the entry order will be 1.05. NOTE: this setting overrides "offset from price". If both fields are filled out, this field will take precedence. Additionally, this tactic should only be used if you are confident you know what the correct price will be.

Market Order:

place a market order once the setup has been achieved.

params:

QuantityBasisValue: the amount you'd like to invest based on the QuantityBasis (dollars, quantity) that you chose. So if you would like to make an investment of max 1000$, the quantity basis would be dollars, and the quantityBasisValue would be 1000$. Similarly, if QuantityBasis of Quantity was chosen, and you'd like to buy 5 contracts/shares, this param would be set to 5.

Setup Filters:

Time Of Day:

This will allow that trades only occur between the start hour and minute and the end hour and minute. Please note that the time is according to "military time". So instead of 2 pm, you would do 14:00. Ex: If Start Hour is set to 11, start Minute is set to 30, end hour is set to 15, end minute is set to 15, this will filter out all entries that trigger before 11:30 am, and after 3:15 pm.

FTFC:

This is a filter that tracks full time frame continuity. This setup only allow trades in which all time frames you provide us are above the open if long, or below the open if short.

You choose these setups by manipulating the list that shows when you click the FTFC setup. "m" is for minute, "d" is for day, "w is for week, "M" is for month. The parameter candle represents the candle duration of the time frame. If you wanted to trade the 60 minute candle (starting from 9:30), you would type in 60 for the candle parameter, and click "m" as the timeUnit.

The red X button on the right will remove the associated timeFrame. The green plus beneath with add another timeFrame.

EX:

Let's say I want to trade AAPL, either long or short, but I only want to if the 1 hour, the 1 day, the 1 week, and the 1 month, all are the same color. I would enter the filter as: 60m, 1d, 1w, and 1m. If, when the entry tactic triggers, all of those time frames are above their respective open (the UI will show green), and the tradePlan is long, the trade will pass the filter. If even one is red, the filter will fail. The opposite is true for shorts. If the tradePlan is short, and all of those time frames are below their respective open, it will allow a trigger short. If even one time frame is green, the filter will fail.

NOTE:

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

Price Intersects First Candle:

If the price intersects the low of the first candle of the day if long, or if the price intersects the high of the first candle of the day if short, cancel the setup.

Ex: You have a bounce off ema setup for the 8 5 min ema. You believe that if price breaks the low of the 15min 9:30 candle, that you should not go long anymore, and cancel the setup. That is the goal of this filter.

params:

candleDuration: the duration of the first 9:30 candle that you would like to track.

Below, Above, High, Low: configures what conditions must be met in terms of the candle to filter. For example, if the candleDuration is 2, Below is selected, and High is selected, we will only allow trades that occur when the current price is below open 2 minute candle High. If Low was selected instead of High, we will only allow trades below the candle low. If Above and High are selected, only trades above the 2 min candle high will pass the filter. Lastly, if Above and Low are selected, only trades above 2 min candle low will pass.

NOTE:

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

Ema Intersects First Candle:

If the ema('s) intersects the low of the first candle of the day if long, or if the ema('s) intersects the high of the first candle of the day if short, cancel the setup.

Ex: You have a bounce off ema setup for the 8 5 min ema. You believe that if ema breaks the low of the 15min 9:30 candle, that you should not go long anymore, and cancel the setup. That is the goal of this filter.

params:

Below, Above, High, Low: configures what conditions must be met in terms of the candle to filter. For example, if the candleDuration is 2, Below is selected, and High is selected, we will only allow trades that occur when the current price is below open 2 minute candle High. If Low was selected instead of High, we will only allow trades below the candle low. If Above and High are selected, only trades above the 2 min candle high will pass the filter. Lastly, if Above and Low are selected, only trades above 2 min candle low will pass.

first candle Duration:

the duration of the first 9:30 candle that you would like to track.

ema candle Duration:

the length of the minute of the ema you'd like to track. So if you were tracking the 8 5min ema, the candle duration would be 5. Similarly with 21 5min ema, the candle duration would be 21.

periods:

the period of the ema you'd like to track. So if you were tracking the 8 5min ema, the period would be 8. Similarly with 21 5min ema, the candle duration would be 21. If you would like to track multiple EMA's simultaneously, provide the emas in a comma separated list. So if you'd like to trade both the 8 and 21 5 min ema's at once, periods would be 8,21

associate with ema setup:

this parameter is for if you are running with an ema setup of the same minute as the filter. You can choose to associate the filter to the ema. So that if you are trading the 8 and 21 ema, the fact that the 8 ema crosses the first candle, does not mean that the 21 ema setup will cancel. If this is unchecked, the the setup will cancel upon any break of the first candle for any ema provided.

NOTE:

We calculate the ema based on when the market is open. If you use another platform and have pre market on, you might end up having a different EMA than us, since they might take into account pre market hours.

Position Tactics:

Scaling In:

This tactic attempts to add to the position as the underlying moves against you.

Ex: Let's say AAPL is trading at 449, and you believe it won't go higher than 450. Because of the volatility of the stock, you also think that it might get a bit of a push higher, before turning around, and you would like to cost average to get the best entry you can. This is where scalingIn is effective. You would use setup bounce at 450 (and goShort), have a market order once the setup is triggered, and then use this tactic to add to your short as the position runs higher at user-selected intervals and amounts.

params:

QuantityBasisValues: The quantity values, based on what Quantity Basis (dollars/quantity) that should be invested per break prices. For example, Let's say you want to cost average, 1000$ per entry, while the stock moves against you, on break prices of 100,99,98. Your QuantityBasis would be 1000$, and the QuantityBasisValues would be 1000,1000,1000.

Break Prices: The prices you'd to enter at. Let's say you believed strongly on support for AAPL at 450, but if it broke lower, you'd want to add to your position, every 50 cents lower. Your break prices would be: 449.5,449,448.5.

NOTE: the bounce price of 450 included in the "break prices" documentation is not included as one of the "break prices" provided to scaling in. That belongs in the bounce setup, with its appropriate entry tactic.

Add To Winner:

This tactic attempts to add to the position as the underlying confirms your trade.

Ex: Let's say AAPL is trading at 451, and you believe it will fall if it breaks 450. Because of the volatility of the stock, you are afraid that there might be a bit of a headfake at 450, and you would short just as the stock turns around, resulting in a quick loss. You would rather continue to add to your investment size as the stock moves in your favor, and only take the full position once AAPL has broken a lower barrier. This is what AddToWinner is supposed to accomplish. This tactic would add to your short as the positions runs lower at user-selected intervals and amounts.

params:

QuantityBasisValues: The quantity values, based on what Quantity Basis (dollars/quantity) that should be invested per break prices. For example, Let's say you want to cost average, 1000$ per entry, while the stock confirms your thesis, on break prices of 100.25,100.5,100.75. Your QuantityBasis would be dollars, and the QuantityBasisValues would be 1000,1000,1000.

Break Prices: The prices you'd to enter at. Let's say you believed strongly on support for AAPL at 450, and that if it broke, it could lead to further movement downward. Every 50 cents, you'd like to add to your position. Your break prices would be: 449.5,449,448.5.

NOTE: the break price of 450 included in the "break prices" documentation is not included as one of the "break prices" provided to scaling in. That belongs with the break setup, with its appropriate entry tactic.

Exit Tactics:

Underlying Price Trail:

This tactic sets a trail on the underlying stock. As the trade moves in the direction of the tradePlan (long/short), the trail adjusts in that direction.

Ex: Let's say AAPL is at 449.75, and you want to buy on a break of 450. Once AAPL loses momentum though, you would want to sell it. This tactic could accomplish that goal. You would set a trail of let's say 25 cents on AAPL. As the stock continues to go higher, the trail adjusts higher with it, so that if AAPL hits 450.5, the trail, which originally was at around 449.75 (break price of 450-.25), will now adjust to 450.25. Once AAPL hits 450.25, the position would flatten.

NOTE: The main use of this tactic is if you are trading options, but want to have a trail set on the underlying, and not the position.

Underlying Price Exit:

Underlying Price Exit is an exit tactic used for adding price targets on the underlying price. In a stock trade, this will simply add orders at the defined price levels. For an option trade, it will place targets on the underlying price that can be modified in the tactic panel after creation or entry.

Parameters

Price | Pct. per Level: Each level is defined by a price and percentage pair. The percentage determines what percentage of the current position size should be closed at the defined price level. You must add at least one of these pairs to use this tactic. It is advised that you consult the current underlying price to ensure that all levels are above the current price(below for a short trade).

Ratchet Bracket:

This tactic creates brackets of closes around a position. As the position moves and hits targets of the bracket, the bracket shifts.

Ex: Let's say you open an AAPL long position at 450 with qty of 10. You would like to create resting orders at certain intervals that close as price moves in your favor, and flatten if the position hits the bottom of the bracket. As each resting order is hit, the stop is "ratcheted up". So let's say we'll define our target as 10 cents per bracket, and our stop is as 20 cents per bracket, and we'd like to sell 1 qty as each target is hit. The tactic will instantly set up ten close orders at ten cent intervals, 450.1, 450.2... all the way up until 451 (in which your position qty of 10 will fill). The first stop is set at 449.8 (450-.2), and with each fill, it is adjusted to the new bottom of the bracket. So when the 450.1 fills, it is adjusted to 449.9. When 450.2 fills, it is adjusted to 450, and so on.

parameters:

Mode:

the mode that you would like to configure the ratchet bracket brackets. With equal interval, for each bracket, the target, stop, and qty are the same. Currently, equal interval is the only available mode.

target:

The target amount that signals to advance to the next bracket. The boundary of the bracket that is in the direction of the position (top if long, bottom if short) become the resting order prices. If the ratchet bracket trail has begun, this price signals to adjust the trail to the next bracket. If Qty basis is either percent or quantity, then this number should be entered as a number of cents. It would be saying to place resting orders at 10 cent increments. If you choose profit, then this should number should entered as a dollar amount (such as 20$ brackets). More on the profit mode below...

stop:

The stop that signals to flatten the position. This is set for each bracket, and adjusted in the direction of the position upon each order fill.

If Qty basis is either percent or quantity, then this number should be entered as a number of cents. It would be saying to flatten at 10 cent below whatever the target of the previous bracket was.

If you choose profit, then this should number should entered as a dollar amount (such as 20$ brackets). More on the profit mode below...

quantity basis value per bracket:

The qty basis value that should be used per bracket. For example, if you set qtyBasis to PERCENT, and this to 10%, if your position qty is 10, each bracket will have a resting order of qty 1 (10*.1). If you set qty basis to quantity, and set this field with a value of 2, it will sell 2 qty per bracket. With profit, you supply us the number of brackets. more on that below...

trail quantity basis value per bracket:

Let's say you have position qty of 10, and you would like to only have 8 brackets, and leave 2 to trail. If your qty basis is profit or percent, You would set this field to .2. If it is quantity, you would set this to 2. This works the same as way as any bracket does, except when the target bracket hits, instead of placing a resting order, the target price and stop price is adjusted up another bracket. Let's say you are long, all your resting order orders are filled, the last order price was at 100, the target dollars is at .1, and the stop cents is .2. The first target price would be 100.1, and the stop 99.8. If 100.1 is hit, then the next target price becomes 100.2, and the stop 99.9. If 99.9 would then be hit, the position would flatten.

qtyBasis:

define if bracket qty should be calculated through qty, profit, or through percentage. If QUANTITY is selected, and you set quantityBasisValue to 2, then each bracket will place a resting order of qty 2. if PERCENT is selected, position qty is at 10, and quantityBasisValue is at .2, then each bracket will place a resting order of qty 2. Profit mode is explained below...

PROFIT MODE:

We felt that this required its in own explanation, as it very powerful and quite nuanced. An extremely powerful part of Trade Unafraid is option management. However, you don't always know what the price of the option will be. It hurts to be stuck taking small 10 cent gains on 5$ options, or hoping for a huge move so your 1$ options make 25$. This would also be an extremely powerful tool in other circumstances that you don't know what the exact qty will be. The way this tactic works is as follows: you provide a target amount of profit you'd like to make per bracket, a stop amount to lose, and the number of brackets you'd like to create. Let's say you are trading long a 5$ option with 5 qty, in other words your cost basis is at 2500. You set up ratchet bracket profit mode as follows: 50$ target, 100$ stop, 2 brackets, and .2 percent trail qty. The setup would be configured as follows:

An order with qty 2 at 5.25 limit, another order at qty 2 at 5.5 limit (leaving a trail qty of 1) would be placed.

You would have a stop placed at 4.8. If the order was filled at 5.25, the stop would ratchet up to 5.05.

Let's say instead though, that the option management chose a 1$ option, so you would have 25 qty, creating a cost basis of 2500. We would be prepared and the setup would be configured as follows:

An order with qty 10 at 1.05 limit, another order at qty 10 at 1.1 limit (leaving a trail qty of 5) would be placed.
You would have a stop placed at .96. If the order was filled at 1.05, the stop would ratchet up to 1.01.

NOTES ON THIS MODE:
1) Although the tradeplan view is specified in profit amounts, the soft order for the stop is placed in cents. The thinking is that if you wanted to quickly adjust the stop price, it be much easier to think in terms of how many cents do I want to adjust to, rather than what loss amount will equal a certain price.
2) the stop cents (relative to previous target price), stays the same as the stop cents that are calculated when we first see the position. As an example, let's say your option position qty of 5 results in a stop cents of 20 in order to hit a 100$ loss, and your first bracket of 2 qty is filled, leaving you with a position with 3 qty. Although a 20 cent move will now only result in a 60$ loss (and a 33 cent move for 100$), we are assuming that you would rather have tighter stops and the simplicity of knowing the stop will be 20 cents every bracket.

Preserve Profit:

Once the position has realized profit, we begin to watch the position to make sure that overall pnl does not fall below a user provided amount. This tactic attempts to essentially salvage a trade if things go very against you once they were doing well.

Ex: Let's say preserve profit is set to 1, and you have realized gains so far of 100$. If you ever from there on have an unrealized loss of 99$ (100-99=1), the position will flatten.

The field activationProfitAmount, says to wait until the realized pnl becomes a certain amount before watching for a retrace to the profit amount. This is useful if you have tight resting orders. If you have your first resting order for 5$ profit profit, and your preserve profit amount at 1$ overall profit, it would be very unfortunate if your unrealized pnl hit just -5$ and forced a flatten. If you set the activationProfitAmount field to 15$, it would wait till realized pnl has 15$ before activating.

NOTE: unlike lossLimit, you provide us 1, for us to watch for a gain of 1. Additionally, we check that the activationProfitAmount can never be less than the loss limit amount, or else you'd result in an automatic close as the loss limit amount will be true instantly.

Position Price Trail:

This tactic sets a trail on the position symbol. As the trade moves in the direction of the tradePlan (long/short), the trail adjusts in that direction.

Ex: Let's say AAPL is at 449.75, and you want to buy on a break of 450, in options. Once the option loses 20 cents from its high, you would want to sell it. This tactic could accomplish that goal. You would set a trail of let's say 25 cents on AAPL. As the option continues to go higher, the trail adjusts higher with it. If you bought the option for 1$, the trail would start at .75. If the option moves to 1.5, the trail will adjust to 1.25. Once the option falls to 1.25, the position would flatten.

Loss Limit:

The Max loss you are willing to take on a position before you exit. If this is set to 200, then once your positions overal pnl reaches -200, we will flatten the position.

mode: percent (%) or amount ($). If you are in percent mode, set the amount value to a percentage, let's say 10%. If your cost basis is $2500, we will translate that to a $250 stop loss. If you use amount, you provide us the $ max amount to lose. In the above example, you would set the amount field to $250.

NOTE: you provide us 200, not -200, for us to watch for a loss of 200. Once in a trade, if you have selected percent mode, it will shift to amount mode. Meaning that let's say you have a position with cost basis of $2500, and a loss limit percent of 10%, once in a trade, the lossLimit will be $250. If you want to decrease the loss limit from now on, you would not change from 10% to 8%, but rather from $250 to $240. It is much easier on the user to not have to think in terms of percentage at this point, and rather in dollar amount.

Green to Red Positions:

The idea behind this tactic is to catch headFakes, in which a breakout is attempted, but quickly reverses. It tries to catch the exit early, as opposed to waiting until a later exit tactic flattens. This exit will follow the position price, and once the position price has reached an activation level (in % from entry price), if it retraces to a certain percentage, it will exit.

Ex: Let's say you enter a long position in AAPL, and you decide: if the position price inreases 5% and then begins to fall back, I need to close early.

params:

right direction pct: How much the current price is above the first average fill price that we receive. If long and your first average fill price is 1, and this is set to 5%, we will only begin tracking the retrace pct once your position hits 1.05 (5%).

retrace pct: What percent the position must fall back to before selling. Let's say you're long and your first average fill price is 1, and right direction pct is set to 5%. Once the position hits 1.05, this pct will come in to play. Let's say the retrace is set to 1%. If the position price falls back to 1.01, we will flatten.

Green to Red Candles:

The idea behind this tactic is to catch headFakes on candles, in which a breakout is attempted, but quickly reverses. It tries to catch the exit early, as opposed to waiting until a later exit tactic flattens. We all know that feeling when a stock quickly breaks a candle for a second, quickly pulls back, and you know your trade is dead. It updates candle by candle.

Ex: Let's say you enter a long position in AAPL, and the previous candle high is 450.25, and the low is 449.5. Let's say you have a right direction pct of 0, and retrace pct of 60%. To this tactic that would mean: once AAPL breaks 450.25, look to flatten if it falls to 449.8. With each incoming candle, this tactic resets its triggers. So let's say the next candle has high of of 450.75, and low of 450. We will now say: once AAPL breaks 450.75, we should flatten if the stock retraces back to 450.3, which is a 60% retracement from the high.

params:

right direction pct: How much the current price is above the previous candle high (long) or low (short) before we begin tracking the retracement. If the prev candle high is 100, and the right direction pct is 0, then we will start tracking if it falls once the current candle hits 100. If the right direction pct is .1%, then we will start tracking retracement once the price hits 100.1.

retrace pct: The pct up the candle before flattening the position. It is set as follows: let's say we have a candle with L: 99 and H: 100, and the retrace pct is set to %60. If you are long, the trigger will be set to 99.4, a 60% retrace from the high. If short, the trigger will be set to 99.6.

candleDuration: the minute duration of the candles you'd like to track.

min candle height: The main goal of this to tactic is to catch a loss earlier. It is most effective on a larger candle, and trying to catch the loss a certain % up the candle. This tactful would be detrimental if used on a small candle. A candle height of 15 cents won't hurt, but having your position exit after moving 8 cents could be quite frustrating. Set this parameter to the min height the candle must be in order to utilize this tactic.

NOTE:

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

Grab Cents:

This tactic places resting orders for specific profit targets you hope to reach. Once all the resting orders are completed, you can start a trail on the position, hoping to grab as much additional profit as you can.

Ex: let's say you take a position of quantity 5. You would like to close 2 qty if the position ever gains 10 cents, another 2 if the position ever gains 25 cents, and leave a trail afterwards. That's what this tactic accomplishes.

params:

grab cents mode:

Whether you would like to set up the quantity your resting orders via percentage of the position, or through quantity per order.
$ per level:

How many cents per order you would like to take for profit. This is set up relative to the current avg fill price of the position. Let's say you have a position with average fill price of 100, and you would like to take profits on a 25,50, and 75 cent gain. You would provide us a list: .25,.5,.75, and we would translate that into orders with limit prices: 100.25, 100.5, and 100.75.

quantity/percentage per level

Depending on the grab cents mode, define the quantity per resting order. If you choose percentage, and would like to place 3 resting orders, each accounting for 25% of your position, you would supply us a list: 25,25,25. Similarly, if you would like us to sell orders in quantities of 4,3, and then 2, you would select grab cents mode as quantity, and provide us a list here of: 4,3,2.

trail quantity/percentage

Depending on grab cents mode, the pct or the quantity of the position you would like to leave as a trail. If position is of size 5, grab cents mode is percentage, and the trail percentage is 20%, the trail will kick in once position has size 1. Similarly, if instead of percentage, you went with grab cents mode of quantity, and the trail quantity was set to 1, when the position has size 1, this trail will kick in.

trail amount

The amount of cents that you would like to have your trail set for. This trail will adjust in the direction of your position. So if long and your trail is .25, and current price is 100, the trail will be set to 99.75. If price moves to 100.25, the trail will be adjusted to 100. If it hits 100, the position will flatten.

NOTE:
A) this trail differs from underlying price trail and position price trail in the following ways: 1) it is a trail on the position and not the underlying.
2) it only takes effect once your resting orders have filled, unlike the price trails, which are in effect immediately.
   B) Additionally, the grab cents percentages do not have to equal 100%. If you would like to place 50% of your position on grab cents, and have the rest rely on a candle trail, you can do that.
   C) If you elect grab cents percentage mode and the quantities do not match perfectly, we do our best to round efficiently.

Atr Trail:

The ATR Trail exit tactic provides a trailing stop relative to the current ATR, or Average True Range, of the stock or underlying price. The user can define the parameters of the ATR calculation as well as the percentage of the ATR that will be utilized.

As the price changes and more candles are defined, the calculated ATR will be recalculated. The stop is then placed at the previous candle close minus the percentage of ATR selected(if short, the inverse of this). If the next calculated stop is lower that the current stop(higher if short), the stop remains at the current level.

Parameters

% of ATR: This parameter defines the percentage of the calculated ATR that will be used. For example, if the ATR is currently one dollar, the user selects 50%, the stop will be placed 50 cents below the current price.

Candles Back: This parameter defines how many candles back from the current candle will be included in the ATR calculation.

ATR Type: This parameter defines the method used to calculate the ATR. Wilder is the most common of these methods. For more information about these formulas, take a look at this page:{' '} ATR Calculation Methods and Formulas

ATR Candle Duration: This parameter defines the candle duration and time unit with which the ATR calculation is made.

Underlying Break Price/Break Price:

Flattens a trade plan by breaking through a support level. If long, will need to exceed below. If short, will need to exceed above.

Ex: You have a position in FB, and the stock is at 300.5. Your candle trail is set for 299, but your pretty confident that on a break of 300 you should flatten. You would enter 300 for this tactic in order to accomplish that.

params:

prices: provide a comma separated list of prices (100,99,98). The way the tactic interacts with the parameter is as follows: you provide us a list of potential support prices. At creation of the exits, we find the nearest price below the current price, and set that as price to break. If no prices are possible (ie if long, all support prices are above current price. If short, all prices are below current price), then the tactic is ignored. So if you were trading fb, and provided break prices: 302.5,300,297.5, and the current price is 300.5, 300 will become the break price.

NOTE:

Ideally, this tactic should be added after the position is taken, and not via the trade plan form, once you know what the current price is. In the above example, it would be quite frustrating if a position exited immediately bc of a support price at 300, and the current price when entering into the position was 300.02.

Candle Trail:

Sets a candle trail on a position. If long, and the current price breaches the previous candle's low, or if short, and the current price breaches the previous candles high, we flatten the position.

params:

candleDuration: The duration of the candle you would like to track.

Use pre/postMarketData: Let's say you have 5 min candles, and you enter a position at 9:33, ie, before the first candle appears. If this is set to false, it will wait till 9:35 for the first candle to set the trail. If it is true, it will use the last candle leading up till 9:30 for the candle trail.

breakBy: the amount the previous candle high/low needs to be broken by to close. If long and the previous candle low was 100, and this field is set to .1, it will wait till a break of 99.9 to flatten.

NOTE:

When we set the trail, we get both the current candle and the previous candle. If you are long and the current candle low is lower than the previous candle's low, or if you are short and the current candle high is higher than the previous candle's high, we use the current candle to set the trail.

We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am.

