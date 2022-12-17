import refs from './refs';
import { getByKeyword } from './api';
import { createGalleryMarkup } from './create-gallery-markup';
import { createPagination } from './pagination';

refs.form.addEventListener('submit', onSearchByKeyword);
let query;

function onSearchByKeyword(e) {
  e.preventDefault();
  query = e.target.searchQuery.value.trim();
  let page = 1;
  refs.formWarning.textContent = '';
  if (query === '') {
    setTimeout(() => {
      refs.formWarning.classList.add('is-hidden');
    }, 5000);
    refs.formWarning.classList.remove('is-hidden');
    refs.formWarning.textContent =
      'Search query is empty. Enter the correct movie name';
    return;
  }

  getByKeyword(query, page)
    .then(data => {
      if (data.total_results === 0) {
        setTimeout(() => {
          refs.formWarning.classList.add('is-hidden');
        }, 5000);
        refs.formWarning.classList.remove('is-hidden');
        refs.formWarning.textContent =
          'Search result not successful. Enter the correct movie name';
        return;
      }
      console.log(data);
      refs.gallery.innerHTML = createGalleryMarkup(data.results);

      const pagination = createPagination(data.total_results, data.total_pages);
      pagination.on('beforeMove', ({ page }) => {
        getByKeyword(query, page).then(data => {
          refs.gallery.innerHTML = createGalleryMarkup(data.results);
        });
      });
    })
    .catch(error => console.log(error));
}
