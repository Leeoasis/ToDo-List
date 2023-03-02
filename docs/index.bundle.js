"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[826],{426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.to-do {\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n  border: 1px solid rgba(128, 128, 128, 0.3);\r\n  margin-top: 100px;\r\n  box-shadow: 5px 5px 5px 5px #ece6e6;\r\n}\r\n\r\n.to-do .title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 30px;\r\n  padding: 12px;\r\n}\r\n\r\n.to-do .title h1 {\r\n  width: 300px;\r\n  padding: 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.title .fa-solid.fa-arrows-rotate {\r\n  margin-left: 160px;\r\n  padding: 10px;\r\n  margin-top: 3px;\r\n  color: rgba(128, 128, 128, 0.425);\r\n}\r\n\r\n.addbtn {\r\n  margin-left: 200px;\r\n}\r\n\r\n.to-do input {\r\n  border: 0;\r\n  height: 30px;\r\n  padding: 12px;\r\n}\r\n\r\n.to-do input::placeholder {\r\n  font-style: italic;\r\n  font-size: 14px;\r\n}\r\n\r\n.to-do input:focus {\r\n  outline: none;\r\n}\r\n\r\n.to-do-list {\r\n  list-style: none;\r\n}\r\n\r\n.div {\r\n  padding: 1rem 1rem 0.5rem;\r\n  display: flex;\r\n  column-gap: 1rem;\r\n  align-items: center;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.check {\r\n  width: 20px;\r\n  height: 20px;\r\n  cursor: pointer;\r\n  background-color: blue;\r\n}\r\n\r\n.label {\r\n  width: 270px;\r\n}\r\n\r\n.bin {\r\n  margin-left: 60px;\r\n}\r\n\r\nhr {\r\n  border: none;\r\n  height: 1px;\r\n  background-color: rgba(128, 128, 128, 0.3);\r\n}\r\n\r\nhr:last-child {\r\n  background-color: transparent;\r\n}\r\n\r\n.to-do-list .delete-btn {\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  background-color: rgba(128, 128, 128, 0.2);\r\n}\r\n\r\n.delete-btn span {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: rgba(128, 128, 128, 0.555);\r\n}\r\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var l=r(e,o),s=0;s<a.length;s++){var d=t(a[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},833:(e,n,t)=>{var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),l=t.n(c),s=t(565),d=t.n(s),p=t(216),u=t.n(p),f=t(589),m=t.n(f),h=t(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const v=e=>{localStorage.setItem("to-do-list",JSON.stringify(e))},x=()=>localStorage.getItem("to-do-list")?JSON.parse(localStorage.getItem("to-do-list")):[],b=(e,n,t)=>{const r=n[t.index-1];return r.description=e.textContent,v(n),r},y=e=>{const n=x(),t=n.filter((t=>n.indexOf(t)!==e));for(let e=0;e<t.length;e+=1)t[e].index=t.indexOf(t[e])+1;v(t)},E=()=>{const e=document.querySelector(".to-do-list");for(;e.lastChild;)e.removeChild(e.lastChild);const n=x();if(null!=n)for(let t=0;t<n.length;t+=1){const r=document.createElement("li");r.classList.add("list"),r.id=n[t].index,r.draggable=!0;const o=document.createElement("div");o.classList.add("div");const a=document.createElement("input");a.classList.add("check"),a.type="checkbox",a.name="check1",n[t].completed&&(a.checked=!0);const i=document.createElement("label");i.contentEditable=!0,i.classList.add("label"),i.innerHTML=n[t].description,i.style.textDecoration=!0===n[t].completed?"line-through":"none",i.style.color="#000";const c=document.createElement("span");c.classList.add("bin"),c.innerHTML="<i class='fas fa-trash-alt'></i>",c.style.display="flex",c.style.cursor="pointer",c.id=n.indexOf(n[t]),r.appendChild(o),o.appendChild(a),o.appendChild(i),o.appendChild(c),e.appendChild(r),i.addEventListener("focus",(()=>{c.style.display="none",c.style.color="#fff",c.style.cursor="pointer",i.style.outline="none"})),i.addEventListener("blur",(e=>{b(e.target,n,n[t]),E()})),a.addEventListener("change",(e=>{var r,o;r=e.target,o=n[t],r.checked?(r.nextElementSibling.style.textDecoration="line-through",o.completed=!0):(r.nextElementSibling.style.textDecoration="none",o.completed=!1),v(n)})),c.addEventListener("mousedown",(e=>{e.preventDefault(),y(JSON.parse(c.id)),E()}))}},C=document.querySelector("#text"),k=document.querySelector(".addbtn"),S=document.querySelector(".delete-btn");k.addEventListener("click",(e=>{e.preventDefault(),(e=>{const n=x(),t={index:n.length+1,completed:!1,description:e.value};""===e.value&&e.preventDefault(),n.push(t),v(n),e.value="",E(n)})(C)})),S.addEventListener("click",(e=>{e.preventDefault(),E(),(()=>{const e=x().filter((e=>!1===e.completed));v(e)})()})),document.addEventListener("DOMContentLoaded",(e=>{e.preventDefault(),E()}))}},e=>{e(e.s=833)}]);