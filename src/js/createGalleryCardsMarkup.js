export function createGalleryCardsMarkup(data) {
  return data
    .map(({}) => {
      return `
    <div> 
      <img src="${qwwe}" alt="${qwee}" loading="lazy"/>
      <div>
        <p>${qwwe}</p>
        <p>${qwwe}</p>
      </div>
    </div>`;
    })
    .join('');
}
