import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

container.innerHTML = createMarkup(galleryItems);

container.addEventListener('click', showFullSizeImage);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>
        `
    )
    .join('');
}

function showFullSizeImage(e) {
  e.preventDefault();
  const currentImage = e.target;
  if (!currentImage.classList.contains('gallery__image')) return;

  const original = currentImage.dataset.source;

  const modalImage = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
`);

  modalImage.show();

  document.addEventListener('keydown', closeModalOnEscape.bind(modalImage));
}

function closeModalOnEscape(e) {
  if (e.code !== 'Escape') {
    return;
  }

  this.close();
  document.removeEventListener('keydown', closeModalOnEscape);
}
