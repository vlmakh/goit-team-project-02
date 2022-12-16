import { getTrending } from './api';
import { createGalleryMarkup } from './create-gallery-markup';

const galleryMovie = document.querySelector(".gallery-js")

getTrending().then(data => {galleryMovie.insertAdjacentHTML("beforeend", createGalleryMarkup(data.results))} )




