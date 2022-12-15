export function createGalleryCardsMarkup(data) {
  return data
    .map(({}) => {
      return `
    <div>
    
    </div>`;
    })
    .join('');
}
