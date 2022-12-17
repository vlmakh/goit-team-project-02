import { getInfoMovie } from './api';

// console.log('getVideos', getVideos);
const modalRef = document.querySelector('.modal__wrap');
// console.log(modalRef);

const film = getInfoMovie(112).then(data => {
  console.log(data);
  let markup = `<img
      src="https://image.tmdb.org/t/p/w500${data.poster_path}"
      alt=""
      width="240px"
      height="357px"
    />
    <h2>${data.title}</h2>
    <ul class="modal__list list">
      <li>
        <p><span>Vote / Votes</span>${data.vote_average.toFixed(1)} /${
    data.vote_count
  }
</p>
      </li>
      <li>
        <p><span>Popularity</span>${data.popularity.toFixed(1)}</p>
      </li>
      <li>
        <p><span>Original Title</span>${data.title}</p>
      </li>
      <li>
        <p><span>Genre</span>Janr</p>
      </li>
    </ul>
    <h3>ABOUT</h3>
    <p>
      ${data.about ?? '---'}
    </p>`;
  //   markup = 'jvhnkldjshfvkjs';
  modalRef.innerHTML = markup;
});
