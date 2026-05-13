import{j as e}from"./vendor-motion-C3Gb7YjX.js";import{S as c,d,B as l,f as m,i as p,j as x,k as g,l as u,e as a,g as f}from"./index-gIVwFaZs.js";import{d as i}from"./vendor-styled-45cP_06f.js";import{u as h}from"./vendor-i18n-D66fIosn.js";import"./vendor-react-Bzgz95E1.js";import"./vendor-icons-CVeIpEh5.js";import"./vendor-gsap-DKtf60Sy.js";const j=[{id:"cun",institution:"CUN",current:!0},{id:"sena",institution:"SENA",current:!1}],b=i.section`
  padding: 5rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${a.tablet}) {
    padding: 3rem 1rem;
  }
`,w=i.div`
  margin-bottom: 3rem;
`,v=i(f)`
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: ${a.tablet}) {
    grid-column: span 1;
  }
`,y=i.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`,z=i.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,k=i.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.875rem;
  background: linear-gradient(135deg, var(--accent), #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.1rem;
  flex-shrink: 0;
`,C=i.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
`,S=i.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  flex-shrink: 0;

  ${({$current:r})=>r?`
    color: #22c55e;
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.25);
  `:`
    color: #06b6d4;
    background: rgba(6, 182, 212, 0.1);
    border: 1px solid rgba(6, 182, 212, 0.25);
  `}
`,T=i.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent);
`,$=i.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: var(--text-secondary);
`,B=i.p`
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--text-secondary);
`,I=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
`,E=i.span`
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
`,U=()=>{const{t:r}=h();return e.jsxs(b,{id:"education",children:[e.jsxs(w,{children:[e.jsx(c,{children:r("education.tag")}),e.jsx(d,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45},children:r("education.title")})]}),e.jsx(l,{children:j.map((t,o)=>{const n=r(`education.items.${t.id}.tags`,{returnObjects:!0});return e.jsxs(v,{colSpan:6,variant:t.current?"accent":"default",custom:o,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},variants:m,children:[e.jsxs(y,{children:[e.jsxs(z,{children:[e.jsx(k,{children:e.jsx(p,{})}),e.jsx(C,{children:t.institution})]}),e.jsx(S,{$current:!!t.current,children:t.current?e.jsxs(e.Fragment,{children:[e.jsx(x,{size:10})," ",r("education.inProgress")]}):e.jsxs(e.Fragment,{children:[e.jsx(g,{size:10})," ",r("education.completed")]})})]}),e.jsx("div",{children:e.jsx(T,{children:r(`education.items.${t.id}.degree`)})}),e.jsxs($,{children:[e.jsx(u,{size:13}),r(`education.items.${t.id}.period`)]}),e.jsx(B,{children:r(`education.items.${t.id}.description`)}),e.jsx(I,{children:Array.isArray(n)&&n.map(s=>e.jsx(E,{children:s},s))})]},t.id)})})]})};export{U as Education};
