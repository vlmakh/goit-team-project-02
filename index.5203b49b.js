function t(t,e,n,l){Object.defineProperty(t,e,{get:n,set:l,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in l){var e=l[t];delete l[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){l[t]=e},e.parcelRequired7c6=o),o.register("62bmB",(function(e,n){t(e.exports,"loadIntoModal",(function(){return i}));var l=o("7rYDH"),a=o("gAKaR");function i(t){const e=document.querySelector(".modal__wrap");(0,l.getInfoMovie)(t).then((t=>{const n=`<img\n      class="modal__img"\n      src="https://image.tmdb.org/t/p/w500${t.poster_path}"\n      alt=""\n      width="240px"\n      height="357px"\n    />\n    <div>\n      <h2 class="modal__title">${t.title}</h2>\n      <div class="modal__list-box">\n        <ul class="modal__list list">\n          <li class="modal__list-item">\n            <p class="modal__list-rigth">Vote/Votes </p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-rigth">Popularity</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-rigth">Original Title</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-rigth">Genre</p>\n          </li>\n        </ul>\n        <ul class="modal__list list">\n          <li class="modal__list-item">\n            <p class="modal__list-left">${t.vote_average.toFixed(1)} /${t.vote_count}</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-left">${t.popularity.toFixed(1)}</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-left">${t.title}</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-left">${l=t.genres,l.map((t=>t.name)).join(", ")}</p>\n          </li>\n        </ul>\n      </div>\n      <h3 class="modal__subtitle">ABOUT</h3>\n      <p class="modal__descrpt">\n       ${t.overview??"---"}\n      </p>\n      <ul class="modal__btn-list list">\n        <li>\n          <button type="button" class="modal__btn" data-btn="addToWatched">\n            add to Watched\n          </button>\n        </li>\n        <li>\n          <button type="button" class="modal__btn" data-btn="addToQueue">\n            add to queue\n          </button>\n        </li>\n      </ul>\n    </div>`;var l;e.innerHTML=n;const o=document.querySelector("[data-btn=addToWatched]"),i=document.querySelector("[data-btn=addToQueue]");o.addEventListener("click",a.onAddToWatched),i.addEventListener("click",a.onAddToQueue)}))}})),o.register("gAKaR",(function(e,n){t(e.exports,"onAddToWatched",(function(){return a})),t(e.exports,"onAddToQueue",(function(){return i}));var l=o("b5rV1");function a(t,e){console.log("ddWatchedRef click"),l.watched.includes(e)||(l.watched.push(e),(0,l.setWatchedLocalStoradge)(l.watched))}function i(t,e){console.log("addQueueRef click"),l.queue.includes(e)||(l.queue.push(e),(0,l.setQueueLocalStoradge)(l.queue))}})),o.register("b5rV1",(function(e,n){t(e.exports,"watched",(function(){return a})),t(e.exports,"queue",(function(){return i})),t(e.exports,"setWatchedLocalStoradge",(function(){return s})),t(e.exports,"setQueueLocalStoradge",(function(){return d}));const l="watched",o="queue",a=JSON.parse(localStorage.getItem(l))||[],i=JSON.parse(localStorage.getItem(o))||[];function s(t){localStorage.setItem(l,JSON.stringify(t))}function d(t){localStorage.setItem(o,JSON.stringify(t))}})),o("62bmB");
//# sourceMappingURL=index.5203b49b.js.map
