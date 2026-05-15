const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Productos-CJG4QoG3.js","assets/Components-DJ0808dB.js","assets/Components-D0fh3uF9.css","assets/Servicios-BdB1WHPe.js","assets/Contacto-5ieTIzkF.js","assets/Footer-Dty8Gao0.js"])))=>i.map(i=>d[i]);
import{q as c,s as l,r as e,S as b,I as y,L as C,T as k,n as E,i as _,p as w}from"./Components-DJ0808dB.js";const S="modulepreload",P=function(n){return"/"+n},g={},p=function(h,t,x){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),r=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.allSettled(t.map(i=>{if(i=P(i),i in g)return;g[i]=!0;const u=i.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${f}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":S,u||(s.as="script"),s.crossOrigin="",s.href=i,r&&s.setAttribute("nonce",r),document.head.appendChild(s),u)return new Promise((j,v)=>{s.addEventListener("load",j),s.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})}))}function m(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return a.then(o=>{for(const r of o||[])r.status==="rejected"&&m(r.reason);return h().catch(m)})},L=c.nav`
  font-family:outfit;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0rem 0rem 0rem 0rem;
  background-color: rgb(63, 134, 242, 45);
  color: #fff;
  position: fixed; /* Fija la navbar en la parte superior */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`,I=c.img`
  cursor: pointer;
  width: auto;
  height: 3rem;
  margin: 0.4rem;
`,T=c.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none; // Ocultar en dispositivos móviles
  }
`,d=c.li`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #aaa;
  }
`,O=c.button`
  display: none;
  font-size: 2.5rem;
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  outline: none;

  @media (max-width: 768px) {
    display: block; // Mostrar en dispositivos móviles
  }
`,A=c.div`
  position: absolute;
  top: 100%;
  width: 100%;
  max-width: 100%;
  background-color: #021757;
  padding: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: ${({isOpen:n})=>n?"scaleY(1)":"scaleY(0)"};
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @media (min-width: 769px) {
    display: none; // Ocultar en dispositivos grandes
  }
`,R=c.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin: 0;
  padding: 1rem 0 1rem 0;
`,z=()=>{const[n,h]=l.useState(!1),t=m=>{const o=document.getElementById(m);o&&o.scrollIntoView({behavior:"smooth"})},x=()=>{window.scrollTo({top:0,behavior:"smooth"})},a=()=>{h(!n)};return e.jsxs(L,{children:[e.jsx(I,{onClick:x,src:"/logo.svg",alt:"Logo"}),e.jsxs(T,{children:[e.jsx(d,{onClick:()=>t("Productos"),children:"Productos"}),e.jsx(d,{onClick:()=>t("Servicios"),children:"Servicios"}),e.jsx(d,{onClick:()=>t("Contacto"),children:"Contacto"})]}),e.jsx(O,{onClick:a,"aria-label":n?"Cerrar menú":"Abrir menú","aria-expanded":n,"aria-controls":"mobile-menu",children:"☰"}),e.jsx(A,{id:"mobile-menu",isOpen:n,children:e.jsxs(R,{children:[e.jsx(d,{onClick:()=>{t("Productos"),a()},children:"Productos"}),e.jsx(d,{onClick:()=>{t("Servicios"),a()},children:"Servicios"}),e.jsx(d,{onClick:()=>{t("Contacto"),a()},children:"Contacto"})]})})]})},B=c.button`
background: rgba(0, 0, 0, 0);
margin: 5dvi;
border: none;
cursor: pointer;

&:hover{
  transform: scale(1.1);
  transition: all 0.5s ease;
}
`,V=()=>{const n=document.getElementById("Productos");n&&n.scrollIntoView({behavior:"smooth"})},M=()=>e.jsx(e.Fragment,{children:e.jsxs(b,{children:[e.jsxs(y,{children:[e.jsx(C,{src:"/icono.svg",alt:"Logo"}),e.jsxs(k,{children:[e.jsx(E,{children:"Uniformes A&R"}),e.jsx(_,{children:"Con más de 18 años de experiencia que nos respaldan siendo lideres en la manofactura de uniformes industriales, escolares, ejecutivos, hospitalarios, etc. Complementando con los servicios de bordado, serigrafía, y vinil textil, entre otros."})]})]}),e.jsx(B,{onClick:V,children:e.jsx("img",{src:"./Bajar.svg"})})]})}),q=l.lazy(()=>p(()=>import("./Productos-CJG4QoG3.js"),__vite__mapDeps([0,1,2]))),D=l.lazy(()=>p(()=>import("./Servicios-BdB1WHPe.js"),__vite__mapDeps([3,1,2]))),F=l.lazy(()=>p(()=>import("./Contacto-5ieTIzkF.js"),__vite__mapDeps([4,1,2]))),N=l.lazy(()=>p(()=>import("./Footer-Dty8Gao0.js"),__vite__mapDeps([5,1,2])));function U(){return e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx("section",{id:"Inicio",children:e.jsx(M,{})}),e.jsxs(l.Suspense,{fallback:null,children:[e.jsx("section",{id:"Productos",children:e.jsx(q,{})}),e.jsx("section",{id:"Servicios",children:e.jsx(D,{})}),e.jsx("section",{id:"Contacto",children:e.jsx(F,{})}),e.jsx("section",{id:"Contacto",children:e.jsx(N,{})})]})]})}w(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(U,{})}));
