import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refs = {
    gallery: document.querySelector('.gallery'),
    galleryItem: document.querySelector('.gallery__item'),
    galleryLink: document.querySelector('.gallery__link'),
    galleryImage: document.querySelector('.gallery__image'),
    galleryModal: "",
    imageToOpen: "",
};


createGalleryMarkup(galleryItems);
function createGalleryMarkup(galleryItems) {
    const markup = galleryItems
        .map(item =>
            `
            <div class="gallery__item">
            <a class="gallery__link"
                href="${item.original}">
                <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                />
            </a>
            </div>
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
        refs.imageToOpen = event.target.dataset.source;
        refs.galleryModal = basicLightbox.create(`
            <div class="modal">
                <img
                    src= "${refs.imageToOpen}"
                    style="width: 800px" />
            </div>
`);
        refs.galleryModal.show()
        document.body.addEventListener('keydown', closeModal);
}

    function closeModal(event) {
        const isEscKey = event.code === 'Escape';
        const galleryIsFilled = refs.galleryModal !== "";
        if (isEscKey || galleryIsFilled) {
            refs.galleryModal.close();
            refs.imageToOpen = "";
        }
        document.body.removeEventListener('keydown', onEscKeyPress);

    }

