"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[1175],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(r),f=n,p=h["".concat(c,".").concat(f)]||h[f]||d[f]||i;return r?o.createElement(p,a(a({ref:t},u),{},{components:r})):o.createElement(p,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8207:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:5},c="Soft Orders",l={unversionedId:"Introduction/soft-orders",id:"Introduction/soft-orders",title:"Soft Orders",description:"At this point, you may be wondering how Trade Unafraid is able to accomplish what it does, allowing your Trade Plan to have so many ways to exit the same position.  If a broker won't accept this, how does it work?  Part of the magic lies in the use of soft orders.",source:"@site/docs/Introduction/soft-orders.md",sourceDirName:"Introduction",slug:"/Introduction/soft-orders",permalink:"/tudocs/docs/Introduction/soft-orders",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Introduction/soft-orders.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"lifecycle",permalink:"/tudocs/docs/Introduction/lifecycle"},next:{title:"Entry Tactics",permalink:"/tudocs/docs/entry-tactics"}},u=[],d={toc:u};function h(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"soft-orders"},"Soft Orders"),(0,i.kt)("p",null,"At this point, you may be wondering how Trade Unafraid is able to accomplish what it does, allowing your Trade Plan to have so many ways to exit the same position.  If a broker won't accept this, how does it work?  Part of the magic lies in the use of soft orders."),(0,i.kt)("p",null,"In contrast to soft orders, there are resting orders.  A resting order is a stop loss or limit order that has been transmitted to the exchange.  It is resting there, waiting to be filled when price moves to it.  You don't have to do anything, because your order is already there waiting."),(0,i.kt)("p",null,"Soft orders are different, because they are not resting in the exchange.  Instead, they are resting in Trade Unafraid, which is watching every quote, every tick, every trade, waiting for price or some other criterion to trigger sending an order."),(0,i.kt)("p",null,"So TU behaves basically the way the exchange does, looking for the moment when your order becomes executable.  The difference is that the exchange has rigid rules about what it will accept.  Trade Unafraid's soft orders are far more flexible."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Soft Orders are the key to Trade Unafraid's unique power.  Your broker won't let you do what TU does, because they only accept Resting Orders, which are market, limit, or stop orders which are sent to the exchange as executable orders.  They will not accept, for example, closing orders that exceed the quantity of your position.  The most exotic thing they will do is OTO (one triggers other) and OCO (one cancels other) orders."),(0,i.kt)("p",null,"TU, on the other hand, uses soft orders which can co-exist, even though they would be conflicting from your broker's perspective.  So you can have an exit if the low of the prior candle gets broken, as well as an exit if your profitable position is about to turn into a loser, as well as if price reverses and retraces the prior candle by 50%, etc.  Your broker would not let you have exit orders at multiple levels that add up to more than the quantity you hold.  But TU has no problem juggling these soft orders.  You can also close your option position based on price action of the underlying stock, which, again, is not something most brokers are willing to handle."))}h.isMDXComponent=!0}}]);