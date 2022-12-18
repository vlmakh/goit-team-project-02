import {
  watched,
  queue,
  setWatchedLocalStoradge,
  setQueueLocalStoradge,
} from './local-storage';

export function onAddToWatched(id) {
  // evt.preventDefault();

  // console.log('add to watch: ', id);
  if (watched.includes(id)) {
    return;
  }

  watched.push(id);
  setWatchedLocalStoradge(watched);
  // console.log(watched);
}

export function onAddToQueue(id) {
  // console.log('add to Queue: ', id);
  if (queue.includes(id)) {
    return;
  }
  queue.push(id);
  setQueueLocalStoradge(queue);
}
