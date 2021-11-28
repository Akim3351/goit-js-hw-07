import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
    galleryItem: document.querySelector('.gallery__item'),
    galleryLink: document.querySelector('.gallery__link'),
    galleryImage: document.querySelector('.gallery__image'),
    galleryModal: "",
    imageCaption: "",
};

createGalleryMarkup(galleryItems);
function createGalleryMarkup(galleryItems) {
    const markup = galleryItems
        .map(item =>
            `
            <a class="gallery__item"
                href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    alt="${item.description}"
                />
            </a>
        `
        )
        .join(" ");

    refs.gallery.innerHTML = markup;
};

refs.gallery.addEventListener('click', openModal);
function openModal(event) {

        event.preventDefault();

        if (event.target.nodeName !== 'IMG') {
            return
        }

    console.log('click on image');
    refs.imageCaption = event.target.alt;
    console.log(refs.imageCaption);
    refs.galleryModal = new SimpleLightbox('.gallery a', { captionType: "${refs.imageCaption}", animationSpeed: "250" });
};


