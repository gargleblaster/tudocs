"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[449],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2028:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:1,sidebar_label:"Active Trade Plan List"},c="Active Trade Plan List",s={unversionedId:"TradePlanManagement/active-trade-plan-list",id:"TradePlanManagement/active-trade-plan-list",title:"Active Trade Plan List",description:"At the top of the area where all active Trade Plans are shown, there is a toolbar with several important controls.  These controls affect all active Trade Plans and should be used with care.",source:"@site/docs/TradePlanManagement/active-trade-plan-list.md",sourceDirName:"TradePlanManagement",slug:"/TradePlanManagement/active-trade-plan-list",permalink:"/tudocs/TradePlanManagement/active-trade-plan-list",editUrl:"https://github.com/gargleblaster/tudocs/tree/main/packages/create-docusaurus/templates/shared/docs/TradePlanManagement/active-trade-plan-list.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Active Trade Plan List"},sidebar:"tutorialSidebar",previous:{title:"Setup Filters",permalink:"/tudocs/TradePlans/setup-filters"},next:{title:"Watchlist",permalink:"/tudocs/TradePlanManagement/watchlist"}},d=[{value:"Symbol",id:"symbol",children:[],level:5},{value:"Status",id:"status",children:[],level:5},{value:"Template",id:"template",children:[],level:5},{value:"Creation Time",id:"creation-time",children:[],level:5},{value:"Pause",id:"pause",children:[],level:5},{value:"Unpause",id:"unpause",children:[],level:5},{value:"Cancel",id:"cancel",children:[],level:5},{value:"Flatten",id:"flatten",children:[],level:5},{value:"Collapse",id:"collapse",children:[],level:5},{value:"Expand",id:"expand",children:[],level:5}],p={toc:d};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"active-trade-plan-list"},"Active Trade Plan List"),(0,l.kt)("p",null,"At the top of the area where all active Trade Plans are shown, there is a toolbar with several important controls.  These controls affect all active Trade Plans and should be used with care."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"active-trade-plan-toolbar.png",src:a(415).Z})),(0,l.kt)("p",null,"The radio group on the left is used to sort the active Trade Plans."),(0,l.kt)("h5",{id:"symbol"},"Symbol"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Sorted alphabetically by ticker symbol\n")),(0,l.kt)("h5",{id:"status"},"Status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Active positions will appear before Trade Plans with no position\n")),(0,l.kt)("h5",{id:"template"},"Template"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Sorted by the Template used to create the Trade Plan\n")),(0,l.kt)("h5",{id:"creation-time"},"Creation Time"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Sorted by the time when the Trade Plan was created\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The buttons on the right can be used to affect all Trade Plans at once.  This is powerful and convenient, but it must be used with care."),(0,l.kt)("h5",{id:"pause"},"Pause"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"All flat Trade Plans will be paused, meaning they will not enter \nany new trades.  All existing Trade Plans with a position will \ncontinue to function normally, including all exit tactics.\n")),(0,l.kt)("h5",{id:"unpause"},"Unpause"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Unpauses all Trade Plans, so they will all once again enter on a \ntriggered setup.\n")),(0,l.kt)("h5",{id:"cancel"},"Cancel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"All flat Trade Plans will be cancelled and be removed from the \nlist of active Trade Plans.  Any Trade Plans with an active \nposition will continue to function normally.\n")),(0,l.kt)("h5",{id:"flatten"},"Flatten"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"All positions will be closed immediately.\n")),(0,l.kt)("h5",{id:"collapse"},"Collapse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Purely visual, simply collapes all Trade Plans to the small \nrectangular view.  This has no impact on trading, but it can \ngreatly save on CPU and network utilization when there are many \nactive Trade Plans.\n")),(0,l.kt)("h5",{id:"expand"},"Expand"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Purely visual, simply expands all Trade Plans to the full view\nincluding the chart.  This has no impact on trading, but it can\nput a great deal of load on CPU and network in your browser when\nthere are many active Trade Plans.\n")),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Use caution with Expand All")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can make your browser nearly unresponsive, if you have a large number of active Trade Plans.  Your server should continue to function, but your ability to affect manual control from your browser may be greatly impacted by expanding everything at once."))))}u.isMDXComponent=!0},415:function(e,t,a){t.Z=a.p+"assets/images/active-trade-plan-toolbar-32d032444c45ca6e77cd76085412eee5.png"}}]);