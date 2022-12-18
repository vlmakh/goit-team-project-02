import { getInfoMovie } from './api';
import { onAddToWatched, onAddToQueue } from './add-to-watched&queue';
import { watched, queue } from './local-storage';

// loadIntoModal(12);

export function loadIntoModal(id) {
  const modalRef = document.querySelector('.modal__wrap');
  const film = getInfoMovie(id).then(data => {
    console.log(data);
    if (!data) {
      modalRef.innerHTML = 'Sorry, info is unavailable';
      return;
    }
    const markup = `<img
      class="modal__img"
      src="https://image.tmdb.org/t/p/w500${data.poster_path}"
      alt=""
      width="240px"
      height="357px"
    />
    <div>
      <h2 class="modal__title">${data.title}</h2>
      <div class="modal__list-box">
        <ul class="modal__list list">
          <li class="modal__list-item">
            <p class="modal__list-rigth">Vote/Votes </p>
          </li>
          <li class="modal__list-item">
            <p class="modal__list-rigth">Popularity</p>
          </li>
          <li class="modal__list-item">
            <p class="modal__list-rigth">Original Title</p>
          </li>
          <li class="modal__list-item">
            <p class="modal__list-rigth">Genre</p>
          </li>
        </ul>
        <ul class="modal__list list">
          <li class="modal__list-item">
            <p class="modal__list-left">${data.vote_average.toFixed(1)} /${
      data.vote_count
    }</p>
          </li>
          <li class="modal__list-item">
            <p class="modal__list-left">${data.popularity.toFixed(1)} ?? '-'</p>
          </li>
          <li class="modal__list-item">
            <p class="modal__list-left">${data.title}</p>
          </li>
          <li class="modal__list-item">
            <p class="modal__list-left">${getGenres(data.genres)}</p>
          </li>
        </ul>
      </div>
      <h3 class="modal__subtitle">ABOUT</h3>
      <p class="modal__descrpt">
       ${data.overview ?? '---'}
      </p>
      <ul class="modal__btn-list list">
        <li>
          <button type="button" class="modal__btn" data-btn="addToWatched">
            add to Watched
          </button>
        </li>
        <li>
          <button type="button" class="modal__btn" data-btn="addToQueue">
            add to queue
          </button>
        </li>
      </ul>
    </div>`;

    modalRef.innerHTML = markup;

    const addWatchedRef = document.querySelector('[data-btn=addToWatched]');
    const addQueueRef = document.querySelector('[data-btn=addToQueue]');

    console.dir(addWatchedRef);
    if (watched.includes(id)) {
      addWatchedRef.textContent = 'Is in watchers';
      addWatchedRef.style.backgroundColor = '#ff6b01';
      addWatchedRef.style.color = '#ffffff';
    }
    if (queue.includes(id)) {
      addQueueRef.textContent = 'Is in queue';
      addQueueRef.style.backgroundColor = '#ff6b01';
      addQueueRef.style.color = '#ffffff';
    }

    addWatchedRef.addEventListener('click', () => {
      if (watched.includes(id)) {
        watched.splice(watched.indexOf(id), 1);
        addWatchedRef.style.backgroundColor = '#ffffff';
      } else onAddToWatched(id);
      loadIntoModal(id);
    });

    addQueueRef.addEventListener('click', () => {
      if (queue.includes(id)) {
        queue.splice(watched.indexOf(id), 1);
        addQueueRef.style.backgroundColor = '#ffffff';
      } else onAddToQueue(id);
      loadIntoModal(id);
    });
  });
}

function getGenres(arrOfGenres) {
  return arrOfGenres.map(genr => genr.name).join(', ');
}
