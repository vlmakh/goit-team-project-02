import refs from './refs';
import { getByKeyword } from './api';
import { createGalleryMarkup } from './create-gallery-markup';

refs.form.addEventListener('submit', onSearchByKeyword);

function onSearchByKeyword(e) {
  e.preventDefault();
  const query = e.target.searchQuery.value;
  let page = 1;
  refs.formWarning.textContent = '';
  if (query === '') {
    return (refs.formWarning.textContent =
      'Search query is empty. Enter the correct movie name');
  }

  getByKeyword(query, page)
    .then(data => {
      if (data.total_results === 0) {
        return (refs.formWarning.textContent =
          'Search result not successful. Enter the correct movie name');
      }
      console.log(data);
      refs.gallery.innerHTML = createGalleryMarkup(data.results);
    })
    .catch(error => console.log(error));
}
