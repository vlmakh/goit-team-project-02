import { genresFormat } from './genres-format';
import noposter from '../images/noposter.jpg';
// const img = new Image();
// const img = document.createElement('img');
// img.src = './images/noposter.jpg';
// img.setAttribute('src', './images/noposter.jpg');

// console.log(img.attributes);

export function createGalleryMarkup(movies) {
  return movies
    .map(movie => {
      const genres = genresFormat(movie.genre_ids);

      const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : //'../images/noposter.jpg';
          noposter;
      // img;

      // const poster = movie.poster_path
      //   ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      //   : // '../images/noposter.jpg';
      //     // noposter;
      //     img;

      return `
      <li class="movie__card" >
        <div class="movie__thumb">        
            <img class="movie__image" data-movie="${movie.id}"
            src="${poster}"
            alt=${movie.title ?? movie.name}
            loading="lazy"
            />      
        </div>
        <div class="movie__info">
          <p class="movie__name">${movie.title ?? movie.name}</p>
          <p class="movie__descr">${genres} | ${(
        movie.release_date ?? movie.first_air_date
      ).slice(0, 4)}</p>
        </div>
      </li>`;
    })
    .join('');
}
