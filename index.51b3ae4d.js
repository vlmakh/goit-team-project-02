!function(){function t(t,e,n,l){Object.defineProperty(t,e,{get:n,set:l,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in l){var e=l[t];delete l[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){l[t]=e},e.parcelRequired7c6=o),o.register("jQDcF",(function(e,n){t(e.exports,"loadIntoModal",(function(){return i}));var l=o("b7ONl"),a=o("9Vzwk");function i(t){var e=document.querySelector(".modal__wrap");(0,l.getInfoMovie)(t).then((function(t){var n,l,o='<img\n      class="modal__img"\n      src="https://image.tmdb.org/t/p/w500'.concat(t.poster_path,'"\n      alt=""\n      width="240px"\n      height="357px"\n    />\n    <div>\n      <h2 class="modal__title">').concat(t.title,'</h2>\n      <div class="modal__list-box">\n        <ul class="modal__list list">\n          <li class="modal__list-item">\n            <p class="modal__list-rigth">Vote/Votes </p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-rigth">Popularity</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-rigth">Original Title</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-rigth">Genre</p>\n          </li>\n        </ul>\n        <ul class="modal__list list">\n          <li class="modal__list-item">\n            <p class="modal__list-left">').concat(t.vote_average.toFixed(1)," /").concat(t.vote_count,'</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-left">').concat(t.popularity.toFixed(1),'</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-left">').concat(t.title,'</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-left">').concat((l=t.genres,l.map((function(t){return t.name})).join(", ")),'</p>\n          </li>\n        </ul>\n      </div>\n      <h3 class="modal__subtitle">ABOUT</h3>\n      <p class="modal__descrpt">\n       ').concat(null!==(n=t.overview)&&void 0!==n?n:"---",'\n      </p>\n      <ul class="modal__btn-list list">\n        <li>\n          <button type="button" class="modal__btn" data-btn="addToWatched">\n            add to Watched\n          </button>\n        </li>\n        <li>\n          <button type="button" class="modal__btn" data-btn="addToQueue">\n            add to queue\n          </button>\n        </li>\n      </ul>\n    </div>');e.innerHTML=o;var i=document.querySelector("[data-btn=addToWatched]"),s=document.querySelector("[data-btn=addToQueue]");i.addEventListener("click",a.onAddToWatched),s.addEventListener("click",a.onAddToQueue)}))}})),o.register("9Vzwk",(function(e,n){t(e.exports,"onAddToWatched",(function(){return a})),t(e.exports,"onAddToQueue",(function(){return i}));var l=o("4LMMA");function a(t,e){console.log("ddWatchedRef click"),l.watched.includes(e)||(l.watched.push(e),(0,l.setWatchedLocalStoradge)(l.watched))}function i(t,e){console.log("addQueueRef click"),l.queue.includes(e)||(l.queue.push(e),(0,l.setQueueLocalStoradge)(l.queue))}})),o.register("4LMMA",(function(e,n){t(e.exports,"watched",(function(){return a})),t(e.exports,"queue",(function(){return i})),t(e.exports,"setWatchedLocalStoradge",(function(){return s})),t(e.exports,"setQueueLocalStoradge",(function(){return c}));var l="watched",o="queue",a=JSON.parse(localStorage.getItem(l))||[],i=JSON.parse(localStorage.getItem(o))||[];function s(t){localStorage.setItem(l,JSON.stringify(t))}function c(t){localStorage.setItem(o,JSON.stringify(t))}})),o("jQDcF")}();
//# sourceMappingURL=index.51b3ae4d.js.map
