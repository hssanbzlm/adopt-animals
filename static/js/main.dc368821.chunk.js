(this.webpackJsonpfem=this.webpackJsonpfem||[]).push([[0],{1122:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(34),n(35),n(12)),u=n.n(o),i=n(24),m=n(2),s=n(8),d=n.n(s),E=function(e,t,n){var c=Object(a.useState)(t),l=Object(m.a)(c,2),o=l[0],u=l[1],i="use-dropdown-".concat(e.replace(" ","").toLowerCase());return[o,function(){return r.a.createElement("label",{htmlFor:i}," ",e," ",r.a.createElement("select",{"data-testid":i,id:i,value:o,onChange:function(e){return u(e.target.value)},onBlur:function(e){return u(e.target.value)},disabled:0===n.length},r.a.createElement("option",null,"All"),n.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))},u]},p=n(3),f=function(e){var t="http://placecorgi.com/300/300";return e.media.length&&(t=e.media[0].small),r.a.createElement(p.a,{to:"/details/".concat(e.id),className:"pet"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:t,alt:e.name})," ")," ",r.a.createElement("div",{className:"info"},r.a.createElement("h1",null," ",e.name," ")," ",r.a.createElement("h2",null," ","".concat(e.animal," - ").concat(e.breed," - ").concat(e.location)," ")," ")," ")},h=function(e){var t=e.pets;return r.a.createElement("div",{className:"search"}," ",0===t.length?r.a.createElement("h1",null," No pets found "):t.map((function(e){return r.a.createElement(f,{animal:e.type,key:e.id,name:e.name,breed:e.breeds.primary,media:e.photos,location:"".concat(e.contact.address.city,",").concat(e.contact.address.state),id:e.id})})))},b=n(7);var v=Object(b.b)((function(e){return{theme:e.theme,location:e.location}}),(function(e){return{setTheme:function(t){return e(function(e){return{type:"CHANGE_THEME",payload:e}}(t))},setLocation:function(t){return e(function(e){return{type:"CHANGE_LOCATION",payload:e}}(t))}}}))((function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),c=n[0],l=n[1],o=E("Animal","dog",s.ANIMALS),p=Object(m.a)(o,2),f=p[0],b=p[1],v=E("Breed","",c),O=Object(m.a)(v,3),g=O[0],y=O[1],j=O[2],N=Object(a.useState)([]),_=Object(m.a)(N,2),S=_[0],w=_[1];function A(){return(A=Object(i.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.animals({location:e.location,breed:g,type:f});case 2:n=t.sent,a=n.animals,w(a||[]);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){l([]),j(" "),d.a.breeds(f).then((function(e){var t=e.breeds.map((function(e){return e.name}));l(t)}),console.error)}),[f]),r.a.createElement("div",{className:"search-params"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){A.apply(this,arguments)}()}},r.a.createElement("label",{htmlFor:"location"},"Location"," ",r.a.createElement("input",{id:"Location",value:e.location,placeholder:"location",onChange:function(t){return e.setLocation(t.target.value)}})," ")," ",r.a.createElement(b,null),r.a.createElement(y,null),r.a.createElement("label",{htmlFor:"theme"},"Theme"," ",r.a.createElement("select",{value:e.theme,onChange:function(t){return e.setTheme(t.target.value)}},r.a.createElement("option",{value:"peru"}," peru ")," ",r.a.createElement("option",{value:"darkblue"}," darkblue ")," ",r.a.createElement("option",{value:"mediumorchid"}," mediumorchid ")," ",r.a.createElement("option",{value:"chartreuse"}," chartreuse ")," ")," ")," ",r.a.createElement("button",{style:{backgroundColor:e.theme}}," ","Submit"," ")," ")," ",r.a.createElement(h,{pets:S})," ")})),O=n(27),g=n(28);function y(){var e=Object(O.a)(["\n      background-color: #333;\n      padding: 15px;\n    "]);return y=function(){return e},e}var j=function(){return r.a.createElement("header",{css:Object(g.a)(y())},r.a.createElement(p.a,{to:"/"},"Adopt me "),r.a.createElement("span",{role:"img","aria-label":"logo"},"\ud83d\udc11"))},N=n(4);var _=Object(N.b)({theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"darkblue",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_THEME"===t.type?t.payload:e},location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Seattle , WA",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_LOCATION"===t.type?t.payload:e}}),S=Object(N.c)(_,"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}),w=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,1124))})),A=function(){return r.a.createElement(b.a,{store:S},r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(a.Suspense,{fallback:r.a.createElement("h1",null," Loading... ")}," ",r.a.createElement(p.c,null,r.a.createElement(v,{path:"/"}),r.a.createElement(w,{path:"/details/:id"}))," ")," ")," ")};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))},29:function(e,t,n){e.exports=n(1122)},34:function(e,t,n){},35:function(e,t,n){}},[[29,1,2]]]);
//# sourceMappingURL=main.dc368821.chunk.js.map