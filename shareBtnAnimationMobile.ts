const btnShare = document.querySelector(
  '.preview-card__btn-share'
)! as HTMLButtonElement;

const previewCardCreatorBox = document.querySelector(
  '.preview-card__creator-box'
)! as HTMLDivElement;

const previewCardShare = document.querySelector(
  '.preview-card__share'
)! as HTMLUListElement;

const previewCardCreatorWrapper = document.querySelector(
  '.preview-card__creator-wrapper'
)! as HTMLElement;

const iconBtn = document.querySelector('.icon-btn')! as HTMLElement;
const previewCardBtnShare = document.querySelector(
  '.preview-card__btn-share'
)! as HTMLButtonElement;

btnShare.addEventListener('click', (e: Event): void => {
  previewCardCreatorBox.classList.toggle('preview-card__creator-box--onClick');
  previewCardShare.classList.toggle('preview-card__share--onClick');
  previewCardCreatorWrapper.classList.toggle(
    'preview-card__creator-wrapper--onClick'
  );
  iconBtn.classList.toggle('icon-btn--onClick');
  previewCardBtnShare.classList.toggle('preview-card__btn-share--onClick');
});
