"use strict";
const btnShare = document.querySelector('.preview-card__btn-share');
const previewCardCreatorBox = document.querySelector('.preview-card__creator-box');
btnShare.addEventListener('click', (e) => {
    previewCardCreatorBox.classList.toggle('preview-card__creator-box--onClick');
});
