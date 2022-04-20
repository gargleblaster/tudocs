"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[2599],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8916:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:3,tags:["Reference","exit tactics","loss limit"]},c="Loss Limit Exit Tactic",l={unversionedId:"Reference/Exit tactics/loss_limit",id:"Reference/Exit tactics/loss_limit",title:"Loss Limit Exit Tactic",description:"Overview",source:"@site/docs/Reference/Exit tactics/loss_limit.md",sourceDirName:"Reference/Exit tactics",slug:"/Reference/Exit tactics/loss_limit",permalink:"/tudocs/Reference/Exit tactics/loss_limit",editUrl:"https://github.com/gargleblaster/tudocs/tree/main/docs/Reference/Exit tactics/loss_limit.md",tags:[{label:"Reference",permalink:"/tudocs/tags/reference"},{label:"exit tactics",permalink:"/tudocs/tags/exit-tactics"},{label:"loss limit",permalink:"/tudocs/tags/loss-limit"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["Reference","exit tactics","loss limit"]},sidebar:"tutorialSidebar",previous:{title:"Green-to-Red Positions Exit Tactic",permalink:"/tudocs/Reference/Exit tactics/gtr_positions"},next:{title:"MFE Retracement Exit Tactic",permalink:"/tudocs/Reference/Exit tactics/mfe_retracement"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2},{value:"Video",id:"video",children:[],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"loss-limit-exit-tactic"},"Loss Limit Exit Tactic"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Sets the max loss you are willing to take on a position before you exit.  If this is set to $200, then once your positions overall pnl reaches -200, we will flatten the position."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"mode"),": percent (%) or amount ($). If you are in percent mode, set the amount value to a percentage, let's say 10%. If your cost basis is $2500, we will translate that to a $250 stop loss. If you use amount, you provide us the max dollar amount to lose. In the above example, you would set the amount field to $250."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": You provide us 200, not -200, for us to watch for a loss of 200. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": Once in a trade, if you have selected percent mode, this tactic shifts internally to amount mode. Meaning that let's say you have a position with cost basis of $2500, and a loss limit percent of 10%.  Once in an open position, the loss limit will be $250. If you want to decrease the loss limit from that point forward, you would not change from 10% to 8%, but rather from $250 to $240. It is much easier on the user to not have to think in terms of percentage at this point, and rather to go back to dollars."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("h2",{id:"video"},"Video"))}m.isMDXComponent=!0}}]);