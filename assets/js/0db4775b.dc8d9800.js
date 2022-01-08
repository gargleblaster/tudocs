"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[1400],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,h=p["".concat(c,".").concat(f)]||p[f]||s[f]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8405:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={sidebar_position:1},c="Getting Started",l={unversionedId:"Introduction/getting-started",id:"Introduction/getting-started",title:"Getting Started",description:"Welcome to Trade Unafraid!",source:"@site/docs/Introduction/getting-started.md",sourceDirName:"Introduction",slug:"/Introduction/getting-started",permalink:"/tudocs/docs/Introduction/getting-started",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Introduction/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Welcome to Trade Unafraid Documentation Site",permalink:"/tudocs/docs/intro"},next:{title:"First Steps",permalink:"/tudocs/docs/Introduction/first-steps"}},d=[{value:"Tradier Account",id:"tradier-account",children:[],level:3},{value:"Paper Trading",id:"paper-trading",children:[],level:3},{value:"Next Steps",id:"next-steps",children:[],level:2}],s={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Welcome to Trade Unafraid!"),(0,o.kt)("p",null,"Trade Unafraid is a unique and powerful trading platform.  It provides all of the capabilities of any other trading platform that you've used before, but it adds special features on top of that which you faster, more agile, and more automated."),(0,o.kt)("p",null,"Trade Unafraid, which we will sometimes refer to as TU, is both a discretionary and algorithmic trading platform, giving the trader the power to automate their trades while preserving the ability to manually override at any time."),(0,o.kt)("h3",{id:"tradier-account"},"Tradier Account"),(0,o.kt)("p",null,"If you already have a Tradier account, you just need to connect Trade Unafraid to it by granting access to trade on your behalf."),(0,o.kt)("p",null,"If you don't yet have a Tradier account, you can use this link to open one.  Trade Unafraid does not get anything in return, but Tradier will deposit $100 into your account when you fund the account with over $5000.  (I believe that's the numbers, but I might be slightly off.  You can confirm with them.)  This link will also get you commission-free trading for a flat fee of $10 per month.  There are still exchange fees on option trades that come to about 22-24 cents per contract, each way, but stock trades are completely free."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://brokerage.tradier.com/signup?platform=87"},"https://brokerage.tradier.com/signup?platform=87")),(0,o.kt)("h3",{id:"paper-trading"},"Paper Trading"),(0,o.kt)("p",null,'Until you have a Tradier account that is serving live data, you can use Trade Unafraid\'s SIM data and SIMULATED brokerage to experiment with the platform.  Once you have a Tradier account, you can use the "fingerprint" icon in the navigation bar to connect Trade Unafraid to Tradier, which will allow you to trade using LIVE data during market hours.  You are still able to use the SIMULATED brokerage, so you can paper trade with Trade Unafraid until your account is funded, and you feel ready to use the platform on real money.'),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"One of the first things you will need to do is set up your User Preferences."),(0,o.kt)("p",null,"Next, familiarize yourself with the user interface."),(0,o.kt)("p",null,"Now, learn how to create a Trade Plan in the watchlist area."),(0,o.kt)("p",null,"Next, you may want to create Trade Plan templates, which you can quickly load to enter a trade."),(0,o.kt)("p",null,"Next, learn how to manage a live trade with the Trade Plan toolbar."),(0,o.kt)("p",null,"Finally, learn the Trade Unafraid hot keys."))}p.isMDXComponent=!0}}]);