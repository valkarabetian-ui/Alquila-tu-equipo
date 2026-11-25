function W({onNavigate:A}){
  let t=[
    {key:"alquiler",title:"Alquiler de equipos",copy:"Soprano ICE · Hyper Pulse LRI 1818",action:"Explorar alquileres"},
    {key:"venta",title:"Venta de equipos",copy:"Soprano ICE",action:"Ver equipos"},
    {key:"servicio-tecnico",title:"Servicio técnico",copy:"Reparación multimarca y repuestos para tus equipos.",action:"Conocer el servicio"},
    {key:"cosmetica",title:"Cosmética profesional",copy:"Productos Dra. Norma Bustos para complementar tratamientos.",action:"Ver cosmética"}
  ];
  let k=T.filter(A=>A.disponible).slice(0,2);
  let u="https://wa.me/"+U+"?text="+encodeURIComponent("Hola, quiero consultar por el alquiler de equipos.");
  return (0,l.jsxs)("div",{className:"site-home",children:[
    (0,l.jsxs)("section",{className:"site-hero-banner",children:[
      (0,l.jsx)("img",{className:"site-hero-photo",src:"/assets/hero-hyperpulse.jpeg",alt:"Tratamiento estético con equipo Hyper Pulse de Leonardo"}),
      (0,l.jsx)("div",{className:"site-hero-overlay"}),
      (0,l.jsxs)("div",{className:"site-hero-banner-inner",children:[
        (0,l.jsxs)("div",{className:"site-hero-copy",children:[
          (0,l.jsxs)("h1",{children:["Tecnología que",(0,l.jsx)("br",{}),(0,l.jsx)("em",{children:"eleva cada tratamiento."})]}),
          (0,l.jsx)("p",{className:"site-hero-intro",children:"Alquiler y venta de equipos profesionales, con servicio técnico y asesoramiento para tu centro."}),
          (0,l.jsxs)("div",{className:"site-hero-actions",children:[
            (0,l.jsx)("button",{className:"site-button site-button-hero",onClick:()=>A("alquiler"),children:["Ver equipos en alquiler",(0,l.jsx)("span",{children:"→"})]}),
            (0,l.jsx)("button",{className:"site-button site-button-hero-ghost",onClick:()=>A("venta"),children:"Ver equipos en venta"})
          ]})
        ]}),
        (0,l.jsxs)("div",{className:"site-hero-signature",children:[
          (0,l.jsx)("span",{children:"EQUIPO DESTACADO"}),
          (0,l.jsx)("strong",{children:"Hyper Pulse"}),
          (0,l.jsx)("small",{children:"Leonardo · LRI 1818"})
        ]})
      ]})
    ]}),
    (0,l.jsxs)("section",{className:"site-services site-section",children:[
      (0,l.jsxs)("div",{className:"site-section-heading",children:[
        (0,l.jsx)("p",{className:"site-eyebrow",children:"UNA SOLUCIÓN PARA CADA NECESIDAD"}),
        (0,l.jsx)("h2",{children:"Todo para tu centro, en un solo lugar."}),
      ]}),
      (0,l.jsx)("div",{className:"site-service-grid",children:t.map((t,k)=>(0,l.jsxs)("button",{className:"site-service-card",onClick:()=>A(t.key),children:[
        (0,l.jsx)("span",{className:"site-card-top",children:(0,l.jsx)("span",{className:"site-card-arrow",children:"↗"})}),
        (0,l.jsx)("h3",{children:t.title}),(0,l.jsx)("p",{children:t.copy}),
        (0,l.jsxs)("span",{className:"site-card-link",children:[t.action," →"]})
      ]},t.key))})
    ]}),
    (0,l.jsxs)("section",{className:"site-video-band",children:[
      (0,l.jsxs)("div",{className:"site-video-inner",children:[
        (0,l.jsxs)("div",{className:"site-video-heading",children:[
          (0,l.jsx)("div",{children:[
            (0,l.jsx)("p",{className:"site-eyebrow",children:"TECNOLOGÍA EN ACCIÓN"}),
            (0,l.jsx)("h2",{children:"Conocé Hyper Pulse en acción."}),
            (0,l.jsx)("p",{children:"Descubrí cómo funciona la tecnología ALT Combolight de Leonardo."})
          ]}),
          (0,l.jsxs)("span",{className:"site-video-label",children:["LEONARDO",(0,l.jsx)("small",{children:"HYPER PULSE LRI 1818"})]})
        ]}),
        (0,l.jsx)("div",{className:"site-video-frame",children:(0,l.jsx)("iframe",{
          src:"https://www.youtube-nocookie.com/embed/ScaKudBlwaU?rel=0",
          title:"Hyper Pulse ALT COMBOLIGHT — YouTube",
          loading:"lazy",
          referrerPolicy:"strict-origin-when-cross-origin",
          allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowFullScreen:!0
        })})
      ]})
    ]}),
    (0,l.jsxs)("section",{className:"site-featured site-section",children:[
      (0,l.jsxs)("div",{className:"site-section-heading site-section-heading-row",children:[
        (0,l.jsx)("div",{children:(0,l.jsx)("h2",{children:"Sumá nuevos tratamientos. Alquilá el equipo ideal."})}),
        (0,l.jsx)("button",{className:"site-text-link",onClick:()=>A("alquiler"),children:"Ver catálogo completo →"})
      ]}),
      (0,l.jsx)("div",{className:"site-featured-grid",children:k.map(t=>(0,l.jsxs)("article",{className:"site-equipment-card",children:[
        (0,l.jsx)(ta,{equipo:t}),
        (0,l.jsx)(tp,{text:"Hola, quiero consultar por el alquiler de "+t.nombre+".",className:"site-equipment-cta",children:"Consultar disponibilidad →"})
      ]},t.slug))})
    ]}),
    (0,l.jsxs)("section",{className:"site-how site-section",children:[
      (0,l.jsxs)("div",{className:"site-how-intro",children:[
        (0,l.jsx)("h2",{children:"Consultá por disponibilidad."}),
        (0,l.jsx)("a",{href:u,target:"_blank",rel:"noreferrer",className:"site-button site-button-dark",children:["Consultar por WhatsApp",(0,l.jsx)("span",{children:"↗"})]})
      ]}),
      (0,l.jsx)("div",{className:"site-steps",children:[
        ["01","Elegí el equipo","Buscá el que necesitás para sumar un tratamiento."],
        ["02","Consultanos y resolvé tus dudas","Te asesoramos para que elijas el equipo adecuado."],
        ["03","Coordinamos la entrega","Acordamos la fecha y lo llevamos a la puerta de tu negocio."],
        ["04","Lo retiramos al finalizar","Cuando termina el alquiler, coordinamos el retiro."]
      ].map(([A,t,k])=>(0,l.jsxs)("div",{className:"site-step",children:[
        (0,l.jsx)("span",{children:A}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:t}),(0,l.jsx)("p",{children:k})]})
      ]},A))})
    ]}),
    (0,l.jsxs)("section",{className:"site-seller-band",children:[
      (0,l.jsxs)("div",{children:[
        (0,l.jsx)("p",{className:"site-eyebrow",children:"DRA. NORMA BUSTOS"}),
        (0,l.jsx)("h2",{children:"¿Te interesa vender cosmética profesional?"}),
        (0,l.jsx)("p",{children:"Sumate a nuestra red de vendedoras y conocé las opciones mayoristas."})
      ]}),
      (0,l.jsxs)("div",{className:"site-seller-actions",children:[
        (0,l.jsx)("button",{className:"site-button site-button-products",onClick:()=>A("cosmetica"),children:"Ver productos"}),
        (0,l.jsx)("button",{className:"site-button site-button-cream",onClick:()=>A("vendedora"),children:["Sumate como vendedora",(0,l.jsx)("span",{children:"→"})]})
      ]})
    ]})
  ]})
}
