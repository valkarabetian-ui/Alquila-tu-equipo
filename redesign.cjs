const fs = require('node:fs');
let app = fs.readFileSync('app.js', 'utf8');
function replaceBetween(start, end, replacement) {
  const from = app.indexOf(start);
  const to = app.indexOf(end, from);
  if (from < 0 || to < 0) throw new Error(`Could not locate ${start}`);
  app = app.slice(0, from) + replacement.trim() + app.slice(to);
}
replaceBetween('function q({current:A,onNavigate:t})', 'let C="ALQUILA TU EQUIPO"', fs.readFileSync('header-function.js', 'utf8'));
replaceBetween('function W({onNavigate:A})', 'var S=I("aIIwE");function h()', fs.readFileSync('home-function.js', 'utf8'));
const oldNavigation = 'function(){let[A,t]=(0,S.useState)("home"),k=A=>{t(A),window.scrollTo({top:0,behavior:"instant"})};return';
const historyNavigation = 'function(){let[A,t]=(0,S.useState)(()=>window.location.hash.slice(1)||"home"),k=A=>{t(A),window.history.pushState({sitePage:A},"",A==="home"?window.location.pathname:"#"+A),window.scrollTo({top:0,behavior:"instant"})};(0,S.useEffect)(()=>{let A=window.location.hash.slice(1)||"home";window.history.replaceState({sitePage:A},"",window.location.href);let k=A=>{t(A.state?.sitePage||window.location.hash.slice(1)||"home"),window.scrollTo({top:0,behavior:"instant"})};return window.addEventListener("popstate",k),()=>window.removeEventListener("popstate",k)},[]);return';
if (app.includes(oldNavigation)) app = app.replace(oldNavigation, historyNavigation);
else if (!app.includes(historyNavigation)) throw new Error('Could not locate app navigation component.');
const oldEquipmentCard = 'function ta({equipo:A}){let[t,k]=(0,S.useState)(0),u=A.imagenes.map(tg).filter(Boolean),p=A.slug==="soprano-ice"?["Láser de diodo para depilación definitiva","Tecnología SHR (Super Hair Removal)","Enfriamiento ICE por contacto"]:A.slug==="hyper-pulse"?["Tecnología A.L.T. (Accumulative Light Torrent)","Cuerpo entero en menos de 20 minutos","Doble cabezal: 7,5 cm y 3,5 cm","Glider en spray con propiedades hidratantes del Mar Muerto; no requiere retirarlo."]:[A.descripcion];return';
const equipmentCard = 'function ta({equipo:A}){let[t,k]=(0,S.useState)(0),u=A.imagenes.map(tg).filter(Boolean),p=A.slug==="soprano-ice"?["Láser de diodo para depilación definitiva","Tecnología SHR (Super Hair Removal)","Enfriamiento ICE por contacto"]:A.slug==="hyper-pulse"?["Tecnología A.L.T. (Accumulative Light Torrent)","Cuerpo entero en menos de 20 minutos","Doble cabezal: 7,5 cm y 3,5 cm","Glider en spray con propiedades hidratantes del Mar Muerto; no requiere retirarlo."]:A.slug==="indiba"?["Radiofrecuencia no invasiva CET/RET","Frecuencia fija de 448 Hz","Próximamente disponible para alquiler"]:[A.descripcion];return';
if (app.includes(oldEquipmentCard)) app = app.replace(oldEquipmentCard, equipmentCard);
else if (!app.includes(equipmentCard)) throw new Error('Could not locate equipment card component.');
const oldEquipmentDescription = '(0,l.jsx)("p",{className:"mt-2 text-sm leading-relaxed text-stone-600",children:A.descripcion})';
const equipmentFeatures = '(0,l.jsx)("ul",{className:"mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-stone-600 marker:text-emerald-700",children:p.map((A,t)=>(0,l.jsx)("li",{children:A},t))})';
if (app.includes(oldEquipmentDescription)) app = app.replace(oldEquipmentDescription, equipmentFeatures);
else if (!app.includes(equipmentFeatures)) throw new Error('Could not locate equipment description markup.');
const indibaWithoutPhoto = 'imagenes:[],disponible:!1,notaDisponibilidad:"Próximamente"';
const indibaWithPhoto = 'imagenes:["/assets/Indiba.png"],disponible:!1,notaDisponibilidad:"Próximamente"';
if (app.includes(indibaWithoutPhoto)) app = app.replace(indibaWithoutPhoto, indibaWithPhoto);
else if (!app.includes(indibaWithPhoto)) throw new Error('Could not locate Indiba equipment data.');
const oldImageLookup = 'function tg(A){return tE[A]}';
const newImageLookup = 'function tg(A){return tE[A]||A}';
if (app.includes(oldImageLookup)) app = app.replace(oldImageLookup, newImageLookup);
else if (!app.includes(newImageLookup)) throw new Error('Could not locate equipment image lookup.');
replaceBetween('function tq({producto:A})', 'function tC({onNavigate:A})', `function tq({producto:A}){
  let[t,k]=(0,S.useState)(!1),[u,I]=(0,S.useState)(0),B=A.imagenes.map(td).filter(Boolean);
  return (0,l.jsxs)("article",{className:"site-cosmetic-card",children:[
    (0,l.jsx)("div",{className:"site-cosmetic-image aspect-square",children:B.length>0?(0,l.jsx)("img",{src:B[u],alt:A.nombre,className:"h-full w-full cursor-pointer object-cover",onClick:()=>I(A=>(A+1)%B.length)}):(0,l.jsx)("div",{className:"flex h-full w-full items-center justify-center text-stone-400",children:(0,l.jsx)(tc,{className:"h-10 w-10"})})}),
    (0,l.jsxs)("div",{className:"site-cosmetic-content",children:[
      (0,l.jsx)("h3",{className:"site-cosmetic-title",children:A.nombre}),
      (0,l.jsx)("p",{className:"site-cosmetic-summary",children:A.descripcionCorta}),
      (0,l.jsxs)("div",{className:"site-cosmetic-pricing",children:[
        (0,l.jsxs)("div",{className:"site-cosmetic-price-main",children:[(0,l.jsx)("span",{children:"Precio sugerido"}),(0,l.jsx)("strong",{children:tn(A.precios.sugerido)})]}),
        (0,l.jsxs)("div",{className:"site-cosmetic-wholesale",children:[
          (0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:"Mayorista · x3"}),(0,l.jsx)("strong",{children:tn(A.precios.mayoristaX3)})]}),
          (0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:"Mayorista · x5"}),(0,l.jsx)("strong",{children:tn(A.precios.mayoristaX5)})]})
        ]})
      ]}),
      (0,l.jsxs)("button",{onClick:()=>k(A=>!A),className:"site-cosmetic-details-toggle","aria-expanded":t,children:["Ver ficha técnica",(0,l.jsx)(tJ,{className:"h-4 w-4 transition-transform "+(t?"rotate-180":"")})]}),
      t&&(0,l.jsxs)("div",{className:"site-cosmetic-details",children:[
        (0,l.jsx)("p",{children:A.accion}),
        (0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"site-cosmetic-detail-label",children:"Ingredientes activos"}),(0,l.jsx)("ul",{className:"site-cosmetic-detail-list",children:A.ingredientes.map(A=>(0,l.jsxs)("li",{children:[(0,l.jsxs)("span",{children:[A.nombre,":"]})," ",A.funcion]},A.nombre))})]}),
        (0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"site-cosmetic-detail-label",children:"Modo de uso"}),(0,l.jsx)("ul",{className:"site-cosmetic-detail-list site-cosmetic-use-list",children:A.modoDeUso.map((A,t)=>(0,l.jsx)("li",{children:A},t))})]}),
        A.notaLegal&&(0,l.jsx)("p",{className:"site-cosmetic-legal-note",children:A.notaLegal})
      ]}),
    ]})
  ]})
}`);
replaceBetween('function tC({onNavigate:A})', 'let tU={name:"circle-check"', `function tC({onNavigate:A}){
  return (0,l.jsxs)("div",{className:"mx-auto max-w-6xl px-4 py-12 md:px-6",children:[
    (0,l.jsxs)("header",{className:"max-w-2xl",children:[
      (0,l.jsx)("h1",{className:"text-3xl font-bold tracking-tight text-stone-900",children:"Dra. Norma Bustos"}),
      (0,l.jsx)("p",{className:"mt-3 text-stone-600",children:"Línea de cosmética profesional pensada para complementar tratamientos estéticos."})
    ]}),
    (0,l.jsx)("div",{className:"site-cosmetic-grid mt-10",children:r.map(A=>(0,l.jsx)(tq,{producto:A},A.slug))}),
    (0,l.jsxs)("section",{className:"site-cosmetic-reseller mt-14",children:[
      (0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"site-cosmetic-reseller-eyebrow",children:"VENTA MAYORISTA"}),(0,l.jsx)("h2",{children:"¿Querés revender esta línea?"}),(0,l.jsx)("p",{children:"Sumate a nuestra red de vendedoras y accedé a precios mayoristas por volumen."})]}),
      (0,l.jsx)("button",{onClick:()=>A("vendedora"),className:"site-button site-button-dark",children:["Sumate como vendedora",(0,l.jsx)("span",{children:"→"})]})
    ]})
  ]})
}`);
replaceBetween('function tRentalFeatures(A)', 'function tQ()', fs.readFileSync('rental-function.js', 'utf8'));
replaceBetween('function tQ()', 'var S=I("aIIwE");function tn(A)', fs.readFileSync('sale-function.js', 'utf8'));
fs.writeFileSync('app.js', app, 'utf8');
console.log('Updated navigation and homepage.');
