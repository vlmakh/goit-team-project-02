import { getTrending } from './api';
import { createGalleryMarkup } from './create-gallery-markup';

const galleryMovie = document.querySelector('.gallery-js');

getTrending().then(data => {
  console.log(data.results);
  galleryMovie.innerHTML = createGalleryMarkup(data.results);
});
