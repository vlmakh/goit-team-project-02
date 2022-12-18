import { getTrending } from './api';
import { createGalleryMarkup } from './create-gallery-markup';
import { createPagination } from './pagination';
import { scrollOnTop } from './scroll-on-top';
import refs from './refs';

const galleryMovie = document.querySelector('.gallery-js');
refs.loader.style.display = 'block';
getTrending().then(data => {
  refs.loader.style.display = 'none';
  galleryMovie.insertAdjacentHTML(
    'beforeend',
    createGalleryMarkup(data.results)
  );

  const pagination = createPagination(data.total_results, data.total_pages);
  pagination.on('beforeMove', ({ page }) => {
    getTrending(page).then(data => {
      refs.gallery.innerHTML = createGalleryMarkup(data.results);
      scrollOnTop();
    });
  });
});
