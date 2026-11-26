function tSaleBeforeAfter(){
  let[A,t]=(0,S.useState)(!1);
  return (0,l.jsxs)("section",{className:"site-sale-before-after",children:[
    (0,l.jsxs)("div",{className:"site-sale-before-after-copy",children:[
      (0,l.jsx)("p",{className:"site-sale-overline",children:"SOPRANO ICE · ALMA LASERS"}),
      (0,l.jsx)("h2",{children:"Antes y después"}),
      (0,l.jsx)("p",{children:"Una comparación visual publicada por el fabricante. Pasá el cursor sobre la imagen para ver el después."})
    ]}),
    (0,l.jsxs)("div",{className:"site-sale-before-after-visual",children:[
      (0,l.jsxs)("button",{type:"button",className:"site-sale-before-after-control "+(A?"is-after":""),"aria-label":A?"Ver imagen antes del tratamiento":"Ver imagen después del tratamiento","aria-pressed":A,
        onPointerEnter:A=>{if(A.pointerType==="mouse")t(!0)},onPointerLeave:A=>{if(A.pointerType==="mouse")t(!1)},onClick:A=>{if(A.nativeEvent.pointerType!=="mouse")t(A=>!A)},children:[
          (0,l.jsx)("img",{src:"/assets/soprano-ice-antes.jpg",alt:"Antes del tratamiento, imagen de referencia",className:"site-sale-before-after-image site-sale-before-image","aria-hidden":A}),
          (0,l.jsx)("img",{src:"/assets/soprano-ice-despues.jpg",alt:"Después del tratamiento, imagen de referencia publicada por Alma Lasers",className:"site-sale-before-after-image site-sale-after-image","aria-hidden":!A}),
          (0,l.jsx)("span",{className:"site-sale-before-after-label site-sale-before-label",children:"ANTES"}),
          (0,l.jsx)("span",{className:"site-sale-before-after-label site-sale-after-label",children:"DESPUÉS"}),
          (0,l.jsxs)("span",{className:"site-sale-before-after-hint",children:[
            (0,l.jsx)("span",{className:"site-sale-before-after-desktop-hint",children:A?"Retirá el cursor para volver al antes":"Pasá el cursor para ver el después"}),
            (0,l.jsx)("span",{className:"site-sale-before-after-touch-hint",children:A?"Tocá para volver al antes":"Tocá para ver el después"})
          ]})
        ]}),
      (0,l.jsx)("p",{className:"site-sale-before-after-source",children:"Imagen de referencia: Alma Lasers. Los resultados pueden variar."})
    ]})
  ]})
}

function tQ(){
  let A=i[0];
  return (0,l.jsxs)("div",{className:"site-sale-page mx-auto max-w-6xl px-4 py-12 md:px-6",children:[
    (0,l.jsx)("p",{className:"site-sale-kicker",children:"VENTA DE EQUIPOS · ALMA LASERS"}),
    (0,l.jsxs)("section",{className:"site-sale-product",children:[
      (0,l.jsxs)("div",{className:"site-sale-visual",children:[
        (0,l.jsx)("img",{src:td(A.imagenes[0]),alt:"Equipo Soprano ICE de Alma Lasers",className:"site-sale-image"}),
        (0,l.jsxs)("div",{className:"site-sale-image-label",children:[(0,l.jsx)("span",{children:"ALMA LASERS"}),(0,l.jsx)("strong",{children:"Soprano ICE"})]})
      ]}),
      (0,l.jsxs)("div",{className:"site-sale-copy",children:[
        (0,l.jsx)("p",{className:"site-sale-overline",children:"DEPILACIÓN LÁSER PROFESIONAL"}),
        (0,l.jsx)("h1",{children:"Soprano ICE"}),
        (0,l.jsx)("p",{className:"site-sale-intro",children:"Una plataforma de Alma Lasers para sumar depilación láser profesional a la propuesta de tu centro."}),
        (0,l.jsxs)("div",{className:"site-sale-technology-line",children:[
          (0,l.jsxs)("span",{children:[(0,l.jsx)("strong",{children:"SHR"}),(0,l.jsx)("small",{children:"Super Hair Removal"})]}),
          (0,l.jsxs)("span",{children:[(0,l.jsx)("strong",{children:"In-Motion"}),(0,l.jsx)("small",{children:"Aplicación en movimiento"})]}),
          (0,l.jsxs)("span",{children:[(0,l.jsx)("strong",{children:"ICE"}),(0,l.jsx)("small",{children:"Enfriamiento por contacto"})]})
        ]}),
        (0,l.jsx)("p",{className:"site-sale-price-note",children:"Precio, financiación y disponibilidad: consultanos."}),
        (0,l.jsx)(tp,{text:"Hola, quiero consultar por Soprano ICE. ¿Me comparten precio, financiación y disponibilidad?",className:"site-sale-cta",children:"Consultar precio y condiciones"}),
        (0,l.jsx)("p",{className:"site-sale-assistance",children:"Te asesoramos para evaluar si es la opción adecuada para tu centro."})
      ]})
    ]}),
    (0,l.jsx)(tSaleBeforeAfter,{})
  ]})
}
