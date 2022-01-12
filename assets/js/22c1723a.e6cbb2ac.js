"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[4],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,m=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8421:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return h},default:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:5},l="Option Selection",p={unversionedId:"Reference/option-selection",id:"Reference/option-selection",title:"Option Selection",description:"Option selection occurs in two phases, first at the creation of the Trade Plan, but then also at the time of entry. The most important thing to be aware of is that at the time of entry, by regulatory rules, we can only select from those option strikes and expirations that you have already approved when creating the Trade Plan.",source:"@site/docs/Reference/option-selection.md",sourceDirName:"Reference",slug:"/Reference/option-selection",permalink:"/tudocs/Reference/option-selection",editUrl:"https://github.com/gargleblaster/tudocs/tree/main/packages/create-docusaurus/templates/shared/docs/Reference/option-selection.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Option Filters",permalink:"/tudocs/Reference/option-filters"},next:{title:"Position Management",permalink:"/tudocs/Reference/position-management"}},h=[{value:"Option &quot;Approval&quot;",id:"option-approval",children:[],level:3},{value:"Option Criteria",id:"option-criteria",children:[{value:"Option Chain Strategy",id:"option-chain-strategy",children:[{value:"Tightest Spread",id:"tightest-spread",children:[],level:5},{value:"OTM1:",id:"otm1",children:[],level:5},{value:"ITM1:",id:"itm1",children:[],level:5}],level:4},{value:"Option Filters",id:"option-filters",children:[],level:4}],level:3}],c={toc:h};function d(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"option-selection"},"Option Selection"),(0,i.kt)("p",null,"Option selection occurs in two phases, first at the creation of the Trade Plan, but then also at the time of entry. The most important thing to be aware of is that at the time of entry, by regulatory rules, we can ",(0,i.kt)("strong",{parentName:"p"},"only")," select from those option strikes and expirations that you have already approved when creating the Trade Plan."),(0,i.kt)("h3",{id:"option-approval"},'Option "Approval"'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_2.png",src:n(9799).Z})),(0,i.kt)("p",null,"This part of the Trade Plan form is where you select the options that you approve of Trade Unafraid trading for you. You can select the expirations that you are interested in trading my editing the table beneath ",(0,i.kt)("strong",{parentName:"p"},"Available Expiration Dates"),".  You can control these expirations using the X's to remove and the chevron to add to the list of allowed expirations.  By default, we provide you the two nearest expirations.  For most stocks and ETFs, expirations are on Fridays, though SPY options expire every Monday, Wednesday, and Friday (as well as month-end).  There is also the setting for ",(0,i.kt)("strong",{parentName:"p"},"not expiring today")," which can push the front two expirations if today is an option expiration day."),(0,i.kt)("p",null,"By clicking the ",(0,i.kt)("strong",{parentName:"p"},"SELECT OPTIONS")," button, you can manually choose by checkboxes exactly which contract or contracts you are willing to trade.  The pop-up dialog box will contain only options for the expirations that you have selected, and then you can use checkboxes to include or exclude individual contracts."),(0,i.kt)("p",null,"You can use the controls on the main form to quickly cull the list without having to open the pop-up dialog box, selecting from ",(0,i.kt)("strong",{parentName:"p"},"All options"),", and ",(0,i.kt)("strong",{parentName:"p"},"none"),", ",(0,i.kt)("strong",{parentName:"p"},"all"),", or ",(0,i.kt)("strong",{parentName:"p"},"front")," for Calls and Puts separately.  ",(0,i.kt)("strong",{parentName:"p"},"Front")," will select only the nearest expiration *from the chains that you selected under ",(0,i.kt)("strong",{parentName:"p"},"Available Expiration Dates*"),". ",(0,i.kt)("strong",{parentName:"p"},"All")," will select all the expirations *from the chains that you selected under ",(0,i.kt)("strong",{parentName:"p"},"Available Expiration Dates*"),". ",(0,i.kt)("strong",{parentName:"p"},"None")," will mean you cannot trade any of the Calls or Puts where ",(0,i.kt)("strong",{parentName:"p"},"None")," is selected."),(0,i.kt)("p",null,"Whatever options are available to trade are displayed in the table of option choices.  If the table is empty, you will not have any options available to trade when your setup triggers.  The table may also contain a very large number of options, from which Trade Unafraid will choose the best choice at the time the setup triggers."),(0,i.kt)("p",null,"Once those are selected, you can move on to the option configuration section."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your settings in User Preferences play a part in the defaults in this section. "))),(0,i.kt)("h3",{id:"option-criteria"},"Option Criteria"),(0,i.kt)("p",null,"In the section above, you specified those contracts that you approve of trading.  Any of them may end up being the contract selected at entry time.  In this section, you will configure how Trade Unafraid will automate final option selection based on your criteria. "),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Critical")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The one thing to note in this section is that if ",(0,i.kt)("strong",{parentName:"p"},"option filters")," is shown in red and has a 0 next to it, it means that there are no options which satisfy your option selection criteria, which means that if a setup were to trigger at this moment, the trade would be skipped, because there are no options that qualify."),(0,i.kt)("p",{parentName:"div"},"This can happen for a variety of reasons, such as your quantity basis being too small, e.g. you try to buy TSLA options, but the dollar amount for your market order entry tactic is just $50, so there are no options to purchase for that amount of money."),(0,i.kt)("p",{parentName:"div"},"If you run into this situation, try removing option filters and criteria until the number of matches becomes non-zero.  Then you can revisit your filters and criteria one-by-one, so that you can reduce your choices while still having more than zero."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_1.png",src:n(1396).Z})),(0,i.kt)("h4",{id:"option-chain-strategy"},"Option Chain Strategy"),(0,i.kt)("h5",{id:"tightest-spread"},"Tightest Spread"),(0,i.kt)("p",null,"This strategy will parse through the chain, and, after finding all the options that pass your option filters, select the one with the tightest spread. If you use this strategy, it is best to do so under one of the following circumstances."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You have manually selected a group of options, and you are okay with trading any of them, and you just want the one with the tightest spread.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You have filled out the ",(0,i.kt)("strong",{parentName:"p"},"option filters")," section in order to make sure you select the option with the characteristics that meet your criteria. This could be in terms of the dollar amount invested in the trade, the price of the trade, the option spread, or the number of contracts bought."))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Without either of these, it is likely that the Trade Unafraid will select an option that is unfavorable for you. It is software, and it does exactly what you tell it to do.  Very often, what will happen is that the tightest spread at the time of entry happens to be a very deep OTM option, perhaps trading at .10 x .11.  It will have a tiny delta and not move, even though its spread is technically the tightest available.  And you could end up buying many of them, based on your trade allocation."))),(0,i.kt)("h5",{id:"otm1"},"OTM1:"),(0,i.kt)("p",null,"Selects the nearest out of the money option. All the option filters still apply, so you can tell the software to do something like take the nearest out the money option as long as the spread is under 10%. If multiple expirations are selected, Trade Unafraid will find the OTM1 option for each of those and trade the one with the tightest spread."),(0,i.kt)("p",null,"If OTM1 is selected, it is important to make sure you have included the OTM1 contract in the Option Approval section above.  Trade Unafraid can only trade options that you have approved.  If the option that ends up being the nearest out-of-the-money strike is not in the list of approved contracts from above, then the OTM1 contract will not be allowed to trade, and your setup will end up failing to enter, because there is no contract that meets your criteria.  (It is safest to use the option shortcuts ",(0,i.kt)("strong",{parentName:"p"},"all")," or ",(0,i.kt)("strong",{parentName:"p"},"front")," when selecting OTM1 to ensure that the OTM1 contract will be approved to trade.)"),(0,i.kt)("p",null,"Additionally, if you try to manually select an option that is specifically not OTM1, and leave the configuration on OTM1, this will result in no option being selectable at the time of trade. There have been a few cases where a user tried to manually select a non-OTM1 option and failed to enter the trade because OTM1 was still the strategy of choice."),(0,i.kt)("h5",{id:"itm1"},"ITM1:"),(0,i.kt)("p",null,"Selects the nearest in the money option. All the option filters still apply, so you can tell the software to do something like take the nearest in the money option as long as the spread is under 10%. If multiple expirations are selected, Trade Unafraid will find the nearest in the money option for each of those and trade the one with the tightest spread."),(0,i.kt)("p",null,"If ITM1 is selected, it is important to make sure you have included the ITM1 contract in the Option Approval section above.  Trade Unafraid can only trade options that you have approved.  If the option that ends up being the nearest in-the-money strike is not in the list of approved contracts from above, then the ITM1 contract will not be allowed to trade, and your setup will end up failing to enter, because there is no contract that meets your criteria.  (It is safest to use the option shortcuts ",(0,i.kt)("strong",{parentName:"p"},"all")," or ",(0,i.kt)("strong",{parentName:"p"},"front")," when selecting ITM1 to ensure that the ITM1 contract will be approved to trade.)"),(0,i.kt)("p",null,"Additionally, if you try to manually select an option that is specifically not ITM1, and leave the configuration on ITM1, this will result in no option being selectable at the time of trade. There have been a few cases where a user tried to manually select a non-ITM1 option and failed to enter the trade because ITM1 was still the strategy of choice."),(0,i.kt)("h4",{id:"option-filters"},"Option Filters"),(0,i.kt)("p",null,"OTM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'These are "pass filters," so selecting this means that only OTM \noptions will be considered, and ITM options are rejected.\n')),(0,i.kt)("p",null,"ITM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'These are "pass filters," so selecting this means that only ITM\noptions will be considered, and OTM options are rejected.\n')),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,"What happens if you check both OTM and ITM?"),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,"Not expiring today"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Rejects any options that expire today.\n")),(0,i.kt)("p",null,"Tight spread pct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Removes all options that have spreads over this percentage. If\nyou input 10%, this will remove all options that have a bid/ask spread\nwider than 10%. This feature attempts to calculate an average of the\npast few quotes to determine if it is consistently a bad spread,\nor perhaps just one bad quote. This filter should only be used if\nthe user is trading options whose spreads can be very volatile,\nsuch as TDOC, CRM, etc. If you are trading a stock like TSLA, it\ncan happen that you get a TSLA option with a bad spread\nmomentarily and have the trade filtered out by this setting.\n")),(0,i.kt)("p",null,"Tight spread cents"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Removes all options that have spreads wider than this dollar \namount. If you input .25, this will remove all options that have\nspreads wider than 25 cents.\n")),(0,i.kt)("p",null,"Price range"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'This is also a "pass filter." Only options that are within this price \nrange can be traded. If you input a min of 2, and a max of 5, this will \nfilter out all options whose price is less than 2 or greater than 5.\n')),(0,i.kt)("p",null,"Qty/Dollar range"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'If your trade plan quantity basis is Dollars (in the top left of\nthe form), then the "option range" filter will be available. If\nyour trade plan quantity basis is Qty, then the "qty range"\nfilter will be available.\n\nDollar range is used in the following scenario. Let\u2019s say you have QTY\nselected for your trade plan, and you set the qty basis of the market\norder entry tactic to 5 contracts. From those 5 contracts, you\u2019d like\nto only trade options that will result in a specific Dollar range\ninvested. You could do something like set the "min dollar" to $1500,\nand the "max dollar" to $2000. With this, Trade Unafraid will know to only select\nfrom options that have a price between 3 and 4, which, if multiplied\nby 5 contracts, will result in the minimum cost basis of $1500 to\n$2000.\n\nQty range is used in the following scenario. Let\u2019s say you have Dollars\nselected for your trade plan, and you set the qty basis of the market\norder entry tactic to $2000. From those $2000, you\u2019d like to only\ntrade options that will result in a specific number of contracts. You\ncould do something like set the "min qty" to 5 contracts, and the "max\nqty" to 10 contracts. With this, Trade Unafraid will specifically only select\noptions that will result in $2000 cost basis, but result in a position of \n5 to 10 contracts.\n')))}d.isMDXComponent=!0},1396:function(e,t,n){t.Z=n.p+"assets/images/img_1-3f14ba499adadbb70959bd2bee1fa761.png"},9799:function(e,t,n){t.Z=n.p+"assets/images/img_2-a1533449f1f87f79130d410c3f309b9e.png"}}]);