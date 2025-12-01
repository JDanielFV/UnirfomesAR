import{d as o,r as p,j as e,S as b,I as C,L as v,T as w,a as m,C as f,P as k,b as j,c as I,e as M,f as A,g as y,h as G,i as F,M as W,k as S,l,m as d,n as T,o as P}from"./Servicios-BFDrF8Mj.js";const E=o.nav`
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
`,U=o.img`
  cursor: pointer;
  width: auto;
  height: 3rem;
  margin: 0.4rem;
`,z=o.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none; // Ocultar en dispositivos móviles
  }
`,a=o.li`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #aaa;
  }
`,B=o.div`
  display: none;
  font-size: 2.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; // Mostrar en dispositivos móviles
  }
`,L=o.div`
  position: absolute;
  top: 100%;
  width: 100%;
  max-width: 100%;
  background-color: #021757;
  padding: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: ${({isOpen:r})=>r?"scaleY(1)":"scaleY(0)"};
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @media (min-width: 769px) {
    display: none; // Ocultar en dispositivos grandes
  }
`,O=o.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin: 0;
  padding: 1rem 0 1rem 0;
`,D=()=>{const[r,s]=p.useState(!1),n=u=>{const x=document.getElementById(u);x&&x.scrollIntoView({behavior:"smooth"})},c=()=>{window.scrollTo({top:0,behavior:"smooth"})},i=()=>{s(!r)};return e.jsxs(E,{children:[e.jsx(U,{onClick:c,src:"/logo.svg",alt:"Logo"}),e.jsxs(z,{children:[e.jsx(a,{onClick:()=>n("Productos"),children:"Productos"}),e.jsx(a,{onClick:()=>n("Servicios"),children:"Servicios"}),e.jsx(a,{onClick:()=>n("Contacto"),children:"Contacto"})]}),e.jsx(B,{onClick:i,children:"☰"}),e.jsx(L,{isOpen:r,children:e.jsxs(O,{children:[e.jsx(a,{onClick:()=>{n("Productos"),i()},children:"Productos"}),e.jsx(a,{onClick:()=>{n("Servicios"),i()},children:"Servicios"}),e.jsx(a,{onClick:()=>{n("Contacto"),i()},children:"Contacto"})]})})]})},R=o.button`
background: rgba(0, 0, 0, 0); 
margin: 5dvi;
border: none;
cursor: pointer;

&:hover{
  transform: scale(1.1);
  transition: all 0.5s ease;
}
`,N=()=>{const r=document.getElementById("Productos");r&&r.scrollIntoView({behavior:"smooth"})},V=()=>e.jsx(e.Fragment,{children:e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(v,{src:"/icono.svg",alt:"Logo"}),e.jsxs(w,{children:[e.jsx(m,{children:"Uniformes A&R"}),e.jsx(f,{children:"Con más de 18 años de experiencia que nos respaldan siendo lideres en la manofactura de uniformes industriales, escolares, ejecutivos, hospitalarios, etc. Complementando con los servicios de bordado, serigrafía, y vinil textil, entre otros."})]})]}),e.jsx(R,{onClick:N,children:e.jsx("img",{src:"./Bajar.svg"})})]})}),q=o.div`
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
`,Y=o.div`
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 4px 32px rgba(0,0,0,0.2);
`,_=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`,$=o.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
`,H=o.button`
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
`,Q=({open:r,onClose:s,images:n})=>r?e.jsxs(q,{children:[e.jsx(H,{onClick:s,children:"×"}),e.jsx(Y,{children:e.jsx(_,{children:n.map((c,i)=>e.jsx($,{src:c,alt:`Galería ${i+1}`},i))})})]}):null,X=[{bckgrnd:"./escolar.png",text:"Uniformes Escolares",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Escolares"},{bckgrnd:"./medico.png",text:"Uniformes Médicos",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20M%C3%A9dicos"},{bckgrnd:"./deportivo.png",text:"Uniformes Deportivos",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Deportivos"},{bckgrnd:"./industrial.png",text:"Uniformes Industriales",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Industriales"},{bckgrnd:"./cocina.png",text:"Uniformes para Hoteles y Restaurantes",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20de%20Cocina"},{bckgrnd:"./amedida.png",text:"Uniformes Ejecutivos",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20a%20Medida"}],J=o(m)`
color: #000;
`,K=o(f)`
color: #000;

`,Z=["/IMG-20250127-WA0060.jpg","/IMG-20250128-WA0002.jpg","/IMG-20250128-WA0003.jpg","/IMG-20250128-WA0004.jpg","/IMG-20250128-WA0005.jpg","/IMG-20250128-WA0006.jpg","/IMG-20250128-WA0008.jpg","/IMG-20250128-WA0009.jpg","/IMG-20250128-WA0011.jpg","/IMG-20250128-WA0013.jpg","/IMG-20250128-WA0014.jpg","/IMG-20250128-WA0015.jpg","/IMG-20250128-WA0041.jpg","/IMG-20250128-WA0049.jpg","/IMG-20250128-WA0050.jpg","/IMG-20250128-WA0051.jpg","/IMG-20250128-WA0052.jpg","/IMG-20250128-WA0053.jpg","/IMG-20250130-WA0012.jpg","/IMG-20250130-WA0013.jpg","/IMG-20250130-WA0014.jpg","/IMG-20250203-WA0000.jpg","/IMG-20250203-WA0031.jpg","/IMG-20250203-WA0032.jpg","/IMG-20250203-WA0033.jpg","/IMG-20250203-WA0042.jpg","/IMG-20250203-WA0043.jpg","/IMG-20250203-WA0044.jpg","/IMG-20250203-WA0045.jpg","/IMG-20250203-WA0046.jpg","/IMG-20250203-WA0047.jpg"],ee=()=>{const[r,s]=p.useState(!1);return e.jsxs(k,{children:[e.jsxs(j,{children:[e.jsx(J,{children:"Conoce nuestra variedad de prendas"}),e.jsx(K,{children:"Ofrecemos una amplia variedad de uniformes y prendas personalizadas a medida, diseñadas para satisfacer las necesidades únicas de cada cliente. Desde uniformes corporativos y escolares hasta ropa profesional."}),e.jsx("button",{style:{marginTop:"1.5rem",padding:"0.7rem 1.5rem",fontSize:"1.1rem",borderRadius:"8px",background:"#1976d2",color:"#fff",border:"none",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.12)"},onClick:()=>s(!0),children:"Ver galería"})]}),e.jsx(I,{children:X.map((n,c)=>e.jsx(M,{bckgrnd:n.bckgrnd,children:e.jsxs(A,{children:[e.jsx(y,{children:n.text}),e.jsx(G,{href:n.href,target:"_blank",rel:"noopener noreferrer",children:"Conoce más"})]})},c))}),e.jsx(Q,{open:r,onClose:()=>s(!1),images:Z})]})},oe=o(m)`
  color: #000;
`;function re(){const r=prompt(`¿Qué red social quieres abrir? Escribe:
1 para Facebook
2 para Instagram`);r==="1"?window.open("https://www.facebook.com/pages/Ar-Bordados-Estampado-y-Uniformes/575686889276356","_blank"):r==="2"?window.open("https://www.instagram.com/uniformesar/","_blank"):alert("Por favor elige una opción.")}const ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx(oe,{children:"Contáctanos"})}),e.jsxs(F,{children:[e.jsx(W,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387.70310897587865!2d-98.9689853642734!3d19.713252576035465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ed28019f547d%3A0x3735aa148cfd84aa!2sBorbados%20Y%20Estampados!5e0!3m2!1ses-419!2smx!4v1732639863243!5m2!1ses-419!2smx",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Google Maps Embed"}),e.jsxs(S,{children:[e.jsxs(l,{href:"https://maps.app.goo.gl/QoeqGcHGB2z7rXL77",children:[e.jsx(d,{src:"ubicacion.svg"}),"CallePozo Grande #2, Tecámac."]}),e.jsxs(l,{href:"https://wa.me/+525621288935",children:[e.jsx(d,{src:"whatsapp.svg"}),"56-2128-8935"]}),e.jsxs(l,{href:"tel:5589500569,103",children:[e.jsx(d,{src:"telefono.svg"}),"55-8950-0569 ext. 103"]}),e.jsxs(l,{href:"#",onClick:re,children:[e.jsx(d,{src:"facebook.svg"}),"A&R Bordados Estampados"]}),e.jsxs(l,{href:"mailto:contacto@uniformesar.com",children:[e.jsx(d,{src:"mail.svg"}),"contacto@uniformesar.com"]})]})]})]}),se=o.nav`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: top;
  padding: 3rem 0rem 3rem 0rem;
  background-color: #053A6C;
  font-family: outfit;
`,g=o.div`
color: #FFFFFF;
flex-direction: column;
display: flex;
align-items: center;
gap: 1rem;
`,t=o.a`
color: #FFFFFF;
text-decoration: none;
cursor: pointer;
`,h=o.nav`
font-size: 1.3rem;
margin-bottom: .5rem;
font-weight: 500;
`,ie=o.a`
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
`,te=()=>{const r=s=>{const n=document.getElementById(s);n&&n.scrollIntoView({behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsxs(se,{children:[e.jsxs(g,{children:[e.jsx(h,{children:"Mapa de sitio"}),e.jsx(t,{onClick:()=>r("Productos"),children:"Productos"}),e.jsx(t,{onClick:()=>r("servicios"),children:"Servicios"}),e.jsx(t,{onClick:()=>r("Contacto"),children:"Contacto"})]}),e.jsxs(g,{children:[e.jsx(h,{children:"Contactanos"}),e.jsx(t,{href:"tel:6863567581",children:"Telefono"}),e.jsx(t,{href:"mailto:contacto@petrovsci.com.mx",children:"Correo"}),e.jsx(t,{href:"https://www.facebook.com/profile.php?id=61555431474610",children:"Facebook"}),e.jsx(t,{href:"https://www.linkedin.com/company/petrov-soluciones-contra-incendio/",children:"LinkedIn"})]})]}),e.jsx(ie,{href:"http://wa.me/+525649770838",children:"Desarrollado por: Daniel Flores - 2024"})]})};function ae(){return e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx("section",{id:"Inicio",children:e.jsx(V,{})}),e.jsx("section",{id:"Productos",children:e.jsx(ee,{})}),e.jsx("section",{id:"Servicios",children:e.jsx(T,{})}),e.jsx("section",{id:"Contacto",children:e.jsx(ne,{})}),e.jsx("section",{id:"Contacto",children:e.jsx(te,{})})]})}P(document.getElementById("root")).render(e.jsx(p.StrictMode,{children:e.jsx(ae,{})}));
