import { getTrending } from './api';
import { createGalleryMarkup } from './create-gallery-markup';
import { createPagination } from './pagination';
import refs from './refs';

const galleryMovie = document.querySelector('.gallery-js');

getTrending().then(data => {
  galleryMovie.insertAdjacentHTML(
    'beforeend',
    createGalleryMarkup(data.results)
  );

  const pagination = createPagination(data.total_results, data.total_pages);
  pagination.on('beforeMove', ({ page }) => {
    getTrending(page).then(data => {
      refs.gallery.innerHTML = createGalleryMarkup(data.results);
    });
  });
});
