"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[1321],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6512:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:3,tags:["Reference","setups","orb"]},s="Opening Range Breakout Setup",c={unversionedId:"Reference/Setups/orb",id:"Reference/Setups/orb",title:"Opening Range Breakout Setup",description:"Overview",source:"@site/docs/Reference/Setups/orb.md",sourceDirName:"Reference/Setups",slug:"/Reference/Setups/orb",permalink:"/tudocs/Reference/Setups/orb",editUrl:"https://github.com/gargleblaster/tudocs/tree/main/docs/Reference/Setups/orb.md",tags:[{label:"Reference",permalink:"/tudocs/tags/reference"},{label:"setups",permalink:"/tudocs/tags/setups"},{label:"orb",permalink:"/tudocs/tags/orb"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["Reference","setups","orb"]},sidebar:"tutorialSidebar",previous:{title:"Flag Setup",permalink:"/tudocs/Reference/Setups/flag"},next:{title:"Shared Templates",permalink:"/tudocs/SharedTradePlanTemplates/template-codes"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2},{value:"Video",id:"video",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opening-range-breakout-setup"},"Opening Range Breakout Setup"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This setup is for trying to play an opening range breakout. If you are long, we place a trigger on the break of the first candle high. If short, we place a trigger on the break of the first candle low. The user defines if it is the 5min candles, 15 min candles, etc. This setup specifically watches for the first candle of the day, and never updates after."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Candle duration"),': If you want to trade ORB based on the first 5 min candle, you would enter "5" in this field.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Break by"),": If you want to give a little bit of space before triggering, set this field. For example, let's say the first candle high was 100. If you only want to enter the trade if the stock reaches 100.05, you would set this field to .05."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": validation is applied. If you try and enter an orb setup long, and the stock is already above the first candle high, the trade plan will be cancelled."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("h2",{id:"video"},"Video"))}d.isMDXComponent=!0}}]);