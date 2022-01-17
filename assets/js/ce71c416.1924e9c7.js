"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[5346],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5553:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:5,tags:["templates"]},s="Template Utilities",u={unversionedId:"TradePlanManagement/template-utilities",id:"TradePlanManagement/template-utilities",title:"Template Utilities",description:"Overview",source:"@site/docs/TradePlanManagement/template-utilities.md",sourceDirName:"TradePlanManagement",slug:"/TradePlanManagement/template-utilities",permalink:"/tudocs/TradePlanManagement/template-utilities",editUrl:"https://github.com/gargleblaster/tudocs/tree/main/packages/create-docusaurus/templates/shared/docs/TradePlanManagement/template-utilities.md",tags:[{label:"templates",permalink:"/tudocs/tags/templates"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,tags:["templates"]},sidebar:"tutorialSidebar",previous:{title:"Quick Trades",permalink:"/tudocs/TradePlanManagement/quick-trades"},next:{title:"Trade History",permalink:"/tudocs/TradePlanManagement/trade-history"}},p=[{value:"Overview",id:"overview",children:[],level:3},{value:"Save",id:"save",children:[],level:3},{value:"Load",id:"load",children:[],level:3},{value:"Delete",id:"delete",children:[],level:3},{value:"Share",id:"share",children:[],level:3},{value:"Import",id:"import",children:[],level:3},{value:"Create Trade Plan",id:"create-trade-plan",children:[],level:3}],d={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"template-utilities"},"Template Utilities"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Trade Unafraid manages all positions through a Trade Plan.  A Trade Plan includes tactics, as well as possible setups, filters, and more.  A Trade Plan Template is a reusable Trade Plan that can be used as-is or can be loaded and customized before use."),(0,o.kt)("p",null,"In this section of the ",(0,o.kt)("strong",{parentName:"p"},"Trade Plan Form"),", you can manage your trade plan templates. This functionality is at the heart of the Trade Unafraid workflow, as saving trade plan templates that work for you will save valuable time when entering and managing positions. In addition, using saved templates will benefit you because you can group trades by template when analyzing past trade results. The text input field in this section serves as both a way to enter a new template name, as well as see your saved templates in the dropdown.\n",(0,o.kt)("img",{alt:"templateutilities.png",src:a(6493).Z})),(0,o.kt)("h3",{id:"save"},"Save"),(0,o.kt)("p",null,"To save the current trade plan template (which includes all of the configurations in the form) for reuse, enter a new name into the input field and click the Save button. This will save the template to your database and allow you to ",(0,o.kt)("strong",{parentName:"p"},"Load")," it later, as well as access it from other sections of Trade Unafraid. If you try to reuse an existing template name, you will be asked if you would like to overwrite the current template under that name. This is how you would modify and update an existing saved template."),(0,o.kt)("h3",{id:"load"},"Load"),(0,o.kt)("p",null,"To load a saved trade plan template into the form, select it from the dropdown and select ",(0,o.kt)("strong",{parentName:"p"},"Load"),". This will simply fill out the trade plan form with the options from the saved template. Once loaded, you can simply click Create Trade Plan, or you can modify the trade plan first."),(0,o.kt)("p",null,"Keep in mind that changes you make will not be saved unless you click the Save button. You can choose to use the same template name to overwrite the existing template, or you can change the name and save a new template."),(0,o.kt)("h3",{id:"delete"},"Delete"),(0,o.kt)("p",null,"This button will delete the template currently selected in the input/dropdown. You will be prompted to make sure this is the action you would like to take. Be careful, as this action is not reversible and you will not be able to retrieve deleted templates."),(0,o.kt)("h3",{id:"share"},"Share"),(0,o.kt)("p",null,"The share button will allow you to obtain a unique template identifier or code, which can be used to share your template with other users. This feature will export the ",(0,o.kt)("strong",{parentName:"p"},"current trade plan form"),", so if you would like to share a saved template, you must first ",(0,o.kt)("strong",{parentName:"p"},"Load")," it into the form. Upon clicking the ",(0,o.kt)("strong",{parentName:"p"},"Share")," button, you will be shown a window that will allow you to name your export and give it a description and tags if you would like. (Tags can be used to identify certain features or aspects of a trade plan such as ",(0,o.kt)("strong",{parentName:"p"},"scalp"),", ",(0,o.kt)("strong",{parentName:"p"},"strat"),", ",(0,o.kt)("strong",{parentName:"p"},"reversal"),", etc.  You are welcome to invent any tags that make sense to you.)"),(0,o.kt)("p",null,"When you are ready, click the ",(0,o.kt)("strong",{parentName:"p"},"Export Template")," button. You will be provided with a number of ways to share your template with others. To simply share the unique template code, click on the clipboard icon next to it, which will copy the code to your clipboard. ",(0,o.kt)("strong",{parentName:"p"},"Share to Twitter")," will open a Twitter window and prepare a tweet for you with the pertinent information. You are free to edit the tweet before posting it. Similarly, ",(0,o.kt)("strong",{parentName:"p"},"Copy Share Message")," will copy a social media friendly message that you may paste into the media of your choice, such as a Discord, Facebook, or simply a text editor."),(0,o.kt)("p",null,"To retrieve the code for a template you have shared in the past, simply select it from the dropdown menu and the code and the same share options will appear."),(0,o.kt)("h3",{id:"import"},"Import"),(0,o.kt)("p",null,"This button will allow you to import another user's template and optionally load it in to your trade plan form. Once you have obtained the code for a desired template, push the ",(0,o.kt)("strong",{parentName:"p"},"Import")," button. You will be shown a window that will prompt you for the template code. Enter the code and push ",(0,o.kt)("strong",{parentName:"p"},"Import")," to view pertinent information attached to the template code. Once you have determined that you would like to use the template, push ",(0,o.kt)("strong",{parentName:"p"},"Load Template to Form")," to fill your trade plan form with the shared template. If you want to save this template without having to import it again, make sure to ",(0,o.kt)("strong",{parentName:"p"},"Save")," it. This will add it to your own trade plan templates as if were your own."),(0,o.kt)("p",null,"You are welcome to make any changes to imported templates. Your changes will not affect the shared template, only your personal copy of it."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Please be mindful when using shared templates as they may be missing important information or may contain settings that you are not familiar with. Always be sure to review the form before you create the trade plan to ensure it will behave as expected.")),(0,o.kt)("h3",{id:"create-trade-plan"},"Create Trade Plan"),(0,o.kt)("p",null,"This button will activate the ",(0,o.kt)("strong",{parentName:"p"},"current trade plan")," as it appears in the form. Keep in mind that software does exactly what you tell it to do, so be certain that the contents of the form reflect your intentions."),(0,o.kt)("p",null,"Things to check before creating a trade plan:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Are you trading sim or real money?"),(0,o.kt)("li",{parentName:"ul"},"Are you trading in the account you intend?"),(0,o.kt)("li",{parentName:"ul"},"Are you trading the size (quantity or dollars) that you intend?"),(0,o.kt)("li",{parentName:"ul"},"Are you trading the symbol(s) that you intend?"),(0,o.kt)("li",{parentName:"ul"},"Are you trading the option(s) that you intend?"),(0,o.kt)("li",{parentName:"ul"},"Do you have the exit tactics that you intend?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Are your stops appropriate to limit your risk?"),(0,o.kt)("li",{parentName:"ul"},"Are your stops too tight for the spread and front-run settings, where you might stop out immediately?"))),(0,o.kt)("li",{parentName:"ul"},"Do you have repeating set the way that you intend?")))}m.isMDXComponent=!0},6493:function(e,t,a){t.Z=a.p+"assets/images/templateutilities-5f11d660791e6be4fc3508b3c0015d95.png"}}]);