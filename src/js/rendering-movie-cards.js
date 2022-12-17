import { getTrending } from './api';
import { createGalleryMarkup } from './create-gallery-markup';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const galleryMovie = document.querySelector('.gallery-js');
const TUI_VISIBLE_PAGES = 5;

getTrending().then(data => {
  galleryMovie.insertAdjacentHTML(
    'beforeend',
    createGalleryMarkup(data.results)
  );

  const options = {
    totalItems: data.total_results,
    visiblePages: TUI_VISIBLE_PAGES,
  };
  const pagination = new Pagination('#pagination', options);
  pagination.on('beforeMove', onPaginationBeforeMove);
});

function onPaginationBeforeMove(e) {
  const { page } = e;

  getTrending(page).then(data => {
    galleryMovie.innerHTML = createGalleryMarkup(data.results);
  });
}
