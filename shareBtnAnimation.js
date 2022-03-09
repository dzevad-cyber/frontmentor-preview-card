"use strict";
const btnShare = document.querySelector('.preview-card__btn-share');
const previewCardCreatorBox = document.querySelector('.preview-card__creator-box');
const previewCardShare = document.querySelector('.preview-card__share');
const previewCardCreatorWrapper = document.querySelector('.preview-card__creator-wrapper');
const iconBtn = document.querySelector('.icon-btn');
const previewCardBtnShare = document.querySelector('.preview-card__btn-share');
btnShare.addEventListener('click', (e) => {
    const mediaQueryDesktop = 62.5 * 16; // em * px = px
    iconBtn.classList.toggle('icon-btn--onClick');
    previewCardBtnShare.classList.toggle('preview-card__btn-share--onClick');
    if (screen.width < mediaQueryDesktop) {
        previewCardCreatorBox.classList.toggle('preview-card__creator-box--onClick');
        previewCardShare.classList.toggle('preview-card__share--onClick');
        previewCardCreatorWrapper.classList.toggle('preview-card__creator-wrapper--onClick');
    }
    else {
        previewCardShare.classList.toggle('preview-card__share--desktop');
    }
});
