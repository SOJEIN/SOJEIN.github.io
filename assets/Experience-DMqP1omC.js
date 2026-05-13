import{j as e,m as c}from"./vendor-motion-C3Gb7YjX.js";import{S as p,d as m,f as x,h as g,e as o}from"./index-gIVwFaZs.js";import{d as r}from"./vendor-styled-45cP_06f.js";import{u as h}from"./vendor-i18n-D66fIosn.js";import"./vendor-react-Bzgz95E1.js";import"./vendor-icons-CVeIpEh5.js";import"./vendor-gsap-DKtf60Sy.js";const b=[{id:"aoa",company:"Aoa",stack:["React","JavaScript","Laravel","PHP","SQL","MongoDB"],current:!1},{id:"growtty",company:"Growtty",stack:["React","TypeScript","Firebase","NestJS"],isLead:!0},{id:"smiofi",company:"Smiofi – Juridicapp",stack:["React","Node.js","React Native","Docker","Linux","Vite"]},{id:"routz",company:"Routz",stack:["React Native","React","TypeScript","Jest"]},{id:"cosinte",company:"Cosinte",stack:["WordPress","WooCommerce","Android"]}],f=r.section`
  padding: 5rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${o.tablet}) {
    padding: 3rem 1rem;
  }
`,v=r.div`
  margin-bottom: 3rem;
`,u=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;

  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 14px;
    bottom: 0;
    width: 1.5px;
    background: linear-gradient(
      to bottom,
      var(--accent) 0%,
      rgba(99, 102, 241, 0.3) 70%,
      transparent 100%
    );

    @media (max-width: ${o.tablet}) {
      left: 7px;
    }
  }
`,w=r(c.div)`
  display: flex;
  gap: 1.75rem;
  padding-bottom: 2.5rem;

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: ${o.tablet}) {
    gap: 1.25rem;
  }
`,y=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 2px;
`,j=r(c.div)`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  background: ${({$current:i})=>i?"var(--accent)":"var(--bg-primary)"};
  position: relative;
  z-index: 1;
  flex-shrink: 0;

  ${({$current:i})=>i&&`
    box-shadow: 0 0 0 5px rgba(99, 102, 241, 0.15);
  `}
`,k=r.div`
  flex: 1;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-card);
  padding: 1.5rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: var(--card-hover-border);
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.08);
  }
`,S=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.4rem;
  flex-wrap: wrap;
`,R=r.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
`,$=r.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex-wrap: wrap;
`,s=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;

  ${({$variant:i})=>i==="lead"?`
    color: #f59e0b;
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.25);
  `:`
    color: #22c55e;
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.25);
  `}
`,z=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`,T=r.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent);
`,A=r.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
  white-space: nowrap;
`,E=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
`,N=r.span`
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
`,P=r.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`,B=r.li`
  display: flex;
  gap: 0.6rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-secondary);

  &::before {
    content: '▸';
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 1px;
    font-size: 0.75rem;
  }
`,W=()=>{const{t:i}=h();return e.jsxs(f,{id:"experience",children:[e.jsxs(v,{children:[e.jsx(p,{children:i("experience.tag")}),e.jsx(m,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45},children:i("experience.title")})]}),e.jsx(u,{children:b.map((t,d)=>{const n=i(`experience.items.${t.id}.achievements`,{returnObjects:!0});return e.jsxs(w,{custom:d,initial:"hidden",whileInView:"visible",whileHover:"hover",viewport:{once:!0,margin:"-60px"},variants:x,children:[e.jsx(y,{children:e.jsx(j,{$current:t.current,variants:{hover:{scale:1.35,boxShadow:"0 0 0 8px rgba(99, 102, 241, 0.18)",transition:{duration:.2}}}})}),e.jsxs(k,{children:[e.jsxs(S,{children:[e.jsx(R,{children:t.company}),e.jsxs($,{children:[t.isLead&&e.jsxs(s,{$variant:"lead",children:[e.jsx(g,{size:9}),i("experience.leadBadge")]}),t.current&&e.jsx(s,{$variant:"current",children:i("experience.currentBadge")})]})]}),e.jsxs(z,{children:[e.jsx(T,{children:i(`experience.items.${t.id}.role`)}),e.jsx(A,{children:i(`experience.items.${t.id}.period`)})]}),e.jsx(E,{children:t.stack.map(a=>e.jsx(N,{children:a},a))}),e.jsx(P,{children:Array.isArray(n)&&n.map((a,l)=>e.jsx(B,{children:a},l))})]})]},t.id)})})]})};export{W as Experience};
