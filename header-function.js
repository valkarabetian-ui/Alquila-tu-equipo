function q({current:A,onNavigate:t}){
  let [k,u]=(0,S.useState)(!1);
  let I=A=>{t(A),u(!1)};
  let B="https://wa.me/"+U+"?text="+encodeURIComponent("Hola, quiero asesoramiento sobre los equipos.");
  return (0,l.jsxs)("header",{className:"site-header",children:[
    (0,l.jsxs)("div",{className:"site-header-inner",children:[
      (0,l.jsxs)("button",{className:"site-brand",onClick:()=>I("home"),"aria-label":"Alquilá tu equipo, inicio",children:[
        (0,l.jsxs)("span",{className:"site-brand-type",children:[
          (0,l.jsx)("span",{className:"site-brand-name",children:"alquilá tu equipo"}),
          (0,l.jsx)("span",{className:"site-brand-tag",children:"Depilación definitiva"})
        ]})
      ]}),
      (0,l.jsx)("nav",{className:"site-nav",children:d.map(t=>(0,l.jsx)("button",{onClick:()=>I(t.key),className:A===t.key?"active":"",children:t.label},t.key))}),
      (0,l.jsx)("a",{className:"site-header-cta",href:B,target:"_blank",rel:"noreferrer",children:["Hablemos por WhatsApp",(0,l.jsx)("span",{"aria-hidden":"true",children:"↗"})]}),
      (0,l.jsx)("button",{className:"site-menu-toggle",onClick:()=>u(A=>!A),"aria-label":k?"Cerrar menú":"Abrir menú","aria-expanded":k,children:k?"×":"☰"})
    ]}),
    k&&(0,l.jsx)("nav",{className:"site-mobile-nav",children:d.map(t=>(0,l.jsx)("button",{onClick:()=>I(t.key),className:A===t.key?"active":"",children:t.label},t.key))})
  ]})
}
