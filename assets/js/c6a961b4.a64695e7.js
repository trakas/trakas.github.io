(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),c=(a(0),a(116)),o={title:"useDebounce"},s={unversionedId:"apis/trakas-react/use-debounce",id:"apis/trakas-react/use-debounce",isDocsHomePage:!1,title:"useDebounce",description:"When the value changes, the hook will delay updating the state for a specific timeout. If the following change",source:"@site/docs/apis/trakas-react/use-debounce.mdx",slug:"/apis/trakas-react/use-debounce",permalink:"/docs/apis/trakas-react/use-debounce",editUrl:"https://github.com/trakas/trakas/edit/main/packages/trakas-docs/docs/apis/trakas-react/use-debounce.mdx",version:"current",sidebar:"docs",previous:{title:"useToggle",permalink:"/docs/apis/trakas-react/use-toggle"},next:{title:"useLocalStorage",permalink:"/docs/apis/trakas-react/use-local-storage"}},u=[{value:"Options",id:"options",children:[{value:"Returns",id:"returns",children:[]}]}],i={toc:u};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"When the value changes, the hook will ",Object(c.b)("strong",{parentName:"p"},"delay")," updating the state for a ",Object(c.b)("strong",{parentName:"p"},"specific timeout"),". If the following change\noccurs ",Object(c.b)("strong",{parentName:"p"},"before")," the timeout ",Object(c.b)("strong",{parentName:"p"},"moment"),", the delay will ",Object(c.b)("strong",{parentName:"p"},"restart")," until ",Object(c.b)("strong",{parentName:"p"},"no change occurs within that timeout"),"."),Object(c.b)("p",null,"It has the exact mechanism with ",Object(c.b)("a",{parentName:"p",href:"https://lodash.com/docs/#debounce"},"lodash.debounce"),", but this one is\n",Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React hook"),"."),Object(c.b)("p",null,"Usually, it helps implement the components that need a delay time before executing some actions or events (such as the\n",Object(c.b)("inlineCode",{parentName:"p"},"Search")," component) to prevent multiple requests to the server to save resources."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SearchInput.jsx"',title:'"SearchInput.jsx"'},'import { useDebounce } from "@trakas/react";\nimport { useEffect, useState } from "react";\n\nexport function Search() {\n  const [searchTerm, setSearchTerm] = useState("");\n  const debouncedSearchTerm = useDebounce(searchTerm, 250);\n\n  useEffect(() => {\n    debouncedSearchTerm && console.log("sendToServer(debouncedSearchTerm)");\n  }, [debouncedSearchTerm]);\n\n  const handleSearch = (e) => {\n    setSearchTerm(e.target.value);\n  };\n\n  return <input value={searchTerm} onChange={handleSearch} />;\n}\n')),Object(c.b)("h2",{id:"options"},"Options"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"const debouncedValue = useDebounce(value, delay);\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"value: T | undefined"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Required")),Object(c.b)("li",{parentName:"ul"},"The value is being tracked by the hook."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"delay: number"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Required")),Object(c.b)("li",{parentName:"ul"},"Delay time before updating ",Object(c.b)("inlineCode",{parentName:"li"},"debouncedValue"))))),Object(c.b)("h3",{id:"returns"},"Returns"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"debouncedValue: T | undefined"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"The value is asynchronously updated")))))}l.isMDXComponent=!0}}]);