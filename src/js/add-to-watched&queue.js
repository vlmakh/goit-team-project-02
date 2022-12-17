import {
  watched,
  queue,
  setWatchedLocalStoradge,
  setQueueLocalStoradge,
} from './local-storage';

export function onAddToWatched(evt, id) {
  // evt.preventDefault();

  console.log('ddWatchedRef click');
  if (watched.includes(id)) return;

  watched.push(id);
  setWatchedLocalStoradge();
  console.log(watched);
}

export function onAddToQueue(evt, id) {
  console.log('addQueueRef click');
  if (queue.includes(id)) return;
  queue.push(id);
  setQueueLocalStoradge();
}
