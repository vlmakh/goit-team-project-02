// функції додавання  id філтму у выдповыдний масив

// Denis's buttons
// const addWatchedRef = document.querySelector('[addToWatched]');
// const addQueueRef = document.querySelector('[addToQueue]');

// addWatchedRef.addEventListener('click', onAddToWatched);
// addQueueRef.addEventListener('click', onAddToQueue);

// function onAddToWatched(id) {
//   if (watched.includes(id)) addWatchedRef.setAttribute('disable', true);
//   else watched.push(id);
// }

// function onAddToQueue(id) {
//   if (queue.includes(id)) addQueueRef.setAttribute('disable', true);
//   else queue.push(id);
// }

//***************
import { createGalleryMarkup } from './create-gallery-markup';
import refs from './refs';
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
  refs.library.compareDocumentPosition = createGalleryMarkup(watched);
}

function showQueue() {
  console.log('clik on queue');
}
