import { createLibraryMarkup } from './create-library-markup';
import refs from './refs';
import { watched, queue } from './local-storage';
import { getArrayofMovies } from './api';

// Mykola's buttons
const watchedRef = document.querySelector('[data-id="watched-btn"]');
const queueRef = document.querySelector('[data-id="queue-btn"]');

watchedRef.addEventListener('click', showWatched);
queueRef.addEventListener('click', showQueue);

watched.push(112, 132);
queue.push(112, 132, 27, 112);
function showWatched() {
  console.log('clik on watched');
  getArrayofMovies(watched)
    .then(data => {
      console.log(data);

      refs.library.insertAdjacentHTML('beforeend', createLibraryMarkup(data));
    })
    .catch(er => console.log(er));
}

function showQueue() {
  console.log('clik on queue');

  getArrayofMovies(queue).then(data => {
    console.log(data);

    refs.library.insertAdjacentHTML('beforeend', createLibraryMarkup(data));
  });
}
