"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[2252],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},c=Object.keys(e);for(i=0;i<c.length;i++)r=c[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)r=c[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||c;return r?i.createElement(m,o(o({ref:t},u),{},{components:r})):i.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var l=2;l<c;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6091:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var i=r(7462),n=r(3366),c=(r(7294),r(3905)),o=["components"],a={sidebar_position:3,tags:["Reference","exit tactics","loss limit"]},s="Loss Limit Exit Tactic",l={unversionedId:"Reference/Exit tactics/preserve_profit",id:"Reference/Exit tactics/preserve_profit",title:"Loss Limit Exit Tactic",description:"Overview",source:"@site/docs/Reference/Exit tactics/preserve_profit.md",sourceDirName:"Reference/Exit tactics",slug:"/Reference/Exit tactics/preserve_profit",permalink:"/tudocs/Reference/Exit tactics/preserve_profit",editUrl:"https://github.com/gargleblaster/tudocs/tree/main/packages/create-docusaurus/templates/shared/docs/Reference/Exit tactics/preserve_profit.md",tags:[{label:"Reference",permalink:"/tudocs/tags/reference"},{label:"exit tactics",permalink:"/tudocs/tags/exit-tactics"},{label:"loss limit",permalink:"/tudocs/tags/loss-limit"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["Reference","exit tactics","loss limit"]},sidebar:"tutorialSidebar",previous:{title:"Loss Limit Exit Tactic",permalink:"/tudocs/Reference/Exit tactics/position_price_trail"},next:{title:"Ratchet Bracket Exit Tactic",permalink:"/tudocs/Reference/Exit tactics/ratchet_bracket"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Video",id:"video",children:[],level:2}],p={toc:u};function f(e){var t=e.components,r=(0,n.Z)(e,o);return(0,c.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"loss-limit-exit-tactic"},"Loss Limit Exit Tactic"),(0,c.kt)("h2",{id:"overview"},"Overview"),(0,c.kt)("p",null,"The Loss Limit Exit Tactic is a simple way to set a P&L-based exit.  Whatever you set as your Loss Limit, if your position's pnl drops to this amount, your trade will flatten."),(0,c.kt)("h2",{id:"parameters"},"Parameters"),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("h2",{id:"notes"},"Notes"),(0,c.kt)("h2",{id:"video"},"Video"))}f.isMDXComponent=!0}}]);