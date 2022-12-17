const KEY_WATCHED = 'watched';
const KEY_QUEUE = 'queue';
export const watched = JSON.parse(localStorage.getItem(KEY_WATCHED)) || [];
export const queue = JSON.parse(localStorage.getItem(KEY_QUEUE)) || [];

export function setWatchedLocalStoradge() {
  localStorage.setItem(KEY_WATCHED, JSON.stringify(watched));
}

export function setQueueLocalStoradge() {
  localStorage.setItem(KEY_QUEUE, JSON.stringify(queue));
}
