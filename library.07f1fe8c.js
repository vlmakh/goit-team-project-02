!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;function i(e){return e.map((function(e){var n,t,o;return'\n      <li class="movie__card" >\n        <div class="movie__thumb">        \n            <img class="movie__image" data-movie="'.concat(e.id,'"\n            src="https://image.tmdb.org/t/p/w500').concat(e.poster_path,'"\n            alt=').concat(null!==(n=e.title)&&void 0!==n?n:e.name,'\n            loading="lazy"\n            />      \n        </div>\n        <div class="movie__info">\n          <p class="movie__name">').concat(null!==(t=e.title)&&void 0!==t?t:e.name,'</p>\n          <p class="movie__descr"> ').concat(e.genres.map((function(e){return e.name})).join(", ")," | ").concat((null!==(o=e.release_date)&&void 0!==o?o:e.first_air_date).slice(0,4),"</p>\n        </div>\n      </li>")})).join("")}null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var a=o("4Nugj"),c="watched",r="queue",l=JSON.parse(localStorage.getItem(c))||[],s=JSON.parse(localStorage.getItem(r))||[];var d=o("b7ONl"),u=document.querySelector('[data-id="watched-btn"]'),v=document.querySelector('[data-id="queue-btn"]');u.addEventListener("click",(function(){console.log("clik on watched"),(0,d.getArrayofMovies)(l).then((function(e){console.log(e),a.default.library.innerHTML=i(e)})).catch((function(e){return console.log(e)})),u.classList.contains("header-movie-button--active")||(u.classList.add("header-movie-button--active"),v.classList.remove("header-movie-button--active"))})),v.addEventListener("click",(function(){console.log("clik on queue"),(0,d.getArrayofMovies)(s).then((function(e){console.log(e),a.default.library.innerHTML=i(e)})),v.classList.contains("header-movie-button--active")||(v.classList.add("header-movie-button--active"),u.classList.remove("header-movie-button--active"))}))}();
//# sourceMappingURL=library.07f1fe8c.js.map
