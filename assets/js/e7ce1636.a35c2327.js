"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[9241],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4804:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:3,tags:["Reference","exit tactics","grab cents"]},s="Grab Cents Exit Tactic",c={unversionedId:"Reference/Exit tactics/grab_cents",id:"Reference/Exit tactics/grab_cents",title:"Grab Cents Exit Tactic",description:"Overview",source:"@site/docs/Reference/Exit tactics/grab_cents.md",sourceDirName:"Reference/Exit tactics",slug:"/Reference/Exit tactics/grab_cents",permalink:"/tudocs/Reference/Exit tactics/grab_cents",editUrl:"https://github.com/gargleblaster/tudocs/tree/main/docs/Reference/Exit tactics/grab_cents.md",tags:[{label:"Reference",permalink:"/tudocs/tags/reference"},{label:"exit tactics",permalink:"/tudocs/tags/exit-tactics"},{label:"grab cents",permalink:"/tudocs/tags/grab-cents"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["Reference","exit tactics","grab cents"]},sidebar:"tutorialSidebar",previous:{title:"Candle Trail Exit Tactic",permalink:"/tudocs/Reference/Exit tactics/candle_trail"},next:{title:"Green-to-Red Candles Exit Tactic",permalink:"/tudocs/Reference/Exit tactics/gtr_candles"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2},{value:"Video",id:"video",children:[],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grab-cents-exit-tactic"},"Grab Cents Exit Tactic"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This tactic places resting orders for specific profit targets you hope to reach. Once all the resting orders are completed, you can start a trail on the position, hoping to grab as much additional profit as you can."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"grab cents mode"),":"),(0,a.kt)("p",null,"Whether you would like to set up the quantity your resting orders via percentage of the position, or through quantity per order.\n$ per level:"),(0,a.kt)("p",null,"How many cents per order you would like to take for profit. This is set up relative to the current avg fill price of the position. Let's say you have a position with average fill price of 100, and you would like to take profits on a 25,50, and 75 cent gain. You would provide us a list: .25,.5,.75, and we would translate that into orders with limit prices: 100.25, 100.5, and 100.75."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"quantity/percentage per level")),(0,a.kt)("p",null,"Depending on the grab cents mode, define the quantity per resting order. If you choose percentage, and would like to place 3 resting orders, each accounting for 25% of your position, you would supply us a list: 25,25,25. Similarly, if you would like us to sell orders in quantities of 4,3, and then 2, you would select grab cents mode as quantity, and provide us a list here of: 4,3,2."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"trail quantity/percentage")),(0,a.kt)("p",null,"Depending on grab cents mode, the pct or the quantity of the position you would like to leave as a trail. If position is of size 5, grab cents mode is percentage, and the trail percentage is 20%, the trail will kick in once position has size 1. Similarly, if instead of percentage, you went with grab cents mode of quantity, and the trail quantity was set to 1, when the position has size 1, this trail will kick in."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"trail amount")),(0,a.kt)("p",null,"The amount of cents that you would like to have your trail set for. This trail will adjust in the direction of your position. So if long and your trail is .25, and current price is 100, the trail will be set to 99.75. If price moves to 100.25, the trail will be adjusted to 100. If it hits 100, the position will flatten."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's say you take a position of quantity 5. You would like to close 2 qty if the position ever gains 10 cents, another 2 if the position ever gains 25 cents, and leave a trail afterwards. That's what this tactic accomplishes."),(0,a.kt)("p",null,"12/30/21"),(0,a.kt)("p",null,"grab cent with qty unit of percentage, profit unit of percentage examples."),(0,a.kt)("p",null,"for all these examples, let's assume a fill price of $1 and qty of 8."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Image One")),(0,a.kt)("p",null,"the first image, is saying put one order out for a 25% gain for 25% of the position, and another for 50% gain for another 25% of the position. For the last 50%, create a 25% position price trail (like youd have on TOS) that kicks in once that order is filled. This 25% is based on the original fill price."),(0,a.kt)("p",null,"So this translates to 2 orders: order1 will have a qty of 2 and limit price of 1.25, order2 will have a qty of 2 and limit price of 1.5. A $.25 price trail (25%) will be created once those 2 orders fill"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Image two")),(0,a.kt)("p",null,"the second image, is saying put one order out for a 25% gain for 25% of the position, another for 50% gain for another 25% of the position, and one more for a 100% gain on 50% of the position. There is no price trail."),(0,a.kt)("p",null,"So this translates to 3 orders: order1 will have a qty of 2 and limit price of 1.25, order2 will have a qty of 2 and limit price of 1.5, and order3 will have a qty of 4 and a limit price of 2."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GCimage1.png",src:n(8287).Z}),"\n",(0,a.kt)("img",{alt:"GCimage2.png",src:n(1088).Z})),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"The trailing stop for Grab Cents differs from underlying price trail and position price trail in the following ways:\n1) It is a trail on the position and not the underlying.\n2) It only takes effect once your resting orders have filled, unlike the price trails, which are in effect immediately.\n3) Additionally, the grab cents percentages do not have to equal 100%. If you would like to place 50% of your position on grab cents, and have the rest rely on a candle trail, you can do that.\n4) If you elect grab cents percentage mode and the quantities do not match perfectly, we do our best to round efficiently."),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tudocs/Reference/Exit%20tactics/candle_magnitude"},"Candle Magnitude Exit")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tudocs/Reference/Exit%20tactics/ratchet_bracket"},"Ratchet Bracket")),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"grabcents.png",src:n(5473).Z})))}d.isMDXComponent=!0},8287:function(e,t,n){t.Z=n.p+"assets/images/GCimage1-a3b7e06f81a9b580dcfaf717ba0a50b1.png"},1088:function(e,t,n){t.Z=n.p+"assets/images/GCimage2-252e6fa7982e2deba959e951dee81f01.png"},5473:function(e,t,n){t.Z=n.p+"assets/images/grabcents-9ce9784a63391ea50ddcda615825d8ee.png"}}]);