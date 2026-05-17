import{d as r,r as j,j as e,S as w,I as y,L as k,T as I,a as u,C as b,P as M,b as v,c as A,e as G,f as F,g as W,h as S,i as D,M as P,k as T,l as d,m as p,n as E,o as z}from"./Servicios-M0BWP4NE.js";const L=r.nav`
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
`,U=r.img`
  cursor: pointer;
  width: auto;
  height: 3rem;
  margin: 0.4rem;
`,B=r.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none; // Ocultar en dispositivos móviles
  }
`,m=r.li`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #aaa;
  }
`,K=r.button`
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
`,O=r.div`
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
`,R=r.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin: 0;
  padding: 1rem 0 1rem 0;
`,_=()=>{const[n,t]=j.useState(!1),s=o=>{const l=document.getElementById(o);l&&l.scrollIntoView({behavior:"smooth"})},c=()=>{window.scrollTo({top:0,behavior:"smooth"})},i=()=>{t(!n)},x=(o,l)=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),s(l))},g=(o,l)=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),s(l),i())},C=o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),c())};return e.jsxs(L,{children:[e.jsx(U,{onClick:c,onKeyDown:C,src:"/logo.svg",alt:"Logo",role:"button",tabIndex:0}),e.jsxs(B,{children:[e.jsx(m,{onClick:()=>s("Productos"),onKeyDown:o=>x(o,"Productos"),role:"button",tabIndex:0,children:"Productos"}),e.jsx(m,{onClick:()=>s("Servicios"),onKeyDown:o=>x(o,"Servicios"),role:"button",tabIndex:0,children:"Servicios"}),e.jsx(m,{onClick:()=>s("Contacto"),onKeyDown:o=>x(o,"Contacto"),role:"button",tabIndex:0,children:"Contacto"})]}),e.jsx(K,{onClick:i,"aria-label":n?"Cerrar menú":"Abrir menú","aria-expanded":n,"aria-controls":"mobile-menu",children:"☰"}),e.jsx(O,{id:"mobile-menu",isOpen:n,children:e.jsxs(R,{children:[e.jsx(m,{onClick:()=>{s("Productos"),i()},onKeyDown:o=>g(o,"Productos"),role:"button",tabIndex:0,children:"Productos"}),e.jsx(m,{onClick:()=>{s("Servicios"),i()},onKeyDown:o=>g(o,"Servicios"),role:"button",tabIndex:0,children:"Servicios"}),e.jsx(m,{onClick:()=>{s("Contacto"),i()},onKeyDown:o=>g(o,"Contacto"),role:"button",tabIndex:0,children:"Contacto"})]})})]})},N=r.button`
background: rgba(0, 0, 0, 0);
margin: 5dvi;
border: none;
cursor: pointer;

&:hover{
  transform: scale(1.1);
  transition: all 0.5s ease;
}
`,V=()=>{const n=document.getElementById("Productos");n&&n.scrollIntoView({behavior:"smooth"})},q=()=>e.jsx(e.Fragment,{children:e.jsxs(w,{children:[e.jsxs(y,{children:[e.jsx(k,{src:"/icono.svg",alt:"Logo"}),e.jsxs(I,{children:[e.jsx(u,{children:"Uniformes A&R"}),e.jsx(b,{children:"Con más de 18 años de experiencia que nos respaldan siendo lideres en la manofactura de uniformes industriales, escolares, ejecutivos, hospitalarios, etc. Complementando con los servicios de bordado, serigrafía, y vinil textil, entre otros."})]})]}),e.jsx(N,{onClick:V,children:e.jsx("img",{src:"./Bajar.svg"})})]})}),H=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Y=r.div`
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 4px 32px rgba(0,0,0,0.2);
`,$=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`,Q=r.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
`,X=r.button`
  position: absolute;
  top: 24px;
  right: 32px;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
`,J=({open:n,onClose:t,images:s})=>n?e.jsxs(H,{children:[e.jsx(X,{onClick:t,children:"×"}),e.jsx(Y,{children:e.jsx($,{children:s.map((c,i)=>e.jsx(Q,{src:c,alt:`Galería ${i+1}`},i))})})]}):null,Z=[{bckgrnd:"./escolar.png",text:"Uniformes Escolares",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Escolares"},{bckgrnd:"./medico.png",text:"Uniformes Médicos",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20M%C3%A9dicos"},{bckgrnd:"./deportivo.png",text:"Uniformes Deportivos",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Deportivos"},{bckgrnd:"./industrial.png",text:"Uniformes Industriales",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Industriales"},{bckgrnd:"./cocina.png",text:"Uniformes para Hoteles y Restaurantes",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20de%20Cocina"},{bckgrnd:"./amedida.png",text:"Uniformes Ejecutivos",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20a%20Medida"}],ee=r(u)`
color: #000;
`,oe=r(b)`
color: #000;

`,re=["/IMG-20250127-WA0060.jpg","/IMG-20250128-WA0002.jpg","/IMG-20250128-WA0003.jpg","/IMG-20250128-WA0004.jpg","/IMG-20250128-WA0005.jpg","/IMG-20250128-WA0006.jpg","/IMG-20250128-WA0008.jpg","/IMG-20250128-WA0009.jpg","/IMG-20250128-WA0011.jpg","/IMG-20250128-WA0013.jpg","/IMG-20250128-WA0014.jpg","/IMG-20250128-WA0015.jpg","/IMG-20250128-WA0041.jpg","/IMG-20250128-WA0049.jpg","/IMG-20250128-WA0050.jpg","/IMG-20250128-WA0051.jpg","/IMG-20250128-WA0052.jpg","/IMG-20250128-WA0053.jpg","/IMG-20250130-WA0012.jpg","/IMG-20250130-WA0013.jpg","/IMG-20250130-WA0014.jpg","/IMG-20250203-WA0000.jpg","/IMG-20250203-WA0031.jpg","/IMG-20250203-WA0032.jpg","/IMG-20250203-WA0033.jpg","/IMG-20250203-WA0042.jpg","/IMG-20250203-WA0043.jpg","/IMG-20250203-WA0044.jpg","/IMG-20250203-WA0045.jpg","/IMG-20250203-WA0046.jpg","/IMG-20250203-WA0047.jpg"],ne=()=>{const[n,t]=j.useState(!1);return e.jsxs(M,{children:[e.jsxs(v,{children:[e.jsx(ee,{children:"Conoce nuestra variedad de prendas"}),e.jsx(oe,{children:"Ofrecemos una amplia variedad de uniformes y prendas personalizadas a medida, diseñadas para satisfacer las necesidades únicas de cada cliente. Desde uniformes corporativos y escolares hasta ropa profesional."}),e.jsx("button",{style:{marginTop:"1.5rem",padding:"0.7rem 1.5rem",fontSize:"1.1rem",borderRadius:"8px",background:"#1976d2",color:"#fff",border:"none",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.12)"},onClick:()=>t(!0),children:"Ver galería"})]}),e.jsx(A,{children:Z.map((s,c)=>e.jsx(G,{bckgrnd:s.bckgrnd,children:e.jsxs(F,{children:[e.jsx(W,{children:s.text}),e.jsx(S,{href:s.href,target:"_blank",rel:"noopener noreferrer",children:"Conoce más"})]})},c))}),e.jsx(J,{open:n,onClose:()=>t(!1),images:re})]})},se=r(u)`
  color: #000;
`;function te(n){n&&n.preventDefault();const t=prompt(`¿Qué red social quieres abrir? Escribe:
1 para Facebook
2 para Instagram`);t==="1"?window.open("https://www.facebook.com/profile.php?id=61584467946957","_blank","noopener,noreferrer"):t==="2"?window.open("https://www.instagram.com/uniformesar/","_blank","noopener,noreferrer"):alert("Por favor elige una opción.")}const ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx(se,{children:"Contáctanos"})}),e.jsxs(D,{children:[e.jsx(P,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387.70310897587865!2d-98.9689853642734!3d19.713252576035465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ed28019f547d%3A0x3735aa148cfd84aa!2sBorbados%20Y%20Estampados!5e0!3m2!1ses-419!2smx!4v1732639863243!5m2!1ses-419!2smx",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Google Maps Embed"}),e.jsxs(T,{children:[e.jsxs(d,{href:"https://maps.app.goo.gl/QoeqGcHGB2z7rXL77",target:"_blank",rel:"noopener noreferrer",children:[e.jsx(p,{src:"ubicacion.svg"}),"CallePozo Grande #2, Tecámac."]}),e.jsxs(d,{href:"https://wa.me/525621288935",target:"_blank",rel:"noopener noreferrer",children:[e.jsx(p,{src:"whatsapp.svg"}),"56-2128-8935"]}),e.jsxs(d,{href:"tel:5589500569,103",children:[e.jsx(p,{src:"telefono.svg"}),"55-8950-0569 ext. 103"]}),e.jsxs(d,{as:"div",style:{cursor:"default"},children:[e.jsx(p,{src:"horario.svg"}),"Lunes a Viernes de 9:00 am a 2:00 pm"]}),e.jsxs(d,{href:"#",onClick:te,children:[e.jsx(p,{src:"facebook.svg"}),"A&R Bordados Estampados"]}),e.jsxs(d,{href:"mailto:contacto@uniformesar.com",children:[e.jsx(p,{src:"mail.svg"}),"contacto@uniformesar.com"]})]})]})]}),ae=r.nav`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: top;
  padding: 3rem 0rem 3rem 0rem;
  background-color: #053A6C;
  font-family: outfit;
`,h=r.div`
color: #FFFFFF;
flex-direction: column;
display: flex;
align-items: center;
gap: 1rem;
`,a=r.a`
color: #FFFFFF;
text-decoration: none;
cursor: pointer;
`,f=r.nav`
font-size: 1.3rem;
margin-bottom: .5rem;
font-weight: 500;
`,ce=r.a`
font-size: 1rem;
background-color: #053A6C;
color: #FFFFFF;
text-align: center;
padding: 1rem 0rem 1rem 0rem;
font-family: outfit;
display: flex;
align-items: center;
text-align: center;
text-decoration: none;
width: 100%;
`,le=()=>{const n=t=>{const s=document.getElementById(t);s&&s.scrollIntoView({behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsxs(ae,{children:[e.jsxs(h,{children:[e.jsx(f,{children:"Mapa de sitio"}),e.jsx(a,{onClick:()=>n("Productos"),children:"Productos"}),e.jsx(a,{onClick:()=>n("servicios"),children:"Servicios"}),e.jsx(a,{onClick:()=>n("Contacto"),children:"Contacto"})]}),e.jsxs(h,{children:[e.jsx(f,{children:"Contactanos"}),e.jsx(a,{href:"tel:+525621288935",children:"Telefono"}),e.jsx(a,{href:"mailto:contacto@uniformesar.com",children:"Correo"}),e.jsx(a,{href:"https://www.facebook.com/profile.php?id=61584467946957",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]}),e.jsxs(h,{children:[e.jsx(f,{children:"Horarios"}),e.jsx(a,{as:"div",style:{cursor:"default"},children:"Lunes a Viernes"}),e.jsx(a,{as:"div",style:{cursor:"default"},children:"9:00 am a 2:00 pm"})]})]}),e.jsx(ce,{href:"https://wa.me/525649770838",target:"_blank",rel:"noopener noreferrer",children:"Desarrollado por: Daniel Flores - 2026"})]})};function de(){return e.jsxs(e.Fragment,{children:[e.jsx(_,{}),e.jsx("section",{id:"Inicio",children:e.jsx(q,{})}),e.jsx("section",{id:"Productos",children:e.jsx(ne,{})}),e.jsx("section",{id:"Servicios",children:e.jsx(E,{})}),e.jsx("section",{id:"Contacto",children:e.jsx(ie,{})}),e.jsx("section",{id:"Contacto",children:e.jsx(le,{})})]})}z(document.getElementById("root")).render(e.jsx(j.StrictMode,{children:e.jsx(de,{})}));
