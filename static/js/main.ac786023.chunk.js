(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{369:function(e,t,a){e.exports=a(483)},374:function(e,t,a){},375:function(e,t,a){},483:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=(a(374),a(508)),l=a(512),s=(a(375),a(243)),u=a(362),d=a(354),m=a.n(d),f=a(361),h=a.n(f),p=function(){return h.a.get("https://jsonplaceholder.typicode.com/users")},g=[{title:"ID",field:"id"},{title:"Name",field:"name"},{title:"E-Mail",field:"email"},{title:"Phone",field:"phone"},{title:"Website",field:"website"},{title:"Company",field:"company.name"}];function v(e){e.users;r.a.useEffect((function(){p().then((function(e){var t=e.data;return c({type:"foundUsers",resData:t})})).catch((function(e){return console.log(e)}))}),[]);var t=Object(n.useReducer)((function(e,t){switch(t.type){case"foundUsers":return Object(s.a)(Object(s.a)({},e),{},{foundUserData:t.resData});default:return e}}),{foundUserData:[]}),a=Object(u.a)(t,2),o=a[0],c=a[1];return r.a.createElement(m.a,{columns:g,data:o.foundUserData,options:{search:!0,debounceInterval:500,draggable:!1,showTitle:!1}})}var E=a(511),b=a(302),y=a(86),w=a(320),j=Object(w.a)({root:{background:"linear-gradient(to right, #614385, #516395)",margin:"0 0 25px 0"}});function D(){var e=j();return r.a.createElement(E.a,{position:"static",className:e.root},r.a.createElement(b.a,null,r.a.createElement(y.a,{variant:"h6"},"Employee Directory")))}var k=Object(w.a)({root:{height:"100vh",background:"linear-gradient(to right, #ece9e6, #ffffff)"}});var O=function(){var e=k();return r.a.createElement("div",{className:e.root},r.a.createElement(D,null),r.a.createElement(l.a,{maxWidth:"xl"},r.a.createElement(i.a,{container:!0,spacing:3},r.a.createElement(i.a,{item:!0,xs:12},r.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[369,1,2]]]);
//# sourceMappingURL=main.ac786023.chunk.js.map