"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[487],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1280:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3,tags:["Reference","setups","candle trigger"]},c="Candle Trigger Setup",s={unversionedId:"Reference/Setups/candle_trigger",id:"Reference/Setups/candle_trigger",title:"Candle Trigger Setup",description:"Overview",source:"@site/docs/Reference/Setups/candle_trigger.md",sourceDirName:"Reference/Setups",slug:"/Reference/Setups/candle_trigger",permalink:"/tudocs/Reference/Setups/candle_trigger",editUrl:"https://github.com/gargleblaster/tudocs/tree/main/docs/Reference/Setups/candle_trigger.md",tags:[{label:"Reference",permalink:"/tudocs/tags/reference"},{label:"setups",permalink:"/tudocs/tags/setups"},{label:"candle trigger",permalink:"/tudocs/tags/candle-trigger"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["Reference","setups","candle trigger"]},sidebar:"tutorialSidebar",previous:{title:"Candle Pattern Setup",permalink:"/tudocs/Reference/Setups/candle_pattern"},next:{title:"Conviction Candle Setup",permalink:"/tudocs/Reference/Setups/conviction_candle"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2},{value:"Video",id:"video",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"candle-trigger-setup"},"Candle Trigger Setup"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Triggers based on the break of a previous or current candle. If the Trade Plan Direction is Long, this setup will trigger on the break of a candle high. If the Trade Plan Direction is Short, this setup will trigger on the break of a candle low."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Long, Short, or Both")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Trade Plans can be configured such that Long and Short are both active at the same time."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"timeUnit"),": determine the time unit of the candle you'd like to trade, between minutes, days, weeks, and months. If you choose day and click current, you are looking for a break of the current day's candle. If you choose weeks and set candles back to 1, you are looking for a break of last week's candle."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"candlesBack"),": # of candles back to determine which candle you'd like to have the break occur on. For example, if you select 0 and days, you are looking for a break of today's candle. If you select 1 and weeks, you are looking for a break of last week's candle. A last example is if you select 2 and months, in which you would look for a break of the candle occurring 2 months ago. If you select minutes, you must choose the previous candle."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"candle duration"),": the duration of time unit's candle. If you'd like 15 minute candles, set this to 15. If you want 3 day candles, set this to 3."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"validate candle"),": With most tactics, we apply validation to check if the setup is possible. For example, we reject a bounce setup if the price has already passed the bounce price. Or with a candle break entry tactic, we reject the setup if you are long, and price is already above candle high. Here, we provide you the option to choose whether you want to do that. It might be your preference to go right into entry tactics if the current has already passed yesterday's low/high."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"breakBy"),": the amount the previous candle high/low needs to be broken by to enter. If long and the previous candle high was 100, and this field is set to .1, it will wait till a break of 100.1 to enter."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),":"),(0,o.kt)("p",null,"If time unit minutes are selected, then the tactic will behave like the entry tactic candleBreak, in that it will update the trigger with each incoming candle. For example, let's say you are long and trading 15 minute candles. The first high comes in at 100. If the high is never broken, and the next 15 min candle only has a high of 99.5, the trigger will be adjusted to 99.5."),(0,o.kt)("p",null,"We calculate hours by market open, 9:30 am. If you use another platform and have pre market on, you might end up having a different candle open time than us. For example, if you trade the hour charts and have premarket on on TOS, the hourly candle starts at 9:00 am, since they are calculating since 4 am. As of now, we are always starting from 9:30 am."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("h2",{id:"video"},"Video"))}p.isMDXComponent=!0}}]);