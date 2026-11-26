function tRentalFeatures(A){
  if(A.slug==="soprano-ice")return [
    "Láser de diodo para depilación definitiva",
    "Tecnología SHR (Super Hair Removal)",
    "Enfriamiento ICE por contacto"
  ];
  if(A.slug==="hyper-pulse")return [
    "Tecnología A.L.T. (Accumulative Light Torrent)",
    "Cuerpo entero en menos de 20 minutos",
    "Doble cabezal: 7,5 cm y 3,5 cm",
    "Glider en spray con propiedades hidratantes del Mar Muerto; no requiere retirarlo."
  ];
  if(A.slug==="indiba")return [
    "Radiofrecuencia no invasiva CET/RET",
    "Frecuencia fija de 448 Hz",
    "Próximamente disponible para alquiler"
  ];
  return [A.descripcion];
}

function tRentalIntro(A){
  if(A.slug==="soprano-ice")return "Equipo profesional para tratamientos de depilación definitiva en centros de estética.";
  if(A.slug==="hyper-pulse")return "Tecnología profesional para depilación definitiva, diseñada para combinar rapidez y confort.";
  if(A.slug==="indiba")return "Radiofrecuencia estética y terapéutica no invasiva para tratamientos faciales y corporales.";
  return A.descripcion;
}

function tRentalCard({equipo:A,onOpen:t}){
  let[k,u]=(0,S.useState)(0),I=A.imagenes.map(tg).filter(Boolean),B=tRentalFeatures(A);
  return (0,l.jsxs)("article",{className:"site-rental-card",children:[
    (0,l.jsxs)("div",{className:"site-rental-card-image",children:[
      I.length?(0,l.jsx)("img",{src:I[k],alt:A.nombre,className:"site-rental-card-photo"}):(0,l.jsx)("div",{className:"site-rental-card-placeholder",children:(0,l.jsx)(tc,{className:"h-10 w-10"})}),
      I.length>1&&(0,l.jsxs)(l.Fragment,{children:[
        (0,l.jsx)("button",{type:"button",className:"site-rental-gallery-arrow site-rental-gallery-prev","aria-label":"Foto anterior",onClick:()=>u(A=>(A-1+I.length)%I.length),children:"‹"}),
        (0,l.jsx)("button",{type:"button",className:"site-rental-gallery-arrow site-rental-gallery-next","aria-label":"Foto siguiente",onClick:()=>u(A=>(A+1)%I.length),children:"›"})
      ]}),
      !A.disponible&&(0,l.jsx)("span",{className:"site-rental-coming-soon",children:A.notaDisponibilidad||"Próximamente"})
    ]}),
    (0,l.jsxs)("div",{className:"site-rental-card-content",children:[
      (0,l.jsx)("p",{className:"site-rental-brand",children:A.marca}),
      (0,l.jsx)("h2",{children:A.nombre}),
      (0,l.jsx)("ul",{className:"site-rental-card-features",children:B.slice(0,3).map((A,t)=>(0,l.jsx)("li",{children:A},t))}),
      (0,l.jsx)("button",{type:"button",className:"site-rental-details-button",onClick:()=>t(A),children:["Ver detalles",(0,l.jsx)("span",{className:"site-rental-details-arrow","aria-hidden":"true",children:"↗"})]})
    ]})
  ]})
}

function tRentalModal({equipo:A,onClose:t}){
  let[k,u]=(0,S.useState)(0),I=A.imagenes.map(tg).filter(Boolean),B=tRentalFeatures(A);
  (0,S.useEffect)(()=>{
    let A=document.body.style.overflow;
    document.body.style.overflow="hidden";
    let k=A=>{"Escape"===A.key&&t()};
    return window.addEventListener("keydown",k),()=>{document.body.style.overflow=A,window.removeEventListener("keydown",k)}
  },[t]);
  let Itext=`Hola, quiero consultar disponibilidad para alquilar ${A.nombre}.`;
  return (0,l.jsx)("div",{className:"site-rental-modal-backdrop",onMouseDown:A=>{A.target===A.currentTarget&&t()},children:
    (0,l.jsxs)("section",{className:"site-rental-modal","role":"dialog","aria-modal":"true","aria-labelledby":"rental-modal-title",children:[
      (0,l.jsx)("button",{type:"button",className:"site-rental-modal-close","aria-label":"Cerrar detalles",onClick:t,children:"×"}),
      (0,l.jsxs)("div",{className:"site-rental-modal-layout",children:[
        (0,l.jsxs)("div",{className:"site-rental-modal-gallery",children:[
          I.length?(0,l.jsx)("img",{src:I[k],alt:A.nombre,className:"site-rental-modal-photo"}):(0,l.jsx)("div",{className:"site-rental-card-placeholder",children:(0,l.jsx)(tc,{className:"h-10 w-10"})}),
          I.length>1&&(0,l.jsxs)(l.Fragment,{children:[
            (0,l.jsx)("button",{type:"button",className:"site-rental-gallery-arrow site-rental-gallery-prev","aria-label":"Foto anterior",onClick:()=>u(A=>(A-1+I.length)%I.length),children:"‹"}),
            (0,l.jsx)("button",{type:"button",className:"site-rental-gallery-arrow site-rental-gallery-next","aria-label":"Foto siguiente",onClick:()=>u(A=>(A+1)%I.length),children:"›"})
          ]}),
          I.length>1&&(0,l.jsx)("span",{className:"site-rental-gallery-count",children:`${k+1} / ${I.length}`})
        ]}),
        (0,l.jsxs)("div",{className:"site-rental-modal-copy",children:[
          (0,l.jsx)("p",{className:"site-rental-brand",children:A.marca}),
          (0,l.jsx)("h2",{id:"rental-modal-title",children:A.nombre}),
          (0,l.jsx)("p",{className:"site-rental-modal-intro",children:tRentalIntro(A)}),
          (0,l.jsx)("h3",{children:"Características"}),
          (0,l.jsx)("ul",{className:"site-rental-modal-features",children:B.map((A,t)=>(0,l.jsx)("li",{children:A},t))}),
          A.disponible&&(0,l.jsxs)("div",{className:"site-rental-terms",children:[
            (0,l.jsx)("p",{children:"Alquiler por jornadas de 12 horas"}),
            (0,l.jsx)("p",{children:"Coordinamos la entrega en tu negocio y el retiro al finalizar."})
          ]}),
          !A.disponible&&(0,l.jsx)("p",{className:"site-rental-coming-soon-inline",children:A.notaDisponibilidad||"Próximamente disponible"}),
          (0,l.jsx)(tp,{text:Itext,className:"site-rental-modal-cta",children:"Consultar disponibilidad por WhatsApp"})
        ]})
      ]})
    ]})
  })
}

function to(){
  let[A,t]=(0,S.useState)(null);
  return (0,l.jsxs)("div",{className:"site-rental-page mx-auto max-w-6xl px-4 py-12 md:px-6",children:[
    (0,l.jsxs)("header",{className:"max-w-2xl",children:[
      (0,l.jsx)("h1",{className:"text-3xl font-bold tracking-tight text-stone-900",children:"ALQUILA TU EQUIPO"}),
      (0,l.jsx)("p",{className:"mt-3 text-stone-600",children:"Equipamiento profesional para centros de estética. Alquiler por jornadas de 12hs."})
    ]}),
    (0,l.jsx)("div",{className:"site-rental-grid mt-10",children:T.map(A=>(0,l.jsx)(tRentalCard,{equipo:A,onOpen:t},A.slug))}),
    (0,l.jsx)("div",{className:"mt-10 flex justify-center",children:(0,l.jsx)(tp,{text:"Hola, quiero consultar por alquiler de equipos.",children:"Consultar disponibilidad y precios"})}),
    A&&(0,l.jsx)(tRentalModal,{equipo:A,onClose:()=>t(null)})
  ]})
}
