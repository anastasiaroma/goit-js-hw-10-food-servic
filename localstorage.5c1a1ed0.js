parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Tnu0":[function(require,module,exports) {

},{}],"bcQp":[function(require,module,exports) {
"use strict";require("./styles.css");const e={LIGHT:"light-theme",DARK:"dark-theme"},t=document.querySelector("body"),o=document.querySelector("#theme-switch-toggle");o.addEventListener("change",m);const c=localStorage.getItem("Theme");function d(){null===c&&(document.body.classList.add("light-theme"),localStorage.setItem("Theme","light-theme"))}function m(e){if(o.checked)return document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme"),void localStorage.setItem("Theme","dark-theme");document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),localStorage.setItem("Theme","light-theme")}d(),c===e.DARK&&(o.setAttribute("checked","checked"),document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme"),localStorage.setItem("Theme","dark-theme"));
},{"./styles.css":"Tnu0"}]},{},["bcQp"], null)
//# sourceMappingURL=/goit-js-hw-10-food-service/localstorage.5c1a1ed0.js.map