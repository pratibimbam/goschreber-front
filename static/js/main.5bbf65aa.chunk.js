(this.webpackJsonpgoschreber=this.webpackJsonpgoschreber||[]).push([[0],{110:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),r=c.n(a),n=c(23),i=c.n(n),l=c(11),j=c(19),o=c(8),b=(c(67),c(9)),d=c(120),m=c(129),x=c(121),h=c(122),O=c(12),u=c.n(O),g=c.p+"static/media/carrot.21d529a5.png",f=c(128),v=c(115),p=c(116),N=c(117),k=c(112),z=c(113),w=c(114),y=c(118),C=c(119);var T=function(e){var t=e.favouritedItems,c=e.verein,a=e.favClick,r=c.web,n=c.email,i=function(){return!!t.find((function(e){return e._id===c._id}))};return Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(f.a.Body,{children:[Object(s.jsx)(f.a.Title,{children:c.kgvname}),Object(s.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[Object(s.jsx)(k.a,{className:"mr-2",color:"green",size:17}),c.adresse.strasse,", ",c.adresse.plz," ",c.adresse.stadt]}),n&&Object(s.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[Object(s.jsx)(z.a,{className:"mr-2",color:"green",size:17}),c.email]}),r&&Object(s.jsxs)(f.a.Subtitle,{href:c.web,className:"mb-3 text-muted",children:[Object(s.jsx)(w.a,{className:"mr-2",color:"green",size:17}),Object(s.jsx)("a",{className:"mb-3 text-muted",href:c.web,children:c.web})]}),Object(s.jsx)(v.a,{className:"justify-content-center",children:Object(s.jsxs)(p.a,{children:[Object(s.jsxs)(N.a,{onClick:a,size:"sm",className:"m-1 ",variant:"outline-danger",children:[i()?Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(C.a,{className:"mr-2",color:"red",size:17}),i()?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"m-1",variant:"outline-danger",children:"Teilen"})]})})]})})};var _=function(e,t){var c=Object(a.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(s){return console.log(s),t}})),s=Object(o.a)(c,2),r=s[0],n=s[1];return[r,function(t){try{var c=t instanceof Function?t(r):t;n(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(s){console.log(s)}}]};c(44);var S=function(e){var t=e.kgvs,c=e.favourites,a=e.favouritedItems,r=e.setFavourites,n=u.a.icon({iconUrl:g,iconSize:[38,38],shadowSize:[50,64],iconAnchor:[19,38],shadowAnchor:[4,62],popupAnchor:[0,-38]});return Object(s.jsxs)(d.a,{center:[51.330743159430824,12.36348580378971],zoom:13,scrollWheelZoom:!1,children:[Object(s.jsx)(m.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e){return Object(s.jsx)(x.a,{icon:n,position:[e.geometry.coordinates[0],e.geometry.coordinates[1]],children:Object(s.jsx)(h.a,{children:Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(f.a.Body,{children:[Object(s.jsx)(f.a.Title,{children:e.kgvname}),Object(s.jsxs)(f.a.Text,{className:"mb-2 text-muted",children:[Object(s.jsx)(k.a,{className:"mr-2",color:"green",size:15}),e.adresse.strasse,", ",e.adresse.plz," ",e.adresse.stadt]}),Object(s.jsxs)(f.a.Text,{className:"mb-2 text-muted",children:[Object(s.jsx)(z.a,{className:"mr-2",color:"green",size:15}),e.email]}),(i=e.web,!!i&&Object(s.jsxs)(f.a.Text,{href:e.web,className:"mb-3 text-muted",children:[Object(s.jsx)(w.a,{className:"mr-2",color:"green",size:15}),Object(s.jsx)("a",{className:"mb-3 text-muted",href:e.web,children:e.web})]})),Object(s.jsx)(v.a,{className:"justify-content-center",children:Object(s.jsxs)(p.a,{children:[Object(s.jsx)(N.a,{onClick:function(){return t=e._id,console.log(t),console.log(c.indexOf(t)),void(-1===c.indexOf(t)?r([].concat(Object(j.a)(c),[t])):r(c.filter((function(e){return e!=t}))));var t},size:"sm",className:"m-1 ",variant:"outline-danger",children:(t=e._id,a.find((function(e){return e._id===t}))?"Entfernen":"Merken")}),Object(s.jsx)(N.a,{size:"sm",className:"m-1",variant:"outline-danger",children:"Teilen"})]})})]})})})},e._id);var t,i}))]})},F=c(57),I=c(125),A=c(127);var B=function(){return Object(s.jsx)(v.a,{fluid:!0,children:Object(s.jsx)(p.a,{children:Object(s.jsx)(F.a,{children:Object(s.jsxs)(I.a,{expand:"xl",children:[Object(s.jsx)(I.a.Brand,{href:"/",children:Object(s.jsx)("h4",{className:"text-danger",children:Object(s.jsx)("strong",{children:"GO SCHREBER"})})}),Object(s.jsx)(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsx)(I.a.Collapse,{className:"justify-content-end",id:"basic-navbar-nav",children:Object(s.jsxs)(A.a,{children:[Object(s.jsx)(A.a.Item,{className:"ml-6",children:Object(s.jsx)(A.a.Link,{eventKey:"home",href:"/",children:Object(s.jsx)(N.a,{variant:"success",children:"Vereine"})})}),Object(s.jsx)(A.a.Item,{className:"ml-6",children:Object(s.jsx)(A.a.Link,{eventKey:"frei",href:"/frei",children:Object(s.jsx)(N.a,{variant:"success",children:"Freie G\xe4rten"})})}),Object(s.jsx)(A.a.Item,{className:"ml-6",children:Object(s.jsx)(A.a.Link,{href:"/inserieren",children:Object(s.jsx)(N.a,{variant:"success",children:"Anzeige aufgeben"})})}),Object(s.jsx)(A.a.Item,{className:"ml-6",children:Object(s.jsx)(A.a.Link,{href:"/verwalten",children:Object(s.jsx)(N.a,{variant:"success",children:"Anzeigen verwalten"})})}),Object(s.jsx)(A.a.Item,{className:"ml-6",children:Object(s.jsx)(A.a.Link,{href:"/merken",children:Object(s.jsx)(N.a,{variant:"success",children:"Merkliste"})})})]})})]})})})})};c(74);var L=function(e){var t=e.gaerten,c=e.ownAnzeige,a=e.setMerkFrei,r=e.merkFrei,n=e.merkFreiItems,i=function(e){return!!n.find((function(t){return t._id===e}))},o=u.a.icon({iconUrl:g,iconSize:[38,38],shadowSize:[50,64],iconAnchor:[19,38],shadowAnchor:[4,62],popupAnchor:[0,-38]});return Object(s.jsxs)(d.a,{center:[51.330743159430824,12.36348580378971],zoom:13,scrollWheelZoom:!0,children:[Object(s.jsx)(m.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e){return Object(s.jsx)(x.a,{icon:o,position:[e.kgv.geometry.coordinates[0],e.kgv.geometry.coordinates[1]],children:Object(s.jsx)(h.a,{children:Object(s.jsx)(f.a,{border:"success",children:Object(s.jsxs)(f.a.Body,{className:"mb-1 mt-1",children:[Object(s.jsxs)(f.a.Text,{className:"mb-1 text-muted",children:[Object(s.jsx)(k.a,{className:"mr-1",color:"green",size:12}),e.kgv.kgvname]}),Object(s.jsx)(f.a.Title,{className:"mb-1 text-success",children:Object(s.jsx)("h4",{children:e.titel})}),Object(s.jsx)(f.a.Text,{className:"mb-1 mt-1 text-muted text-truncate",children:e.beschreibung}),Object(s.jsx)(f.a.Subtitle,{className:"mb-1 mt-1 text-success",children:Object(s.jsxs)("h5",{children:[e.preis,"\u20ac"]})}),Object(s.jsxs)(p.a,{children:[Object(s.jsx)(l.b,{to:"/frei/".concat(e._id),children:Object(s.jsx)(N.a,{size:"sm",className:"mr-2 ml-3",variant:"outline-danger",children:"Details"})}),Object(s.jsxs)(N.a,{onClick:function(){return t=e._id,console.log(t),console.log(r.indexOf(t)),console.log(c),void(-1===r.indexOf(t)?a([].concat(Object(j.a)(r),[t])):a(r.filter((function(e){return e!=t}))));var t},size:"sm",className:"mr-2 ",variant:"outline-danger",children:[i(e._id)?Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(C.a,{className:"mr-2",color:"red",size:17}),i(e._id)?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Teilen"})]})]})})})},e._id)}))]})},M=c(7),E=c(126);var G=function(e){var t=e.kgvs,c=e.anzeige,a=e.setAnzeige,r=e.handleSubmit;return Object(s.jsx)(v.a,{children:Object(s.jsx)(p.a,{className:"justify-content-md-center mt-5",children:Object(s.jsx)(F.a,{xs:8,children:Object(s.jsx)(f.a,{border:"success",className:"justify-content-md-center",children:Object(s.jsxs)(E.a,{onSubmit:r,className:"m-3",children:[Object(s.jsx)("h5",{className:"mb-3",children:"Anzeigendetails"}),Object(s.jsxs)(E.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(E.a.Label,{children:"Titel der Anzeige"}),Object(s.jsx)(E.a.Control,{value:c.titel,onChange:function(e){return a(Object(M.a)(Object(M.a)({},c),{},{titel:e.target.value}))},type:"text",name:"titel",as:"textarea",rows:1})]}),Object(s.jsxs)(E.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(E.a.Label,{children:"Beschreibung"}),Object(s.jsx)(E.a.Control,{value:c.beschreibung,onChange:function(e){return a(Object(M.a)(Object(M.a)({},c),{},{beschreibung:e.target.value}))},type:"text",name:"beschreibung",as:"textarea",rows:3})]}),Object(s.jsxs)(p.a,{children:[Object(s.jsx)(F.a,{children:Object(s.jsxs)(E.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(E.a.Label,{children:"Preis"}),Object(s.jsx)(E.a.Control,{value:c.preis,onChange:function(e){return a(Object(M.a)(Object(M.a)({},c),{},{preis:e.target.value}))},type:"text",name:"preis",as:"textarea",rows:1})]})}),Object(s.jsx)(F.a,{children:Object(s.jsxs)(E.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(E.a.Label,{children:"J\xe4hrliche Pachtkosten"}),Object(s.jsx)(E.a.Control,{value:c.pachtkosten,onChange:function(e){return a(Object(M.a)(Object(M.a)({},c),{},{pachtkosten:e.target.value}))},type:"text",name:"pachtkosten",as:"textarea",rows:1})]})}),Object(s.jsx)(F.a,{children:Object(s.jsxs)(E.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(E.a.Label,{children:"Gr\xf6\xdfe"}),Object(s.jsx)(E.a.Control,{value:c.gartenqm,onChange:function(e){return a(Object(M.a)(Object(M.a)({},c),{},{gartenqm:e.target.value}))},type:"text",name:"gartenqm",as:"textarea",rows:1})]})}),Object(s.jsx)(F.a,{children:Object(s.jsxs)(E.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(E.a.Label,{children:"Verf\xfcgbar ab"}),Object(s.jsx)(E.a.Control,{value:c.verf\u00fcgbar,onChange:function(e){return a(Object(M.a)(Object(M.a)({},c),{},{"verf\xfcgbar":e.target.value}))},type:"text",name:"verf\xfcgbar",as:"textarea",rows:1})]})})]}),Object(s.jsxs)(E.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(s.jsx)(E.a.Label,{children:"Kleingartenverein"}),Object(s.jsxs)(E.a.Control,{onChange:function(e){var s=t.filter((function(t){return t.kgvname==e.target.value})).map((function(e){return e._id}));a(Object(M.a)(Object(M.a)({},c),{},{kgv:s}))},type:"",name:"kgvname",as:"select",children:[Object(s.jsx)("option",{children:"bitte ausw\xe4hlen"}),t.map((function(e){return Object(s.jsx)("option",{children:e.kgvname})}))]})]}),Object(s.jsx)("h5",{className:"mb-3",children:"Anbieterdetails"}),Object(s.jsxs)(E.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(E.a.Label,{children:"Name"}),Object(s.jsx)(E.a.Control,{value:c.name,onChange:function(e){return a(Object(M.a)(Object(M.a)({},c),{},{name:e.target.value}))},type:"text",name:"name",as:"textarea",rows:1})]}),Object(s.jsxs)(E.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(E.a.Label,{children:"Email"}),Object(s.jsx)(E.a.Control,{value:c.email,onChange:function(e){return a(Object(M.a)(Object(M.a)({},c),{},{email:e.target.value}))},type:"text",name:"email",as:"textarea",rows:1})]}),Object(s.jsxs)(E.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(E.a.Label,{children:"Telefonnummer"}),Object(s.jsx)(E.a.Control,{value:c.telefon,onChange:function(e){return a(Object(M.a)(Object(M.a)({},c),{},{telefon:e.target.value}))},type:"text",name:"telefon",as:"textarea",rows:1})]}),Object(s.jsx)(N.a,{variant:"success",type:"submit",children:"Anzeige aufgeben"})]})})})})})},D=c(27),q=c.n(D);var J=function(e){var t,c=e.eigAnzeige,r=(e.setOwnAnzeige,e.ownAnzeige,c._id),n=Object(a.useState)(!1),i=Object(o.a)(n,2),j=i[0],b=i[1];return Object(s.jsx)(v.a,{fluid:!0,children:Object(s.jsx)(p.a,{className:"justify-content-md-center mt-5",children:Object(s.jsx)(F.a,{xs:4,children:j?Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsx)(f.a.Body,{className:"m-1",children:Object(s.jsx)(p.a,{children:Object(s.jsx)(f.a.Title,{children:"Anzeige gel\xf6scht"})})})}):Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(f.a.Body,{className:"m-1",children:[Object(s.jsx)(p.a,{children:Object(s.jsxs)("p",{className:"mb-2 text-muted",children:[Object(s.jsx)(k.a,{className:"mr-1",color:"green",size:12}),null===(t=c.kgv)||void 0===t?void 0:t.kgvname]})}),Object(s.jsx)(p.a,{children:Object(s.jsx)(f.a.Title,{children:c.titel})}),Object(s.jsx)(p.a,{children:Object(s.jsx)("p",{className:"mb-2 text-muted row-3 text-truncate",children:c.beschreibung})}),Object(s.jsx)(p.a,{children:Object(s.jsx)("h5",{className:"text-success",children:Object(s.jsxs)("strong",{children:[c.preis,"\u20ac"]})})}),Object(s.jsxs)(p.a,{children:[Object(s.jsx)(N.a,{onClick:function(){q.a.delete("https://goschreber.herokuapp.com/anzeigens/"+r).then((function(e){console.log(e),b(!0)}))},size:"sm",className:"mr-4",variant:"success",children:"L\xf6schen"}),Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"success",children:"Bearbeiten"}),Object(s.jsx)(l.b,{to:"/frei/".concat(c._id),children:Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Details"})})]})]})})})})})};var P=c(123),K=c(124);var V=function(){var e,t,c,r=Object(b.g)().id,n=Object(a.useState)(!0),i=Object(o.a)(n,2),l=(i[0],i[1]),j=Object(a.useState)(!1),d=Object(o.a)(j,2),m=(d[0],d[1]),x=Object(a.useState)([]),h=Object(o.a)(x,2),O=h[0],u=h[1];return Object(a.useEffect)((function(e){var t="".concat("https://goschreber.herokuapp.com","/anzeigens/").concat(r);l(!0),m(!1),fetch(t).then((function(e){if(console.log(e),!e.ok)throw new Error("Oh noo");return l(!1),e.json()})).then((function(e){return u(e.data)})).catch((function(e){return m(!0)}))}),[]),console.log(O),Object(s.jsx)(v.a,{fluid:!0,children:Object(s.jsxs)(p.a,{className:"justify-content-md-center mt-5",children:[Object(s.jsx)(F.a,{xs:6,children:Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(f.a.Body,{children:[Object(s.jsx)(f.a.Img,{className:"mb-3",variant:"top",src:"https://cdn.kiekmo.hamburg/vary/2020/02/listicle-kleingarten-lokstedt-shutterstock_437208574_content-728x410.jpg"}),Object(s.jsx)(f.a.Title,{className:"text-danger",children:Object(s.jsx)("h4",{children:O.titel})}),Object(s.jsxs)(f.a.Text,{className:"text-muted mb-3",children:[Object(s.jsx)(k.a,{className:"mr-1",color:"green",size:12}),' KGV "',null===(e=O.kgv)||void 0===e?void 0:e.kgvname,'", ',null===(t=O.kgv)||void 0===t?void 0:t.adresse.strasse,", ",null===(c=O.kgv)||void 0===c?void 0:c.adresse.plz," Leipzig"]}),Object(s.jsx)(f.a.Subtitle,{className:"mb-3",children:"Beschreibung"}),Object(s.jsx)(f.a.Text,{className:"mb-3",children:O.beschreibung}),Object(s.jsx)(f.a.Subtitle,{className:"mb-2",children:"Details"}),Object(s.jsxs)(f.a.Text,{className:"mb-1",children:["Preis:",O.preis,"\u20ac"]}),Object(s.jsxs)(f.a.Text,{className:"mb-1",children:["Gartengr\xf6\xdfe: ",O.gartenqm,"qm"]}),Object(s.jsxs)(f.a.Text,{className:"mb-1",children:["J\xe4hrliche Pachtkosten: ",O.pachtkosten,"\u20ac"]}),Object(s.jsxs)(f.a.Text,{className:"mb-1",children:["Verf\xfcgbar ab: ",O.verf\u00fcgbar]})]})})}),Object(s.jsxs)(F.a,{xs:3,children:[Object(s.jsx)(p.a,{className:"mb-1",children:Object(s.jsx)(N.a,{className:"mr-1",variant:"outline-danger",block:!0,children:"Merken"})}),Object(s.jsx)(p.a,{className:"mb-1",children:Object(s.jsx)(N.a,{className:"mr-1",variant:"outline-danger",block:!0,children:"Teilen"})}),Object(s.jsx)(p.a,{children:Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(f.a.Body,{children:[Object(s.jsxs)(f.a.Subtitle,{className:"mb-2",children:[Object(s.jsx)(P.a,{className:"mr-2",color:"green",size:17}),O.name]}),Object(s.jsxs)(f.a.Subtitle,{className:"mb-2",children:[Object(s.jsx)(z.a,{className:"mr-2",color:"green",size:17}),O.email]}),Object(s.jsxs)(f.a.Subtitle,{className:"mb-2",children:[Object(s.jsx)(K.a,{className:"mr-2",color:"green",size:17}),O.telefon]})]})})})]})]})})};var U=function(e){var t=e.freigarten,c=e.merkClick,a=e.merkFreiItems,r=function(){return!!a.find((function(e){return e._id===t._id}))};return Object(s.jsx)(v.a,{children:Object(s.jsx)(p.a,{children:Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(f.a.Body,{className:"m-1",children:[Object(s.jsx)(p.a,{children:Object(s.jsxs)("p",{className:"mb-2 text-muted",children:[Object(s.jsx)(k.a,{className:"mr-1",color:"green",size:12}),t.kgv.kgvname]})}),Object(s.jsx)(p.a,{children:Object(s.jsx)(f.a.Title,{children:t.titel})}),Object(s.jsx)(p.a,{children:Object(s.jsx)("p",{className:"mb-2 text-muted row-3 text-truncate",children:t.beschreibung})}),Object(s.jsx)(p.a,{children:Object(s.jsx)("h5",{className:"text-success",children:Object(s.jsxs)("strong",{children:[t.preis,"\u20ac"]})})}),Object(s.jsxs)(p.a,{children:[Object(s.jsx)(l.b,{to:"/frei/".concat(t._id),children:Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Details"})}),Object(s.jsxs)(N.a,{onClick:c,size:"sm",className:"mr-2 ",variant:"outline-danger",children:[r()?Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(C.a,{className:"mr-2",color:"red",size:17}),r()?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Teilen"})]})]})})})})};var W=function(e){var t=e.favouritedItems,c=e.merkFreiItems,a=e.setFavourites,r=e.favourites,n=e.setMerkFrei,i=e.merkFrei,o=function(e){return!!c.find((function(t){return t._id===e}))},b=u.a.icon({iconUrl:g,iconSize:[38,38],shadowSize:[50,64],iconAnchor:[19,38],shadowAnchor:[4,62],popupAnchor:[0,-38]});return Object(s.jsxs)(d.a,{center:[51.330743159430824,12.36348580378971],zoom:13,scrollWheelZoom:!1,children:[Object(s.jsx)(m.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e){return Object(s.jsx)(x.a,{icon:b,position:[e.geometry.coordinates[0],e.geometry.coordinates[1]],children:Object(s.jsx)(h.a,{children:Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(f.a.Body,{children:[Object(s.jsx)(f.a.Title,{children:e.kgvname}),Object(s.jsxs)(f.a.Text,{className:"mb-2 text-muted",children:[Object(s.jsx)(k.a,{className:"mr-2",color:"green",size:15}),e.adresse.strasse,", ",e.adresse.plz," ",e.adresse.stadt]}),Object(s.jsxs)(f.a.Text,{className:"mb-2 text-muted",children:[Object(s.jsx)(z.a,{className:"mr-2",color:"green",size:15}),e.email]}),(n=e.web,!!n&&Object(s.jsxs)(f.a.Text,{href:e.web,className:"mb-3 text-muted",children:[Object(s.jsx)(w.a,{className:"mr-2",color:"green",size:15}),Object(s.jsx)("a",{className:"mb-3 text-muted",href:e.web,children:e.web})]})),Object(s.jsx)(v.a,{className:"justify-content-center",children:Object(s.jsxs)(p.a,{children:[Object(s.jsx)(N.a,{onClick:function(){return t=e._id,console.log(t),console.log(r.indexOf(t)),void(-1===r.indexOf(t)?a([].concat(Object(j.a)(r),[t])):a(r.filter((function(e){return e!=t}))));var t},size:"sm",className:"m-1 ",variant:"outline-danger",children:(c=e._id,t.find((function(e){return e._id===c}))?"Entfernen":"Merken")}),Object(s.jsx)(N.a,{size:"sm",className:"m-1",variant:"outline-danger",children:"Teilen"})]})})]})})})},e._id);var c,n})),c.map((function(e){return Object(s.jsx)(x.a,{icon:b,position:[e.kgv.geometry.coordinates[0],e.kgv.geometry.coordinates[1]],children:Object(s.jsx)(h.a,{children:Object(s.jsx)(f.a,{border:"success",children:Object(s.jsxs)(f.a.Body,{className:"mb-1 mt-1",children:[Object(s.jsxs)(f.a.Text,{className:"mb-1 text-muted",children:[Object(s.jsx)(k.a,{className:"mr-1",color:"green",size:12}),e.kgv.kgvname]}),Object(s.jsx)(f.a.Title,{className:"mb-1 text-success",children:Object(s.jsx)("h4",{children:e.titel})}),Object(s.jsx)(f.a.Text,{className:"mb-1 mt-1 text-muted text-truncate",children:e.beschreibung}),Object(s.jsx)(f.a.Subtitle,{className:"mb-1 mt-1 text-success",children:Object(s.jsxs)("h5",{children:[e.preis,"\u20ac"]})}),Object(s.jsxs)(p.a,{children:[Object(s.jsx)(l.b,{to:"/frei/".concat(e._id),children:Object(s.jsx)(N.a,{size:"sm",className:"mr-2 ml-3",variant:"outline-danger",children:"Details"})}),Object(s.jsxs)(N.a,{onClick:function(){return t=e._id,console.log(t),console.log(i.indexOf(t)),void(-1===i.indexOf(t)?n([].concat(Object(j.a)(i),[t])):n(i.filter((function(e){return e!=t}))));var t},size:"sm",className:"mr-2 ",variant:"outline-danger",children:[o(e._id)?Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(C.a,{className:"mr-2",color:"red",size:17}),o(e._id)?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Teilen"})]})]})})})},e._id)}))]})};var Z=function(e){var t=e.merkClick,c=e.freigarten,a=e.merkFreiItems,r=function(){return!!a.find((function(e){return e._id===c._id}))};return Object(s.jsx)(v.a,{children:Object(s.jsx)(p.a,{children:Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(f.a.Body,{className:"m-1",children:[Object(s.jsx)(p.a,{children:Object(s.jsxs)("p",{className:"mb-2 text-muted",children:[Object(s.jsx)(k.a,{className:"mr-1",color:"green",size:12}),c.kgv.kgvname]})}),Object(s.jsx)(p.a,{children:Object(s.jsx)(f.a.Title,{children:c.titel})}),Object(s.jsx)(p.a,{children:Object(s.jsx)("p",{className:"mb-2 text-muted row-3 text-truncate",children:c.beschreibung})}),Object(s.jsx)(p.a,{children:Object(s.jsx)("h5",{className:"text-success",children:Object(s.jsxs)("strong",{children:[c.preis,"\u20ac"]})})}),Object(s.jsxs)(p.a,{children:[Object(s.jsx)(l.b,{to:"/frei/".concat(c._id),children:Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Details"})}),Object(s.jsxs)(N.a,{onClick:t,size:"sm",className:"mr-2 ",variant:"outline-danger",children:[r()?Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(C.a,{className:"mr-2",color:"red",size:17}),r()?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Teilen"})]})]})})})})};var R=function(e){var t=e.favouritedItems,c=e.favClick,a=e.verein,r=a.web,n=a.email,i=function(){return!!t.find((function(e){return e._id===a._id}))};return Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(f.a.Body,{children:[Object(s.jsx)(f.a.Title,{children:a.kgvname}),Object(s.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[Object(s.jsx)(k.a,{className:"mr-2",color:"green",size:17}),a.adresse.strasse,", ",a.adresse.plz," ",a.adresse.stadt]}),n&&Object(s.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[Object(s.jsx)(z.a,{className:"mr-2",color:"green",size:17}),a.email]}),r&&Object(s.jsxs)(f.a.Subtitle,{href:a.web,className:"mb-3 text-muted",children:[Object(s.jsx)(w.a,{className:"mr-2",color:"green",size:17}),Object(s.jsx)("a",{className:"mb-3 text-muted",href:a.web,children:a.web})]}),Object(s.jsx)(v.a,{className:"justify-content-center",children:Object(s.jsxs)(p.a,{children:[Object(s.jsxs)(N.a,{onClick:c,size:"sm",className:"m-1 ",variant:"outline-danger",children:[i()?Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(C.a,{className:"mr-2",color:"red",size:17}),i()?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"m-1",variant:"outline-danger",children:"Teilen"})]})})]})})},H=c(29);var Q=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(!0),i=Object(o.a)(n,2),l=(i[0],i[1]),d=Object(a.useState)(!1),m=Object(o.a)(d,2),x=(m[0],m[1]),h=Object(a.useState)([]),O=Object(o.a)(h,2),u=O[0],g=O[1],f=Object(a.useState)({titel:"",beschreibung:"",kgv:"",pachtkosten:"",preis:"","verf\xfcgbar":"",gartemqm:"",name:"",email:"",telefon:""}),N=Object(o.a)(f,2),k=N[0],z=N[1],w=_("anzeigen",[]),y=Object(o.a)(w,2),C=y[0],I=y[1],A=_("favourite",[]),M=Object(o.a)(A,2),E=M[0],D=M[1],P=Object(b.f)();Object(a.useEffect)((function(e){var t="".concat("https://goschreber.herokuapp.com","/kgvs");l(!0),x(!1),fetch(t).then((function(e){if(console.log(e),!e.ok)throw new Error("Oh noo");return l(!1),e.json()})).then((function(e){return r(e.data)})).catch((function(e){return x(!0)}))}),[]),Object(a.useEffect)((function(e){var t="".concat("https://goschreber.herokuapp.com","/anzeigens");l(!0),x(!1),fetch(t).then((function(e){if(console.log(e),!e.ok)throw new Error("Oh noo");return l(!1),e.json()})).then((function(e){return g(e.data)})).catch((function(e){return x(!0)}))}),[]);var K=u.filter((function(e){var t=e._id;return-1!=C.indexOf(t)}));function Q(e){console.log(e),console.log(E.indexOf(e)),-1===E.indexOf(e)?D([].concat(Object(j.a)(E),[e])):D(E.filter((function(t){return t!=e})))}var X=c.filter((function(e){var t=e._id;return-1!=E.indexOf(t)}));console.log(X);var Y=_("merkFreiGarten",[]),$=Object(o.a)(Y,2),ee=$[0],te=$[1];function ce(e){console.log(e),console.log(ee.indexOf(e)),-1===ee.indexOf(e)?te([].concat(Object(j.a)(ee),[e])):te(ee.filter((function(t){return t!=e})))}var se=u.filter((function(e){var t=e._id;return-1!=ee.indexOf(t)}));return console.log(se),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(B,{}),Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{exact:!0,path:"/",children:Object(s.jsx)(v.a,{fluid:!0,children:Object(s.jsxs)(p.a,{children:[Object(s.jsx)(F.a,{xs:8,children:Object(s.jsx)(S,{favouritedItems:X,favourites:E,setFavourites:D,kgvs:c})}),Object(s.jsx)(F.a,{children:Object(s.jsx)(H.Scrollbars,{style:{width:"100%",height:"100%"},children:c.map((function(e){return Object(s.jsx)(T,{favouritedItems:X,favClick:function(){return Q(e._id)},verein:e},e._id)}))})})]})})}),Object(s.jsx)(b.a,{exact:!0,path:"/frei",children:Object(s.jsx)(v.a,{fluid:!0,children:Object(s.jsxs)(p.a,{children:[Object(s.jsx)(F.a,{xs:8,children:Object(s.jsx)(L,{ownAnzeige:C,setMerkFrei:te,merkFrei:ee,merkFreiItems:se,gaerten:u,kgvs:c})}),Object(s.jsx)(F.a,{children:Object(s.jsx)(H.Scrollbars,{style:{width:"100%",height:"100%"},children:u.map((function(e){return Object(s.jsx)(U,{merkFreiItems:se,merkClick:function(){return ce(e._id)},freigarten:e},e._id)}))})})]})})}),Object(s.jsx)(b.a,{path:"/frei/:id",children:Object(s.jsx)(V,{})}),Object(s.jsx)(b.a,{exact:!0,path:"/inserieren",children:Object(s.jsx)(G,{handleSubmit:function(e){e.preventDefault(),q.a.post("https://goschreber.herokuapp.com/anzeigens",k).then((function(e){var t=e.data.data._id;I([].concat(Object(j.a)(C),[t])),P.push("frei/".concat(t))}))},anzeige:k,setAnzeige:z,gaerten:u,kgvs:c})}),Object(s.jsx)(b.a,{exact:!0,path:"/verwalten",children:K.map((function(e){return Object(s.jsx)(J,{ownAnzeige:C,setOwnAnzeige:I,eigAnzeige:e},e._id)}))}),Object(s.jsx)(b.a,{exact:!0,path:"/merken",children:Object(s.jsx)(v.a,{fluid:!0,children:Object(s.jsxs)(p.a,{children:[Object(s.jsx)(F.a,{children:Object(s.jsx)(H.Scrollbars,{style:{width:"100%",height:"100%"},children:X.map((function(e){return Object(s.jsx)(R,{favClick:function(){return Q(e._id)},verein:e,favouritedItems:X,setFavourites:D,favourites:E},e._id)}))})}),Object(s.jsx)(F.a,{xs:6,children:Object(s.jsx)(W,{favouritedItems:X,setFavourites:D,favourites:E,merkFreiItems:se,setMerkFrei:te,merkFrei:ee})}),Object(s.jsx)(F.a,{children:Object(s.jsx)(H.Scrollbars,{style:{width:"100%",height:"100%"},children:se.map((function(e){return Object(s.jsx)(Z,{merkClick:function(){return ce(e._id)},freigarten:e,merkFreiItems:se,setMerkFrei:te,merkFrei:ee},e._id)}))})})]})})})]})]})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,130)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),r(e),n(e)}))};c(109);i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(l.a,{children:Object(s.jsx)(Q,{})})}),document.getElementById("root")),X()},67:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.5bbf65aa.chunk.js.map