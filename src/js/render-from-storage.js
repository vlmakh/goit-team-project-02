import { createGalleryMarkup } from './create-gallery-markup';
import refs from './refs';
import { watched, queue } from './local-storage';
import { getArrayofMovies } from './api';

// Mykola's buttons
const watchedRef = document.querySelector('[data-id="watched-btn"]');
const queueRef = document.querySelector('[data-id="queue-btn"]');

watchedRef.addEventListener('click', showWatched);
queueRef.addEventListener('click', showQueue);

watched.push(112, 122);
queue.push(112, 122, 27, 112, 45, 37);
function showWatched() {
  console.log('clik on watched');
  getArrayofMovies(watched)
    .then(data => {
      console.log(data);

      refs.library.insertAdjacentHTML('beforeend', createGalleryMarkup(data));
    })
    .catch(er => console.log(er));
}

function showQueue() {
  console.log('clik on queue');

  getArrayofMovies(queue).then(data => {
    console.log(data);

    refs.library.insertAdjacentHTML('beforeend', createGalleryMarkup(data));
  });
}
