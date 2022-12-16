import { createGalleryMarkup } from './create-gallery-markup';
import refs from './refs';
import { watched, queue } from './local-storage';

// Mykola's buttons
const watchedRef = document.querySelector('[data-id="watched-btn"]');
const queueRef = document.querySelector('[data-id="queue-btn"]');

watchedRef.addEventListener('click', showWatched);
queueRef.addEventListener('click', showQueue);

console.log(watchedRef);
console.log(queueRef);
console.log(createGalleryMarkup);
console.log(refs);

function showWatched() {
  console.log('clik on watched');
  // refs.library.innerHTML = createGalleryMarkup(watched);
}

function showQueue() {
  console.log('clik on queue');
  //   refs.library.innerHTML = createGalleryMarkup(queue);
}
