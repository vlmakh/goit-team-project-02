var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n),n.register("krGWQ",(function(e,r){var t,n,o,a;t=e.exports,n="default",o=function(){return l},Object.defineProperty(t,n,{get:o,set:a,enumerable:!0,configurable:!0});var l={form:document.querySelector(".header-form__search"),formWarning:document.querySelector(".header-form__warning"),gallery:document.querySelector(".gallery-js"),library:document.querySelector("#gallery-lib"),divBackdrop:document.querySelector(".js-backdrop"),closeModalBtn:document.querySelector(".modal__btn-close")}}));var o=n("krGWQ"),a=n("7rYDH"),l=n("lV0gX");o.default.form.addEventListener("submit",(function(e){e.preventDefault();const r=e.target.searchQuery.value;if(o.default.formWarning.textContent="",""===r)return setTimeout((()=>{o.default.formWarning.classList.add("is-hidden")}),5e3),o.default.formWarning.classList.remove("is-hidden"),void(o.default.formWarning.textContent="Search query is empty. Enter the correct movie name");(0,a.getByKeyword)(r,1).then((e=>{if(0===e.total_results)return setTimeout((()=>{o.default.formWarning.classList.add("is-hidden")}),5e3),o.default.formWarning.classList.remove("is-hidden"),void(o.default.formWarning.textContent="Search result not successful. Enter the correct movie name");console.log(e),o.default.gallery.innerHTML=(0,l.createGalleryMarkup)(e.results)})).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.150b8e55.js.map