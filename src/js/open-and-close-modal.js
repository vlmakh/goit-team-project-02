import refs from './refs';

refs.gallery.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.divBackdrop.addEventListener('click', onBackDropClick);

function onOpenModal(event) {
  const isImageEl = event.target.classList.contains('movie__image');
  if (!isImageEl) {
    return;
  }

  document.body.classList.add('show-modal', 'modal-open');
  window.addEventListener('keydown', onEscKeyPress);
}

function onCloseModal() {
  document.body.classList.remove('show-modal', 'modal-open');
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
