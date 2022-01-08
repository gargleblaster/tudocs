"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[54],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var A=i.createContext({}),l=function(e){var t=i.useContext(A),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=l(e.components);return i.createElement(A.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,A=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(a),c=n,g=h["".concat(A,".").concat(c)]||h[c]||d[c]||o;return a?i.createElement(g,r(r({ref:t},p),{},{components:a})):i.createElement(g,r({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var A in t)hasOwnProperty.call(t,A)&&(s[A]=t[A]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6890:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return A},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var i=a(7462),n=a(3366),o=(a(7294),a(3905)),r=["components"],s={},A="Exit Tactics",l={unversionedId:"exit-tactics",id:"exit-tactics",title:"Exit Tactics",description:"Exit tactics are a vital part of crafting a successful trade plan with Trade Unafraid. These tactics define how and under which conditions your trade plan will close your position or a portion of your position. Becoming familiar with each of these tactics will prove invaluable in your journey as a successful trader using the Trade Unafraid platform. Below you will find a detailed explanation of each tactic along with some helpful examples.",source:"@site/docs/exit-tactics.md",sourceDirName:".",slug:"/exit-tactics",permalink:"/tudocs/docs/exit-tactics",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/exit-tactics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/tudocs/docs/tutorial-extras/translate-your-site"},next:{title:"Getting Started",permalink:"/tudocs/docs/getting-started"}},p=[{value:"Candle Trail",id:"candle-trail",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Long Example",id:"long-example",children:[],level:3},{value:"Short Example",id:"short-example",children:[],level:3}],level:2},{value:"Candle Magnitude",id:"candle-magnitude",children:[{value:"Candle Duration Example",id:"candle-duration-example",children:[],level:3},{value:"Pivots as Trails Example",id:"pivots-as-trails-example",children:[],level:3},{value:"No Inside Candles Example",id:"no-inside-candles-example",children:[],level:3},{value:"Initial Stop and 1st Target Stop",id:"initial-stop-and-1st-target-stop",children:[],level:3},{value:"ATR (Average True Range)",id:"atr-average-true-range",children:[],level:3},{value:"Managing Candle Magnitude Targets and Stops",id:"managing-candle-magnitude-targets-and-stops",children:[],level:3}],level:2}],d={toc:p};function h(e){var t=e.components,s=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exit-tactics"},"Exit Tactics"),(0,o.kt)("p",null,"Exit tactics are a vital part of crafting a successful trade plan with Trade Unafraid. These tactics define how and under which conditions your trade plan will close your position or a portion of your position. Becoming familiar with each of these tactics will prove invaluable in your journey as a successful trader using the Trade Unafraid platform. Below you will find a detailed explanation of each tactic along with some helpful examples.\n",(0,o.kt)("img",{alt:"exittacticempty.png",src:a(9831).Z}),"\nTo add a tactic to your trade plan, select it from the dropdown and push the ",(0,o.kt)("strong",{parentName:"p"},"add")," button to add it to the trade plan. A tactic is active if it is visible in the trade plan form; to remove the tactic, simply click on the red ",(0,o.kt)("strong",{parentName:"p"},"x")," in the top right corner. A trade plan can have multiple exit tactics, and they will all function independently. Even though the combination of all exit tactics may account for many times the actual quantity of your position, the orders will execute as they occur, and the remaining tactics will adjust to the new position quantity.  This is part of the magic of Trade Unafraid."),(0,o.kt)("h2",{id:"candle-trail"},"Candle Trail"),(0,o.kt)("p",null,"This exit tactic sets a candle trail on a position."),(0,o.kt)("p",null,"If the position direction is ",(0,o.kt)("strong",{parentName:"p"},"Long"),", and the current price breaches the ",(0,o.kt)("strong",{parentName:"p"},"previous candle low"),", the position will flatten."),(0,o.kt)("p",null,"If the position direction is ",(0,o.kt)("strong",{parentName:"p"},"Short"),", and the current price breaches the ",(0,o.kt)("strong",{parentName:"p"},"previous candle high"),", the position will flatten."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"candletrailconfig.png",src:a(3344).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Candle Duration:"),"  The candle time resolution that the tactic will use."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Break By:"),"  The amount in cents that the previous candle high/low must be broken by to trigger a stop.  Defaults to 0."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Pre/Post Data:")," If you enter a position before the first candle of the day completes, this determines whether to use pre/post market data to generate the first stop, or whether to wait for the first candle to complete.\n{.is-info}")),(0,o.kt)("h3",{id:"long-example"},"Long Example"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"candletraildiagram.png",src:a(886).Z})),(0,o.kt)("h3",{id:"short-example"},"Short Example"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"candletrailshortdiagram.png",src:a(6497).Z})),(0,o.kt)("h2",{id:"candle-magnitude"},"Candle Magnitude"),(0,o.kt)("p",null,'This exit tactic will set targets at the highs (if long) or lows (if short) of earlier candles, with the goal of taking incremental profits as the price hits each pivot. If you are familiar with "The Strat" trading methodology, this is known as ',(0,o.kt)("em",{parentName:"p"},"taking profits at magnitudes"),". Additionally, the tactic includes a ",(0,o.kt)("strong",{parentName:"p"},"Pivots as Trails")," option in which, after each target is reached, the previous pivot candle can be used as a stop for the remainder of the position.  In this way, each time a target is achieved, the stop is ratcheted up to the prior target.  The lists of targets and stops can be adjusted manually, if desired."),(0,o.kt)("p",null,"This tactic can be utilized whether trading stock or options. When trading stock, limit orders will be placed at the magnitudes. With options, triggers will be placed at the magnitudes that will sell off a portion of the position when the magnitude is hit.  In either case, the quantity to be closed is determined by the user.  A quantity of 0 is also valid as a way to define a point to ratchet up the stop while still holding the same position."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important Note:")," ",(0,o.kt)("em",{parentName:"p"},"It is strongly advised to use this tactic in combination with another stop loss tactic. This is due to the fact that until the first target is taken out, there is no stop set.")),(0,o.kt)("p",null,"It is also advisable to double-check the magnitudes selected, especially if trading on lower time frames. The targets are just looking for higher candle highs or lower candle lows, and you may enter into a trade with a cluster of targets, or a target very near the entry. In this case, it may be best to manually remove some targets, which can be done from the active trade plan section. We have many ideas to expand this functionality in the future, such as using ATR as a way to \u201cspace\u201d the targets."),(0,o.kt)("p",null,"To be clear, these targets are based on candle highs or lows, but they are not pivots in the way that most traders think of them.  If there is a sequence of ten red candles to the left of the entry, that may represent a single pivot to most traders, but the Candle Magnitude exit tactic could place a target at each candle high in that sequence.  In The Strat terms, this is a ",(0,o.kt)("em",{parentName:"p"},"pivot machine gun"),', and a target can be placed at each "pivot" or candle high.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"candlemagnitudeconfigurationwithfirststop.png",src:a(9470).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Candle Duration:"),"  The time frame that the tactic will use for evaluating the chart for candle highs/lows."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Pivots as Trails:")," Determines whether the tactic will add a corresponding stop for each pivot.  If unchecked, the tactic will not set stops, only targets."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Stop Placement:")," If ",(0,o.kt)("strong",{parentName:"p"},"Pivots as Trails")," is selected, this option allows you to choose whether the stops will be placed at the high (if long)/low (if short) or at the midpoint of the pivot candle.  You will have tighter stops with High/Low and looser stops with Mid Point."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"No Inside Candles:")," Determines whether inside candles will be used as pivots. If this is selected, it will filter out inside candles and not use them as pivots."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"# of Pivots:")," This is only applicable if ",(0,o.kt)("strong",{parentName:"p"},"Pivots as Trails")," is selected. This will determine how many targets/stops would would like to use. If ",(0,o.kt)("strong",{parentName:"p"},"Pivots as Trails")," is not selected, the number of targets will be ascertained solely from the ",(0,o.kt)("strong",{parentName:"p"},"% per Pivot")," list input.\n",(0,o.kt)("em",{parentName:"p"},"For example, if you attempt to take profit at three pivots, this field allows you to define, say, 7 pivots and use the remaining 4 as prices to ratchet your stops only.")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"% per Pivot:")," This field allows you to define a list of percentages. These percentages represent the percentage of your position that will be sold at each corresponding pivot. For example, let's say you enter the values: 10%, 15%, and 20%. At the first pivot, 10% of your position will be sold, then at the second, 15% will be sold, and at the third pivot 20% will be sold.\n",(0,o.kt)("em",{parentName:"p"},"This is a list input that allows you to add multiple values. To add a value, enter it into the box, and push the ",(0,o.kt)("strong",{parentName:"em"},"+")," button. You will see a box containing the value appear above the input. To remove a value, simply click the ",(0,o.kt)("strong",{parentName:"em"},"x")," in the corner of the box.")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"initial stop"),": If use Pivots as trail is selected, then this is used as the first stop after entry. More on this later..."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"1st target stop"),": If use Pivots as trail is selected, then this is used as the stop once the first target is hit. More on this later..."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Use ATR"),": Select this to use ATR in this exit tactic. ATR can be used to filtering pivots, replacing pivots, or for creating stops.\n{.is-info}")),(0,o.kt)("h3",{id:"candle-duration-example"},"Candle Duration Example"),(0,o.kt)("p",null,"In this example, we are using the 1-day ",(0,o.kt)("strong",{parentName:"p"},"Candle Duration"),". The tactic is configured to take 10% at each of the 5 targets. Notice that because we are not using the ",(0,o.kt)("strong",{parentName:"p"},"Pivots as Trails")," option, the number of pivots is inferred from our list of percentages."),(0,o.kt)("p",null,'See the example below for a visual representation of these pivots. The chart below assumes that you are entering long on the newest candle at the far right.  The green lines represent the five targets based on the highs of the prior candles.  At each of these candle highs, 10% of the position would be sold.  No stop would be set, and the remaining 50% of the position would have no target.  This is a somewhat "incomplete" use of the Candle Magnitude exit tactic that would need to be combined with one or more additional exit tactics to create a "complete" trade plan.'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"It is also worth noting that Trade Unafraid currently deletes exit tactics at midnight for open positions, so this example would only set these targets during the day when the position first opens."),"\n",(0,o.kt)("img",{alt:"maradailytimeframeconfig.png",src:a(8611).Z}),"\n",(0,o.kt)("img",{alt:"maradailytimeframegreen.png",src:a(3477).Z})),(0,o.kt)("h3",{id:"pivots-as-trails-example"},"Pivots as Trails Example"),(0,o.kt)("p",null,"With the use of the ",(0,o.kt)("strong",{parentName:"p"},"Pivots as Trails")," checkbox, instead of utilizing the exit tactic as a way to simply take profits at magnitudes, you can also use it to create ratcheting stops based on the previous candle magnitudes. This feature essentially allows you to morph this tactic from something that just takes profits, to a ratchet bracket, with the target being the future magnitude, and the stop being the prior magnitude.  As each target is reached, the bracket (both target and stop) shifts in the direction favorable to your trade, i.e. higher for a long position or lower for a short position."),(0,o.kt)("p",null,"You can configure where the stop is placed using the ",(0,o.kt)("strong",{parentName:"p"},"Stop Placement")," control, either at the midpoint between the high and the low of the previous magnitude candle (Mid Point), or at the magnitude itself (High/Low)."),(0,o.kt)("p",null,"In the configuration below, we have ",(0,o.kt)("strong",{parentName:"p"},"Pivots as Trails")," selected and 4 entered into the ",(0,o.kt)("strong",{parentName:"p"},"# of Pivots")," field. As you can see, our list of percentages is empty. This means that no profit will be taken at any of the four pivots, but the tactic will ratchet up the stop as each 0% target is reached.  Using this configuration, you will still hold 100% of your position, but at each target, you will lock in more profit as the stop ratchets in your direction."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"configfortrailbracketstop.png",src:a(7611).Z})),(0,o.kt)("h3",{id:"no-inside-candles-example"},"No Inside Candles Example"),(0,o.kt)("p",null,"This parameter will prevent the tactic from using inside candles as pivots and will only use higher highs or lower lows. This setting is the preferred way of finding magnitudes with The Strat methodology. Below are two examples of the same setup, one has the ",(0,o.kt)("strong",{parentName:"p"},"No Inside Candles")," setting enabled, and the other does not. In the example with ",(0,o.kt)("strong",{parentName:"p"},"No Inside Candles")," enabled, you can see that the inside candles (marked with a 1) are not used. Note that both scenarios include five targets, but that they are not the same five, because of the inclusion or exclusion of inside candles."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screen_shot_2021-09-20_at_1.48.22_pm.png",src:a(6995).Z}),(0,o.kt)("img",{alt:"screen_shot_2021-09-20_at_1.48.41_pm.png",src:a(8819).Z}),"\n",(0,o.kt)("strong",{parentName:"p"},"Important Note:")," ",(0,o.kt)("em",{parentName:"p"},"If you enter a a trade on the break of an inside candle, even if the ",(0,o.kt)("strong",{parentName:"em"},"No Inside Candles")," setting is enabled, the inside candle where you entered will still be used as a stop. This provides a break-even stop and ensures there will not be a large gap without loss prevention.")),(0,o.kt)("p",null,"One final thing to be aware of, if you are at all-time highs, or if there is no candle data available for the time frame you are using, then there will be no targets available for use by the Candle Magnitude exit tactic. Suppose, for example, that you are using 15-minute candles, but the stock has not been in this price zone for over a year. There will not be enough 15-minute candles available from the data source to find any in this price area. That means no targets will be found, and this tactic will have an empty list of targets and stops. It is a good idea to check this tactic for meaningful targets and stops when a new trade is filled."),(0,o.kt)("h3",{id:"initial-stop-and-1st-target-stop"},"Initial Stop and 1st Target Stop"),(0,o.kt)("p",null,"When using pivots as trail.. (todo)"),(0,o.kt)("h3",{id:"atr-average-true-range"},"ATR (Average True Range)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"atr.png",src:a(267).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Candles Back"),": the amount of past candles retrieved for computing ATR. The default is 14. As consistent with other platforms such as TOS, the current candle is included as part of the range of candles."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ATR Type"),": We provide 3: Wilder, SMA, and SMA_NO_GAP. Wilder is the default calculation. It is different than SMA in that a smooth factor is applied. SMA is short for simple moving average. It takes the average of the ranges (the maximum between candle height or high/low minus the previous close) of candles. SMA_NO_GAP takes the average of the heights (high-low) of the range of candles."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"filter_1rst_mag_by_atr.png",src:a(9715).Z})),(0,o.kt)("p",null,"This filter will specifically just the first pivot and make sure that it is further out than the percentage of ATR the user specifies. After the first pivot is found, this filter is deactivated."),(0,o.kt)("p",null,"Let's use the inside day break of PINS on 10/15 as an example. The ATR, using 14 candles back, Wilder, and the 1 day would be 1.78. If we input 25% of the Atr as our filter for the first pivot, this equals .45. The entry price would be at approximately 53.27. The first pivot must be above 53.72 (53.27+.45). This means that first pivot on the 3 bar at 53.4 will be passed. The next pivot at 54.03 will be used instead. once the first pivot is found, this filter is deactivated"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"filter_all_mag_by_atr.png",src:a(9197).Z})),(0,o.kt)("p",null,"This will ensure that all magnitudes found are spaced out by at least a certain percentage of ATR. This is used on all the pivots ( including the first, even if filter 1st mag by ATR is selected), and is used to filter out clustered pivots."),(0,o.kt)("p",null,"Let's use the inside day break of WDAY on 10/15 as an example. The ATR, using 14 candles back, Wilder, and the 1 day would be 6.93. If we input 20% of the Atr as our filter for the first pivot, this equals 1.39."),(0,o.kt)("p",null,"If we find the most recent magnitudes from that date, we would find:  273.55, 273.98, 274.98, 275.63, 277.58, 278.23."),(0,o.kt)("p",null,"Assuming an entry of 272.35, the high of the inside candle, the targets for the exit tactic would be computed as follows:"),(0,o.kt)("p",null,"272.35 (entry) +1.39 (percent of atr) = 273.74. This means that the first pivot of 273.55 will be ignored. The first pivot chosen will be 273.98."),(0,o.kt)("p",null,"273.98 (last pivot) +1.39=275.37. The 274.98 pivot will be ignored, and the 275.63 pivot will be used next instead."),(0,o.kt)("p",null,"275.63 (last pivot) + 1.39 = 277.02. The next pivot of 277.58 will be used next."),(0,o.kt)("p",null,"277.58 (last pivot) + 1.39 = 278.97. the pivot at 278.23 will be ignored."),(0,o.kt)("p",null,"Therefore, we are left with pivots at 273.98, 275.63, and 277.58."),(0,o.kt)("h3",{id:"managing-candle-magnitude-targets-and-stops"},"Managing Candle Magnitude Targets and Stops"),(0,o.kt)("p",null,"TBD"))}h.isMDXComponent=!0},267:function(e,t,a){t.Z=a.p+"assets/images/atr-b08e01d9d8d6d30ae8a692aead930857.png"},9470:function(e,t,a){t.Z=a.p+"assets/images/candlemagnitudeconfigurationwithfirststop-ff76a4f07aa7f472660bd18f67f6c846.png"},3344:function(e,t,a){t.Z=a.p+"assets/images/candletrailconfig-2863a435f81e43251ee93eeb4f75ae57.png"},886:function(e,t,a){t.Z=a.p+"assets/images/candletraildiagram-75640905920b4fa1bd42593514d8e1c2.png"},6497:function(e,t,a){t.Z=a.p+"assets/images/candletrailshortdiagram-c533b2921532e48a9beacd0cd931de40.png"},7611:function(e,t,a){t.Z=a.p+"assets/images/configfortrailbracketstop-8aa12ad264da88f571d57a6976324a7f.png"},9831:function(e,t){t.Z="data:image/png;base64,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"},9715:function(e,t,a){t.Z=a.p+"assets/images/filter_1rst_mag_by_atr-1d2451df8c5c9755fd0a35e217894350.png"},9197:function(e,t,a){t.Z=a.p+"assets/images/filter_all_mag_by_atr-88f20667ed4751f97effc7551011f80a.png"},8611:function(e,t,a){t.Z=a.p+"assets/images/maradailytimeframeconfig-ae7caa3f2567deddbdf2d023ae785854.png"},3477:function(e,t,a){t.Z=a.p+"assets/images/maradailytimeframegreen-161615f61ddd117cc7564ebaaf971d7c.png"},6995:function(e,t,a){t.Z=a.p+"assets/images/screen_shot_2021-09-20_at_1.48.22_pm-2cbfe793f1ef4b068574fb79cf42f3e1.png"},8819:function(e,t,a){t.Z=a.p+"assets/images/screen_shot_2021-09-20_at_1.48.41_pm-100150cda324138807ef9d29f0eeea5a.png"}}]);