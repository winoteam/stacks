(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(107)),o={id:"getting-started",title:"Getting started"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"Motivation",source:"@site/docs/getting-started.md",slug:"/getting-started",permalink:"/stacks/docs/getting-started",version:"current",sidebar:"sidebar",next:{title:"Installation",permalink:"/stacks/docs/installation"}},s=[{value:"Motivation",id:"motivation",children:[]},{value:"Compatibility",id:"compatibility",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"motivation"},"Motivation"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/mxstbr"},"Max Stoiber")," has written an interesting ",Object(i.b)("a",{parentName:"p",href:"https://mxstbr.com/thoughts/margin"},"article")," about why margin is considered harmful. There are three main disadvantages of using margin:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"margin breaks component encapsulation"),Object(i.b)("li",{parentName:"ul"},"margin makes reusability harder"),Object(i.b)("li",{parentName:"ul"},"margin conflicts with how designers think")),Object(i.b)("p",null,"It's obvious that handling margins across the entire project is simply difficult and may not be scalable. For web projects, a design system called ",Object(i.b)("a",{parentName:"p",href:"https://seek-oss.github.io/braid-design-system/foundations/layout"},"Braid")," has developer-friendly API for building layouts. However, a similar library was missing for React Native based projects. Therefore, ",Object(i.b)("strong",{parentName:"p"},"Stacks")," has been created and it adopts Braid Layouts API with subtle differences."),Object(i.b)("h2",{id:"compatibility"},"Compatibility"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Stacks")," is written in ",Object(i.b)("a",{parentName:"p",href:"https://rescript-lang.org/"},"ReScript"),". It is compiled using BuckleScript to plain JavaScript and has typings for TypeScript and Flow."),Object(i.b)("p",null,"This means that out of the box ",Object(i.b)("inlineCode",{parentName:"p"},"Stacks")," is usable in any project that use the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"plain JavaScript"),Object(i.b)("li",{parentName:"ul"},"TypeScript"),Object(i.b)("li",{parentName:"ul"},"Flow"),Object(i.b)("li",{parentName:"ul"},"ReScript")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Stacks")," is supported in React Native and React Native Web projects."))}p.isMDXComponent=!0},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);