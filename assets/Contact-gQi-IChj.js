import{r as l,j as e,A,m as k}from"./vendor-motion-C3Gb7YjX.js";import{S as L,d as T,B as P,s as B,t as R,P as o,u as E,p as N,v as q,e as x,g}from"./index-gIVwFaZs.js";import{d as t}from"./vendor-styled-45cP_06f.js";import{e as G}from"./vendor-emailjs-DtVQIX_c.js";import{u as K}from"./vendor-i18n-D66fIosn.js";import"./vendor-react-Bzgz95E1.js";import"./vendor-icons-CVeIpEh5.js";import"./vendor-gsap-DKtf60Sy.js";class _{constructor(a,n,i){this.serviceId=a,this.templateId=n,this.publicKey=i}async send(a){await G.sendForm(this.serviceId,this.templateId,a,{publicKey:this.publicKey})}}const D=new _("portfolio_service","template_3mnwrrt","VvQEbhNuTZCOe5N0L"),M=t.section`
  padding: 5rem 1.5rem 7rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${x.tablet}) {
    padding: 3rem 1rem 5rem;
  }
`,O=t(g)`
  grid-column: span 7;

  @media (max-width: ${x.tablet}) {
    grid-column: span 1;
  }
`,V=t.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,d=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,m=t.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,$=`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  font-family: inherit;
  background: var(--bg-primary);
  border: 1px solid var(--card-border);
  border-radius: 0.625rem;
  color: var(--text-primary);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-color: var(--card-hover-border);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.08);
  }

  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.5;
  }
`,u=t.input`${$}`,U=t.textarea`
  ${$}
  min-height: 130px;
  resize: vertical;
`,H=t.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: inherit;
  background: linear-gradient(135deg, var(--accent), #8b5cf6);
  color: #fff;
  border: none;
  border-radius: 0.625rem;
  cursor: ${({$loading:r})=>r?"not-allowed":"pointer"};
  opacity: ${({$loading:r})=>r?.7:1};
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
  align-self: flex-start;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
  }
`,J=t(k.p)`
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 0.625rem;
  color: ${({$success:r})=>r?"#22c55e":"#ef4444"};
  background: ${({$success:r})=>r?"rgba(34, 197, 94, 0.08)":"rgba(239, 68, 68, 0.08)"};
  border: 1px solid ${({$success:r})=>r?"rgba(34, 197, 94, 0.2)":"rgba(239, 68, 68, 0.2)"};
`,Q=t(g)`
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;

  @media (max-width: ${x.tablet}) {
    grid-column: span 1;
  }
`,j=t.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,y=t.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.625rem;
  border: 1px solid var(--card-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1rem;
  flex-shrink: 0;
`,v=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`,w=t.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-secondary);
`,S=t.a`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover { color: var(--accent); }
`,Y=t.div`
  display: flex;
  gap: 0.625rem;
`,I=t.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: 1px solid var(--card-border);
  color: var(--text-secondary);
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--card-hover-border);
    color: var(--accent);
    transform: scale(1.1);
  }
`,Z=t(g)`
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: ${x.tablet}) {
    grid-column: span 1;
  }
`,W=t(k.span)`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  margin-right: 0.5rem;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
`,X=t.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
`,ee=t.p`
  font-size: 0.825rem;
  color: var(--text-secondary);
  line-height: 1.6;
`,F={name:"",email:"",subject:"",message:""},le=()=>{const{t:r}=K(),a=l.useRef(null),[n,i]=l.useState(F),[p,b]=l.useState(!1),[h,f]=l.useState(null),s=c=>{i(C=>({...C,[c.target.name]:c.target.value}))},z=async c=>{if(c.preventDefault(),!!a.current){b(!0),f(null);try{await D.send(a.current),f({msg:r("contact.form.success"),success:!0}),i(F)}catch{f({msg:r("contact.form.error"),success:!1})}finally{b(!1)}}};return e.jsxs(M,{id:"contact",children:[e.jsx(L,{children:r("contact.tag")}),e.jsx(T,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45},style:{marginBottom:"2rem"},children:r("contact.title")}),e.jsxs(P,{children:[e.jsx(O,{colSpan:7,variant:"accent",children:e.jsxs(V,{ref:a,onSubmit:z,children:[e.jsxs(d,{children:[e.jsx(m,{htmlFor:"name",children:r("contact.form.name")}),e.jsx(u,{id:"name",name:"name",type:"text",placeholder:r("contact.form.namePlaceholder"),value:n.name,onChange:s,required:!0})]}),e.jsxs(d,{children:[e.jsx(m,{htmlFor:"email",children:r("contact.form.email")}),e.jsx(u,{id:"email",name:"email",type:"email",placeholder:r("contact.form.emailPlaceholder"),value:n.email,onChange:s,required:!0})]}),e.jsxs(d,{children:[e.jsx(m,{htmlFor:"subject",children:r("contact.form.subject")}),e.jsx(u,{id:"subject",name:"subject",type:"text",placeholder:r("contact.form.subjectPlaceholder"),value:n.subject,onChange:s,required:!0})]}),e.jsxs(d,{children:[e.jsx(m,{htmlFor:"message",children:r("contact.form.message")}),e.jsx(U,{id:"message",name:"message",placeholder:r("contact.form.messagePlaceholder"),value:n.message,onChange:s,required:!0})]}),e.jsxs(H,{type:"submit",disabled:p,$loading:p,children:[e.jsx(B,{size:15}),r(p?"contact.form.sending":"contact.form.send")]}),e.jsx(A,{children:h&&e.jsx(J,{$success:h.success,initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0},children:h.msg})})]})}),e.jsxs(Q,{colSpan:5,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[e.jsxs(j,{children:[e.jsx(y,{children:e.jsx(R,{})}),e.jsxs(v,{children:[e.jsx(w,{children:r("contact.info.emailLabel")}),e.jsx(S,{href:`mailto:${o.email}`,children:o.email})]})]}),e.jsxs(j,{children:[e.jsx(y,{children:e.jsx(E,{})}),e.jsxs(v,{children:[e.jsx(w,{children:r("contact.info.locationLabel")}),e.jsx(S,{as:"span",children:o.location})]})]})]}),e.jsxs(Y,{children:[e.jsx(I,{href:o.githubUrl,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:e.jsx(N,{})}),e.jsx(I,{href:o.linkedinUrl,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:e.jsx(q,{})})]})]}),e.jsxs(Z,{colSpan:5,children:[e.jsxs(X,{children:[e.jsx(W,{animate:{boxShadow:["0 0 0 0px rgba(34,197,94,0.4)","0 0 0 8px rgba(34,197,94,0)","0 0 0 0px rgba(34,197,94,0)"]},transition:{duration:2,repeat:1/0}}),r("contact.availability.title")]}),e.jsx(ee,{children:r("contact.availability.text")})]})]})]})};export{le as Contact};
