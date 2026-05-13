import{j as e}from"./vendor-motion-C3Gb7YjX.js";import{S as c,d as l,B as m,f as p,m as f,l as x,n as g,o as h,e as o,g as u}from"./index-gIVwFaZs.js";import{d as i}from"./vendor-styled-45cP_06f.js";import{u as w}from"./vendor-i18n-D66fIosn.js";import"./vendor-react-Bzgz95E1.js";import"./vendor-icons-CVeIpEh5.js";import"./vendor-gsap-DKtf60Sy.js";const y=[{id:"cicce-sql",issuer:"CICCE"},{id:"udemy-unity-intro",issuer:"Udemy",credentialUrl:"https://www.udemy.com/certificate/UC-7c1947cf-00cb-49f9-8453-2501ed7d348b/"},{id:"udemy-csharp-unity",issuer:"Udemy"}],j=i.section`
  padding: 5rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${o.tablet}) {
    padding: 3rem 1rem;
  }
`,v=i.div`
  margin-bottom: 3rem;
`,b=i(u)`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${o.tablet}) {
    grid-column: span 1;
  }
`,C=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,T=i.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
`,U=i.div`
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
`,I=i.span`
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent);
`,z=i.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
  flex: 1;
`,S=i.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
`,R=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
`,k=i.span`
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
`,F=i.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--card-border);
  margin-top: auto;
`,a=i.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover { color: var(--accent); }
`,P=()=>{const{t}=w();return e.jsxs(j,{id:"certifications",children:[e.jsxs(v,{children:[e.jsx(c,{children:t("certifications.tag")}),e.jsx(l,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45},children:t("certifications.title")})]}),e.jsx(m,{children:y.map((r,d)=>{const n=t(`certifications.items.${r.id}.tags`,{returnObjects:!0});return e.jsxs(b,{colSpan:4,custom:d,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},variants:p,children:[e.jsx(C,{children:e.jsxs(T,{children:[e.jsx(U,{children:e.jsx(f,{})}),e.jsx(I,{children:r.issuer})]})}),e.jsx(z,{children:t(`certifications.items.${r.id}.title`)}),e.jsxs(S,{children:[e.jsx(x,{size:13}),t(`certifications.items.${r.id}.date`)]}),e.jsx(R,{children:Array.isArray(n)&&n.map(s=>e.jsx(k,{children:s},s))}),(r.credentialUrl||r.pdfUrl)&&e.jsxs(F,{children:[r.credentialUrl&&e.jsxs(a,{href:r.credentialUrl,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(g,{size:13})," ",t("certifications.viewCredential")]}),r.pdfUrl&&e.jsxs(a,{href:r.pdfUrl,download:!0,children:[e.jsx(h,{size:13})," ",t("certifications.viewPdf")]})]})]},r.id)})})]})};export{P as Certifications};
