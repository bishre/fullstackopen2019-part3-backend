(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),u=(n(20),n(14)),l=n(2),i=function(e){var t=e.handleSearch;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{onChange:t}))},m=function(e){var t=e.handleNameChange,n=e.handleNumberChange,a=e.newContactName,c=e.newContactNumber,o=e.addContact;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:o},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:t,value:a,required:!0})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:n,value:c,required:!0})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},f=function(e){var t=e.contacts,n=e.deleteContact,a=t.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n(e)}},"X")))}));return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,a)))},s=n(3),d=n.n(s),b="api/persons",h=function(){return d.a.get(b).then((function(e){return e.data}))},p=function(e){return d.a.post(b,e).then((function(e){return e.data}))},E=function(e){return d.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},v=function(e,t){return d.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var w=function(e){var t=e.message,n=e.status;return null===t?null:r.a.createElement("div",{className:"notification ".concat(n)},r.a.createElement("em",null,t))},g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),d=s[0],b=s[1],g=Object(a.useState)(""),j=Object(l.a)(g,2),y=j[0],C=j[1],P=Object(a.useState)(null),k=Object(l.a)(P,2),N=k[0],S=k[1],D=Object(a.useState)(""),T=Object(l.a)(D,2),q=T[0],J=T[1];Object(a.useEffect)((function(){h().then((function(e){c(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:N,status:q}),r.a.createElement(i,{handleSearch:function(e){var t=e.target.value,a=n.filter((function(e){return e.name.toLowerCase().includes(t)}));c(a)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(m,{handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){C(e.target.value)},newContactName:d,newContactNumber:y,addContact:function(e){e.preventDefault();var t,a={name:d,number:y};n.some((function(e){return e.name===d}))?function(e){var t=n.find((function(t){return t.name===e})),a=t.id,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{number:y});window.confirm("".concat(e," already added to phonebook. Replace old number with new one?"))&&v(a,r).then((function(t){c(n.map((function(e){return e.id!==a?e:t}))),S("".concat(e," updated")),J("success"),setTimeout((function(){S(null)}),5e3)})).catch((function(t){S("".concat(e," has been removed from server. Please refresh your page")),J("fail"),setTimeout((function(){S(null)}),5e3)})),b(""),C("")}(d):(t=a,console.log(t),p(t).then((function(e){c(n.concat(e)),S("".concat(e.name," added to phonebook")),J("success"),setTimeout((function(){S(null)}),5e3)})),b(""),C(""))}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(f,{contacts:n,deleteContact:function(e){window.confirm("Delete ".concat(e.name))&&E(e.id).then((function(t){c(n.filter((function(t){return t.id!==e.id}))),S("".concat(e.name," deleted!")),J("success"),setTimeout((function(){S(null)}),5e3)})).catch((function(t){S("".concat(e.name," has already been removed from server. Please refresh your page")),J("fail"),setTimeout((function(){S(null)}),5e3)}))}}))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e37b0511.chunk.js.map