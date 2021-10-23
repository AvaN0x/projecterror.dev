(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),o=n(7),r=(n(0),n(97)),i={id:"basics",title:"Basics of Development",sidebar_label:"Basics"},p={unversionedId:"npwd/dev/basics",id:"npwd/dev/basics",isDocsHomePage:!1,title:"Basics of Development",description:"This practice is outdated. Please consider look at already created apps until this page is updated.",source:"@site/docs\\npwd\\dev\\BasicDevelopment.md",slug:"/npwd/dev/basics",permalink:"/docs/npwd/dev/basics",editUrl:"https://github.com/project-error/docs.projecterror.dev/tree/master/docs/npwd/dev/BasicDevelopment.md",version:"current",lastUpdatedBy:"Christopher",lastUpdatedAt:1635032961,sidebar_label:"Basics",sidebar:"docs",previous:{title:"Setting up the app",permalink:"/docs/npwd/dev/setup"},next:{title:"Current Development Progress",permalink:"/docs/npwd/current_state"}},s=[{value:"The main app component",id:"the-main-app-component",children:[]},{value:"Hooks",id:"hooks",children:[{value:"Creating a hook and states",id:"creating-a-hook-and-states",children:[]},{value:"The service hook and <code>useNuiEvent</code>",id:"the-service-hook-and-usenuievent",children:[]},{value:"Full example",id:"full-example",children:[]}]}],l={toc:s};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This practice is outdated. Please consider look at already created apps until this page is updated."))),Object(r.b)("h3",{id:"the-main-app-component"},"The main app component"),Object(r.b)("p",null,"When creating a new app for the phone, you want to import the ",Object(r.b)("inlineCode",{parentName:"p"},"AppWrapper")," and ",Object(r.b)("inlineCode",{parentName:"p"},"AppContent"),". These are two reusable components that surrounds all apps. You  also have access to the ",Object(r.b)("inlineCode",{parentName:"p"},"AppTitle")," component, which serves as a header."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"AppTitle")," takes in a prop called ",Object(r.b)("inlineCode",{parentName:"p"},"app"),". Here you can add any string you want, but as a good practice, use the ",Object(r.b)("inlineCode",{parentName:"p"},"useApp")," hook. Here is an example."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"export const ExampleApp = () => {\n  // Calling the useApp hook, and passing in the app name. \n  // The app name will the name you added in useApps.\n  const example = useApp('EXAMPLE');\n\n  return (\n    <AppWrapper>\n      <AppTitle app={example} />\n")),Object(r.b)("h2",{id:"hooks"},"Hooks"),Object(r.b)("p",null,"First we want to import one of the hooks available from the ",Object(r.b)("inlineCode",{parentName:"p"},"recoil")," library."),Object(r.b)("p",null,"If you only want to read a state, you should use the ",Object(r.b)("inlineCode",{parentName:"p"},"useRecoilValue"),". This will only read the state, without writing, or updating it. Do you also want to write to the state, you need the ",Object(r.b)("inlineCode",{parentName:"p"},"useRecoilState"),", which is a API similar to the React ",Object(r.b)("inlineCode",{parentName:"p"},"useState"),"."),Object(r.b)("h3",{id:"creating-a-hook-and-states"},"Creating a hook and states"),Object(r.b)("p",null,"When you want to have a state that you can update, use in differenet components or reciving some sort of vaules from the client, a hook is the answer. Although, we need to have a state to read or write the value to."),Object(r.b)("p",null,"Lets create a state first!"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// state.ts\nimport { atom } from 'recoil';\n\nexport const exampleState = {\n  exampleArray: atom({\n    key: 'exampleArray', // make sure this is unique, globally.\n    default: []\n  })\n}\n")),Object(r.b)("p",null,"We need to use the state somehow, and be able to read, write or both. Let's hook at how we create a simple hook. In this example we will both read and write to the state."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// useExampleList.ts\nimport { useRecoilState } from 'recoil';\n\nexport const useExampleList = () => {\n  const [list, setList] = useRecoilState();\n  return { list, setList };\n}\n")),Object(r.b)("p",null,"Now that we have created our hook, we'll go a step further and look at the ",Object(r.b)("inlineCode",{parentName:"p"},'"Service Hook"')),Object(r.b)("h3",{id:"the-service-hook-and-usenuievent"},"The service hook and ",Object(r.b)("inlineCode",{parentName:"h3"},"useNuiEvent")),Object(r.b)("p",null,"When you want to recive data from the client, you need to set up a service hook (as we like to call it). It a function that will be called when the phone is rendered, and makes it available to recive data from the client and assign values to a desired hook of choice. If you are known with React, you probably already know how to create a hook. However, here is how you do it."),Object(r.b)("h4",{id:"setting-the-hook-up"},"Setting the hook up"),Object(r.b)("p",null,"This hook will simply listen to any data being sent from the client and store it into any state of choice. In this example we'll continue using the recoil state, but you can also use React Context. You can read more about how to use that here (a link)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// useExampleService.ts\n\n// We'll start by importing the state and the hook we previously made\n// and the useNuIEvent hook\nimport { useExampleList } from './useExampleList';\nimport { exampleState } from './state';\nimport { useNuiEvent } from '../../../os/nui-events/hooks/useNuiEvent';\n// We also need a function from recoil\nimport { useSetRecoilState } from 'recoil';\n\nexport const useExampleService = () => {\n  const setList = useSetRecoilState(exampleState.exampleArray);\n  useNuiEvent('EXAMPLE', 'setList', setList);\n\n  return useExampleList();\n}\n")),Object(r.b)("p",null,"You may wonder what ",Object(r.b)("inlineCode",{parentName:"p"},"useSetRecoilState")," and ",Object(r.b)("inlineCode",{parentName:"p"},"useNuiEvent")," does. We will cover that in the next section."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"useSetRecoilState")," returns a setter function for updating the value of a Recoil state (atom). We use this when we only want to write to the state without reading it. We assign this function to 'setList' and use that in the next function we'll talk about, the ",Object(r.b)("inlineCode",{parentName:"p"},"useNuiEvent"),"."),Object(r.b)("p",null,"In order to know what ",Object(r.b)("inlineCode",{parentName:"p"},"app")," and ",Object(r.b)("inlineCode",{parentName:"p"},"method")," that should update our ",Object(r.b)("inlineCode",{parentName:"p"},"exampleArray")," state, we need to use ",Object(r.b)("inlineCode",{parentName:"p"},"useNuiEvent"),". The function listens to the any ",Object(r.b)("inlineCode",{parentName:"p"},"message")," event, in other words, when we use the ",Object(r.b)("inlineCode",{parentName:"p"},"SendNuiMessage"),". Then it takes the data and updates the value using the ",Object(r.b)("inlineCode",{parentName:"p"},"setList")," function we just called. However we're not done yet. In order for this work, we need to call ",Object(r.b)("inlineCode",{parentName:"p"},"useExampleService")," in ",Object(r.b)("inlineCode",{parentName:"p"},"Phone.tsx"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// Phone.tsx\nimport { usePhotoService } from './apps/example/hooks/useExampleService';\n//...\nfunction Phone () {\n//...\nuseExampleService()\n//...\n")),Object(r.b)("h3",{id:"full-example"},"Full example"),Object(r.b)("h4",{id:"exampleapptsx"},"ExampleApp.tsx"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// ExampleApp.tsx\nimport React from 'react';\nimport { AppWrapper } from '../../../ui/components';\nimport { AppTitle } from '../../../ui/components/AppTitle';\nimport { AppContent } from '../../../ui/components/AppContent';\nimport { useApp } from '../../../os/apps/hooks/useApps';\nimport { useExample } from '../hooks/useExample';\n\nexport const ExampleApp = () => {\n  // calling the example hook, and we assign the value to a variable\n  const exampleString = useExample();\n  const example = useApp('EXAMPLE');\n  return (\n    <AppWrapper>\n      <AppTitle app={example} />\n      <AppContent>\n        <h1>This is an example</h1>\n        {/* Here we are using the value in a h3 tag */}\n        <h3>{exampleString}</h3>\n      </AppContent>\n    </AppWrapper>\n  );\n};\n")),Object(r.b)("h4",{id:"useexampletsx"},"useExample.tsx"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { useRecoilValue } from 'recoil';\nimport { exampleState } from './state';\n\nexport const useExample = () => {\n  const example = useRecoilValue(exampleState.example);\n  return example;\n};\n")))}c.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),c=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?o.a.createElement(b,p(p({ref:t},l),{},{components:n})):o.a.createElement(b,p({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);