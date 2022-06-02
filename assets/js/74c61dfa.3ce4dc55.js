"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[4073],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5354:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={sidebar_position:3,tags:["Reference","setups","break candle type"]},s="Break Candle Type Setup",c={unversionedId:"Reference/Setups/break_candle_type",id:"Reference/Setups/break_candle_type",title:"Break Candle Type Setup",description:"Overview",source:"@site/docs/Reference/Setups/break_candle_type.md",sourceDirName:"Reference/Setups",slug:"/Reference/Setups/break_candle_type",permalink:"/tudocs/Reference/Setups/break_candle_type",editUrl:"https://github.com/gargleblaster/tudocs/tree/main/docs/Reference/Setups/break_candle_type.md",tags:[{label:"Reference",permalink:"/tudocs/tags/reference"},{label:"setups",permalink:"/tudocs/tags/setups"},{label:"break candle type",permalink:"/tudocs/tags/break-candle-type"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["Reference","setups","break candle type"]},sidebar:"tutorialSidebar",previous:{title:"Break Setup",permalink:"/tudocs/Reference/Setups/break"},next:{title:"Break EMA Setup",permalink:"/tudocs/Reference/Setups/break_ema"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2},{value:"Video",id:"video",children:[],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"break-candle-type-setup"},"Break Candle Type Setup"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This is a setup that looks for a specific type of candle, and looks to break this candle. Whether that means your goal is break the last shooter or the last red candle, this is what this setup hopes to achieve. At the moment, we have only implemented breaking the last red or green candle. If your tradePlan is configured for a long trade, you are attempting to break the high of the candle, if short, you are attempting to break the low of the candle."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CandleType"),": The type of candle you would like to trade. Right now, LAST is the only available option, representing trading the last candle of a certain color."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CandleColor"),": The color of the candle you would like to trade. Right now, there is red or green. By selecting candleType of LAST and color candle of red, you can configure the setup to look to only trade based on the last red candle."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"candleDuration"),": the duration of the candle you'd like to track."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"breakBy"),": the amount the previous candle high/low needs to be broken by to enter. If long and the previous candle high was 100, and this field is set to .1, it will wait till a break of 100.1 to enter."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"filterForToday"),": Sometimes, you might enter this tradePlan before a red candle has occurred during the day (say if you enter the tradePlan before the open). Our default behavior will be to look for the last red candle from the day prior, and set a trigger based on that. This filter will ensure that you only set a trigger based on today's candles."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),":"),(0,o.kt)("p",null,'If when you attempt to use this tactic, the current price is above the candle that you are tracking if long, or below the candle if short, the software will know to wait until the next time an appropriate candle occurs. This means you can leave this strategy running all day by unchecking the field "Restart System Once Position Has Flattened". Additionally, please note that if the trade is cancelled for other reasons, such as a failed option spread when trying to trade, or a failed filter, the trade plan will be terminated.'),(0,o.kt)("p",null,"We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on in TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("h2",{id:"video"},"Video"))}p.isMDXComponent=!0}}]);