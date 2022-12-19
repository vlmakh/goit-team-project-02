import { teamList } from './team';

const footerLink = document.querySelector('.footer');
const modalRef = document.querySelector('.modal__wrap');
const teamRef = document.querySelector('.team__wrap');

footerLink.addEventListener('click', onOpenModal);

function loadIntoTeamModal(list) {
  const markup = list
    .map(member => {
      return `
      <li class="member__card">
        <div class="member__thumb">        
            <img class="member__image"
            src="${member.photo}"
            alt=${member.name}
            loading="lazy"
            />      
        </div>
        <div class="member__info">
          <p class="member__name">${member.name}</p>
          <a class="member__link" href="${member.github}>github</a>
          <a class="member__link" href="${member.linkedin}>linkedin</a>
          <p class="member__role">${member.role ?? ''}</p>
        </div>
      </li>`;
    })
    .join('');

  modalRef.innerHTML = '';
  teamRef.innerHTML = markup;
}

function onOpenModal(e) {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onEscKeyPress);
  loadIntoTeamModal(teamList);
}

function onCloseModal() {
  document.body.classList.remove('show-modal');
}

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }

  window.removeEventListener('keydown', onEscKeyPress);
  onCloseModal();
}
