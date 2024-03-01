"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4225],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,y=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(8168),o=(n(6540),n(5680));const r={sidebar_label:"Overview"},i="Packages",c={unversionedId:"documentation/packages/overview",id:"documentation/packages/overview",title:"Packages",description:"Zelthy Packages are a collection of reusable components designed to enhance and extend the functionality of your Zelthy applications. Similar to Python packages, Zelthy Packages provide a convenient way to modularize and share components across different applications on the Zelthy platform. This overview document will guide you through the key concepts and steps involved in working with Zelthy Packages.",source:"@site/docs/documentation/packages/overview.mdx",sourceDirName:"documentation/packages",slug:"/documentation/packages/overview",permalink:"/docs/docs/documentation/packages/overview",draft:!1,editUrl:"https://github.com/Healthlane-Technologies/zelthy3/tree/documentation/docs/docs/documentation/packages/overview.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"Editing Policy Config",permalink:"/docs/docs/documentation/permission-framework/policies/editing-policy-config"},next:{title:"Installing a Package",permalink:"/docs/docs/documentation/packages/installing-a-package"}},s={},l=[{value:"Key Concepts",id:"key-concepts",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"packages"},"Packages"),(0,o.yg)("p",null,"Zelthy Packages are a collection of reusable components designed to enhance and extend the functionality of your Zelthy applications. Similar to Python packages, Zelthy Packages provide a convenient way to modularize and share components across different applications on the Zelthy platform. This overview document will guide you through the key concepts and steps involved in working with Zelthy Packages."),(0,o.yg)("h3",{id:"key-concepts"},"Key Concepts"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Package Structure:"),"\nZelthy Packages follow a standardized structure that includes directories for components, configurations, and documentation. Understanding this structure is crucial for creating, sharing, and utilizing packages effectively.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Component Types:"),"\nZelthy Packages can contain various types of components, such as views, templates, routes, and more. Each component type serves a specific purpose and can be seamlessly integrated into Zelthy applications.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Package Metadata:"),"\nEvery Zelthy Package includes metadata that provides essential information about the package, such as its name, version, author, and dependencies. This metadata ensures proper identification and compatibility when integrating the package into an application."))))}d.isMDXComponent=!0}}]);