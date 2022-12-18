import { createLibraryMarkup } from './create-library-markup';
import refs from './refs';
import { watched, queue } from './local-storage';
import { getArrayofMovies } from './api';
import nothing from '../images/nothing.jpg';

const watchedRef = document.querySelector('[data-id="watched-btn"]');
const queueRef = document.querySelector('[data-id="queue-btn"]');

watchedRef.addEventListener('click', showWatched);
queueRef.addEventListener('click', showQueue);

function showWatched() {
  if (!watched.length) {
    refs.library.innerHTML = `
      <li class="nothing">
        <img src="${nothing}" alt="There's nothing to see here" />
      </li>`;
    return;
  }
  getArrayofMovies(watched)
    .then(data => {
      refs.library.innerHTML = createLibraryMarkup(data);
    })
    .catch(er => console.log(er));
  if (!watchedRef.classList.contains('header-movie-button--active')) {
    watchedRef.classList.add('header-movie-button--active');
    queueRef.classList.remove('header-movie-button--active');
  }
}

function showQueue() {
  if (!queue.length) {
    refs.library.innerHTML = `
      <li class="nothing">
        <img src="${nothing}" alt="There's nothing to see here" />
      </li>`;
    return;
  }
  getArrayofMovies(queue).then(data => {
    refs.library.innerHTML = createLibraryMarkup(data);
  });

  if (!queueRef.classList.contains('header-movie-button--active')) {
    queueRef.classList.add('header-movie-button--active');
    watchedRef.classList.remove('header-movie-button--active');
  }
}

showWatched();
