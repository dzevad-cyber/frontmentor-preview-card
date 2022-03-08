const btnShare = document.querySelector(
  '.preview-card__btn-share'
)! as HTMLButtonElement;

const previewCardCreatorBox = document.querySelector(
  '.preview-card__creator-box'
)! as HTMLDivElement;

btnShare.addEventListener('click', (e: Event): void => {
  previewCardCreatorBox.classList.toggle('preview-card__creator-box--onClick');
});
