!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var o={form:document.querySelector(".header-form__search"),formWarning:document.querySelector(".header-form__warning"),gallery:document.querySelector(".gallery-js"),library:document.querySelector("#gallery-lib")},l=n("b7ONl"),a=n("ewciJ");o.form.addEventListener("submit",(function(e){e.preventDefault();var r=e.target.searchQuery.value;if(o.formWarning.textContent="",""===r)return o.formWarning.textContent="Search query is empty. Enter the correct movie name";(0,l.getByKeyword)(r,1).then((function(e){if(0===e.total_results)return o.formWarning.textContent="Search result not successful. Enter the correct movie name";console.log(e),o.gallery.innerHTML=(0,a.createGalleryMarkup)(e.results)})).catch((function(e){return console.log(e)}))}))}();
//# sourceMappingURL=index.74f2408f.js.map
