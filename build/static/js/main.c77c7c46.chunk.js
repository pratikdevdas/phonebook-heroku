(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t(14),r=t.n(c),a=t(3),u=t(0),i=function(e){var n=e.prop,t=e.prop2;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",{type:"text",placeholder:"Search",value:n,onChange:t})})},s=function(e){var n=e.prop1,t=e.prop2,o=e.prop3,c=e.prop4,r=e.prop5;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:t,onChange:o})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:c,onChange:r})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})})},l=function(e){var n=e.filterSearch,t=e.removePerson;return Object(u.jsx)("div",{children:n.map((function(e){return Object(u.jsxs)("div",{children:[e.name," ",e.number," ",Object(u.jsx)("button",{onClick:function(){return t(e.id,e.name)},children:"Delete"})]},e.id)}))})},j=function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{className:"msg",children:n})},b=t(4),f=t.n(b),d="api/persons",h=function(){var e=f.a.get(d);return console.log(e),e.then((function(e){return e.data}))},p=function(e){return f.a.post(d,e).then((function(e){return e.data}))},m=function(e){return f.a.delete("".concat(d,"/").concat(e))},O=function(e,n){return f.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},v=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),b=Object(a.a)(r,2),f=b[0],d=b[1],v=Object(o.useState)([]),g=Object(a.a)(v,2),x=g[0],w=g[1],S=Object(o.useState)(""),k=Object(a.a)(S,2),C=k[0],y=k[1],P=Object(o.useState)(null),T=Object(a.a)(P,2),D=T[0],E=T[1];Object(o.useEffect)((function(){console.log("effect"),h().then((function(e){c(e),console.log(e)}))}),[]);var F=t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(j,{message:D}),Object(u.jsx)(i,{prop:C,prop2:function(e){y(e.target.value)}}),Object(u.jsx)("h3",{children:"Add a new"}),Object(u.jsx)(s,{prop1:function(e){e.preventDefault();var n=t.find((function(e){return e.name===f}));if(console.log(n),n){var o={name:n.name,number:x};console.log(o),window.confirm("Update ".concat(n.name,"'s number to \"").concat(x,'"'))&&O(n.id,o).then((function(e){console.log(e),c(t.map((function(n){return n.name===e.name?e:n}))),d(""),w(""),E("".concat(n.name," has been updated")),setTimeout((function(){E(null)}),5e3)})).catch((function(e){console.log("error"),E("Information of ".concat(n.name," has been already removed. Please refresh")),setTimeout((function(){E(null)}),5e3)}))}else{var r={name:f,number:x},a=r.name.length>4&&r.number.toString().length>8;console.log(!a),a||(console.log("hi"),E("shorter than allowed length"),setTimeout((function(){E(null)}),5e3)),p(r).then((function(e){c(t.concat(e)),d(""),w(""),E("".concat(f," has been added"))})).then(setTimeout((function(){E(null)}),5e3)).catch((function(e){return console.log(e)}))}},prop2:f,prop3:function(e){d(e.target.value)},prop4:x,prop5:function(e){w(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(l,{filterSearch:F,removePerson:function(e,n){window.confirm("delete ".concat(n,"?"))&&m(e,n).then((function(){c(t.filter((function(n){return n.id!==e})))}))}})]})};t(38);r.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c77c7c46.chunk.js.map