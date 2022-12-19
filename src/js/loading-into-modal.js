import { getInfoMovie } from './api';
import refs from './refs';
import { onAddToWatched, onAddToQueue } from './add-to-watched&queue';
import {
  watched,
  queue,
  setQueueLocalStoradge,
  setWatchedLocalStoradge,
} from './local-storage';
import noposter from '../images/noposter.jpg';
import { showHideLoader } from './loader';

const modalRef = document.querySelector('.modal__wrap');
const teamRef = document.querySelector('.team__wrap');

export function loadIntoModal(id) {
  showHideLoader(refs.loaderModal);
  const film = getInfoMovie(id).then(data => {
    showHideLoader(refs.loaderModal);
    if (!data) {
      modalRef.innerHTML =
        '<div class="modal__empty">Sorry, info is unavailable</div>';
      return;
    }

    const poster = data.poster_path
      ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
      : noposter;

    const markup = `<img
      class="modal__img"
      src="${poster}"
      alt=""
      width="240"
      height="357"
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
          <li class="modal__list-item modal__left">
            <p class="modal__list-left">
    <span class="modal__list-vote">${data.vote_average.toFixed(1)}</span>
                <span class="modal__list-slesh">/</span>
                <span class="modal__list-votes">${data.vote_count}</span>
    </p>
          </li>
          <li class="modal__list-item modal__left">

            <p class="modal__list-left">${
              data.popularity.toFixed(1) ?? '-'
            } </p>

          </li>
          <li class="modal__list-item modal__left">
            <p class="modal__list-left">${data.title}</p>
          </li>
          <li class="modal__list-item modal__left">
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
    teamRef.innerHTML = '';

    const addWatchedRef = document.querySelector('[data-btn=addToWatched]');
    const addQueueRef = document.querySelector('[data-btn=addToQueue]');
    const voteRef = document.querySelector('.modal__list-vote');

    if (data.vote_average < 6) {
      voteRef.style.backgroundColor = '#ffffff';
      voteRef.style.color = '#000000';
    }

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
        setWatchedLocalStoradge(watched);

        addWatchedRef.style.backgroundColor = '#ffffff';
      } else onAddToWatched(id);
      setWatchedLocalStoradge(watched);
      loadIntoModal(id);
    });

    addQueueRef.addEventListener('click', () => {
      if (queue.includes(id)) {
        queue.splice(queue.indexOf(id), 1);
        setQueueLocalStoradge(queue);
        addQueueRef.style.backgroundColor = '#ffffff';
      } else onAddToQueue(id);
      loadIntoModal(id);
    });
  });
}

function getGenres(arrOfGenres) {
  return arrOfGenres.map(genr => genr.name).join(', ');
}
