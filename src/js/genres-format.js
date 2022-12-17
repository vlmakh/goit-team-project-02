import { genresList } from './genres-list';

export function genresFormat(array) {
  const genreResult = genresList.reduce((acc, element) => {
    if (array.includes(element.id)) {
      acc.push(element.name);
    }
    return acc;
  }, []);

  if (genreResult.length === 0) {
    // console.log('unknown genre');
    return 'unknown genre';
  } else if (genreResult.length > 2) {
    // console.log(`${genreResult[0]}, ${genreResult[1]}...`);
    return `${genreResult[0]}, ${genreResult[1]}...`;
  } else {
    // console.log(genreResult.join(', '));
    return genreResult.join(', ');
  }
}
