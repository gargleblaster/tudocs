"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[9442],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),d=i,f=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return a?n.createElement(f,r(r({ref:t},u),{},{components:a})):n.createElement(f,r({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4970:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={title:"MFE Retracement",description:"Maximum Favorable Excursion Retracement Exit Tactic",tags:["exit tactics"]},c=void 0,l={unversionedId:"TradePlans/ExitTactics/mfe-retracement",id:"TradePlans/ExitTactics/mfe-retracement",title:"MFE Retracement",description:"Maximum Favorable Excursion Retracement Exit Tactic",source:"@site/docs/TradePlans/ExitTactics/mfe-retracement.md",sourceDirName:"TradePlans/ExitTactics",slug:"/TradePlans/ExitTactics/mfe-retracement",permalink:"/tudocs/TradePlans/ExitTactics/mfe-retracement",editUrl:"https://github.com/gargleblaster/tudocs/tree/main/docs/TradePlans/ExitTactics/mfe-retracement.md",tags:[{label:"exit tactics",permalink:"/tudocs/tags/exit-tactics"}],version:"current",frontMatter:{title:"MFE Retracement",description:"Maximum Favorable Excursion Retracement Exit Tactic",tags:["exit tactics"]},sidebar:"tutorialSidebar",previous:{title:"Exit Tactics Based on the Price of the Instrument Being Traded",permalink:"/tudocs/TradePlans/ExitTactics/exit-tactics-based-on-underlying-price"},next:{title:"Active Trade Plan List",permalink:"/tudocs/TradePlanManagement/active-trade-plan-list"}},u=[{value:"MFE Retracement",id:"mfe-retracement",children:[],level:2}],h={toc:u};function p(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"mfe-retracement"},"MFE Retracement"),(0,o.kt)("p",null,"This tactic creates a stop at some % retracement from the most profitable point achieved in a trade (in this document, this term will be called MFE, which is short for Maximum Favorable Excursion). There are several modes and settings for this tactic. The overall construct though hinges on two areas: 1) an activation point, and 2) a retracement amount. You essentially tell Trade Unafraid that once you are up by some activation amount, X, do not let my gains fall back beneath some retracement amount, Y."),(0,o.kt)("p",null,"The activation point is needed in order to avoid quick stop outs.  For example, if your retracement limit is 50%, without an activation limit, a gain of two cents falling to one cent would trigger an exit based on your gains dropping by 50%.  Obviously, this is not what we are after, so we use an activation amount to let the trade move a bit before comparing MFE to current P&L.  That allowing the trade to move a bit is defined by the activation amount."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mferetracement1.jpg",src:a(7676).Z})),(0,o.kt)("p",null,"There are two MFE Types, \u201cPnL\u201d and \u201cPosition Price\u201d. If you use Position Price, the goal is to track the MFE by the actual price of the traded instrument.  In this case, we are basing the MFE and retracement on the change in the price of the stock or option being traded.  In contrast, PnL would be looking at the change in the value of the overall position help.  The biggest difference this makes is in terms of the activation settings, and how the tactic interacts with if the position changes, whether by adding to the position, or closing a portion of the position. This will be explained in more detail later."),(0,o.kt)("p",null,"If Position Price is selected, then there are two configuration fields to be provided: Activation Amount as a percentage, and then the Retrace %.  Suppose, for example, that you set the Activation Amount to 10% and Retrace to 60%. If your position was filled at $10 per contract, then the Activation price would be 10% above that, or $11. If price does reach $11 per contract, then an MFE Retracement stop would immediately be set at 10.6, which is 60% of the MFE.  As price continued to rise above $11, the stop would continue to move up, always being set at 60% of the MFE."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mferetracement2.jpg",src:a(1604).Z})),(0,o.kt)("p",null,"The other MFE type is \u201cPnL\u201d which is short for Profit and Loss.  With this configuration, the tactic will be activated based on achieving a certain minimum profit threshold, after which, the retracement percentage stop goes live.  There are two additional fields here that are not available when MFE Type is Position Price."),(0,o.kt)("p",null,"The PnL Setting specifies whether you will express the Activation Amount as a Dollar amount or a Percentage.  So you can activate the MFE Retracement once you reach a certain profit amount in dollars or as a percentage of the cost of your position."),(0,o.kt)("p",null,"PnL Type defines how you would like Trade Unafraid to evaluate your profit.  The choices here are Overall or Unrealized.  These only differ once you have some realized profits by closing some of your open position.  The question is whether you would like to base your Activation Amount and Retrace on the Overall profit, both realized and unrealized, or if you only want your unrealized (still open) position taken into account when making these calculations."),(0,o.kt)("p",null,"To illustrate, suppose you configured the exit tactic as shown."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mferetracement3.jpg",src:a(4750).Z})),(0,o.kt)("p",null,"If we suppose that your position had a cost basis of $1000, then when your trade's overall PnL reached $100 (10% of the cost basis), the MFE Retracement stop would be activated.  The stop would initially be set to $60 PnL, which is 60% of the Maximum Favorable Excursion.  If the overall profit were to fall below $60, this exit tactic would close the position.  If the MFE were to rise to $300 overall profit, then the stop would rise to 60% of that or $180.  As the MFE increases, the Retracement percentage would also increase, similar to a trailing stop, but not in the same penny-for-penny manner.  In this example, the stop would always be located at the price that is 60% of the MFE for the Overall profit of the trade."),(0,o.kt)("p",null,"###Interacting with a position that is added to or taken profits from"),(0,o.kt)("p",null,"No matter how the tactic is configured, if shares or contracts are added to the position, this tactic will cleanly reset itself.  It will go back into pre-activation state, and the activate and retrace values will be recalculated as if this is a brand new trade.  Having said that, if you add a small amount to an existing position that is already well into profit, the activation is likely to occur quickly or instantly.  And the retrace percent is still based on the overall profit, which is already substantial.  It is only if you add a large amount relative to your existing position that you will see a significant delay in activation or a significant change in your stop location.  The formulae remain the same, but they are based on your total position of both old and new shares or contracts combined."),(0,o.kt)("p",null,"If your MFE Type is PnL and you base Pnl Type on Unrealized profits, this will also cause the tactic to reset itself as well, even when taking partial profits. This is necessary to avoid the situation where Unrealized PnL drops significantly simply because of the reduction in size of the remaining open position, resulting in the stop being triggered even though price had not dropped.  To reiterate, if you are basing your Retracement on Unrealized profits, any partial close will reset this tactic, to prevent triggering an unintended stop-out."))}p.isMDXComponent=!0},7676:function(e,t,a){t.Z=a.p+"assets/images/mferetracement1-bc9ad11652d6c7437a924610ba5579e6.png"},1604:function(e,t,a){t.Z=a.p+"assets/images/mferetracement2-254ff4218e7bfab0d118a623f23a7d4b.png"},4750:function(e,t,a){t.Z=a.p+"assets/images/mferetracement3-70a4c1bf56e0800f3c3413c7efee0139.png"}}]);