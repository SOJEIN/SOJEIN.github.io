import{r as b,j as e}from"./vendor-motion-C3Gb7YjX.js";import{S as u,d as f,B as x,e as d,h,p as y,q as v,I as j,r as k,f as w,g as m}from"./index-gIVwFaZs.js";import{d as t}from"./vendor-styled-45cP_06f.js";import{u as g}from"./vendor-i18n-D66fIosn.js";import"./vendor-react-Bzgz95E1.js";import"./vendor-icons-CVeIpEh5.js";import"./vendor-gsap-DKtf60Sy.js";const S={fullstack:{bg:"rgba(6, 182, 212, 0.1)",text:"#06b6d4",bar:"#06b6d4"},frontend:{bg:"rgba(99, 102, 241, 0.1)",text:"var(--accent)",bar:"#6366f1"},backend:{bg:"rgba(139, 92, 246, 0.1)",text:"#8b5cf6",bar:"#8b5cf6"},mobile:{bg:"rgba(34, 197, 94, 0.1)",text:"#22c55e",bar:"#22c55e"}},R=[{id:"billing-system",stack:["Laravel","React","TypeScript","Docker","MySQL"],category:"fullstack",githubUrl:"https://github.com/SOJEIN/billing-system",featured:!0},{id:"sass-surveys",stack:["React","NestJS","TypeScript","PostgreSQL"],category:"fullstack",githubUrl:"https://github.com/SOJEIN/sass-surveys",featured:!0},{id:"music-app",stack:["Electron","React","Firebase","JavaScript"],category:"frontend",githubUrl:"https://github.com/SOJEIN/MusicApp",demoUrl:"https://github.com/SOJEIN/MusicApp/releases",featured:!0},{id:"task-management",stack:["React",".NET Core","JWT","SQL Server","TypeScript"],category:"fullstack",githubUrl:"https://github.com/SOJEIN/TaskManagementSystem",featured:!1},{id:"orbit",stack:["React Native","TypeScript","Firebase","Zustand","RTK Query"],category:"mobile",githubUrl:"https://github.com/SOJEIN/Orbit",apkUrl:"/apk/Orbit-1.0.beta.apk",featured:!1},{id:"movies-now",stack:["React Native","Expo","TMDb API","Axios","React Navigation"],category:"mobile",githubUrl:"https://github.com/SOJEIN/Movies_now",featured:!1},{id:"fotostory",stack:["React","Vite","Firebase","Zustand","Material-UI"],category:"frontend",githubUrl:"https://github.com/SOJEIN/fotostory",demoUrl:"https://sojein.github.io/fotostory",featured:!1}],U=t.section`
  padding: 5rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${d.tablet}) {
    padding: 3rem 1rem;
  }
`,I=t.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,T=t.div``,E=t.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,C=t.button`
  padding: 0.35rem 0.875rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({$active:r})=>r?"var(--accent)":"var(--card-border)"};
  background: ${({$active:r})=>r?"var(--accent)":"transparent"};
  color: ${({$active:r})=>r?"#fff":"var(--text-secondary)"};
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--card-hover-border);
    color: var(--text-primary);
  }
`,$=t(m)`
  grid-column: span 7;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: pointer;

  @media (max-width: ${d.tablet}) {
    grid-column: span 1;
  }
`,O=t(m)`
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: pointer;

  @media (max-width: ${d.tablet}) {
    grid-column: span 1;
  }
`,N=t.div`
  height: 3px;
  width: 100%;
  border-radius: 999px;
  background: ${({$color:r})=>r};
  margin-bottom: 0.25rem;
`,F=t.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,z=t.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--accent);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(99, 102, 241, 0.3);
  background: rgba(99, 102, 241, 0.08);
`,J=t.span`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: ${({$bg:r})=>r};
  color: ${({$color:r})=>r};
`,L=t.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
`,A=t.p`
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--text-secondary);
  flex: 1;
`,P=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`,B=t.span`
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
`,K=t.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--card-border);
  margin-top: auto;
`,c=t.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover { color: var(--accent); }
`,M=({project:r,index:i,featured:l})=>{const{t:o}=g(),s=S[r.category],a=e.jsxs(e.Fragment,{children:[e.jsx(N,{$color:s.bar}),e.jsxs(F,{children:[l&&e.jsxs(z,{children:[e.jsx(h,{size:10})," ",o("projects.featured")]}),e.jsx(J,{$bg:s.bg,$color:s.text,children:o(`projects.filters.${r.category}`)})]}),e.jsx(L,{children:o(`projects.items.${r.id}.title`)}),e.jsx(A,{children:o(`projects.items.${r.id}.description`)}),e.jsx(P,{children:r.stack.map(p=>e.jsx(B,{children:p},p))}),e.jsxs(K,{children:[e.jsxs(c,{href:r.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(y,{size:14})," ",o("projects.github")]}),r.demoUrl&&e.jsxs(c,{href:r.demoUrl,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(v,{size:14})," ",o("projects.liveDemo")]}),r.apkUrl&&e.jsxs(c,{href:r.apkUrl,download:!0,children:[e.jsx(j,{size:14})," ",o("projects.downloadAndroid")]}),r.iosUrl&&e.jsxs(c,{href:r.iosUrl,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(k,{size:14})," ",o("projects.downloadIos")]})]})]}),n={custom:i,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:w};return l?e.jsx($,{colSpan:7,variant:"accent",...n,children:a}):e.jsx(O,{colSpan:5,...n,children:a})},q=()=>{const{t:r}=g(),[i,l]=b.useState("all"),o=[{labelKey:"projects.filters.all",value:"all"},{labelKey:"projects.filters.fullstack",value:"fullstack"},{labelKey:"projects.filters.frontend",value:"frontend"},{labelKey:"projects.filters.backend",value:"backend"},{labelKey:"projects.filters.mobile",value:"mobile"}],s=R.filter(a=>i==="all"||a.category===i);return e.jsxs(U,{id:"projects",children:[e.jsxs(I,{children:[e.jsxs(T,{children:[e.jsx(u,{children:r("projects.tag")}),e.jsx(f,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45},children:r("projects.title")})]}),e.jsx(E,{children:o.map(a=>e.jsx(C,{$active:i===a.value,onClick:()=>l(a.value),children:r(a.labelKey)},a.value))})]}),e.jsx(x,{children:s.map((a,n)=>e.jsx(M,{project:a,index:n,featured:!!a.featured&&n===0},a.id))})]})};export{q as ProjectsPage};
