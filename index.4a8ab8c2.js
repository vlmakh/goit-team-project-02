var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},l={},n=t.parcelRequired7c6;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in l){var n=l[t];delete l[t];var a={id:t,exports:{}};return e[t]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){l[t]=e},t.parcelRequired7c6=n);var a=n("krGWQ"),o=n("7rYDH");const i=JSON.parse(localStorage.getItem("watched"))||[],s=JSON.parse(localStorage.getItem("queue"))||[];function d(t){var e;(console.log("add to watch: ",t),i.includes(t))||(i.push(t),e=i,localStorage.setItem("watched",JSON.stringify(e)))}function c(t){var e;(console.log("add to Queue: ",t),s.includes(t))||(s.push(t),e=s,localStorage.setItem("queue",JSON.stringify(e)))}function r(t){const e=document.querySelector(".modal__wrap");(0,o.getInfoMovie)(t).then((l=>{console.log(l);const n=`<img\n      class="modal__img"\n      src="https://image.tmdb.org/t/p/w500${l.poster_path}"\n      alt=""\n      width="240px"\n      height="357px"\n    />\n    <div>\n      <h2 class="modal__title">${l.title}</h2>\n      <div class="modal__list-box">\n        <ul class="modal__list list">\n          <li class="modal__list-item">\n            <p class="modal__list-rigth">Vote/Votes </p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-rigth">Popularity</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-rigth">Original Title</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-rigth">Genre</p>\n          </li>\n        </ul>\n        <ul class="modal__list list">\n          <li class="modal__list-item">\n            <p class="modal__list-left">${l.vote_average.toFixed(1)} /${l.vote_count}</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-left">${l.popularity.toFixed(1)}</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-left">${l.title}</p>\n          </li>\n          <li class="modal__list-item">\n            <p class="modal__list-left">${a=l.genres,a.map((t=>t.name)).join(", ")}</p>\n          </li>\n        </ul>\n      </div>\n      <h3 class="modal__subtitle">ABOUT</h3>\n      <p class="modal__descrpt">\n       ${l.overview??"---"}\n      </p>\n      <ul class="modal__btn-list list">\n        <li>\n          <button type="button" class="modal__btn" data-btn="addToWatched">\n            add to Watched\n          </button>\n        </li>\n        <li>\n          <button type="button" class="modal__btn" data-btn="addToQueue">\n            add to queue\n          </button>\n        </li>\n      </ul>\n    </div>`;var a;e.innerHTML=n;const o=document.querySelector("[data-btn=addToWatched]"),i=document.querySelector("[data-btn=addToQueue]");o.addEventListener("click",(()=>{d(t)})),i.addEventListener("click",(()=>{c(t)}))}))}function u(){document.body.classList.remove("show-modal","modal-open")}function m(t){"Escape"===t.code&&(window.removeEventListener("keydown",m),u())}a.default.gallery.addEventListener("click",(function(t){if(!t.target.classList.contains("movie__image"))return;console.log(t.target.dataset.movie);r(t.target.dataset.movie),document.body.classList.add("show-modal","modal-open"),window.addEventListener("keydown",m)})),a.default.closeModalBtn.addEventListener("click",u),a.default.divBackdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&u()}));
//# sourceMappingURL=index.4a8ab8c2.js.map