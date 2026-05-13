import{r as d,b as S,j as e,m}from"./vendor-motion-C3Gb7YjX.js";import{d as t}from"./vendor-styled-45cP_06f.js";import{F as j,a as v,b as y,c as w,S as k,d as F,B as T,P as C,f as A,e as s,g as c}from"./index-gIVwFaZs.js";import{u as I}from"./vendor-i18n-D66fIosn.js";import"./vendor-react-Bzgz95E1.js";import"./vendor-icons-CVeIpEh5.js";import"./vendor-gsap-DKtf60Sy.js";function L(i,n=1.5){const[a,r]=d.useState(0),o=d.useRef(null),p=S(o,{once:!0,margin:"-50px"});return d.useEffect(()=>{if(!p)return;const g=performance.now();let l;const u=f=>{const x=Math.min((f-g)/(n*1e3),1),b=1-Math.pow(1-x,3);r(Math.round(b*i)),x<1&&(l=requestAnimationFrame(u))};return l=requestAnimationFrame(u),()=>cancelAnimationFrame(l)},[p,i,n]),{value:a,ref:o}}const V=[{icon:j,titleKey:"about.skills.frontend.title",items:["React","TypeScript","Next.js","Styled-Components","Framer Motion","Vite"]},{icon:v,titleKey:"about.skills.backend.title",items:["Node.js","NestJS","Laravel",".NET Core","REST APIs","JWT"]},{icon:y,titleKey:"about.skills.databases.title",items:["PostgreSQL","MySQL","SQL Server","Firebase","MongoDB"]},{icon:w,titleKey:"about.skills.devops.title",items:["Docker","Git","GitHub Actions","Linux","Agile / Scrum"]}],z=t.section`
  padding: 5rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${s.tablet}) {
    padding: 3rem 1rem;
  }
`,K=t.div`
  margin-bottom: 2rem;
`,N=t(c)`
  grid-column: span 7;

  @media (max-width: ${s.tablet}) {
    grid-column: span 1;
  }
`,B=t.p`
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text-secondary);
  white-space: pre-line;
`,E=t(c)`
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: ${s.tablet}) {
    grid-column: span 1;
  }
`,M=t.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,P=t.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, var(--accent), #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  flex-shrink: 0;
`,R=t.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
`,D=t(m.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,$=t(m.li)`
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.775rem;
  font-weight: 500;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
`,G=t(c)`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.25rem;

  @media (max-width: ${s.tablet}) {
    grid-column: span 1;
  }
`,H=t.span`
  font-size: 2.25rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Q=t.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.3;
`,q=t(c)`
  grid-column: span 8;

  @media (max-width: ${s.tablet}) {
    grid-column: span 1;
  }
`,J=t.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--accent);
  margin-bottom: 0.75rem;
`,O=t.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,U={hidden:{opacity:0,scale:.75},visible:{opacity:1,scale:1,transition:{duration:.25}}},W={hidden:{},visible:{transition:{staggerChildren:.045,delayChildren:.1}}},h=({target:i,suffix:n,desc:a})=>{const{value:r,ref:o}=L(i);return e.jsx(G,{colSpan:2,children:e.jsxs("div",{ref:o,children:[e.jsxs(H,{children:[r,n]}),e.jsx(Q,{children:a})]})})},ne=()=>{const{t:i}=I();return e.jsxs(z,{id:"about",children:[e.jsxs(K,{children:[e.jsx(k,{children:i("about.tag")}),e.jsx(F,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45},children:i("about.title")})]}),e.jsxs(T,{children:[e.jsx(N,{colSpan:7,variant:"accent",children:e.jsx(B,{children:i("about.bio")})}),e.jsx(h,{target:Number(C.experience),suffix:"+",desc:i("about.stats.experienceDesc")}),e.jsx(h,{target:25,suffix:"+",desc:i("about.stats.projectsDesc")}),V.map((n,a)=>e.jsxs(E,{colSpan:6,children:[e.jsx(m.div,{custom:a,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:A,children:e.jsxs(M,{children:[e.jsx(P,{children:e.jsx(n.icon,{})}),e.jsx(R,{children:i(n.titleKey)})]})}),e.jsx(D,{variants:W,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:n.items.map(r=>e.jsx($,{variants:U,children:r},r))})]},n.titleKey)),e.jsxs(q,{colSpan:8,children:[e.jsx(J,{children:i("about.funFact.title")}),e.jsx(O,{children:i("about.funFact.text")})]})]})]})};export{ne as About};
