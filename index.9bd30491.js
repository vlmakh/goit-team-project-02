var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var a=n("krGWQ"),o=n("7rYDH"),l=n("lV0gX"),i=n("2nhTy");let s;a.default.form.addEventListener("submit",(function(e){e.preventDefault(),s=e.target.searchQuery.value.trim();if(a.default.formWarning.textContent="",""===s)return setTimeout((()=>{a.default.formWarning.classList.add("is-hidden")}),5e3),a.default.formWarning.classList.remove("is-hidden"),void(a.default.formWarning.textContent="Search query is empty. Enter the correct movie name");(0,o.getByKeyword)(s,1).then((e=>{if(0===e.total_results)return setTimeout((()=>{a.default.formWarning.classList.add("is-hidden")}),5e3),a.default.formWarning.classList.remove("is-hidden"),void(a.default.formWarning.textContent="Search result not successful. Enter the correct movie name");console.log(e),a.default.gallery.innerHTML=(0,l.createGalleryMarkup)(e.results);(0,i.createPagination)(e.total_results,e.total_pages).on("beforeMove",(({page:e})=>{(0,o.getByKeyword)(s,e).then((e=>{a.default.gallery.innerHTML=(0,l.createGalleryMarkup)(e.results)}))}))})).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.9bd30491.js.map
