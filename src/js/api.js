import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7944ae355bdc42ac579681e106149d6b';

const fetchTrends = async () => {
  const response = await axios.get(
    `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

export { fetchTrends };
