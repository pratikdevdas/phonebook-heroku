(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t(14),r=t.n(o),a=t(3),u=t(0),i=function(e){var n=e.prop,t=e.prop2;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",{type:"text",placeholder:"Search",value:n,onChange:t})})},s=function(e){var n=e.prop1,t=e.prop2,c=e.prop3,o=e.prop4,r=e.prop5;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:t,onChange:c})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:o,onChange:r})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})})},l=function(e){var n=e.filterSearch,t=e.removePerson;return Object(u.jsx)("div",{children:n.map((function(e){return Object(u.jsxs)("div",{children:[e.name," ",e.number," ",Object(u.jsx)("button",{onClick:function(){return t(e.id,e.name)},children:"Delete"})]},e.id)}))})},j=function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{className:"msg",children:n})},b=t(4),d=t.n(b),f="api/persons",p=function(){var e=d.a.get(f);return console.log(e),e.then((function(e){return e.data}))},h=function(e){return d.a.post(f,e).then((function(e){return e.data}))},m=function(e){return d.a.delete("".concat(f,"/").concat(e))},O=function(e,n){return d.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},v=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(""),b=Object(a.a)(r,2),d=b[0],f=b[1],v=Object(c.useState)([]),x=Object(a.a)(v,2),g=x[0],w=x[1],S=Object(c.useState)(""),k=Object(a.a)(S,2),C=k[0],y=k[1],P=Object(c.useState)(null),T=Object(a.a)(P,2),D=T[0],E=T[1];Object(c.useEffect)((function(){console.log("effect"),p().then((function(e){o(e),console.log(e)}))}),[]);var F=t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(j,{message:D}),Object(u.jsx)(i,{prop:C,prop2:function(e){y(e.target.value)}}),Object(u.jsx)("h3",{children:"Add a new"}),Object(u.jsx)(s,{prop1:function(e){e.preventDefault();var n=t.find((function(e){return e.name===d}));if(console.log(n),n){var c={name:n.name,number:g};window.confirm("Update ".concat(n.name,"'s number to \"").concat(g,'"'))&&O(n.id,c).then((function(e){console.log(e),o(t.map((function(n){return n.name===e.name?e:n}))),f(""),w(""),E("".concat(n.name," has been updated")),setTimeout((function(){E(null)}),5e3)})).catch((function(e){console.log("gamdu"),E("Information of ".concat(n.name," has been already removed. Please refresh")),setTimeout((function(){E(null)}),5e3)}))}else{var r={name:d,number:g};console.log(r),h(r).then((function(e){o(t.concat(e)),f(""),w("")})).then(E("".concat(d," has been added"))).then(setTimeout((function(){E(null)}),5e3)).catch((function(e){return console.log(e)}))}},prop2:d,prop3:function(e){f(e.target.value)},prop4:g,prop5:function(e){w(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(l,{filterSearch:F,removePerson:function(e,n){window.confirm("delete ".concat(n,"?"))&&m(e,n).then((function(){o(t.filter((function(n){return n.id!==e})))}))}})]})};t(38);r.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8167dec7.chunk.js.map