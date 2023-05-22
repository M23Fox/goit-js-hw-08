// Add imports above this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line

const itemsBox = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => ` <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
          </a>
        </li>`)
      .join('');  
console.log(galleryMarkup);    
itemsBox.insertAdjacentHTML('beforeend', galleryMarkup);

// itemsBox.addEventListener('click', onImageClick);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

