!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){o[e]=r},e.parcelRequired7c6=n);var t=n("ewciJ"),l={form:document.querySelector(".header-form__search"),formWarning:document.querySelector(".header-form__warning"),gallery:document.querySelector(".gallery-js"),library:document.querySelector("#gallery-lib")},a="watched",c="queue",i=JSON.parse(localStorage.getItem(a))||[],u=JSON.parse(localStorage.getItem(c))||[];var d=n("b7ONl"),f=document.querySelector('[data-id="watched-btn"]'),s=document.querySelector('[data-id="queue-btn"]');f.addEventListener("click",(function(){console.log("clik on watched"),(0,d.getArrayofMovies)(i).then((function(e){console.log(e),l.library.insertAdjacentHTML("beforeend",(0,t.createGalleryMarkup)(e))})).catch((function(e){return console.log(e)}))})),s.addEventListener("click",(function(){console.log("clik on queue"),(0,d.getArrayofMovies)(u).then((function(e){console.log(e),l.library.insertAdjacentHTML("beforeend",(0,t.createGalleryMarkup)(e))}))})),i.push(112,122),u.push(112,122,27,112,45,37)}();
//# sourceMappingURL=library.0be9e1af.js.map
