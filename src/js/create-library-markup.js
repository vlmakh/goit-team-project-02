export function createLibraryMarkup(movies) {
  return movies
    .map(movie => {
      //   const genres = genresFormat(movie.genre_ids);

      return `
      <li class="movie__card" >
        <div class="movie__thumb">        
            <img class="movie__image" data-movie="${movie.id}"
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            alt=${movie.title ?? movie.name}
            loading="lazy"
            />      
        </div>
        <div class="movie__info">
          <p class="movie__name">${movie.title ?? movie.name}</p>
          <p class="movie__descr"> ${movie.genres
            .map(genre => genre.name)
            .join(', ')} | ${(movie.release_date ?? movie.first_air_date).slice(
        0,
        4
      )}</p>
        </div>
      </li>`;
    })
    .join('');
}
