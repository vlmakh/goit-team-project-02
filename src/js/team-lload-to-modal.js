import { teamList } from './team';

const footerLink = document.querySelector('.footer');

footerLink.addEventListener('click', onOpenModal);

function loadIntoTeamModal(list) {
  const modalRef = document.querySelector('.modal__wrap');

  const markup = list
    .map(member => {
      return `
      <li class="movie__card">
        <div class="movie__thumb">        
            <img class="movie__image"
            src="${member.photo}"
            alt=${member.name}
            loading="lazy"
            />      
        </div>
        <div class="movie__info">
          <p class="movie__name">${member.github}</p>
          <p class="movie__descr">${member.linkedin} </p>
        </div>
      </li>`;
    })
    .join('');

  modalRef.innerHTML = markup;
}

function onOpenModal(e) {
  console.log(e.target);
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onEscKeyPress);
  loadIntoTeamModal(teamList);
}
