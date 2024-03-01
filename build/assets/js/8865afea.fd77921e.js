"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6155],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=l,u=m["".concat(d,".").concat(c)]||m[c]||y[c]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(8168),l=(n(6540),n(5680));const o={sidebar_label:"Field Types"},r="Field Types",i={unversionedId:"documentation/ddms/ddm-field-types",id:"documentation/ddms/ddm-field-types",title:"Field Types",description:"Models in Zelthy support various field types, allowing you to define flexible and customized data structures for each tenant within your multi-tenant application. These field types can be broadly categorized into two groups: non-relational fields and relational fields.",source:"@site/docs/documentation/ddms/ddm-field-types.mdx",sourceDirName:"documentation/ddms",slug:"/documentation/ddms/ddm-field-types",permalink:"/docs/docs/documentation/ddms/ddm-field-types",draft:!1,editUrl:"https://github.com/Healthlane-Technologies/zelthy3/tree/documentation/docs/docs/documentation/ddms/ddm-field-types.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Field Types"},sidebar:"docsSidebar",previous:{title:"Creating a Model",permalink:"/docs/docs/documentation/ddms/creating-a-ddm"},next:{title:"Migrating Model",permalink:"/docs/docs/documentation/ddms/migrating-ddms"}},d={},s=[{value:"Non-Relational Fields",id:"non-relational-fields",level:2},{value:"Relational Fields",id:"relational-fields",level:2}],p={toc:s},m="wrapper";function y(e){let{components:t,...n}=e;return(0,l.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"field-types"},"Field Types"),(0,l.yg)("p",null,"Models in Zelthy support various field types, allowing you to define flexible and customized data structures for each tenant within your multi-tenant application. These field types can be broadly categorized into two groups: non-relational fields and relational fields."),(0,l.yg)("h2",{id:"non-relational-fields"},"Non-Relational Fields"),(0,l.yg)("p",null,"Non-relational fields in Zelthy Model are equivalent to Django's standard field types and can be imported directly from Django. These fields are suitable for representing simple data types like text, numbers, dates, and more. Here are some common non-relational field types:"),(0,l.yg)("p",null,"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"CharField"),": Used for short text strings like names, titles, or labels."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-python"},"from django.db import models\n\nclass MyModel(DynamicModelBase):\n    name = models.CharField(max_length=100)\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"IntegerField"),": Ideal for storing whole numbers."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-python"},"from django.db import models\n\nclass MyModel(DynamicModelBase):\n    age = models.IntegerField()\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"DateField"),": Designed to hold date values."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-python"},"from django.db import models\n\nclass MyModel(DynamicModelBase):\n    birthdate = models.DateField()\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"BooleanField"),": Represents true/false values."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-python"},"from django.db import models\n\nclass MyModel(DynamicModelBase):\n    is_active = models.BooleanField(default=True)\n")))),(0,l.yg)("p",null,"These non-relational fields behave just like their Django counterparts, making them suitable for straightforward data storage within your models."),(0,l.yg)("h2",{id:"relational-fields"},"Relational Fields"),(0,l.yg)("p",null,"Relational fields in Zelthy models are specialized field types imported from Zelthy's ",(0,l.yg)("inlineCode",{parentName:"p"},"zelthy.apps.dynamic_models.fields"),". They allow you to establish relationships between Data Models, offering more flexibility in your data modeling approach. Here are some common relational field types:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"OneToOneField"),": Defines a one-to-one relationship between two models."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-python"},"from zelthy.apps.dynamic_models.fields import ZOneToOneField\n\nclass MyModel(DynamicModelBase):\n    related_model = ZOneToOneField(RelatedModel, null=True, blank=True, on_delete=models.CASCADE)\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"ForeignKey"),": Establishes a many-to-one relationship between two DDMs."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-python"},"from zelthy.apps.dynamic_models.fields import ZForeignKey\n\nclass MyModel(DynamicModelBase):\n    related_model = ZOneToOneField(RelatedModel, null=True, blank=True, on_delete=models.CASCADE)\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"ManyToManyField"),": "),(0,l.yg)("p",{parentName:"li"},"Coming Soon . . ."))),(0,l.yg)("p",null,"These relational fields enable you to create complex data relationships and structures tailored to the unique needs of your tenants or clients."),(0,l.yg)("p",null,"In summary, Zelthy's model field types provide a versatile and powerful toolset for creating dynamic and customized data structures in multi-tenant applications. Whether you need simple text fields or intricate data relationships, DDMs offer the flexibility to meet your diverse data modeling requirements."))}y.isMDXComponent=!0}}]);