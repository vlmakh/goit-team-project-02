var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;function a(e){return e.map((e=>`\n      <li class="movie__card" >\n        <div class="movie__thumb">        \n            <img class="movie__image" data-movie="${e.id}"\n            src="https://image.tmdb.org/t/p/w500${e.poster_path}"\n            alt=${e.title??e.name}\n            loading="lazy"\n            />      \n        </div>\n        <div class="movie__info">\n          <p class="movie__name">${e.title??e.name}</p>\n          <p class="movie__descr"> ${e.genres.map((e=>e.name)).join(", ")} | ${(e.release_date??e.first_air_date).slice(0,4)}</p>\n        </div>\n      </li>`)).join("")}null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("krGWQ");const r=JSON.parse(localStorage.getItem("watched"))||[],l=JSON.parse(localStorage.getItem("queue"))||[];var s=o("7rYDH");const c=document.querySelector('[data-id="watched-btn"]'),d=document.querySelector('[data-id="queue-btn"]');c.addEventListener("click",(function(){console.log("clik on watched"),(0,s.getArrayofMovies)(r).then((e=>{console.log(e),i.default.library.innerHTML=a(e)})).catch((e=>console.log(e))),c.classList.contains("header-movie-button--active")||(c.classList.add("header-movie-button--active"),d.classList.remove("header-movie-button--active"))})),d.addEventListener("click",(function(){console.log("clik on queue"),(0,s.getArrayofMovies)(l).then((e=>{console.log(e),i.default.library.innerHTML=a(e)})),d.classList.contains("header-movie-button--active")||(d.classList.add("header-movie-button--active"),c.classList.remove("header-movie-button--active"))}));
//# sourceMappingURL=library.875d3ac5.js.map
