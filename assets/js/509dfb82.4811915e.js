"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[1129],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,h=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9831:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),c=["components"],l={sidebar_position:3,tags:["Reference","exit tactics","atr trail"]},o="ATR Trail Exit Tactic",s={unversionedId:"Reference/Exit tactics/atr_trail",id:"Reference/Exit tactics/atr_trail",title:"ATR Trail Exit Tactic",description:"Overview",source:"@site/docs/Reference/Exit tactics/atr_trail.md",sourceDirName:"Reference/Exit tactics",slug:"/Reference/Exit tactics/atr_trail",permalink:"/tudocs/Reference/Exit tactics/atr_trail",editUrl:"https://github.com/gargleblaster/tudocs/tree/main/docs/Reference/Exit tactics/atr_trail.md",tags:[{label:"Reference",permalink:"/tudocs/tags/reference"},{label:"exit tactics",permalink:"/tudocs/tags/exit-tactics"},{label:"atr trail",permalink:"/tudocs/tags/atr-trail"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["Reference","exit tactics","atr trail"]},sidebar:"tutorialSidebar",previous:{title:"Scaling In Position Tactic",permalink:"/tudocs/Reference/Position tactics/scaling_in"},next:{title:"Candle Magnitude Exit Tactic",permalink:"/tudocs/Reference/Exit tactics/candle_magnitude"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2},{value:"Video",id:"video",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"atr-trail-exit-tactic"},"ATR Trail Exit Tactic"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ATR Trail exit tactic provides a trailing stop relative to the current ATR, or Average True Range, of the stock or underlying price. The user can define the parameters of the ATR calculation as well as the percentage of the ATR that will be utilized."),(0,i.kt)("p",null,"As the price changes and more candles are defined, the calculated ATR will be recalculated. The stop is then placed at the previous candle close minus the percentage of ATR selected(if short, the inverse of this). If the next calculated stop is lower that the current stop(higher if short), the stop remains at the current level."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"% of ATR"),": This parameter defines the percentage of the calculated ATR that will be used. For example, if the ATR is currently one dollar, the user selects 50%, the stop will be placed 50 cents below the current price."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Candles Back"),": This parameter defines how many candles back from the current candle will be included in the ATR calculation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ATR Type"),": This parameter defines the method used to calculate the ATR. Wilder is the most common of these methods. For more information about these formulas, take a look at this page:{' '} ATR Calculation Methods and Formulas"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ATR Candle Duration"),": This parameter defines the candle duration and time unit with which the ATR calculation is made."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/tudocs/Reference/Exit%20tactics/candle_trail"},"Candle Trail")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/tudocs/Reference/Exit%20tactics/mfe_retracement"},"MFE Retracement")),(0,i.kt)("h2",{id:"video"},"Video"),(0,i.kt)("p",null,"How to add an ATR trail (or modify it)\n",(0,i.kt)("a",{parentName:"p",href:"https://www.screencast.com/t/pGe3MGuq"},"https://www.screencast.com/t/pGe3MGuq")))}d.isMDXComponent=!0}}]);