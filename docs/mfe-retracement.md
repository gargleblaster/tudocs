## MFE Retracement

This tactic creates a stop at some % retracement from the most profitable point achieved in a trade (in this document, this term will be called MFE, which is short for Maximum Favorable Excursion). There are several modes and settings for this tactic. The overall construct though hinges on two areas: 1) an activation point, and 2) a retracement amount. You essentially tell Trade Unafraid that once you are up by some activation amount, X, do not let my gains fall back beneath some retracement amount, Y.

The activation point is needed in order to avoid quick stop outs.  For example, if your retracement limit is 50%, without an activation limit, a gain of two cents falling to one cent would trigger an exit based on your gains dropping by 50%.  Obviously, this is not what we are after, so we use an activation amount to let the trade move a bit before comparing MFE to current P&L.  That allowing the trade to move a bit is defined by the activation amount.

![mferetracement1.jpg](/img/mferetracement1.png)

There are two MFE Types, “PnL” and “Position Price”. If you use Position Price, the goal is to track the MFE by the actual price of the traded instrument.  In this case, we are basing the MFE and retracement on the change in the price of the stock or option being traded.  In contrast, PnL would be looking at the change in the value of the overall position help.  The biggest difference this makes is in terms of the activation settings, and how the tactic interacts with if the position changes, whether by adding to the position, or closing a portion of the position. This will be explained in more detail later.

If Position Price is selected, then there are two configuration fields to be provided: Activation Amount as a percentage, and then the Retrace %.  Suppose, for example, that you set the Activation Amount to 10% and Retrace to 60%. If your position was filled at $10 per contract, then the Activation price would be 10% above that, or $11. If price does reach $11 per contract, then an MFE Retracement stop would immediately be set at 10.6, which is 60% of the MFE.  As price continued to rise above $11, the stop would continue to move up, always being set at 60% of the MFE.

![mferetracement2.jpg](/img/mferetracement2.png)

The other MFE type is “PnL” which is short for Profit and Loss.  With this configuration, the tactic will be activated based on achieving a certain minimum profit threshold, after which, the retracement percentage stop goes live.  There are two additional fields here that are not available when MFE Type is Position Price.

The PnL Setting specifies whether you will express the Activation Amount as a Dollar amount or a Percentage.  So you can activate the MFE Retracement once you reach a certain profit amount in dollars or as a percentage of the cost of your position.

PnL Type defines how you would like Trade Unafraid to evaluate your profit.  The choices here are Overall or Unrealized.  These only differ once you have some realized profits by closing some of your open position.  The question is whether you would like to base your Activation Amount and Retrace on the Overall profit, both realized and unrealized, or if you only want your unrealized (still open) position taken into account when making these calculations.

To illustrate, suppose you configured the exit tactic as shown.

![mferetracement3.jpg](/img/mferetracement3.png)

If we suppose that your position had a cost basis of $1000, then when your trade's overall PnL reached $100 (10% of the cost basis), the MFE Retracement stop would be activated.  The stop would initially be set to $60 PnL, which is 60% of the Maximum Favorable Excursion.  If the overall profit were to fall below $60, this exit tactic would close the position.  If the MFE were to rise to $300 overall profit, then the stop would rise to 60% of that or $180.  As the MFE increases, the Retracement percentage would also increase, similar to a trailing stop, but not in the same penny-for-penny manner.  In this example, the stop would always be located at the price that is 60% of the MFE for the Overall profit of the trade.

###Interacting with a position that is added to or taken profits from

No matter how the tactic is configured, if shares or contracts are added to the position, this tactic will cleanly reset itself.  It will go back into pre-activation state, and the activate and retrace values will be recalculated as if this is a brand new trade.  Having said that, if you add a small amount to an existing position that is already well into profit, the activation is likely to occur quickly or instantly.  And the retrace percent is still based on the overall profit, which is already substantial.  It is only if you add a large amount relative to your existing position that you will see a significant delay in activation or a significant change in your stop location.  The formulae remain the same, but they are based on your total position of both old and new shares or contracts combined.

If your MFE Type is PnL and you base Pnl Type on Unrealized profits, this will also cause the tactic to reset itself as well, even when taking partial profits. This is necessary to avoid the situation where Unrealized PnL drops significantly simply because of the reduction in size of the remaining open position, resulting in the stop being triggered even though price had not dropped.  To reiterate, if you are basing your Retracement on Unrealized profits, any partial close will reset this tactic, to prevent triggering an unintended stop-out.