"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4234],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(6540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),d=s,g=p["".concat(i,".").concat(d)]||p[d]||y[d]||r;return n?a.createElement(g,c(c({ref:t},u),{},{components:n})):a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,c=new Array(r);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:s,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(8168),s=(n(6540),n(5680));const r={sidebar_label:"Scheduling Async Tasks"},c="Scheduling Async Tasks",o={unversionedId:"documentation/async-tasks/scheduling-async-tasks",id:"documentation/async-tasks/scheduling-async-tasks",title:"Scheduling Async Tasks",description:"- Navigate to the Tasks Menu:",source:"@site/docs/documentation/async-tasks/scheduling-async-tasks.mdx",sourceDirName:"documentation/async-tasks",slug:"/documentation/async-tasks/scheduling-async-tasks",permalink:"/docs/docs/documentation/async-tasks/scheduling-async-tasks",draft:!1,editUrl:"https://github.com/Healthlane-Technologies/zelthy3/tree/documentation/docs/docs/documentation/async-tasks/scheduling-async-tasks.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Scheduling Async Tasks"},sidebar:"docsSidebar",previous:{title:"Manually Triggering Async Tasks",permalink:"/docs/docs/documentation/async-tasks/manually-triggering-async-tasks"}},i={},l=[],u={toc:l},p="wrapper";function y(e){let{components:t,...r}=e;return(0,s.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"scheduling-async-tasks"},"Scheduling Async Tasks"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Navigate to the Tasks Menu"),":\nAccess the Tasks menu in the App Panel of your Zelthy application.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Sync Async Tasks"),":\nBefore scheduling a task, ensure that the list of async tasks is up to date by clicking on the Sync button.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Identify the Task"),":\nLocate the specific async task for which you want to schedule runs.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Update Task Schedule"),':\nClick on the three-dot icon situated on the right side of the task row. In the context menu that appears, select the "Update Task" option.'),(0,s.yg)("p",{parentName:"li"}," ",(0,s.yg)("img",{alt:"Scheduling Async Tasks 1",src:n(1944).A,width:"2750",height:"1566"}))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Configure Task Schedule"),":\nA form will open, allowing you to update the task schedule and other details. Configure the schedule according to your requirements. You can specify the frequency, timing, and other parameters for the task execution."),(0,s.yg)("p",{parentName:"li"}," ",(0,s.yg)("img",{alt:"Scheduling Async Tasks 2",src:n(7555).A,width:"2750",height:"1566"}))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Enable Task"),":\nEnsure that the task is enabled to allow it to run according to the defined schedule. ")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("strong",{parentName:"p"},"Save Changes"),":\nAfter configuring the task schedule, click on the Save button to apply the changes."))),(0,s.yg)("p",null,"By following these steps, you can effectively schedule async tasks within your Zelthy application, enabling automated execution of tasks at specified intervals. This feature enhances the efficiency of your application by automating routine tasks and processes."))}y.isMDXComponent=!0},1944:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/scheduling-async-tasks1-1dac8fedf5df0b43b5450c69c33c77b4.png"},7555:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/scheduling-async-tasks2-5768394bdea17d203336f7acf1d5ccdf.png"}}]);