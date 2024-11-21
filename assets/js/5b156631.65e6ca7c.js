"use strict";(self.webpackChunkuti_4_devops_docs=self.webpackChunkuti_4_devops_docs||[]).push([[4268],{1993:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=t(4848),o=t(8453);const s={sidebar_position:4},a="IDP - API",c={id:"tutorial-basics/idp-api",title:"IDP - API",description:"API is part of the service catalog feature in Util4devops IDP",source:"@site/docs/tutorial-basics/idp-api.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/idp-api",permalink:"/docs/tutorial-basics/idp-api",draft:!1,unlisted:!1,editUrl:"https://github.com/thanhgit/util4devops-docs/blob/master/docs/tutorial-basics/idp-api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"IDP - Service catalog",permalink:"/docs/tutorial-basics/idp-service-catalog"},next:{title:"IDP - Documentation",permalink:"/docs/tutorial-basics/idp-docs"}},r={},p=[{value:"Create a <code>catalog-info.yaml</code> file for API component",id:"create-a-catalog-infoyaml-file-for-api-component",level:3},{value:"Reference documentation: https://backstage.io/docs/features/software-catalog/software-catalog-api/",id:"reference-documentation-httpsbackstageiodocsfeaturessoftware-catalogsoftware-catalog-api",level:4},{value:"For example:",id:"for-example",level:4},{value:"Create a component for API component",id:"create-a-component-for-api-component",level:3},{value:"Access to <strong>link</strong>",id:"access-to-link",level:4},{value:"View API component",id:"view-api-component",level:3},{value:"<code>Step 1:</code> Click <code>APIs</code> button in left sidebar",id:"step-1-click-apis-button-in-left-sidebar",level:4},{value:"<code>Step 2:</code> Choose a project, then click to it&#39;s name to navigate to <code>API - OPENAPI</code> - Overview page",id:"step-2-choose-a-project-then-click-to-its-name-to-navigate-to-api---openapi---overview-page",level:4},{value:"<code>Step 3:</code> click <code>DEFINITION</code> to view <code>Open API Spec</code>",id:"step-3-click-definition-to-view-open-api-spec",level:4},{value:"<code>Step 4:</code> click <code>LINTER</code> to view invalid configuration in <code>Open API spec</code>",id:"step-4-click-linter-to-view-invalid-configuration-in-open-api-spec",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"idp---api",children:"IDP - API"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"API"})," is part of the service catalog feature in Util4devops IDP"]}),"\n",(0,i.jsxs)(n.p,{children:["It is responsible for ",(0,i.jsx)(n.strong,{children:"API component"})]}),"\n",(0,i.jsxs)(n.h3,{id:"create-a-catalog-infoyaml-file-for-api-component",children:["Create a ",(0,i.jsx)(n.code,{children:"catalog-info.yaml"})," file for API component"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.h4,{id:"reference-documentation-httpsbackstageiodocsfeaturessoftware-catalogsoftware-catalog-api",children:["Reference documentation: ",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/features/software-catalog/software-catalog-api/",children:"https://backstage.io/docs/features/software-catalog/software-catalog-api/"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"for-example",children:"For example:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="catalog-info.yaml"',children:"apiVersion: backstage.io/v1alpha1\nkind: API\nmetadata:\n  name: python-api\n  title: Python API\n  description: |\n    A super simple RESTful api created using Flask\n  links:\n    - title: Repo\n      url: https://git.util4dev.shop/apps/python-api\n  tags:\n    - swagger\n    - yaml\nspec:\n  type: openapi\n  system: util4dev\n  owner: python-team\n  lifecycle: dev\n  definition:\n    $text: https://gitlab.com/idp4731311/idp-manifests/-/blob/main/apis/python-api-spec.yaml\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="apis/python-api-spec.yaml"',children:'openapi: "3.0.0"\ninfo:\n  version: 1.0.0\n  title: Swagger Python API\n  license:\n    name: MIT\nservers:\n  - url: https://python-api.dev.util4dev.shop\npaths:\n  /:\n    get:\n      summary: Get days\n      tags:\n        - day\n      responses:\n        \'200\':\n          description: Expected response to a valid request\n          content:\n            application/json:\n              schema:\n                type: array\n                maxItems: 100\n                items:\n                  $ref: "#/components/schemas/Day"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n  /{id}:\n    get:\n      summary: Get day\n      tags:\n        - day\n      parameters:\n        - name: id\n          in: path\n          description: Day ID\n          required: true\n          schema:\n            type: string\n      responses:\n        \'200\':\n          description: Expected response to a valid request\n          content:\n            application/json:\n              schema:\n                type: object\n                properties:\n                  day:\n                    $ref: "#/components/schemas/Day"\n        \'404\':\n          description: Not found\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\ncomponents:\n  schemas:\n    Day:\n      type: object\n      properties:\n        id:\n          type: number\n        name:\n          type: string\n    Error:\n      type: object\n      required:\n        - code\n        - message\n      properties:\n        code:\n          type: integer\n          format: int32\n        message:\n          type: string\n'})}),"\n",(0,i.jsx)(n.h3,{id:"create-a-component-for-api-component",children:"Create a component for API component"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.h4,{id:"access-to-link",children:["Access to ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/docs/tutorial-basics/idp-service-catalog#create-a-component",children:"link"})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"view-api-component",children:"View API component"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(1012).A+"",width:"1280",height:"571"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.h4,{id:"step-1-click-apis-button-in-left-sidebar",children:[(0,i.jsx)(n.code,{children:"Step 1:"})," Click ",(0,i.jsx)(n.code,{children:"APIs"})," button in left sidebar"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.h4,{id:"step-2-choose-a-project-then-click-to-its-name-to-navigate-to-api---openapi---overview-page",children:[(0,i.jsx)(n.code,{children:"Step 2:"})," Choose a project, then click to it's name to navigate to ",(0,i.jsx)(n.code,{children:"API - OPENAPI"})," - Overview page"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(5503).A+"",width:"1282",height:"574"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.h4,{id:"step-3-click-definition-to-view-open-api-spec",children:[(0,i.jsx)(n.code,{children:"Step 3:"})," click ",(0,i.jsx)(n.code,{children:"DEFINITION"})," to view ",(0,i.jsx)(n.code,{children:"Open API Spec"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6486).A+"",width:"1278",height:"580"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.h4,{id:"step-4-click-linter-to-view-invalid-configuration-in-open-api-spec",children:[(0,i.jsx)(n.code,{children:"Step 4:"})," click ",(0,i.jsx)(n.code,{children:"LINTER"})," to view invalid configuration in ",(0,i.jsx)(n.code,{children:"Open API spec"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(9529).A+"",width:"1272",height:"578"})}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1012:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/idp-view-api-component-1-4390e362e79e812d7467a9111d2968a8.png"},5503:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/idp-view-api-component-2-a3a7d9f735aeb52e28d491700872e6bb.png"},6486:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/idp-view-api-component-3-e7469023c2dfc754c9b32737b774ad14.png"},9529:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/idp-view-api-component-4-7e847f54606fc7174ac238695923970c.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(6540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);