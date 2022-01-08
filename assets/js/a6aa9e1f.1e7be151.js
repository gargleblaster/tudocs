"use strict";(self.webpackChunktudocs=self.webpackChunktudocs||[]).push([[3089],{8665:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(3366),n=a(7294),l=a(6010),i=a(7019),s=a(9960),m="sidebar_q+wC",o="sidebarItemTitle_9G5K",c="sidebarItemList_6T4b",d="sidebarItem_cjdF",g="sidebarItemLink_zyXk",u="sidebarItemLinkActive_wcJs",p=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))}))))}var E=["sidebar","toc","children"];var h=function(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,r.Z)(e,E),o=t&&t.items.length>0;return n.createElement(i.Z,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},2754:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),n=a(2263),l=a(8665),i=a(8561),s=a(9960),m=a(5999);var o=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(s.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(s.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=a(3616);var d=function(e){var t=e.metadata,a=e.items,s=e.sidebar,m=(0,n.Z)().siteConfig.title,d=t.blogDescription,g=t.blogTitle,u="/"===t.permalink?m:g;return r.createElement(l.Z,{title:u,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:s},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(o,{metadata:t}))}},8561:function(e,t,a){a.d(t,{Z:function(){return N}});var r=a(7294),n=a(6010),l=a(3905),i=a(5999),s=a(9960),m=a(4996),o=a(3616),c=a(1914),d=a(6753),g="blogPostTitle_d4p0",u="blogPostData_-Im+",p="blogPostDetailsFull_xD8n",v=a(62),E="image_9q7L";var h=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:E,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_8c0z";function f(e){var t=e.authors,a=e.assets;return 0===t.length?null:r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",b),key:t},r.createElement(h,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var N=function(e){var t,a,E,h,b=(E=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return E(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),N=(0,m.C)().withBaseUrl,_=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,L=void 0!==w&&w,I=P.date,y=P.formattedDate,C=P.permalink,M=P.tags,x=P.readingTime,B=P.title,R=P.editUrl,U=P.authors,A=null!=(t=k.image)?t:Z.image,F=!L&&T,z=M.length>0;return r.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(h=L?"h1":"h2",r.createElement("header",null,r.createElement(h,{className:g,itemProp:"headline"},L?B:r.createElement(s.Z,{itemProp:"url",to:C},B)),r.createElement("div",{className:(0,n.Z)(u,"margin-vert--md")},r.createElement("time",{dateTime:I,itemProp:"datePublished"},y),void 0!==x&&r.createElement(r.Fragment,null," \xb7 ",b(x))),r.createElement(f,{authors:U,assets:k}))),A&&r.createElement("meta",{itemProp:"image",content:N(A,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:c.Z},_)),(z||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[p]=L,a))},z&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":F})},r.createElement(v.Z,{tags:M})),L&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:R})),F&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":z})},r.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+B},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(7294),n=a(5999),l=a(7462),i=a(3366),s=a(6010),m="iconEdit_mS5F",o=["className"];var c=function(e){var t=e.className,a=(0,i.Z)(e,o);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=a(3616);function g(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(6010),l=a(9960),i="tag_WK-t",s="tagRegular_LXbV",m="tagWithCount_S5Zl";var o=function(e){var t,a=e.permalink,o=e.name,c=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[s]=!c,t[m]=c,t))},o,c&&r.createElement("span",null,c))}},62:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(6010),l=a(5999),i=a(7774),s="tags_NBRY",m="tag_F03v";function o(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:m},r.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);