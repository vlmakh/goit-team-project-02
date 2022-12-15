import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7944ae355bdc42ac579681e106149d6b';


export async function getTrending() {
    const url = `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`;
    return await axios.get(url).then(function (response) {
                return response.data;
            })
            .catch(error => console.log(error));
}

export async function getByKeyword(query, page) {
    const url = `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`;
    return await axios.get(url).then(function (response) {
                return response.data;
            })
            .catch(error => console.log(error));
}

export async function getInfoMovie(movie_id) {
    const url = `${MAIN_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
    return await axios.get(url).then(function (response) {
                return response.data;
            })
            .catch(error => console.log(error));
}

export async function getVideos(movie_id) {
    const url = `${MAIN_URL}/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`;
    return await axios.get(url).then(function (response) {
                return response.data;
            })
            .catch(error => console.log(error));
}
