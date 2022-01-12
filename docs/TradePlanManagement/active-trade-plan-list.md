---
sidebar_position: 1
sidebar_label: Active Trade Plan List
---
# Active Trade Plan List

At the top of the area where all active Trade Plans are shown, there is a toolbar with several important controls.  These controls affect all active Trade Plans and should be used with care.

![active-trade-plan-toolbar.png](/img/active-trade-plan-toolbar.png)

The radio group on the left is used to sort the active Trade Plans.

##### Symbol
    Sorted alphabetically by ticker symbol

##### Status
    Active positions will appear before Trade Plans with no position

##### Template
    Sorted by the Template used to create the Trade Plan

##### Creation Time
    Sorted by the time when the Trade Plan was created

---

The buttons on the right can be used to affect all Trade Plans at once.  This is powerful and convenient, but it must be used with care.

##### Pause
    All flat Trade Plans will be paused, meaning they will not enter 
    any new trades.  All existing Trade Plans with a position will 
    continue to function normally, including all exit tactics.

##### Unpause
    Unpauses all Trade Plans, so they will all once again enter on a 
    triggered setup.

##### Cancel
    All flat Trade Plans will be cancelled and be removed from the 
    list of active Trade Plans.  Any Trade Plans with an active 
    position will continue to function normally.

##### Flatten
    All positions will be closed immediately.

##### Collapse
    Purely visual, simply collapes all Trade Plans to the small 
    rectangular view.  This has no impact on trading, but it can 
    greatly save on CPU and network utilization when there are many 
    active Trade Plans.

##### Expand
    Purely visual, simply expands all Trade Plans to the full view
    including the chart.  This has no impact on trading, but it can
    put a great deal of load on CPU and network in your browser when
    there are many active Trade Plans.

:::danger Use caution with Expand All

You can make your browser nearly unresponsive, if you have a large number of active Trade Plans.  Your server should continue to function, but your ability to affect manual control from your browser may be greatly impacted by expanding everything at once.

:::
