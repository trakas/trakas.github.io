(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),l=(a(0),a(116)),i={title:"useLocalStorage"},r={unversionedId:"apis/trakas-react/use-local-storage",id:"apis/trakas-react/use-local-storage",isDocsHomePage:!1,title:"useLocalStorage",description:"Technically, this is a wrapper hook for",source:"@site/docs/apis/trakas-react/use-local-storage.mdx",slug:"/apis/trakas-react/use-local-storage",permalink:"/docs/apis/trakas-react/use-local-storage",editUrl:"https://github.com/trakas/trakas/edit/main/packages/trakas-docs/docs/apis/trakas-react/use-local-storage.mdx",version:"current",sidebar:"docs",previous:{title:"useDebounce",permalink:"/docs/apis/trakas-react/use-debounce"},next:{title:"useMedia",permalink:"/docs/apis/trakas-react/use-media"}},c=[{value:"Options",id:"options",children:[{value:"Returns",id:"returns",children:[]}]}],s={toc:c};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Technically, this is a wrapper hook for\n",Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"window.localStorage"),". With the features of Hook, you can inject the localStorage\n(as a ",Object(l.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html#its-hard-to-reuse-stateful-logic-between-components"},"reusable stateful logic"),")\nto ",Object(l.b)("a",{parentName:"p",href:"https://reactjs.org/docs/state-and-lifecycle.html"},"React lifecycle"),". This hook can play well with\n",Object(l.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usecontext"},"useContext")," to manage states across the components tree."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Authentication.jsx"',title:'"Authentication.jsx"'},'import { useLocalStorage } from "@trakas/react";\n\nexport function Authentication() {\n  const [token, setToken, clearToken] = useLocalStorage("token");\n\n  const handleAuthenticate = () => {\n    if (!token) {\n      setToken("this is super secret!");\n    } else {\n      clearToken();\n    }\n  };\n\n  return (\n    <div>\n      <button onClick={handleAuthenticate}>{token ? "Log out" : "Login"}</button>\n      <div>Token: {token}</div>\n      <div>Token (localStorage): {JSON.stringify(localStorage.getItem("token"))}</div>\n    </div>\n  );\n}\n')),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"const [storedValue, setValue, clearValue] = useLocalStorage(key, initialValue);\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"key: string"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Required")),Object(l.b)("li",{parentName:"ul"},"The key to store data to localStorage"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"initialValue: T | undefined"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Optional")),Object(l.b)("li",{parentName:"ul"},"Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"undefined")),Object(l.b)("li",{parentName:"ul"},"The initial value when there is no value is stored in localStorage")))),Object(l.b)("h3",{id:"returns"},"Returns"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"storedValue: T | undefined"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The value was stored to localStorage."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"setValue: (value: T) => void"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Update the value in localStorage and the ",Object(l.b)("inlineCode",{parentName:"li"},"storedValue")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"clearValue: () => void"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Remove the value in localStorage and update ",Object(l.b)("inlineCode",{parentName:"li"},"storedValue")," to ",Object(l.b)("inlineCode",{parentName:"li"},"initialValue"))))),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Basically, the value that you can store in localStorage can be ",Object(l.b)("em",{parentName:"p"},"any")," thing."),Object(l.b)("p",{parentName:"div"},"useLocalStorage uses ",Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"},"JSON.parse"),"\nto parse value from localStorage. So if the value was stored is one of the ",Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Falsy"},"falsy"),"\nvalues, ",Object(l.b)("inlineCode",{parentName:"p"},"storedValue")," will get the value from ",Object(l.b)("inlineCode",{parentName:"p"},"initialValue"),"."))))}b.isMDXComponent=!0}}]);