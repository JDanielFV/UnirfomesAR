import{r as e,q as r,s as i,P as d,m as p,d as l,c,a as g,b as m,C as x,n as f,i as h}from"./Components-DJ0808dB.js";const j=r.div`
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
`,A=r.div`
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 4px 32px rgba(0,0,0,0.2);
`,G=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`,M=r.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
`,u=r.button`
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
`,I=({open:s,onClose:o,images:a})=>s?e.jsxs(j,{children:[e.jsx(u,{onClick:o,children:"×"}),e.jsx(A,{children:e.jsx(G,{children:a.map((n,t)=>e.jsx(M,{src:n,alt:`Galería ${t+1}`},t))})})]}):null,b=[{bckgrnd:"./escolar.png",text:"Uniformes Escolares",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Escolares"},{bckgrnd:"./medico.png",text:"Uniformes Médicos",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20M%C3%A9dicos"},{bckgrnd:"./deportivo.png",text:"Uniformes Deportivos",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Deportivos"},{bckgrnd:"./industrial.png",text:"Uniformes Industriales",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20Industriales"},{bckgrnd:"./cocina.png",text:"Uniformes para Hoteles y Restaurantes",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20de%20Cocina"},{bckgrnd:"./amedida.png",text:"Uniformes Ejecutivos",href:"https://wa.me/525621288935?text=hola%2C%20me%20regalas%20informacion%20de%3A%20Uniformes%20a%20Medida"}],W=r(f)`
color: #000;
`,C=r(h)`
color: #000;

`,v=["/IMG-20250127-WA0060.jpg","/IMG-20250128-WA0002.jpg","/IMG-20250128-WA0003.jpg","/IMG-20250128-WA0004.jpg","/IMG-20250128-WA0005.jpg","/IMG-20250128-WA0006.jpg","/IMG-20250128-WA0008.jpg","/IMG-20250128-WA0009.jpg","/IMG-20250128-WA0011.jpg","/IMG-20250128-WA0013.jpg","/IMG-20250128-WA0014.jpg","/IMG-20250128-WA0015.jpg","/IMG-20250128-WA0041.jpg","/IMG-20250128-WA0049.jpg","/IMG-20250128-WA0050.jpg","/IMG-20250128-WA0051.jpg","/IMG-20250128-WA0052.jpg","/IMG-20250128-WA0053.jpg","/IMG-20250130-WA0012.jpg","/IMG-20250130-WA0013.jpg","/IMG-20250130-WA0014.jpg","/IMG-20250203-WA0000.jpg","/IMG-20250203-WA0031.jpg","/IMG-20250203-WA0032.jpg","/IMG-20250203-WA0033.jpg","/IMG-20250203-WA0042.jpg","/IMG-20250203-WA0043.jpg","/IMG-20250203-WA0044.jpg","/IMG-20250203-WA0045.jpg","/IMG-20250203-WA0046.jpg","/IMG-20250203-WA0047.jpg"],w=()=>{const[s,o]=i.useState(!1);return e.jsxs(d,{children:[e.jsxs(p,{children:[e.jsx(W,{children:"Conoce nuestra variedad de prendas"}),e.jsx(C,{children:"Ofrecemos una amplia variedad de uniformes y prendas personalizadas a medida, diseñadas para satisfacer las necesidades únicas de cada cliente. Desde uniformes corporativos y escolares hasta ropa profesional."}),e.jsx("button",{style:{marginTop:"1.5rem",padding:"0.7rem 1.5rem",fontSize:"1.1rem",borderRadius:"8px",background:"#1976d2",color:"#fff",border:"none",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.12)"},onClick:()=>o(!0),children:"Ver galería"})]}),e.jsx(l,{children:b.map((a,n)=>e.jsx(c,{bckgrnd:a.bckgrnd,children:e.jsxs(g,{children:[e.jsx(m,{children:a.text}),e.jsx(x,{href:a.href,target:"_blank",rel:"noopener noreferrer",children:"Conoce más"})]})},n))}),e.jsx(I,{open:s,onClose:()=>o(!1),images:v})]})};export{w as default};
