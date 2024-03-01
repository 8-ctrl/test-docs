"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2897],{5680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>h});var s=o(6540);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,s,i=function(e,t){if(null==e)return{};var o,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)o=n[s],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)o=n[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=s.createContext({}),c=function(e){var t=s.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),g=c(o),d=i,h=g["".concat(l,".").concat(d)]||g[d]||u[d]||n;return o?s.createElement(h,r(r({ref:t},p),{},{components:o})):s.createElement(h,r({ref:t},p))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,r=new Array(n);r[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[g]="string"==typeof e?e:i,r[1]=a;for(var c=2;c<n;c++)r[c]=o[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9102:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=o(8168),i=(o(6540),o(5680));const n={sidebar_label:"Assigning Policies to User Roles"},r="Assigning Policies to User Roles",a={unversionedId:"documentation/user-roles/assigning-policies-to-user-roles",id:"documentation/user-roles/assigning-policies-to-user-roles",title:"Assigning Policies to User Roles",description:"Assigning policies to user roles in the Zelthy platform allows you to precisely define the permissions and access levels associated with each role. Here's how you can assign policies to a user role:",source:"@site/docs/documentation/user-roles/assigning-policies-to-user-roles.mdx",sourceDirName:"documentation/user-roles",slug:"/documentation/user-roles/assigning-policies-to-user-roles",permalink:"/docs/docs/documentation/user-roles/assigning-policies-to-user-roles",draft:!1,editUrl:"https://github.com/Healthlane-Technologies/zelthy3/tree/documentation/docs/docs/documentation/user-roles/assigning-policies-to-user-roles.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Assigning Policies to User Roles"},sidebar:"docsSidebar",previous:{title:"Creating a User Role",permalink:"/docs/docs/documentation/user-roles/creating-a-user-role"},next:{title:"Deactivating a User Role",permalink:"/docs/docs/documentation/user-roles/deactivating-a-user-role"}},l={},c=[],p={toc:c},g="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,s.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"assigning-policies-to-user-roles"},"Assigning Policies to User Roles"),(0,i.yg)("p",null,"Assigning policies to user roles in the Zelthy platform allows you to precisely define the permissions and access levels associated with each role. Here's how you can assign policies to a user role:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Access the User Role Menu in App Panel:"),'\nStart by navigating to the "User Role" menu within the App Panel interface. This is where you\'ll manage user roles and their associated policies.')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Locate the User Role:"),"\nFind the specific user role to which you want to assign policies. Scan the User Roles table to identify the target role.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Edit the User Role:"),'\nIn the User Roles table, locate the three-dot menu corresponding to the target user role. Click on "Edit" from the menu. This action will open a form that allows you to modify the user role\'s settings.'),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Assigning Policies to User Role 1",src:o(9798).A,width:"2750",height:"1566"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Assign Policies:"),'\nInside the editing form, you\'ll find a "Policy" field specifically designed for assigning policies to the user role. This field will typically be a multi-select dropdown.')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Select Required Policies:"),"\nFrom the multi-select dropdown within the Policy field, choose the policies that you want to associate with the user role. These policies will determine the permissions and access rights granted to users with this role."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Assigning Policies to User Role 2",src:o(1005).A,width:"2750",height:"1566"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Update and Save Changes:"),"\nOnce you've selected the appropriate policies, click the \"Update\" button to apply and save the changes you've made to the user role's policies."),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"Assigning Policies to User Role 3",src:o(4324).A,width:"2750",height:"1566"})))),(0,i.yg)("p",null,"Upon completing these steps, the user role will be linked to the selected policies, defining the permissions granted to users holding this role. In the User Roles table, you'll be able to see the attached policies in the policies column for easy reference. This ensures transparency and visibility into the access rights of each user role, contributing to an organized and controlled environment within your healthcare enterprise apps."))}u.isMDXComponent=!0},9798:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/assigning-policies-to-user-roles1-fd213c7407246f3c1c83f9f616c771c6.png"},1005:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/assigning-policies-to-user-roles2-0516f25cc7848f492cac3ddbd37ab702.png"},4324:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/assigning-policies-to-user-roles3-9fb9a06086e195b62c21a3142d3fb711.png"}}]);