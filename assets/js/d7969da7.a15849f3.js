"use strict";(self.webpackChunkuti_4_devops_docs=self.webpackChunkuti_4_devops_docs||[]).push([[4194],{4748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(4848),a=n(8453);const i={sidebar_position:3},c="IDP - Service catalog",s={id:"tutorial-basics/idp-service-catalog",title:"IDP - Service catalog",description:"Service catalog is a main feature in Util4devops IDP with creating components, APIs, ...",source:"@site/docs/tutorial-basics/idp-service-catalog.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/idp-service-catalog",permalink:"/docs/tutorial-basics/idp-service-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/thanhgit/util4devops-docs/blob/master/docs/tutorial-basics/idp-service-catalog.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"IDP - Home",permalink:"/docs/tutorial-basics/idp-home"},next:{title:"IDP - API",permalink:"/docs/tutorial-basics/idp-api"}},r={},l=[{value:"Create a <code>catalog-info.yaml</code>",id:"create-a-catalog-infoyaml",level:2},{value:"Reference documentation: https://backstage.io/docs/features/software-catalog/descriptor-format/",id:"reference-documentation-httpsbackstageiodocsfeaturessoftware-catalogdescriptor-format",level:4},{value:"For example:",id:"for-example",level:4},{value:"Create a component",id:"create-a-component",level:2},{value:"Reference documentation: https://backstage.io/docs/features/software-catalog/",id:"reference-documentation-httpsbackstageiodocsfeaturessoftware-catalog",level:4},{value:"<code>Step 1:</code> Click <code>Catalog</code> button in left sidebar",id:"step-1-click-catalog-button-in-left-sidebar",level:4},{value:"<code>Step 2:</code> Click <code>Create</code> button to navigate to <code>Create a new component</code> page",id:"step-2-click-create-button-to-navigate-to-create-a-new-component-page",level:4},{value:"<code>Step 3:</code>click <code>REGISTER EXISTING COMPONENT</code> to navigate to <code>Register an existing component</code> page",id:"step-3click-register-existing-component-to-navigate-to-register-an-existing-component-page",level:4},{value:"<code>Step 4:</code> entering <code>catalog-info.yaml</code> file. For example: https://gitlab.com/idp4731311/python-api/-/blob/master/catalog-info.yaml",id:"step-4-entering-catalog-infoyaml-file-for-example-httpsgitlabcomidp4731311python-api-blobmastercatalog-infoyaml",level:4},{value:"<code>Step 5:</code> click <code>ANALYZE</code> to continue",id:"step-5-click-analyze-to-continue",level:4},{value:"<code>Step 6:</code> view catalog-info, then click <code>IMPORT</code> to continue",id:"step-6-view-catalog-info-then-click-import-to-continue",level:4},{value:"<code>Step 7.1:</code> click <code>VIEW COMPONENT</code> to native to component page",id:"step-71-click-view-component-to-native-to-component-page",level:4},{value:"<code>Step 7.2:</code> click <code>REGISTER ANOTHER</code> to navigate to continue import new catalog-info ~ back to <code>Step 4</code>",id:"step-72-click-register-another-to-navigate-to-continue-import-new-catalog-info--back-to-step-4",level:4}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"idp---service-catalog",children:"IDP - Service catalog"}),"\n",(0,o.jsx)(t.p,{children:"Service catalog is a main feature in Util4devops IDP with creating components, APIs, ..."}),"\n",(0,o.jsxs)(t.h2,{id:"create-a-catalog-infoyaml",children:["Create a ",(0,o.jsx)(t.code,{children:"catalog-info.yaml"})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.h4,{id:"reference-documentation-httpsbackstageiodocsfeaturessoftware-catalogdescriptor-format",children:["Reference documentation: ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format/",children:"https://backstage.io/docs/features/software-catalog/descriptor-format/"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.h4,{id:"for-example",children:"For example:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",metastring:'title="catalog-info.yaml"',children:"apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: \"python-api-gitlab-com\"\n  description: A super simple RESTful api created using Flask\n  annotations:\n    kong-manager/service-name: backend-service\n    kong-manager/instance: /kong-manager/api\n    kafka.apache.org/consumer-groups: backstage/demo\n    ## changelog plugin\n    changelog-file-ref: \"url:https://gitlab.com/idp4731311/python-api/-/blob/master/CHANGELOG.md\"\n\n    ## techdocs plugin\n    backstage.io/techdocs-ref: dir:.\n\n    ## prometheus plugin\n    prometheus.io/uptime: 'demo test,git.util4dev.xyz,docker.util4dev.shop'\n    prometheus.io/rule: 'monitor_status{monitor_name=\"python-app.apis.util4dev.shop\"}'\n    prometheus.io/alert: all\n\n    ## gitlab plugin\n    gitlab.com/project-slug: 'idp4731311/python-api'\n    gitlab.com/instance: gitlab.com\n    gitlab.com/jobs-branches: 'master'\n\n    ## K8sgpt plugin\n    backstage.io/kubernetes-label-selector: 'k8sgpts.k8sgpt.ai/namespace=k8sgpt-operator-system'\n    k8s.gpt.ai/kubernetes-namespace: 'python-api'\n\n    ## harbor plugin\n    goharbor.io/repository-slug: idp4731311/python-api\n\n    ## DORA plugin\n    dora.metrics/project-name: 'python-api'\n\n    ## sonarqube plugin\n    sonarqube.org/project-key: default/python-api_20\n\n    ## vault plugin\n    vault.io/secrets-path: gitlab\n    vault.io/secrets-engine: thanhnp # default = secret\n\n    ## argocd plugin\n    argocd/app-name: python-api\n\n    ## sentry plugin\n    sentry.io/project-slug: python-api\n\n    ## show libaries in requirements.txt\n    libraries.io/show: 'true'\n    libraries.io/queries: '**/requirements.txt'\n\n    ## show ADR\n    backstage.io/adr-location: docs/adrs\n  tags:\n    - python\n    - flask\n  links:\n    - url: https://gitlab.com/idp4731311/python-api\n      title: Git repo\n      icon: github\nspec:\n  target: gitlab.com\n  type: service\n  owner: group:python-team\n  system: util4dev\n  lifecycle: dev\n  providesApis:\n    - python-api\n  dependsOn:\n    - Resource:argocd\n    - Resource:gitlab\n    - Resource:harbor\n    - Resource:sonarqube\n    - Resource:vault\n"})}),"\n",(0,o.jsx)(t.h2,{id:"create-a-component",children:"Create a component"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.h4,{id:"reference-documentation-httpsbackstageiodocsfeaturessoftware-catalog",children:["Reference documentation: ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/",children:"https://backstage.io/docs/features/software-catalog/"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(5328).A+"",width:"1271",height:"571"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.h4,{id:"step-1-click-catalog-button-in-left-sidebar",children:[(0,o.jsx)(t.code,{children:"Step 1:"})," Click ",(0,o.jsx)(t.code,{children:"Catalog"})," button in left sidebar"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.h4,{id:"step-2-click-create-button-to-navigate-to-create-a-new-component-page",children:[(0,o.jsx)(t.code,{children:"Step 2:"})," Click ",(0,o.jsx)(t.code,{children:"Create"})," button to navigate to ",(0,o.jsx)(t.code,{children:"Create a new component"})," page"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(363).A+"",width:"1276",height:"578"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.h4,{id:"step-3click-register-existing-component-to-navigate-to-register-an-existing-component-page",children:[(0,o.jsx)(t.code,{children:"Step 3:"}),"click ",(0,o.jsx)(t.code,{children:"REGISTER EXISTING COMPONENT"})," to navigate to ",(0,o.jsx)(t.code,{children:"Register an existing component"})," page"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(5010).A+"",width:"1287",height:"577"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.h4,{id:"step-4-entering-catalog-infoyaml-file-for-example-httpsgitlabcomidp4731311python-api-blobmastercatalog-infoyaml",children:[(0,o.jsx)(t.code,{children:"Step 4:"})," entering ",(0,o.jsx)(t.code,{children:"catalog-info.yaml"})," file. For example: ",(0,o.jsx)(t.a,{href:"https://gitlab.com/idp4731311/python-api/-/blob/master/catalog-info.yaml",children:"https://gitlab.com/idp4731311/python-api/-/blob/master/catalog-info.yaml"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.h4,{id:"step-5-click-analyze-to-continue",children:[(0,o.jsx)(t.code,{children:"Step 5:"})," click ",(0,o.jsx)(t.code,{children:"ANALYZE"})," to continue"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(6573).A+"",width:"1277",height:"581"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.h4,{id:"step-6-view-catalog-info-then-click-import-to-continue",children:[(0,o.jsx)(t.code,{children:"Step 6:"})," view catalog-info, then click ",(0,o.jsx)(t.code,{children:"IMPORT"})," to continue"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(420).A+"",width:"1281",height:"579"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.h4,{id:"step-71-click-view-component-to-native-to-component-page",children:[(0,o.jsx)(t.code,{children:"Step 7.1:"})," click ",(0,o.jsx)(t.code,{children:"VIEW COMPONENT"})," to native to component page"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(3983).A+"",width:"1275",height:"574"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.h4,{id:"step-72-click-register-another-to-navigate-to-continue-import-new-catalog-info--back-to-step-4",children:[(0,o.jsx)(t.code,{children:"Step 7.2:"})," click ",(0,o.jsx)(t.code,{children:"REGISTER ANOTHER"})," to navigate to continue import new catalog-info ~ back to ",(0,o.jsx)(t.code,{children:"Step 4"})]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5328:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/idp-create-service-catalog-component-1-26ca4871e5e0c98902653d648f525915.png"},363:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/idp-create-service-catalog-component-2-3f5ff9bb38f611b9d21c923869a3042b.png"},5010:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/idp-create-service-catalog-component-3-5285bb96dba908159b19d9b7f75b964b.png"},6573:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/idp-create-service-catalog-component-4-781cbe9113d8dee64ea569645e6d3eec.png"},420:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/idp-create-service-catalog-component-5-389a10af98bae837648950fd0b3fa53e.png"},3983:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/idp-create-service-catalog-component-6-a974e5fa0b75fb0216f365aa0282ec4c.png"},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var o=n(6540);const a={},i=o.createContext(a);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);