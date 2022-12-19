(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap);"]),s.push([e.id,"body {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 60%);\r\n  margin-top: 20vh;\r\n  max-width: 500px;\r\n  width: 92%;\r\n}\r\n\r\n#headline {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  border: 1px solid #f6f6f6;\r\n  padding: 5px 20px;\r\n  width: 100%;\r\n}\r\n\r\nh1 {\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n}\r\n\r\ni {\r\n  font-size: 15px;\r\n  opacity: 0.3;\r\n}\r\n\r\ni:hover,\r\ninput:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n#new-input {\r\n  font-size: 15px;\r\n  border: 1px solid #f6f6f6;\r\n  padding: 12px 20px;\r\n  outline: none;\r\n}\r\n\r\n#new-input::placeholder {\r\n  font-style: italic;\r\n  opacity: 0.7;\r\n}\r\n\r\n#todo-list {\r\n  font-weight: 300;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#todo-list li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border: 1px solid #f6f6f6;\r\n  box-sizing: border-box;\r\n  padding: 12px 20px;\r\n}\r\n\r\ndiv.label-container {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\ndiv input.to-do {\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  font-family: inherit;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n#clear-completed {\r\n  font-size: 15px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  padding: 18px;\r\n  opacity: 0.5;\r\n  width: 100%;\r\n}\r\n\r\n.checked .label-container {\r\n  opacity: 0.5;\r\n}\r\n\r\n.checked .to-do {\r\n  text-decoration: line-through;\r\n}\r\n",""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),s=n.n(i),a=n(565),c=n.n(a),l=n(216),d=n.n(l),p=n(589),u=n.n(p),f=n(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=new class{completeTask=e=>{const t=document.querySelectorAll("li");document.querySelectorAll("input[type=checkbox]").forEach(((n,r)=>{n.addEventListener("click",(()=>{t[r].classList.toggle("checked"),e[r].completed=!e[r].completed,localStorage.setItem("tasks",JSON.stringify(e))}))}))};clearAllCompleted=e=>{document.querySelector("#clear-completed").addEventListener("click",(()=>{const t=e.filter((e=>!e.completed)),n=[];t.forEach((e=>{const t={...e,index:n.length};n.push(t)})),localStorage.setItem("tasks",JSON.stringify(n)),document.location.reload()}))}},v=new class{constructor(){this.toDoList=JSON.parse(localStorage.getItem("tasks"))||[]}displayList=()=>{const e=document.querySelector("#new-input");e.addEventListener("keypress",(t=>{"Enter"===t.key&&e.value&&(this.addTask(e.value),e.value="")}));const t=document.querySelector("#todo-list");t.innerHTML="",this.toDoList.forEach((e=>{const n=document.createElement("li");!0===e.completed&&n.classList.add("checked"),n.innerHTML=`\n        <div class="label-container">\n          <label for="checkbox">\n            <input type="checkbox" id="${e.index}" ${e.completed?"checked":""}>\n          </label>\n          <label for="to-do">\n            <input class="to-do" type="text" value="${e.description}">\n          </label>\n        </div>\n        <i class="fas fa-trash-can delete-task"></i>`,t.appendChild(n)})),document.querySelectorAll(".to-do").forEach(((e,t)=>{e.addEventListener("keypress",(n=>{"Enter"===n.key&&e.value&&this.updateTask(e.value,t)})),e.addEventListener("change",(()=>{e.value&&this.updateTask(e.value,t)}))})),document.querySelectorAll(".delete-task").forEach(((e,t)=>{e.addEventListener("click",(()=>{this.removeTask(t)}))})),m.completeTask(this.toDoList),m.clearAllCompleted(this.toDoList),document.querySelector("#refresh").addEventListener("click",(()=>{document.location.reload()}))};addTask=e=>{const t={description:e,completed:!1,index:this.toDoList.length};this.toDoList.push(t),localStorage.setItem("tasks",JSON.stringify(this.toDoList)),this.displayList()};updateTask=(e,t)=>{this.toDoList[t].description=e,localStorage.setItem("tasks",JSON.stringify(this.toDoList)),this.displayList()};removeTask=e=>{this.toDoList.splice(e,1);for(let e=0;e<this.toDoList.length;e+=1)this.toDoList[e].index=e;localStorage.setItem("tasks",JSON.stringify(this.toDoList)),this.displayList()}};window.addEventListener("DOMContentLoaded",(()=>v.displayList()))})()})();